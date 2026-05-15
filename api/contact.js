/**
 * Vercel Serverless Function — POST /api/contact
 * Sends contact inquiries via Resend. Secrets stay in env only.
 */

import { resolve } from 'node:path'
import dotenv from 'dotenv'
// import { Ratelimit } from '@upstash/ratelimit'
// import { Redis } from '@upstash/redis'
import { Resend } from 'resend'
import validator from 'validator'

// `vercel dev` often does not pass `.env` / `.env.local` into `/api` handlers. Load so local dev works.
// `dotenv` does not override existing `process.env` (production keys from Vercel stay as-is).
dotenv.config({ path: resolve(process.cwd(), '.env') })
dotenv.config({ path: resolve(process.cwd(), '.env.local') })

const TO = 'management@houseofsaffco.com'
// const TO = 'shahinasakkeer@houseofsaffco.com'
const FROM = 'House of Saffco <noreply@houseofsaffco.com>'
// const FROM = 'onboarding@resend.dev'

const NAME_MAX = 200
const MESSAGE_MIN = 10
const MESSAGE_MAX = 1000
const MAX_BODY_BYTES = 32 * 1024

// Rate limiting disabled temporarily — re-enable when Upstash is on Vercel.
// /** In-process fallback when Upstash is not configured (local dev only). */
// const memoryHits = new Map()
//
// let ratelimitSingleton = null
//
// function getDistributedRatelimit() {
//   const url = process.env.UPSTASH_REDIS_REST_URL
//   const token = process.env.UPSTASH_REDIS_REST_TOKEN
//   if (!url || !token) return null
//   if (!ratelimitSingleton) {
//     const redis = new Redis({ url, token })
//     ratelimitSingleton = new Ratelimit({
//       redis,
//       limiter: Ratelimit.slidingWindow(5, '60 s'),
//       prefix: '@contact',
//     })
//   }
//   return ratelimitSingleton
// }
//
// function getClientIp(req) {
//   const xf = req.headers['x-forwarded-for']
//   if (typeof xf === 'string' && xf.length > 0) {
//     return xf.split(',')[0].trim().slice(0, 64) || 'unknown'
//   }
//   const real = req.headers['x-real-ip']
//   if (typeof real === 'string' && real.length > 0) return real.trim().slice(0, 64)
//   return 'unknown'
// }
//
// function memoryRateLimit(ip) {
//   const now = Date.now()
//   const windowMs = 60_000
//   let hits = memoryHits.get(ip) || []
//   hits = hits.filter((t) => now - t < windowMs)
//   if (hits.length >= 5) return false
//   hits.push(now)
//   memoryHits.set(ip, hits)
//   if (memoryHits.size > 5000) {
//     for (const [k, v] of memoryHits) {
//       if (v.every((t) => now - t >= windowMs)) memoryHits.delete(k)
//     }
//   }
//   return true
// }

async function parseJsonBody(req) {
  if (req.body && typeof req.body === 'object' && !Buffer.isBuffer(req.body)) {
    return req.body
  }
  const chunks = []
  let total = 0
  for await (const chunk of req) {
    total += chunk.length
    if (total > MAX_BODY_BYTES) {
      const err = new Error('Payload too large')
      err.statusCode = 413
      throw err
    }
    chunks.push(chunk)
  }
  const raw = Buffer.concat(chunks).toString('utf8')
  if (!raw.trim()) return {}
  try {
    return JSON.parse(raw)
  } catch {
    const err = new Error('Invalid JSON')
    err.statusCode = 400
    throw err
  }
}

function sanitizeString(s, maxLen) {
  if (typeof s !== 'string') return ''
  const t = s.trim().replace(/\s+/g, ' ').slice(0, maxLen)
  return t
}

function validatePayload(body) {
  const errors = []

  if (body._company || body.company || body.website || body.url) {
    return { ok: false, errors: ['Invalid request'], spam: true }
  }

  const name = sanitizeString(body.name ?? '', NAME_MAX)
  const emailRaw = typeof body.email === 'string' ? body.email.trim().slice(0, 254) : ''
  const message = sanitizeString(body.message ?? '', MESSAGE_MAX)

  if (!name) errors.push('Name is required.')
  if (!emailRaw) errors.push('Email is required.')
  else if (!validator.isEmail(emailRaw)) errors.push('Enter a valid email address.')
  if (!message) errors.push('Message is required.')
  else if (message.length < MESSAGE_MIN)
    errors.push(`Message must be at least ${MESSAGE_MIN} characters.`)
  else if (message.length > MESSAGE_MAX)
    errors.push(`Message must be at most ${MESSAGE_MAX} characters.`)

  if (errors.length) return { ok: false, errors }

  return {
    ok: true,
    data: {
      name,
      email: emailRaw.toLowerCase(),
      message,
    },
  }
}

function safeJsonResponse(res, status, payload) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(JSON.stringify(payload))
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.statusCode = 204
    res.end()
    return
  }

  if (req.method !== 'POST') {
    safeJsonResponse(res, 405, { error: 'Method not allowed' })
    return
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set')
    safeJsonResponse(res, 503, { error: 'Email service is not configured.' })
    return
  }

  // const isProd =
  //   process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production'
  // const ip = getClientIp(req)
  // const distributed = getDistributedRatelimit()
  // if (distributed) {
  //   const { success } = await distributed.limit(ip)
  //   if (!success) {
  //     safeJsonResponse(res, 429, { error: 'Too many requests. Please try again in a minute.' })
  //     return
  //   }
  // } else {
  //   if (isProd) {
  //     safeJsonResponse(res, 503, {
  //       error: 'Rate limiting is not configured. Set Upstash Redis environment variables.',
  //     })
  //     return
  //   }
  //   if (!memoryRateLimit(ip)) {
  //     safeJsonResponse(res, 429, { error: 'Too many requests. Please try again in a minute.' })
  //     return
  //   }
  // }

  let body
  try {
    body = await parseJsonBody(req)
  } catch (e) {
    const code = e.statusCode || 400
    safeJsonResponse(res, code, { error: code === 413 ? 'Request too large.' : 'Invalid request body.' })
    return
  }

  const validated = validatePayload(body)
  if (!validated.ok) {
    if (validated.spam) {
      safeJsonResponse(res, 400, { error: 'Invalid request.' })
      return
    }
    safeJsonResponse(res, 400, { error: 'Validation failed.', details: validated.errors })
    return
  }

  const { name, email, message } = validated.data
  const safeName = validator.escape(name)
  const safeMessage = validator.escape(message)

  const text = [
    `New contact form submission`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    ``,
    `Message:`,
    message,
  ].join('\n')

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${validator.escape(email)}</p>
    <p><strong>Message:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit">${safeMessage}</pre>
  `

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `Website contact: ${safeName}`.slice(0, 998),
      text,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      safeJsonResponse(res, 502, { error: 'Could not send your message. Please try again later.' })
      return
    }

    if (!data?.id) {
      console.error('Resend: missing message id')
      safeJsonResponse(res, 502, { error: 'Could not send your message. Please try again later.' })
      return
    }

    safeJsonResponse(res, 200, { ok: true, message: 'Message sent successfully.' })
  } catch (err) {
    console.error('Contact handler error:', err?.message || err)
    safeJsonResponse(res, 500, { error: 'Something went wrong. Please try again later.' })
  }
}

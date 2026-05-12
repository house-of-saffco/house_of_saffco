import { useState } from 'react'
import { motion } from 'framer-motion'
import { SocialLinks } from '../components/ui/SocialLinks'
import { GlassCard } from '../components/ui/GlassCard'

const ease = [0.22, 1, 0.36, 1]

const MESSAGE_MIN = 10
const MESSAGE_MAX = 1000
const NAME_MAX = 200

const nameRegex = /^[A-Za-z\s]{2,50}$/;

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

function validateClient({ name, email, message }) {
  const errors = {}
  const n = name.trim()
  const e = email.trim()
  const m = message.trim()

  if (!n) errors.name = 'Name is required.'
  else if (n.length > NAME_MAX) errors.name = `Name must be at most ${NAME_MAX} characters.`
  else if (!nameRegex.test(n)) errors.name = 'Name must contain only letters and spaces.'

  if (!e) errors.email = 'Email is required.'
  else if (!isValidEmail(e)) errors.email = 'Enter a valid email address.'

  if (!m) errors.message = 'Message is required.'
  else if (m.length < MESSAGE_MIN)
    errors.message = `Message must be at least ${MESSAGE_MIN} characters.`
  else if (m.length > MESSAGE_MAX)
    errors.message = `Message must be at most ${MESSAGE_MAX} characters.`

  return errors
}

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})
  const [submitError, setSubmitError] = useState('')
  const [success, setSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitError('')
    setSuccess(false)

    const errors = validateClient({ name, email, message })
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }
    setFieldErrors({})

    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          company: honeypot,
        }),
      })

      let payload = {}
      try {
        payload = await res.json()
      } catch {
        payload = {}
      }

      if (!res.ok) {
        const msg =
          typeof payload.error === 'string'
            ? payload.error
            : Array.isArray(payload.details)
              ? payload.details.join(' ')
              : 'Something went wrong. Please try again.'
        setSubmitError(msg)
        return
      }

      setSuccess(true)
      setName('')
      setEmail('')
      setMessage('')
      setHoneypot('')
    } catch {
      setSubmitError('Network error. Check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass =
    'mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-zinc-100 outline-none ring-0 transition-colors placeholder:text-zinc-600 focus:border-champagne/40'
  const errClass = 'border-red-500/60 focus:border-red-500/80'

  return (
    <div className="relative isolate flex w-full flex-1 flex-col bg-obsidian">
      <div
        className="pointer-events-none absolute inset-0 z-0 min-h-full bg-[radial-gradient(ellipse_at_20%_0%,rgba(201,169,98,0.12),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 min-h-full bg-gradient-to-b from-noir to-obsidian"
        aria-hidden
      />

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-champagne">Contact</p>
            <h1 className="mt-4 font-display text-4xl text-zinc-50 md:text-5xl">Let&apos;s compose what&apos;s next.</h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-500">
              For any inquiries contact us — our team responds with discretion and speed.
            </p>

            <GlassCard className="mt-10 !p-6" glow={false}>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Head office</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Al Tashkeel International LLC
                <br />
                Muscat
                <br />
                Sultanate of Oman
              </p>
              <a href="tel:+96800000000" className="mt-4 block text-sm text-champagne hover:opacity-80">
                +968 0000 0000
              </a>
              <a
                href="mailto:management@houseofsaffco.com"
                className="mt-1 block text-sm text-champagne hover:opacity-80"
              >
                management@houseofsaffco.com
              </a>
            </GlassCard>

            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-600">Social</p>
            <SocialLinks className="mt-4" />
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            <GlassCard className="!p-8 md:!p-10" glow>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Honeypot — bots only; must stay visually hidden and unfocusable */}
                <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="contact-company">Company website</label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(ev) => setHoneypot(ev.target.value)}
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block text-sm text-zinc-400">
                    Name
                    <input
                      name="name"
                      value={name}
                      onChange={(ev) => setName(ev.target.value)}
                      maxLength={NAME_MAX}
                      className={`${inputClass} ${fieldErrors.name ? errClass : ''}`}
                      placeholder="Enter your name"
                      disabled={submitting}
                      aria-invalid={!!fieldErrors.name}
                      aria-describedby={fieldErrors.name ? 'err-name' : undefined}
                    />
                    {fieldErrors.name && (
                      <p id="err-name" className="mt-1 text-xs text-red-400">
                        {fieldErrors.name}
                      </p>
                    )}
                  </label>
                  <label className="block text-sm text-zinc-400">
                    Email
                    <input
                      name="email"
                      type="email"
                      value={email}
                      onChange={(ev) => setEmail(ev.target.value)}
                      className={`${inputClass} ${fieldErrors.email ? errClass : ''}`}
                      placeholder="Enter your email"
                      disabled={submitting}
                      aria-invalid={!!fieldErrors.email}
                      aria-describedby={fieldErrors.email ? 'err-email' : undefined}
                    />
                    {fieldErrors.email && (
                      <p id="err-email" className="mt-1 text-xs text-red-400">
                        {fieldErrors.email}
                      </p>
                    )}
                  </label>
                </div>

                <label className="block text-sm text-zinc-400">
                  Message ({MESSAGE_MIN}–{MESSAGE_MAX} characters)
                  <textarea
                    name="message"
                    rows={5}
                    value={message}
                    onChange={(ev) => setMessage(ev.target.value)}
                    maxLength={MESSAGE_MAX}
                    className={`${inputClass} resize-none ${fieldErrors.message ? errClass : ''}`}
                    placeholder="Tell us how we can help..."
                    disabled={submitting}
                    aria-invalid={!!fieldErrors.message}
                    aria-describedby={fieldErrors.message ? 'err-message' : undefined}
                  />
                  {fieldErrors.message && (
                    <p id="err-message" className="mt-1 text-xs text-red-400">
                      {fieldErrors.message}
                    </p>
                  )}
                </label>

                <div aria-live="polite">
                  {submitError && <p className="text-sm text-red-400">{submitError}</p>}
                  {success && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-champagne"
                    >
                      Thank you — your message has been sent. We&apos;ll get back to you soon.
                    </motion.p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  aria-busy={submitting}
                  className="w-full rounded-full bg-champagne py-4 text-sm font-semibold uppercase tracking-widest text-obsidian transition-opacity enabled:hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:px-12"
                >
                  {submitting ? 'Sending…' : 'Send message'}
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

import { motion } from 'framer-motion'
import { IMG, avatarUrl } from '../data/assets'
import { MotionSection } from '../components/ui/MotionSection'
import { SectionHeading } from '../components/ui/SectionHeading'

const ease = [0.22, 1, 0.36, 1]

const team = [
  { name: 'Amira Al Said', role: 'Chief Executive Officer', seed: 'amira' },
  { name: 'Omar Al Balushi', role: 'Managing Director, Distribution', seed: 'omar' },
  { name: 'Layla Hamed', role: 'Creative Director', seed: 'layla' },
  { name: 'Karim Fakhroo', role: 'Head of Brand Partnerships', seed: 'karim' },
  { name: 'Noor Rahman', role: 'Director of Operations', seed: 'noor' },
  { name: 'Hassan Al Rawahi', role: 'Digital Commerce Lead', seed: 'hassan' },
]

function MemberCard({ member, index }) {
  const { name, role, seed } = member
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors hover:border-champagne/25"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-champagne/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" aria-hidden />
      <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border border-white/10 ring-2 ring-white/5">
        <img src={avatarUrl(seed)} alt="" className="h-full w-full object-cover" />
      </div>
      <h3 className="mt-6 text-center font-display text-xl text-zinc-50">{name}</h3>
      <p className="mt-1 text-center text-sm text-zinc-500">{role}</p>
      <ul className="mt-6 flex justify-center gap-3">
        {['in', 'tw', 'mail'].map((k) => (
          <li key={k}>
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-colors hover:border-champagne/40 hover:text-champagne"
              aria-label={k}
            >
              {k === 'in' && (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.13V23h-4v-6.35c0-1.52-.03-3.48-2.12-3.48-2.12 0-2.44 1.66-2.44 3.37V23h-4V8z" />
                </svg>
              )}
              {k === 'tw' && (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.244 2H21l-6.5 7.4L22 22h-6.56l-4.23-5.53L5.5 22H2.8l6.95-7.93L2 2h6.69l3.81 5.05L18.244 2z" />
                </svg>
              )}
              {k === 'mail' && (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M4 6h16v12H4z" />
                  <path d="M4 8l8 6 8-6" />
                </svg>
              )}
            </a>
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

export function Team() {
  return (
    <div className="relative flex flex-1 flex-col">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] -z-10 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${IMG.teamOffice})` }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] -z-10 bg-gradient-to-b from-transparent to-obsidian" aria-hidden />

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="People"
          title="Leadership with quiet confidence."
          subtitle="A multidisciplinary team guiding brand equity, operations, and creative direction across the House of Satko ecosystem."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <MemberCard key={m.seed} member={m} index={i} />
          ))}
        </div>
      </section>

      <MotionSection className="mx-auto max-w-3xl px-5 pb-28 text-center md:px-8 lg:px-10">
        <p className="text-sm leading-relaxed text-zinc-500">
          Portraits shown are illustrative placeholders. Replace with official photography and verified bios for
          production launch.
        </p>
      </MotionSection>
    </div>
  )
}

import { motion } from 'framer-motion'
import { IMG } from '../data/assets'
import { SectionHeading } from '../components/ui/SectionHeading'

import photoAbbas from '../assets/people/abbas.webp'
import photoFaizur from '../assets/people/faizur.webp'
import photoFahim from '../assets/people/fahim.jpeg'

const ease = [0.22, 1, 0.36, 1]

/** Leadership roster — `photo` from `src/assets/people` (add a file for any missing portrait). */
const team = [
  { name: 'Syed Abbas', role: 'Chairman', seed: 'Al Tashkeel International LLC group of companies', photo: photoAbbas },
  { name: 'Faizur Rahaman Abbas', role: 'Chief Executive Officer', seed: 'House of Saffco', photo: photoFaizur },
  { name: 'Mohamed Fahim Bathusa', role: 'Director Of Operations', seed: 'House of Saffco', photo: photoFahim }
]

function MemberCard({ member, index }) {
  const { name, role, seed, photo } = member
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl transition-colors hover:border-champagne/25 md:p-5"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-champagne/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" aria-hidden />
      <div className="relative mx-auto w-full max-w-[200px] overflow-hidden rounded-xl border border-white/10 ring-1 ring-white/5 md:max-w-[220px]">
        <img
          src={photo}
          alt=""
          className="aspect-[3/4] w-full object-cover object-[center_18%]"
        />
      </div>
      <h3 className="mt-4 text-center font-body text-lg font-medium text-zinc-50 md:text-xl">{name}</h3>
      <p className="mt-1 text-center text-xs text-zinc-400 md:text-sm">{role}</p>
      <p className="mt-2 text-center text-[11px] leading-relaxed text-zinc-500 md:text-xs">{seed}</p>
    </motion.article>
  )
}

export function Team() {
  return (
    <div className="relative isolate flex w-full flex-1 flex-col bg-obsidian">
      <div className="pointer-events-none absolute inset-0 z-0 min-h-full w-full" aria-hidden>
        <div
          className="absolute inset-0 min-h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${IMG.teamOffice})` }}
        />
        <div className="absolute inset-0 min-h-full bg-gradient-to-b from-obsidian/35 via-obsidian/78 to-obsidian" />
        <div className="absolute inset-0 min-h-full bg-[radial-gradient(ellipse_100%_70%_at_50%_0%,rgba(201,169,98,0.1),transparent_55%)]" />
        <div className="noise-overlay absolute inset-0 min-h-full opacity-40" />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:px-8 lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="People"
          title="Leadership with quiet confidence."
          titleClassName="font-body"
          subtitle="A multidisciplinary team guiding brand equity, operations, and creative direction across the House of Saffco ecosystem."
        />
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-4 md:gap-6">
          {team.map((m, i) => (
            <MemberCard key={m.name} member={m} index={i} />
          ))}
        </div>
      </section>
    </div>
  )
}

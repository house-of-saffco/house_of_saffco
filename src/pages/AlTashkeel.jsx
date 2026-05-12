import { motion } from 'framer-motion'
import { IMG } from '../data/assets'
import { MotionSection } from '../components/ui/MotionSection'
import { SectionHeading } from '../components/ui/SectionHeading'
import { GlassCard } from '../components/ui/GlassCard'

const ease = [0.22, 1, 0.36, 1]

const distributionPartners = [
  'RDL',
  'DC Apple',
  'TRB (The Rare Blend)',
  'Floren',
  'Gulf Gas Butane Cartridge',
]

const brandSuppliers = [
  'P&G',
  'Unilever',
  'Ahmed Maghribi',
  'Rasasi',
  'Swiss Arabian',
  'Afnan',
  "L'Oréal",
  'Dabur',
  'Parachute',
  'Bahar',
  'Cetaphil (Gal Derma)',
]

const majorClients = [
  'Lulu',
  'LOT (Lulu)',
  'Nesto',
  'MALMART',
  'Al Qabayel',
  'Emirates Flower Markets (EFM)',
  'Al Tamam',
  'MS Max',
]

const exportRegions = ['Dubai', 'India', 'All over GCC']

function PartnerChips({ items }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((label) => (
        <li
          key={label}
          className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-xs leading-snug text-zinc-300"
        >
          {label}
        </li>
      ))}
    </ul>
  )
}

function NetworkCard({ eyebrow, title, items, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-6%' }}
      transition={{ duration: 0.55, delay, ease }}
    >
      <GlassCard className="h-full" glow={false}>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">{eyebrow}</p>
        <h3 className="mt-3 font-display text-xl text-zinc-100 md:text-2xl">{title}</h3>
        <PartnerChips items={items} />
      </GlassCard>
    </motion.div>
  )
}

export function AlTashkeel() {
  return (
    <div className="relative isolate w-full flex flex-col bg-obsidian">
      {/* One cinematic stack for the whole route — height follows page content; single document scroll */}
      <div className="pointer-events-none absolute inset-0 z-0 min-h-full w-full" aria-hidden>
        <motion.div
          initial={{ scale: 1.03, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease }}
          className="absolute inset-0 min-h-full w-full bg-cover bg-center bg-no-repeat will-change-transform"
          style={{ backgroundImage: `url(${IMG.omanCoast})` }}
        />
        <div
          className="absolute inset-0 min-h-full w-full bg-cover bg-center bg-no-repeat opacity-35 mix-blend-overlay"
          style={{ backgroundImage: `url(${IMG.muscatCity})` }}
        />
        <div className="absolute inset-0 min-h-full bg-gradient-to-b from-obsidian/45 via-obsidian/80 to-obsidian" />
        <div className="absolute inset-0 min-h-full bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,rgba(201,169,98,0.18),transparent_55%)]" />
        <div className="absolute inset-0 min-h-full bg-[radial-gradient(ellipse_at_50%_100%,rgba(201,169,98,0.12),transparent_50%)]" />
        <div className="noise-overlay absolute inset-0 min-h-full opacity-45" />
      </div>

      {/* Hero: in-flow content only — no overflow-hidden, no nested scroll */}
      <section className="relative z-10 flex min-h-[82vh] flex-col justify-end px-5 pb-20 pt-28 md:min-h-[85vh] md:px-8 md:pb-24 lg:px-10 lg:pb-28">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[35%] bg-gradient-to-b from-transparent via-obsidian/30 to-obsidian/85 md:top-[40%]" aria-hidden />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="text-xs font-semibold uppercase tracking-[0.4em] text-champagne"
          >
            Muscat · Sultanate of Oman
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease }}
            className="mt-5 max-w-4xl font-display text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl"
          >
            Al Tashkeel International LLC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14, ease }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400"
          >
            Sophisticated distribution for luxury and lifestyle brands — connecting exceptional products with
            discerning markets across the region and beyond.
          </motion.p>
        </div>
      </section>

      {/* Bridge: soft read fade into body sections */}
      <div
        className="relative z-10 -mt-1 h-24 shrink-0 bg-gradient-to-b from-obsidian/80 to-transparent md:h-28"
        aria-hidden
      />

      <MotionSection className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-4 pt-2 md:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About"
              title="Corporate excellence with a Gulf soul."
              subtitle="Headquartered in Mutrah, Al Tashkeel combines international standards of compliance and logistics with relationships built on trust, hospitality, and long-term stewardship."
            />
            <GlassCard className="mt-10" glow={false}>
              <ul className="space-y-4 text-sm leading-relaxed text-zinc-400">
                <li>• End-to-end import, warehousing, and channel strategy</li>
                <li>• Premium retail and pharmacy partnerships</li>
                <li>• Brand-building support from launch to scale</li>
              </ul>
            </GlassCard>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: 0.65, ease }}
            className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40"
          >
            <img src={IMG.corporate} alt="" className="aspect-[4/3] w-full object-cover md:aspect-auto md:h-full md:min-h-[440px]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-obsidian/80 via-transparent to-transparent" />
          </motion.div>
        </div>
      </MotionSection>

      <div
        className="relative z-10 mx-auto mt-6 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/12 to-transparent px-5 md:px-8 lg:px-10"
        aria-hidden
      />

      <MotionSection className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-28 pt-12 md:px-8 md:pb-32 lg:px-10 lg:pb-36">
        <SectionHeading
          align="left"
          eyebrow="Network"
          title="Distribution depth, brand partnerships, and regional reach."
          subtitle="Decades of relationships across suppliers, house brands, and major retail — with exports extending beyond the Gulf."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-6%' }}
          transition={{ duration: 0.6, ease }}
          className="mt-10"
        >
          <GlassCard className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10" glow>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-champagne">Heritage</p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
                A long-standing footprint in trade and distribution, built on consistency and scale.
              </p>
            </div>
            <div className="flex shrink-0 items-baseline gap-1 font-display text-5xl font-medium tracking-tight text-white md:text-6xl lg:text-7xl">
              <span>35</span>
              <span className="text-champagne">+</span>
            </div>
            <p className="max-w-[12rem] text-right text-xs uppercase leading-relaxed tracking-[0.25em] text-zinc-500 md:text-left">
              years in distribution
            </p>
          </GlassCard>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
          <NetworkCard
            eyebrow="Distributors of"
            title="House brands & lines"
            items={distributionPartners}
            delay={0}
          />
          <NetworkCard
            eyebrow="Brand distributors"
            title="Getting supplies from"
            items={brandSuppliers}
            delay={0.06}
          />
          <NetworkCard eyebrow="Major clients" title="Retail & key accounts" items={majorClients} delay={0.1} />
          <NetworkCard eyebrow="Exports" title="Regional footprint" items={exportRegions} delay={0.14} />
        </div>
      </MotionSection>
    </div>
  )
}

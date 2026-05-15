import { motion } from 'framer-motion'
import { IMG } from '../data/assets'
import { MotionSection } from '../components/ui/MotionSection'
import { SectionHeading } from '../components/ui/SectionHeading'
import { GlassCard } from '../components/ui/GlassCard'
import pgLogo from '../assets/logos/P_G_Logo.svg'
import unileverLogo from '../assets/logos/unilever.svg'
import ahmedMaghribiLogo from '../assets/logos/AhmedLogo.webp'
import rasasiLogo from '../assets/logos/rasasi.png'
import swissArabianLogo from '../assets/logos/swissLogo.avif'
import afnanLogo from '../assets/logos/white_afnan_logo.avif'
import lorealLogo from '../assets/logos/loreal-paris-black-logo.svg'
import daburLogo from '../assets/logos/dabur.png'
import parachuteLogo from '../assets/logos/parachute.png'
import baharLogo from '../assets/logos/bahar.svg'
import cetaphilLogo from '../assets/logos/Cetaphil_Logo.webp'
import luluLogo from '../assets/logos/lulu.svg'
import lotLuluLogo from '../assets/logos/lot-lulu.jpg'
import nestoLogo from '../assets/logos/nesto-logo.svg'
import malmartLogo from '../assets/logos/Malmart-Logo.png'
import omanImage from '../assets/oman.jpeg'
import alQabayelLogo from '../assets/logos/al_kabayel.svg'
import efmLogo from '../assets/logos/Emirates-flower-market.webp'
import alTamamLogo from '../assets/logos/altamam.webp'
import msMaxLogo from '../assets/logos/msmax.webp'
import uaeFlag from '../assets/flag/uae.jpeg'
import indiaFlag from '../assets/flag/india.jpeg'
import bahrainFlag from '../assets/flag/bahrain.webp'
import kuwaitFlag from '../assets/flag/kuwait.jpeg'
import qatarFlag from '../assets/flag/qatar.jpeg'

const ease = [0.22, 1, 0.36, 1]

const distributionPartners = [
  'RDL',
  'DC Apple',
  'TRB (The Rare Blend)',
  'Floren',
  'Gulf Gas Butane Cartridge',
]

const brandSupplierLogos = [
  { src: pgLogo, alt: 'P&G' },
  { src: unileverLogo, alt: 'Unilever', tile: 'dark' },
  { src: ahmedMaghribiLogo, alt: 'Ahmed Maghribi' },
  { src: rasasiLogo, alt: 'Rasasi' },
  { src: swissArabianLogo, alt: 'Swiss Arabian' },
  { src: afnanLogo, alt: 'Afnan', tile: 'dark' },
  { src: lorealLogo, alt: "L'Oréal" },
  { src: daburLogo, alt: 'Dabur' },
  { src: parachuteLogo, alt: 'Parachute' },
  { src: baharLogo, alt: 'Bahar', tile: 'dark' },
  { src: cetaphilLogo, alt: 'Cetaphil (Gal Derma)' },
]

const majorClientLogos = [
  { src: luluLogo, alt: 'Lulu' },
  { src: lotLuluLogo, alt: 'LOT (Lulu)' },
  { src: nestoLogo, alt: 'Nesto', tile: 'dark' },
  { src: malmartLogo, alt: 'MALMART' },
  { src: alQabayelLogo, alt: 'Al Qabayel' },
  { src: efmLogo, alt: 'Emirates Flower Markets (EFM)' },
  { src: alTamamLogo, alt: 'Al Tamam' },
  { src: msMaxLogo, alt: 'MS Max' },
]

const exportRegionFlags = [
  { src: uaeFlag, alt: 'UAE (Dubai)' },
  { src: indiaFlag, alt: 'India' },
  { src: bahrainFlag, alt: 'Bahrain' },
  { src: kuwaitFlag, alt: 'Kuwait' },
  { src: qatarFlag, alt: 'Qatar' },
]

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

function PartnerLogoChips({ items, showAndMore = false }) {
  const chipClass =
    'flex h-16 min-w-[7.5rem] flex-1 basis-[calc(50%-0.375rem)] items-stretch rounded-xl border border-white/10 bg-black/25 p-2 sm:basis-[calc(33.333%-0.5rem)] sm:min-w-0 md:h-[4.25rem] md:flex-none md:basis-auto'

  return (
    <ul className="mt-5 flex flex-wrap gap-3">
      {items.map(({ src, alt, tile = 'light' }) => {
        const innerClass =
          tile === 'dark'
            ? 'flex w-full min-w-0 flex-1 items-center justify-center rounded-lg bg-zinc-950 px-3 py-2 shadow-inner shadow-black/50 ring-1 ring-inset ring-white/12'
            : 'flex w-full min-w-0 flex-1 items-center justify-center rounded-lg bg-white/95 px-3 py-2 shadow-inner shadow-black/5'
        const imgClass =
          tile === 'dark'
            ? 'max-h-9 w-full max-w-[7.5rem] object-contain object-center [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.35))]'
            : 'max-h-9 w-full max-w-[7.5rem] object-contain object-center'
        return (
          <li key={alt} className={chipClass}>
            <div className={innerClass}>
              <img
                src={src}
                alt={alt}
                title={alt}
                loading="lazy"
                decoding="async"
                className={imgClass}
              />
            </div>
          </li>
        )
      })}
      {showAndMore && (
        <li className={chipClass}>
          <div className="flex w-full min-w-0 flex-1 items-center justify-center rounded-lg border border-dashed border-white/15 bg-black/20 px-3 py-2">
            <span className="text-xs font-medium tracking-wide text-zinc-400">and more</span>
          </div>
        </li>
      )}
    </ul>
  )
}

function PartnerFlagChips({ items }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-3">
      {items.map(({ src, alt }) => (
        <li
          key={alt}
          className="flex aspect-[4/3] min-w-[5.5rem] flex-1 basis-[calc(33.333%-0.5rem)] overflow-hidden rounded-xl border border-white/10 bg-black/25 p-1.5 sm:min-w-[6rem] md:flex-none md:basis-auto md:w-[6.75rem]"
        >
          <img
            src={src}
            alt={alt}
            title={alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full rounded-lg object-cover shadow-inner shadow-black/10"
          />
        </li>
      ))}
    </ul>
  )
}

function NetworkCard({ eyebrow, title, items, logoItems, flagItems, showAndMore = false, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-6%' }}
      transition={{ duration: 0.55, delay, ease }}
    >
      <GlassCard className="h-full" glow={false}>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">{eyebrow}</p>
        <h3 className="mt-3 font-body text-xl font-medium text-zinc-100 md:text-2xl">{title}</h3>
        {flagItems ? (
          <PartnerFlagChips items={flagItems} />
        ) : logoItems ? (
          <PartnerLogoChips items={logoItems} showAndMore={showAndMore} />
        ) : (
          <PartnerChips items={items} />
        )}
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
        <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-end -translate-y-25">
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
            className="mt-5 max-w-4xl font-body text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl"
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

      <MotionSection className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-4 pt-2 md:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About"
              title="Corporate excellence with a Gulf soul."
              titleClassName="font-body"
              subtitle="Headquartered in Mutrah, Al Tashkeel combines international standards of compliance and logistics with relationships built on trust, hospitality, and long-term stewardship."
            />
            <GlassCard className="mt-10" glow={false}>
              <ul className="space-y-4 text-sm leading-relaxed text-zinc-400">
                <li>• End-to-end import, warehousing, and channel strategy</li>
                <li>• Premium retail and pharmacy partnerships</li>
                <li>• Cross-border exports across the GCC, India, and beyond</li>
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
            <img src={omanImage} alt="" className="aspect-[4/3] w-full object-cover md:aspect-auto md:h-full md:min-h-[440px]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-obsidian/80 via-transparent to-transparent" />
          </motion.div>
        </div>
      </MotionSection>

      <MotionSection className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-28 pt-12 md:px-8 md:pb-32 lg:px-10 lg:pb-36">
        <SectionHeading
          align="left"
          eyebrow="Network"
          title="Distribution depth, brand partnerships, and regional reach."
          titleClassName="font-body"
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
            <div className="flex shrink-0 items-baseline gap-1 font-body text-5xl font-medium tracking-tight text-white md:text-6xl lg:text-7xl">
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
            items={distributionPartners}
            delay={0}
          />
          <NetworkCard
            eyebrow="Brand distributors"
            logoItems={brandSupplierLogos}
            showAndMore
            delay={0.06}
          />
          <NetworkCard
            eyebrow="Major clients"
            logoItems={majorClientLogos}
            showAndMore
            delay={0.1}
          />
          <NetworkCard eyebrow="Exports" flagItems={exportRegionFlags} delay={0.14} />
        </div>
      </MotionSection>
    </div>
  )
}

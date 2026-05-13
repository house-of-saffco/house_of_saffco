import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import akeedh from '../assets/akeedh.png'
import curaHero from '../assets/cura-hero.jpeg'
import duaHero from '../assets/dua-hero.jpeg'
import homeHero from '../assets/home.png'
import { BrandShowcaseCard } from '../components/ui/BrandShowcaseCard'
import { GlassCard } from '../components/ui/GlassCard'
import { MotionSection } from '../components/ui/MotionSection'
import { SectionHeading } from '../components/ui/SectionHeading'
import { IMG } from '../data/assets'

const ease = [0.22, 1, 0.36, 1]

export function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG.heroLuxury})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/75 to-obsidian" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,169,98,0.18),transparent_55%)]" aria-hidden />
        <div className="noise-overlay absolute inset-0" aria-hidden />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pb-24 pt-32 md:px-8 lg:px-10 lg:pb-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-xs font-medium uppercase tracking-[0.45em] text-champagne"
          >
            The ecosystem
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
            className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-zinc-50 md:text-6xl lg:text-7xl"
          >
            House of <span className="text-gradient-gold">Saffco</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400 md:text-xl"
          >
            Where fragrance artistry, clinical skincare, and curated beauty commerce converge — elevated
            through world-class distribution.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Link
              to="/duaa"
              className="inline-flex items-center justify-center rounded-full bg-champagne px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-obsidian transition-opacity hover:opacity-90"
            >
              Explore brands
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-zinc-100 backdrop-blur-md transition-colors hover:border-champagne/40 hover:text-champagne"
            >
              Connect
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
          aria-hidden
        >
          <div className="h-14 w-px bg-gradient-to-b from-transparent via-champagne/50 to-transparent" />
        </motion.div>
      </section>

      {/* Brand ecosystem */}
      <MotionSection className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 lg:px-10 lg:py-32">
        <div className="absolute left-1/2 top-0 h-px w-[min(100%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" aria-hidden />
        <SectionHeading
          eyebrow="Portfolio"
          title="The brand ecosystem"
          subtitle="Three signature houses under one vision — each with a distinct voice, united by uncompromising quality."
        />
        <div className="grid gap-6 md:grid-cols-3">
          <BrandShowcaseCard
            to="/duaa"
            name="Duaa"
            tagline="Refined fragrance for everyday luxury."
            image={duaHero}
            accent="from-rose-500/25"
          />
          <BrandShowcaseCard
            to="/cura"
            name="Cura"
            tagline="Science-led skincare, luminous results."
            image={curaHero}
            accent="from-cyan-400/20"
          />
          <BrandShowcaseCard
            to="/akeedh"
            name="Akeedh"
            tagline="Health & beauty, curated for modern life."
            image={akeedh}
            accent="from-fuchsia-500/20"
          />
        </div>
      </MotionSection>

      {/* Parent / distribution */}
      <MotionSection className="relative overflow-hidden py-24 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm"
          style={{ backgroundImage: `url(${IMG.corporate})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/95 to-obsidian" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-champagne">Distribution partner</p>
              <h2 className="mt-4 font-display text-4xl font-medium text-zinc-50 md:text-5xl">
                Al Tashkeel International LLC
              </h2>
              <p className="mt-2 text-sm uppercase tracking-widest text-zinc-500">Muscat, Sultanate of Oman</p>
              <p className="mt-8 text-lg leading-relaxed text-zinc-400">
                Strategic reach across the Gulf and beyond — ensuring each House of Satko brand arrives with the
                integrity, timing, and presentation it deserves.
              </p>
              <Link
                to="/al-tashkeel"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-champagne transition-opacity hover:opacity-80"
              >
                View corporate profile
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Vision */}
      <MotionSection className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="relative lg:col-span-5">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-white/10">
              <img src={homeHero} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-champagne/20 blur-3xl" aria-hidden />
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <SectionHeading
              align="left"
              eyebrow="Vision"
              title="Luxury is a language — we speak it fluently."
              subtitle="From olfactive storytelling to dermatological rigor and seamless digital commerce, House of Satko defines a new standard for regional luxury houses with global ambition."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { title: 'Editorial craft', body: 'Campaigns and packaging that feel couture, not commodity.' },
                { title: 'Measured growth', body: 'Selective partnerships that protect equity and desirability.' },
              ].map(({ title, body }) => (
                <GlassCard key={title} className="!p-6" hover glow={false}>
                  <h3 className="font-display text-xl text-zinc-100">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-500">{body}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

     
    </div>
  )
}

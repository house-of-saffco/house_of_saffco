import { motion } from 'framer-motion'
import curaHero from '../assets/cura.png'
import curaLab from '../assets/cura-lab.jpeg'
import { IMG } from '../data/assets'
import { MotionSection } from '../components/ui/MotionSection'
import { GlassCard } from '../components/ui/GlassCard'
import { SectionHeading } from '../components/ui/SectionHeading'

const ease = [0.22, 1, 0.36, 1]

export function Cura() {
  return (
    <div className="relative flex flex-1 flex-col bg-zinc-50 text-zinc-900">
      {/* Hero — light + clinical */}
      <section className="relative overflow-hidden border-b border-zinc-200/80">
        <div className="absolute inset-0">
          <img
            src={curaHero}
            alt=""
            className="w-full h-full object-cover object-bottom"
          />
          {/* ~50% photo visibility: light clinical veil, not a near-opaque white wash */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/38 via-white/32 to-zinc-100/55" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(56,189,248,0.1),transparent_52%)]" />
        </div>
        <div className="noise-overlay absolute inset-0 opacity-[0.12] mix-blend-multiply" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-5 py-28 md:px-8 lg:px-10 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-700">Clinical luxury</p>
            <h1 className="mt-5 font-display text-5xl font-medium tracking-tight text-zinc-950 md:text-6xl lg:text-7xl">
              Cura
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-zinc-600 md:text-2xl">
              Results-driven skincare grounded in science.
            </p>
            <p className="mt-6 max-w-xl text-zinc-600">
              Formulations engineered for visible change — where biotechnology meets sensorial elegance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease }}
            className="pointer-events-none absolute -right-20 top-1/4 hidden h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl lg:block"
            aria-hidden
          />
        </div>
      </section>

      <MotionSection className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-10 lg:py-28">
        <SectionHeading
          light
          align="left"
          eyebrow="Innovation"
          title="Laboratory precision. Skin-level poetry."
          subtitle="Every molecule earns its place — tested, traceable, and designed for the modern complexion under real environmental stress."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { t: 'Bio-active stacks', d: 'Layered actives with chronobiology in mind.' },
            { t: 'Barrier-first', d: 'Respect the microbiome. Build resilience.' },
            { t: 'Future textures', d: 'Serums that melt, creams that breathe.' },
          ].map(({ t, d }, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease }}
            >
              <GlassCard
                variant="light"
                className="h-full border-zinc-200/80 bg-white/70 !p-8 text-zinc-900 shadow-xl shadow-cyan-500/5 backdrop-blur-xl"
                hover
                glow={false}
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-zinc-900/5 ring-1 ring-cyan-500/30">
                  <span className="text-lg text-cyan-700">◇</span>
                </div>
                <h3 className="font-display text-2xl text-zinc-950">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{d}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-zinc-950 py-24 text-zinc-100">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${IMG.molecules})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)',
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/95 to-cyan-950/80" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.12),transparent_55%)]" aria-hidden />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/90">Atmosphere</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">The glow of evidence.</h2>
            <p className="mt-6 text-zinc-400">
              Cura translates complex dermatological insight into rituals you feel working — night after night,
              season after season.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease }}
            className="relative aspect-square overflow-hidden rounded-2xl border border-cyan-500/20 shadow-[0_0_80px_-20px_rgba(34,211,238,0.35)]"
          >
            <img src={curaLab} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
          </motion.div>
        </div>
      </MotionSection>
    </div>
  )
}

import { motion } from 'framer-motion'
import duaHero from '../assets/duaa.png'
import { IMG } from '../data/assets'
import { MotionSection } from '../components/ui/MotionSection'
import { GlassCard } from '../components/ui/GlassCard'

const ease = [0.22, 1, 0.36, 1]

/** Page bg: absolute stack in `relative isolate` root. Avoid `overflow-x-hidden` on this wrapper — paired with `overflow-y: visible` it forces `overflow-y: auto` and a nested scrollbar. */
export function Duaa() {
  return (
    <div className="relative isolate flex w-full flex-col bg-obsidian">
      {/* Cinematic layers: stretch with page height; scroll with document, not a nested scroller */}
      <div className="pointer-events-none absolute inset-0 z-0 min-h-full w-full" aria-hidden>
        <motion.div
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease }}
          className="absolute inset-0 min-h-full w-full bg-cover bg-[left_30%_center] bg-no-repeat brightness-[1.12]"
          style={{ backgroundImage: `url(${duaHero})` }}
        />
        <div className="absolute inset-0 min-h-full bg-gradient-to-b from-obsidian/18 via-obsidian/57 to-obsidian/92" />
        <div className="absolute inset-0 min-h-full bg-[radial-gradient(circle_at_30%_18%,rgba(244,114,182,0.14),transparent_48%)]" />
        <div className="noise-overlay absolute inset-0 min-h-full opacity-[0.5]" />
      </div>

      <section className="relative z-10 flex min-h-[88vh] flex-col justify-end px-5 pb-20 pt-28 md:px-8 lg:px-10 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease }}
          className="mx-auto w-full max-w-5xl"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/30 px-5 py-2 text-xs font-medium uppercase tracking-[0.35em] text-rose-200/90 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose-400 shadow-[0_0_12px_#fb7185]" />
            Brand under development
          </div>
          <h1 className="mt-8 font-body text-6xl font-medium tracking-tight text-white md:text-7xl lg:text-8xl">
            Duaa
          </h1>
          <p className="mt-6 max-w-2xl font-body text-2xl leading-snug text-zinc-300 md:text-3xl">
            A fragrance house focused on refined, everyday luxury.
          </p>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-zinc-500 md:text-lg">
            Olfactive narratives composed like couture — intimate sillage, luminous materials, and the quiet
            confidence of wearing art every day.
            The heritage of middle east - from the heart of oman
          </p>
  
        </motion.div>
      </section>

      {/* <MotionSection className="relative z-10 mx-auto w-full max-w-5xl px-5 py-20 md:px-8 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          <GlassCard className="min-h-[280px] !p-0 overflow-hidden md:min-h-[320px]">
            <img src={IMG.fragranceAlt} alt="" className="h-full w-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs uppercase tracking-[0.3em] text-rose-300">Editorial</p>
              <p className="mt-2 font-display text-2xl text-white">The art of proximity</p>
            </div>
          </GlassCard>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-rose-300/80">Philosophy</p>
            <h2 className="mt-4 font-display text-3xl text-zinc-100 md:text-4xl">Silence, then sensation.</h2>
            <p className="mt-6 leading-relaxed text-zinc-500">
              Each composition is edited with restraint — fewer notes, more depth. A cinematic approach to
              perfumery: long takes, soft light, unforgettable endings.
            </p>
          </div>
        </div>
      </MotionSection> */}

    </div>
  )
}

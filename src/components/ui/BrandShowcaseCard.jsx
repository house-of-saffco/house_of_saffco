import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GlassCard } from './GlassCard'

export function BrandShowcaseCard({
  to,
  name,
  tagline,
  image,
  accent = 'from-amber-500/20 to-transparent',
}) {
  const inner = (
    <>
      <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-xl">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${accent} to-zinc-950/90`}
          aria-hidden
        />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="font-body text-2xl font-medium text-white md:text-3xl">{name}</p>
          <p className="mt-1 text-sm text-zinc-300">{tagline}</p>
        </div>
      </div>
      <span className="text-xs font-medium uppercase tracking-[0.25em] text-champagne">
        Explore
      </span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className="group block text-left">
        <GlassCard className="h-full !p-0" hover glow={false}>
          <div className="p-5 md:p-6">{inner}</div>
        </GlassCard>
      </Link>
    )
  }

  return (
    <motion.div layout className="text-left">
      <GlassCard className="h-full !p-0" hover>
        <div className="p-5 md:p-6">{inner}</div>
      </GlassCard>
    </motion.div>
  )
}

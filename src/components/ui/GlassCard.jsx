import { motion } from 'framer-motion'

export function GlassCard({
  children,
  className = '',
  hover = true,
  glow = false,
  variant = 'dark',
  ...props
}) {
  const orb =
    variant === 'light'
      ? 'bg-cyan-500/15'
      : 'bg-champagne/10'

  return (
    <motion.div
      className={`glass-panel relative overflow-hidden p-6 md:p-8 ${glow ? 'shadow-glow' : ''} ${className}`}
      whileHover={
        hover
          ? {
              y: -4,
              transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            }
          : undefined
      }
      {...props}
    >
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl ${orb}`}
        aria-hidden
      />
      {children}
    </motion.div>
  )
}

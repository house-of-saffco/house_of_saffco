import { motion } from 'framer-motion'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <div className={`mx-auto mb-12 flex max-w-3xl flex-col gap-3 md:mb-16 ${alignClass}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className={`text-xs font-medium uppercase tracking-[0.35em] ${light ? 'text-zinc-500' : 'text-champagne-dim'}`}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className={`font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl ${light ? 'text-zinc-900' : 'text-zinc-50'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`max-w-2xl text-base leading-relaxed md:text-lg ${light ? 'text-zinc-600' : 'text-zinc-400'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

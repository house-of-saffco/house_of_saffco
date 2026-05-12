import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

export function PartnerLogoGrid({ items, className = '' }) {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10%' }}
      className={`grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ${className}`}
    >
      {items.map((name) => (
        <motion.li key={name} variants={item}>
          <div className="glass-panel flex h-20 items-center justify-center px-3 py-4 text-center text-xs font-medium uppercase tracking-widest text-zinc-400 transition-colors hover:border-champagne/30 hover:text-zinc-200 md:text-[0.65rem]">
            {name}
          </div>
        </motion.li>
      ))}
    </motion.ul>
  )
}

import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export function MotionSection({ children, className = '', delay = 0, id }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 0.65, ease, delay }}
    >
      {children}
    </motion.section>
  )
}

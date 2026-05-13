import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import officialLogo from '../../assets/logos/saffco.svg'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/duaa', label: 'Duaa' },
  { to: '/cura', label: 'Cura' },
  { to: '/akeedh', label: 'Akeedh' },
  { to: '/al-tashkeel', label: 'Al Tashkeel' },
  { to: '/team', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

function desktopLink({ isActive }) {
  return [
    'relative text-sm font-medium tracking-wide transition-colors',
    isActive ? 'text-champagne' : 'text-zinc-400 hover:text-zinc-100',
    "after:pointer-events-none after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-champagne after:transition-transform after:duration-300",
    isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100',
  ].join(' ')
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-obsidian/70 backdrop-blur-xl">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-10">
        <Link to="/" className="group flex shrink-0 items-center" aria-label="House of Saffco">
          <span className="relative block h-12 w-36 overflow-hidden sm:h-14 sm:w-40 md:h-16 md:w-48">
            <img
              src={officialLogo}
              alt="House of Saffco"
              className="h-8 w-auto object-contain md:h-20"
            />
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {nav.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={desktopLink}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="relative flex h-10 w-10 flex-col items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
            className="absolute h-0.5 w-5 bg-zinc-200"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="absolute h-0.5 w-5 bg-zinc-200"
          />
          <motion.span
            animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
            className="absolute h-0.5 w-5 bg-zinc-200"
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/[0.06] bg-obsidian/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {nav.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-3 text-sm font-medium ${
                        isActive ? 'bg-white/10 text-champagne' : 'text-zinc-300 hover:bg-white/5'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

import { Link } from 'react-router-dom'
import { SocialLinks } from '../ui/SocialLinks'

const footerNav = [
  { to: '/', label: 'Home' },
  { to: '/duaa', label: 'Duaa' },
  { to: '/cura', label: 'Cura' },
  { to: '/akeedh', label: 'Akeedh' },
  { to: '/al-tashkeel', label: 'Al Tashkeel' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-noir">
      <div className="noise-overlay absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="font-display text-2xl font-medium tracking-[0.1em] text-zinc-100">
              House of <span className="text-gradient-gold">Saffco</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-500">
              A curated ecosystem of luxury fragrance, science-led skincare, and premium beauty commerce —
              distributed with precision through Al Tashkeel International LLC.
            </p>
            <SocialLinks className="mt-8" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne-dim">Navigate</p>
            <ul className="mt-5 space-y-3">
              {footerNav.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne-dim">Muscat</p>
            <p className="mt-5 text-sm leading-relaxed text-zinc-400">
              Al Tashkeel International LLC
              <br />
              Sultanate of Oman
            </p>
            <a
              href="mailto:management@houseofsaffco"
              className="mt-3 inline-block text-sm text-champagne transition-opacity hover:opacity-80"
            >
              management@houseofsaffco
            </a>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-zinc-600 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} House of Saffco. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

const defaultLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/duaa.collective/',
    icon: InstagramIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/house-of-saffco/',
    icon: LinkedInIcon,
  },
]

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A4.5 4.5 0 1112 17a4.5 4.5 0 01-4.5-4.5zM18 6.3a1 1 0 11-2 0 1 1 0 012 0z" />
    </svg>
  )
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.13V23h-4v-6.35c0-1.52-.03-3.48-2.12-3.48-2.12 0-2.44 1.66-2.44 3.37V23h-4V8z" />
    </svg>
  )
}

export function SocialLinks({ links = defaultLinks, className = '', iconClass = 'h-5 w-5' }) {
  return (
    <ul className={`flex items-center gap-4 ${className}`}>
      {links.map(({ label, href, icon: Icon }) => {
        const external = href.startsWith('http')
        return (
        <li key={label}>
          <a
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-colors hover:border-champagne/40 hover:text-champagne"
            aria-label={label}
          >
            <Icon className={`${iconClass} transition-transform group-hover:scale-105`} />
          </a>
        </li>
        )
      })}
    </ul>
  )
}

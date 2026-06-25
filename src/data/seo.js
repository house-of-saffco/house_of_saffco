export const SITE_URL = 'https://www.houseofsaffco.com'

/** @type {Record<string, { title: string; description: string }>} */
export const PAGE_SEO = {
  '/': {
    title: 'House of Saffco',
    description:
      'House of Saffco — luxury brand ecosystem. Duaa, Akeedh, Cura. Distribution by Al Tashkeel International LLC.',
  },
  '/duaa': {
    title: 'Duaa | House of Saffco',
    description:
      'Duaa — refined fragrance for everyday luxury. Part of the House of Saffco brand ecosystem.',
  },
  '/cura': {
    title: 'Cura | House of Saffco',
    description:
      'Cura — science-led skincare with laboratory precision. Part of the House of Saffco brand ecosystem.',
  },
  '/akeedh': {
    title: 'Akeedh | House of Saffco',
    description:
      'Akeedh — health and beauty curated for modern life. Part of the House of Saffco brand ecosystem.',
  },
  '/al-tashkeel': {
    title: 'Al Tashkeel International | House of Saffco',
    description:
      'Al Tashkeel International LLC — Gulf distribution partner for House of Saffco brands. Muscat, Oman.',
  },
  '/team': {
    title: 'About Us | House of Saffco',
    description:
      'Leadership and team behind House of Saffco — luxury fragrance, skincare, and beauty commerce.',
  },
  '/contact': {
    title: 'Contact | House of Saffco',
    description:
      'Contact House of Saffco in Muscat, Oman. Reach our team for partnerships and inquiries.',
  },
}

export function canonicalUrl(pathname) {
  if (pathname === '/') return `${SITE_URL}/`
  return `${SITE_URL}${pathname}`
}

export function seoForPath(pathname) {
  return PAGE_SEO[pathname] ?? PAGE_SEO['/']
}

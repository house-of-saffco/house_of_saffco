/** Demo / placeholder imagery — replace with brand assets in production. */
export const IMG = {
  heroLuxury:
    'https://images.unsplash.com/photo-1612817285444-003e160ab627?auto=format&fit=crop&w=2000&q=80',
  fragrance:
    'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=2000&q=80',
  fragranceAlt:
    'https://images.unsplash.com/photo-1595425970377-c970029bf94e?auto=format&fit=crop&w=2000&q=80',
  lab:
    'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=2000&q=80',
  molecules:
    'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=2000&q=80',
  skincareTexture:
    'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=2000&q=80',
  beautyCommerce:
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=2000&q=80',
  lifestyleBeauty:
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=2000&q=80',
  omanCoast:
    'https://images.unsplash.com/photo-1589308078059-be1415eba3e3?auto=format&fit=crop&w=2000&q=80',
  muscatCity:
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=80',
  corporate:
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1d3?auto=format&fit=crop&w=2000&q=80',
  teamOffice:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80',
}

export function avatarUrl(seed) {
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(seed)}&backgroundColor=1a1a24`
}

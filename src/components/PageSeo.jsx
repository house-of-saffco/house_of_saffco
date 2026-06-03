import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { canonicalUrl, seoForPath } from '../data/seo'

function setMetaDescription(content) {
  let el = document.querySelector('meta[name="description"]')
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', 'description')
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function PageSeo() {
  const { pathname } = useLocation()
  const { title, description } = seoForPath(pathname)
  const canonical = canonicalUrl(pathname)

  useEffect(() => {
    document.title = title
    setMetaDescription(description)
    setCanonical(canonical)
  }, [title, description, canonical])

  return null
}

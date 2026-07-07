import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function useFeaturedInView() {
  const { pathname } = useLocation()
  const [featuredInView, setFeaturedInView] = useState(false)

  useEffect(() => {
    if (pathname !== '/') {
      setFeaturedInView(false)
      return
    }

    const section = document.getElementById('featured-projects')
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => setFeaturedInView(entry.isIntersecting),
      {
        rootMargin: '-64px 0px -55% 0px',
        threshold: 0,
      },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [pathname])

  return featuredInView
}

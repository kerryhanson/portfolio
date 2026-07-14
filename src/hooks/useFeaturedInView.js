import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function useFeaturedInView() {
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()
  const [featuredInView, setFeaturedInView] = useState(false)
  const wasFeaturedInView = useRef(false)

  useEffect(() => {
    if (pathname !== '/') {
      setFeaturedInView(false)
      wasFeaturedInView.current = false
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

  useEffect(() => {
    if (pathname !== '/' || hash !== '#featured-projects') {
      wasFeaturedInView.current = featuredInView
      return
    }

    if (wasFeaturedInView.current && !featuredInView) {
      navigate({ pathname: '/' }, { replace: true })
    }

    wasFeaturedInView.current = featuredInView
  }, [featuredInView, hash, pathname, navigate])

  return featuredInView
}

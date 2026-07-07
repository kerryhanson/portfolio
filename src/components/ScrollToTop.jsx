import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    const { documentElement: html, body } = document
    const previousBehavior = html.style.scrollBehavior

    html.style.scrollBehavior = 'auto'

    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView()
        html.style.scrollBehavior = previousBehavior
        return
      }
    }

    html.scrollTop = 0
    body.scrollTop = 0
    html.style.scrollBehavior = previousBehavior
  }, [pathname, hash])

  return null
}

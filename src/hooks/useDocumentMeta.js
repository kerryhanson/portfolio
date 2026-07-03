import { useEffect } from 'react'

export function useDocumentMeta({ title, robots }) {
  useEffect(() => {
    const previousTitle = document.title
    if (title) {
      document.title = title
    }

    let robotsMeta = document.querySelector('meta[name="robots"]')
    const existingRobots = robotsMeta
    const previousRobots = robotsMeta?.getAttribute('content') ?? null

    if (robots) {
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta')
        robotsMeta.setAttribute('name', 'robots')
        document.head.appendChild(robotsMeta)
      }
      robotsMeta.setAttribute('content', robots)
    }

    return () => {
      document.title = previousTitle

      if (!robots) return

      if (existingRobots && previousRobots) {
        robotsMeta.setAttribute('content', previousRobots)
      } else if (robotsMeta) {
        robotsMeta.remove()
      }
    }
  }, [title, robots])
}

import { createContext, useContext, useEffect, useState } from 'react'
import {
  DEFAULT_HERO_VISUAL_MODE,
  HERO_VISUAL_MODES,
  isValidHeroVisualMode,
} from '../config/heroVisual'

const STORAGE_KEY = 'portfolio-hero-visual-mode'

const HeroVisualContext = createContext(null)

export { HERO_VISUAL_MODES }

export function HeroVisualProvider({ children }) {
  const [heroVisualMode, setHeroVisualMode] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && isValidHeroVisualMode(stored)) return stored
    return DEFAULT_HERO_VISUAL_MODE
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, heroVisualMode)
  }, [heroVisualMode])

  return (
    <HeroVisualContext.Provider value={{ heroVisualMode, setHeroVisualMode }}>
      {children}
    </HeroVisualContext.Provider>
  )
}

export function useHeroVisual() {
  const ctx = useContext(HeroVisualContext)
  if (!ctx) throw new Error('useHeroVisual must be used within HeroVisualProvider')
  return ctx
}

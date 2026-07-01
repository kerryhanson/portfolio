import { createContext, useContext, useEffect, useState } from 'react'

export const themes = [
  { id: 'light', label: 'Light', description: 'Bright & open' },
  { id: 'soft', label: 'Soft', description: 'Warm & calm' },
  { id: 'dusk', label: 'Dusk', description: 'Muted & balanced' },
  { id: 'dark', label: 'Dark', description: 'Deep & focused' },
]

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Hammer, Settings } from 'lucide-react'
import { themes, useTheme } from '../context/ThemeContext'
import { HERO_VISUAL_MODES, useHeroVisual } from '../context/HeroVisualContext'
import { DecorativeIcon } from './a11y'

function ThemePicker({ onSelect }) {
  const { theme, setTheme } = useTheme()

  return (
    <div role="radiogroup" aria-label="Color themes" className="py-1">
      {themes.map((t) => (
        <button
          key={t.id}
          type="button"
          role="radio"
          aria-checked={theme === t.id}
          onClick={() => {
            setTheme(t.id)
            onSelect?.()
          }}
          className={`w-full text-left px-3 py-2 flex items-center gap-3 rounded-lg transition-colors min-h-11 ${
            theme === t.id
              ? 'theme-accent-bg-subtle'
              : 'hover:bg-[var(--color-bg-subtle)]'
          }`}
        >
          <span
            aria-hidden="true"
            className="w-4 h-4 rounded-full border theme-border shrink-0"
            style={{
              background:
                t.id === 'light'
                  ? '#f8fafc'
                  : t.id === 'soft'
                    ? '#fdf9f5'
                    : t.id === 'dusk'
                      ? '#1e293b'
                      : '#0c0f14',
            }}
          />
          <span>
            <span className="block text-sm font-medium theme-text">{t.label}</span>
            <span className="block text-sm theme-text-muted">{t.description}</span>
          </span>
        </button>
      ))}
    </div>
  )
}

function HeroVisualPicker({ onSelect }) {
  const { heroVisualMode, setHeroVisualMode } = useHeroVisual()

  return (
    <div role="radiogroup" aria-label="Home hero visual" className="py-1">
      {HERO_VISUAL_MODES.map((mode) => (
        <button
          key={mode.id}
          type="button"
          role="radio"
          aria-checked={heroVisualMode === mode.id}
          onClick={() => {
            setHeroVisualMode(mode.id)
            onSelect?.()
          }}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors min-h-11 ${
            heroVisualMode === mode.id
              ? 'theme-accent-bg-subtle'
              : 'hover:bg-[var(--color-bg-subtle)]'
          }`}
        >
          <span className="block text-sm font-medium theme-text">{mode.label}</span>
          <span className="block text-sm theme-text-muted">{mode.description}</span>
        </button>
      ))}
    </div>
  )
}

export default function ConfigMenu() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)
  const location = useLocation()
  const inWorkshop = location.pathname.startsWith('/workshop')

  useEffect(() => {
    if (!open) return

    const handleClickOutside = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`flex items-center gap-1.5 px-3 py-1.5 min-h-11 rounded-lg text-sm transition-colors ${
          open || inWorkshop
            ? 'theme-accent-bg-subtle theme-accent-text'
            : 'theme-btn-ghost'
        }`}
        aria-label="Config menu"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="config-menu"
      >
        <DecorativeIcon icon={Settings} size={16} strokeWidth={1.75} />
        <span className="hidden sm:inline font-medium">Config</span>
      </button>

      <div
        id="config-menu"
        role="dialog"
        aria-label="Config"
        className={`absolute right-0 top-full mt-2 w-64 rounded-xl theme-surface theme-shadow-lg border theme-border transition-all duration-150 z-50 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="px-3 pt-3 pb-1">
          <p className="text-sm font-semibold theme-text-muted uppercase tracking-wide">
            Theme
          </p>
        </div>
        <div className="px-1.5">
          <ThemePicker onSelect={() => setOpen(false)} />
        </div>

        <div className="my-2 mx-3 border-t theme-border" role="separator" />

        <div className="px-3 pb-1">
          <p className="text-sm font-semibold theme-text-muted uppercase tracking-wide">
            Home hero
          </p>
        </div>
        <div className="px-1.5">
          <HeroVisualPicker onSelect={() => setOpen(false)} />
        </div>

        <div className="my-2 mx-3 border-t theme-border" role="separator" />

        <div className="px-1.5 pb-1.5">
          <Link
            to="/workshop"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 px-3 py-2.5 min-h-11 rounded-lg text-sm transition-colors ${
              inWorkshop
                ? 'theme-accent-bg-subtle theme-accent-text'
                : 'theme-text hover:bg-[var(--color-bg-subtle)]'
            }`}
          >
            <span
              aria-hidden="true"
              className="w-8 h-8 rounded-lg theme-bg-subtle border theme-border flex items-center justify-center shrink-0"
            >
              <DecorativeIcon icon={Hammer} size={16} className="theme-accent" />
            </span>
            <span>
              <span className="block font-medium">Workshop</span>
              <span className="block text-sm theme-text-muted">Design system guide</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

import { Palette } from 'lucide-react'
import { themes, useTheme } from '../context/ThemeContext'

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="relative group">
      <button
        type="button"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg theme-btn-ghost text-sm"
        aria-label="Select color theme"
        aria-haspopup="listbox"
      >
        <Palette size={15} strokeWidth={1.75} />
        <span className="hidden sm:inline">{themes.find((t) => t.id === theme)?.label}</span>
      </button>

      <div
        className="absolute right-0 top-full mt-2 w-48 py-1.5 rounded-xl theme-surface theme-shadow-lg border theme-border opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-150 z-50"
        role="listbox"
        aria-label="Color themes"
      >
        {themes.map((t) => (
          <button
            key={t.id}
            type="button"
            role="option"
            aria-selected={theme === t.id}
            onClick={() => setTheme(t.id)}
            className={`w-full text-left px-4 py-2.5 flex items-center gap-3 transition-colors ${
              theme === t.id
                ? 'theme-accent-bg-subtle'
                : 'hover:bg-[var(--color-bg-subtle)]'
            }`}
          >
            <span
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
              <span className="block text-xs theme-text-subtle">{t.description}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import ThemeSelector from './ThemeSelector'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
]

export default function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b theme-border theme-nav-bg backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-lg theme-accent-bg flex items-center justify-center text-white text-sm font-bold">
            KH
          </span>
          <span className="font-semibold theme-text hidden sm:block">Kerry Hanson</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? 'theme-accent-bg-subtle theme-accent-text'
                  : 'theme-text-muted hover:text-[var(--color-text)] hover:bg-[var(--color-bg-subtle)]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-2 pl-2 border-l theme-border">
            <ThemeSelector />
          </div>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeSelector />
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg theme-btn-ghost"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t theme-border theme-surface px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? 'theme-accent-bg-subtle theme-accent-text'
                  : 'theme-text-muted'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

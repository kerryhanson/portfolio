import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { DecorativeIcon } from './a11y'
import ConfigMenu from './ConfigMenu'
import useFeaturedInView from '../hooks/useFeaturedInView'
import { showConfigMenu } from '../config/siteConfig'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/', hash: 'featured-projects' },
  { label: 'About', to: '/about' },
]

function getNavTarget(link) {
  if (link.hash) {
    return { pathname: link.to, hash: `#${link.hash}` }
  }
  return link.to
}

function isNavActive(link, pathname, hash, featuredInView) {
  if (link.hash) {
    return pathname === '/' && (hash === `#${link.hash}` || featuredInView)
  }
  if (link.to === '/') {
    return pathname === '/' && !hash && !featuredInView
  }
  return pathname === link.to
}

export default function Header() {
  const { pathname, hash } = useLocation()
  const featuredInView = useFeaturedInView()
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClassName = (link) => {
    const active = isNavActive(link, pathname, hash, featuredInView)
    return `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
      active
        ? 'theme-accent-bg-subtle theme-accent-text'
        : 'theme-text-muted hover:text-[var(--color-text)] hover:bg-[var(--color-bg-subtle)]'
    }`
  }

  const mobileLinkClassName = (link) => {
    const active = isNavActive(link, pathname, hash, featuredInView)
    return `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
      active ? 'theme-accent-bg-subtle theme-accent-text' : 'theme-text-muted'
    }`
  }

  return (
    <header className="sticky top-0 z-40 border-b theme-border theme-nav-bg backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span
            aria-hidden="true"
            className="w-8 h-8 rounded-lg theme-accent-bg flex items-center justify-center text-white text-sm font-bold"
          >
            KH
          </span>
          <span className="font-semibold theme-text">Kerry Hanson</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={getNavTarget(link)}
              aria-current={isNavActive(link, pathname, hash, featuredInView) ? 'page' : undefined}
              className={linkClassName(link)}
            >
              {link.label}
            </Link>
          ))}
          {showConfigMenu && (
            <div className="ml-2 pl-2 border-l theme-border">
              <ConfigMenu />
            </div>
          )}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          {showConfigMenu && <ConfigMenu />}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 min-w-11 min-h-11 rounded-lg theme-btn-ghost flex items-center justify-center"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <DecorativeIcon icon={menuOpen ? X : Menu} size={20} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t theme-border theme-surface px-6 py-4 flex flex-col gap-1"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={getNavTarget(link)}
              onClick={() => setMenuOpen(false)}
              aria-current={isNavActive(link, pathname, hash, featuredInView) ? 'page' : undefined}
              className={mobileLinkClassName(link)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

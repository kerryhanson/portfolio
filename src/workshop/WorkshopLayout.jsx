import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ConfigMenu from '../components/ConfigMenu'
import { DecorativeIcon } from '../components/a11y'
import { workshopNav } from '../config/workshopNav'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import WorkshopSidebar from './components/WorkshopSidebar'

export default function WorkshopLayout() {
  const location = useLocation()
  const currentLabel =
    workshopNav.flatMap((g) => g.items).find((item) =>
      item.end ? location.pathname === item.to : location.pathname.startsWith(item.to)
    )?.label ?? 'Workshop'

  useDocumentMeta({
    title: `${currentLabel} — Workshop | Kerry Hanson`,
    robots: 'noindex, nofollow',
  })

  const mobileNavItems = workshopNav.flatMap((g) => g.items)

  return (
    <div className="min-h-screen flex flex-col theme-bg">
      <header className="sticky top-0 z-40 border-b theme-border theme-nav-bg backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm theme-text-muted theme-link shrink-0"
            >
              <DecorativeIcon icon={ArrowLeft} size={16} />
              <span className="hidden sm:inline">Portfolio</span>
            </Link>
            <span aria-hidden="true" className="h-5 w-px theme-border bg-[var(--color-border)]" />
            <div className="min-w-0">
              <p className="text-xs font-medium theme-text-subtle uppercase tracking-wide">
                Workshop
              </p>
              <p className="text-sm font-semibold theme-text truncate">{currentLabel}</p>
            </div>
          </div>
          <ConfigMenu />
        </div>

        <nav
          aria-label="Workshop sections"
          className="lg:hidden border-t theme-border overflow-x-auto"
        >
          <ul className="flex gap-1 px-4 py-2 max-w-7xl mx-auto">
            {mobileNavItems.map((item) => (
              <li key={item.to} className="shrink-0">
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `block px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                      isActive
                        ? 'theme-accent-bg-subtle theme-accent-text'
                        : 'theme-text-muted hover:bg-[var(--color-bg-subtle)]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-10 flex-1 w-full">
        <div className="flex gap-10">
          <WorkshopSidebar />
          <main className="flex-1 min-w-0 max-w-3xl">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

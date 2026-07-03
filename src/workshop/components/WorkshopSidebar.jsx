import { NavLink } from 'react-router-dom'
import { workshopNav } from '../../config/workshopNav'

export default function WorkshopSidebar() {
  return (
    <aside className="w-56 shrink-0 hidden lg:block">
      <nav aria-label="Workshop sections" className="sticky top-28 space-y-6">
        {workshopNav.map((group) => (
          <div key={group.title}>
            <p className="text-xs font-semibold theme-text-subtle uppercase tracking-wide px-3 mb-2">
              {group.title}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'theme-accent-bg-subtle theme-accent-text'
                          : 'theme-text-muted hover:text-[var(--color-text)] hover:bg-[var(--color-bg-subtle)]'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}

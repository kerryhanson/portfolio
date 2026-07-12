import { useId, useState } from 'react'
import { Lock } from 'lucide-react'
import { DecorativeIcon } from './a11y'
import useSiteAccess from '../hooks/useSiteAccess'

export default function SiteAccessGate({ children }) {
  const { isGranted, isReady, authenticate } = useSiteAccess()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const inputId = useId()
  const errorId = useId()

  if (!isReady) {
    return null
  }

  if (isGranted) {
    return children
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (authenticate(password.trim())) {
      setError('')
      return
    }
    setError('Incorrect password. Please try again.')
    setPassword('')
  }

  return (
    <div className="min-h-screen theme-bg flex items-center justify-center px-6 py-12">
      <main className="w-full max-w-sm">
        <div className="theme-card rounded-2xl p-8 space-y-6">
          <header className="text-center space-y-3">
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl theme-accent-bg-subtle"
            >
              <DecorativeIcon icon={Lock} size={22} className="theme-accent-text" />
            </span>
            <h1 className="text-xl font-semibold theme-text">Portfolio access</h1>
            <p className="text-sm theme-text-muted leading-relaxed">
              Enter the password to view this site.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor={inputId} className="block text-sm font-medium theme-text mb-1.5">
                Password
              </label>
              <input
                id={inputId}
                type="password"
                name="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                  if (error) setError('')
                }}
                autoComplete="current-password"
                aria-invalid={Boolean(error)}
                aria-describedby={error ? errorId : undefined}
                className="w-full px-3 py-2.5 rounded-lg border theme-border theme-surface theme-text text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              />
              {error && (
                <p id={errorId} role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full px-5 py-2.5 rounded-xl theme-btn-primary text-sm font-medium"
            >
              View portfolio
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

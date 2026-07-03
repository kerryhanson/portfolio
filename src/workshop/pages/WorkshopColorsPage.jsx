import { colorTokens } from '../../config/designTokens'
import { PageIntro } from '../components/WorkshopPrimitives'

function ColorSwatch({ token }) {
  return (
    <article className="theme-card rounded-xl overflow-hidden">
      <div
        className="h-20 border-b theme-border"
        style={{ backgroundColor: `var(${token.var})` }}
        aria-hidden="true"
      />
      <div className="p-4 space-y-1">
        <h3 className="text-sm font-semibold theme-text">{token.name}</h3>
        <p className="font-mono text-xs theme-text-subtle">{token.var}</p>
        <p className="text-xs theme-text-muted">{token.role}</p>
      </div>
    </article>
  )
}

export default function WorkshopColorsPage() {
  const groups = [
    { title: 'Surfaces', filter: (t) => t.var.includes('bg') || t.var.includes('surface') || t.var.includes('nav') },
    { title: 'Text', filter: (t) => t.var.includes('text') },
    { title: 'Accent', filter: (t) => t.var.includes('accent') },
    { title: 'Borders & shadows', filter: (t) => t.var.includes('border') || t.var.includes('shadow') },
  ]

  return (
    <>
      <PageIntro
        title="Colors"
        description="Swatches reflect the active theme. Switch themes via Config to compare palettes. Components never reference hex values directly in JSX."
      />

      <div className="space-y-10">
        {groups.map((group) => {
          const tokens = colorTokens.filter(group.filter)
          if (tokens.length === 0) return null

          return (
            <section key={group.title} className="space-y-4">
              <h2 className="text-xl font-bold theme-text">{group.title}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {tokens.map((token) => (
                  <ColorSwatch key={token.var} token={token} />
                ))}
              </div>
            </section>
          )
        })}

        <section className="space-y-4">
          <h2 className="text-xl font-bold theme-text">Tailwind + tokens</h2>
          <p className="text-sm theme-text-muted leading-relaxed">
            Tailwind handles structural color needs (e.g. white text on accent buttons via{' '}
            <code className="text-xs">text-white</code>). Semantic surfaces use theme utilities or{' '}
            <code className="text-xs">var(--color-*)</code> for one-off cases like hover overrides.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-lg theme-accent-bg text-white text-sm font-medium">
              theme-accent-bg
            </span>
            <span className="px-4 py-2 rounded-lg theme-accent-bg-subtle theme-accent-text text-sm font-medium">
              theme-accent-bg-subtle
            </span>
            <span className="px-4 py-2 rounded-lg theme-surface border theme-border theme-text text-sm font-medium">
              theme-surface
            </span>
            <a href="#example" className="px-4 py-2 text-sm font-medium theme-link">
              theme-link
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

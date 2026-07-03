import { colorTokens } from '../../config/designTokens'
import { Callout, CodeSnippet, PageIntro } from '../components/WorkshopPrimitives'

export default function WorkshopTokensPage() {
  return (
    <>
      <PageIntro
        title="Design tokens"
        description="Semantic tokens decouple components from raw color values. Each theme redefines the same variable names so patterns stay consistent."
      />

      <div className="space-y-8">
        <Callout>
          Tokens are defined per theme in <code>src/index.css</code> under{' '}
          <code>[data-theme="…"]</code> selectors, then exposed through{' '}
          <code>.theme-*</code> utility classes.
        </Callout>

        <section className="space-y-4">
          <h2 className="text-xl font-bold theme-text">Token architecture</h2>
          <CodeSnippet
            title="Pattern"
            code={`[data-theme="light"] {
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-accent: #2563eb;
}

.theme-surface { background-color: var(--color-surface); }
.theme-text { color: var(--color-text); }`}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold theme-text">Semantic color tokens</h2>
          <div className="overflow-x-auto rounded-xl border theme-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="theme-bg-subtle border-b theme-border text-left">
                  <th className="px-4 py-3 font-semibold theme-text">Name</th>
                  <th className="px-4 py-3 font-semibold theme-text">CSS variable</th>
                  <th className="px-4 py-3 font-semibold theme-text">Utility</th>
                  <th className="px-4 py-3 font-semibold theme-text">Role</th>
                </tr>
              </thead>
              <tbody>
                {colorTokens.map((token) => (
                  <tr key={token.var} className="border-b theme-border-subtle last:border-0">
                    <td className="px-4 py-3 font-medium theme-text">{token.name}</td>
                    <td className="px-4 py-3 font-mono text-xs theme-text-muted">{token.var}</td>
                    <td className="px-4 py-3 font-mono text-xs theme-accent-text">{token.utility}</td>
                    <td className="px-4 py-3 theme-text-muted">{token.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold theme-text">Available themes</h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm">
            {['light', 'soft', 'dusk', 'dark'].map((theme) => (
              <li
                key={theme}
                className="theme-card rounded-lg px-4 py-3 flex items-center justify-between"
              >
                <span className="font-medium theme-text capitalize">{theme}</span>
                <code className="text-xs theme-text-subtle">data-theme="{theme}"</code>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}

import { Callout, PageIntro } from '../components/WorkshopPrimitives'

export default function WorkshopOverviewPage() {
  return (
    <>
      <PageIntro
        title="Design system overview"
        description="This portfolio uses Tailwind CSS v4 for layout and spacing utilities, layered with semantic CSS custom properties for theming. Components reference theme utilities—not hard-coded colors—so all four themes stay in sync."
      />

      <div className="space-y-10">
        <Callout>
          Workshop is a standalone reference for foundational patterns. It mirrors how the portfolio
          is built without portfolio-specific content in the examples.
        </Callout>

        <section className="space-y-4">
          <h2 className="text-xl font-bold theme-text">How Tailwind fits in</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <article className="theme-card rounded-xl p-5 space-y-2">
              <h3 className="font-semibold theme-text">Tailwind utilities</h3>
              <p className="text-sm theme-text-muted leading-relaxed">
                Layout, spacing, typography scale, responsive breakpoints, and flex/grid are handled
                with Tailwind classes like <code className="text-xs">px-6</code>,{' '}
                <code className="text-xs">text-lg</code>, and{' '}
                <code className="text-xs">lg:grid-cols-2</code>.
              </p>
            </article>
            <article className="theme-card rounded-xl p-5 space-y-2">
              <h3 className="font-semibold theme-text">Theme tokens</h3>
              <p className="text-sm theme-text-muted leading-relaxed">
                Color and surface semantics live in CSS variables on{' '}
                <code className="text-xs">[data-theme]</code>. Utility classes like{' '}
                <code className="text-xs">theme-surface</code> map to those variables.
              </p>
            </article>
            <article className="theme-card rounded-xl p-5 space-y-2">
              <h3 className="font-semibold theme-text">Composition</h3>
              <p className="text-sm theme-text-muted leading-relaxed">
                Components combine both layers:{' '}
                <code className="text-xs">rounded-xl theme-btn-primary px-5 py-2.5 text-sm</code>.
                Tailwind handles structure; tokens handle color.
              </p>
            </article>
            <article className="theme-card rounded-xl p-5 space-y-2">
              <h3 className="font-semibold theme-text">Switching themes</h3>
              <p className="text-sm theme-text-muted leading-relaxed">
                <code className="text-xs">ThemeProvider</code> sets{' '}
                <code className="text-xs">data-theme</code> on the document root. All themed
                components update without re-render-specific color logic.
              </p>
            </article>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold theme-text">File map</h2>
          <ul className="space-y-2 text-sm theme-text-muted">
            <li>
              <code className="theme-text">src/index.css</code> — theme variables and utility classes
            </li>
            <li>
              <code className="theme-text">src/context/ThemeContext.jsx</code> — theme state and
              persistence
            </li>
            <li>
              <code className="theme-text">src/config/designTokens.js</code> — documented token
              reference
            </li>
            <li>
              <code className="theme-text">src/components/a11y.jsx</code> — icon and screen-reader
              helpers
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}

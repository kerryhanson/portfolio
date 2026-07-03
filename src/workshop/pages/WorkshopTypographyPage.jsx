import { typographyScale } from '../../config/designTokens'
import { CodeSnippet, PageIntro } from '../components/WorkshopPrimitives'

export default function WorkshopTypographyPage() {
  return (
    <>
      <PageIntro
        title="Typography"
        description="System UI font stack with Tailwind size and weight utilities. Hierarchy is expressed through scale, not custom font families."
      />

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-xl font-bold theme-text">Font stack</h2>
          <CodeSnippet
            code={`font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;`}
            title="src/index.css — body"
          />
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-bold theme-text">Type scale</h2>
          {typographyScale.map((item) => (
            <article
              key={item.name}
              className="theme-card rounded-xl p-6 space-y-3"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm font-semibold theme-text">{item.name}</h3>
                <code className="text-xs theme-text-subtle font-mono">{item.usage}</code>
              </div>
              <p className={`theme-text ${item.class}`}>{item.sample}</p>
              <CodeSnippet code={item.class} />
            </article>
          ))}
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold theme-text">Emphasis patterns</h2>
          <div className="theme-card rounded-xl p-6 space-y-4">
            <p className="text-4xl font-bold theme-text">
              Headline with <span className="theme-accent">accent span</span>
            </p>
            <p className="text-sm theme-text-muted">
              Accent color on inline emphasis uses <code>theme-accent</code> rather than a
              separate font family or weight.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

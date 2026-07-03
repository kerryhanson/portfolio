import { spacingScale } from '../../config/designTokens'
import { CodeSnippet, DemoBlock, PageIntro } from '../components/WorkshopPrimitives'

export default function WorkshopSpacingPage() {
  return (
    <>
      <PageIntro
        title="Spacing"
        description="Tailwind's default spacing scale drives padding, gaps, and section rhythm. The portfolio uses a consistent subset aligned to the 4px grid."
      />

      <div className="space-y-10">
        <DemoBlock
          title="Scale reference"
          description="Each step maps to a Tailwind class prefix (p-*, gap-*, m-*, etc.)."
        >
          <div className="space-y-3">
            {spacingScale.map((step) => (
              <div key={step.token} className="flex items-center gap-4">
                <code className="w-8 text-xs font-mono theme-text-subtle shrink-0">{step.token}</code>
                <div
                  className="theme-accent-bg rounded shrink-0"
                  style={{ width: step.value, height: '1.5rem' }}
                  aria-hidden="true"
                />
                <span className="text-sm theme-text-muted flex-1 min-w-0">
                  {step.value} ({step.px}) — {step.usage}
                </span>
              </div>
            ))}
          </div>
        </DemoBlock>

        <DemoBlock
          title="Common layout patterns"
          description="Structural spacing uses Tailwind; themed sections use token-backed backgrounds."
          code={`<!-- Page container -->
<div className="max-w-6xl mx-auto px-6 py-20">

<!-- Card grid -->
<div className="grid sm:grid-cols-2 gap-6">

<!-- Stack -->
<div className="space-y-6">`}
          codeTitle="Tailwind layout"
        >
          <div className="space-y-4">
            <div className="rounded-lg border theme-border px-6 py-4 theme-bg-subtle text-sm theme-text-muted">
              <code>px-6</code> — horizontal page padding
            </div>
            <div className="rounded-lg border theme-border px-6 py-4 theme-bg-subtle text-sm theme-text-muted">
              <code>gap-6</code> — card grid spacing
            </div>
            <div className="rounded-lg border theme-border px-6 py-4 theme-bg-subtle text-sm theme-text-muted">
              <code>py-20</code> — major section vertical padding
            </div>
          </div>
        </DemoBlock>

        <section className="space-y-4">
          <h2 className="text-xl font-bold theme-text">Max-width containers</h2>
          <CodeSnippet
            code={`max-w-6xl  →  portfolio pages (1152px)
max-w-7xl  →  workshop layout (1280px)
max-w-3xl  →  long-form reading width`}
          />
        </section>
      </div>
    </>
  )
}

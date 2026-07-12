import HeroFlowDiagram from '../../components/HeroFlowDiagram'
import { HERO_SLIDES, HERO_VISUAL_MODE } from '../../config/heroVisual'
import { Callout, CodeSnippet, DemoBlock, PageIntro } from '../components/WorkshopPrimitives'

export default function WorkshopPatternsPage() {
  return (
    <>
      <PageIntro
        title="Patterns"
        description="Composite UI patterns built for the portfolio home hero. These combine tokens, Tailwind layout, and accessibility primitives into a synced tab-and-carousel experience."
      />

      <div className="space-y-10">
        <Callout>
          The hero visual mode is controlled by <code>HERO_VISUAL_MODE</code> in{' '}
          <code>src/config/heroVisual.js</code>. Current mode:{' '}
          <strong className="theme-accent-text">{HERO_VISUAL_MODE}</strong>.
        </Callout>

        <DemoBlock
          title="Hero flow diagram"
          description="Two-part pattern: an expertise tab strip drives a square image carousel below. State is shared via a single activeIndex."
        >
          <HeroFlowDiagram />
        </DemoBlock>

        <section className="space-y-4">
          <h2 className="text-xl font-bold theme-text">Structure</h2>
          <CodeSnippet
            title="Component hierarchy"
            code={`HeroFlowDiagram
├── ExpertiseBanner     role="tablist" — step icons + labels
│   ├── Tab buttons     role="tab" — sync to carousel index
│   └── Connector       decorative step dividers
└── HeroSlider          aria-roledescription="carousel"
    ├── Slide panels    role="tabpanel" — one visible at a time
    └── Nav overlay     prev/next — z-20, pointer-events layering`}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold theme-text">Slide configuration</h2>
          <p className="text-sm theme-text-muted leading-relaxed">
            Slides are data-driven from <code>HERO_SLIDES</code>. Set{' '}
            <code>image</code> paths when assets are ready; null shows a placeholder.
          </p>
          <div className="overflow-x-auto rounded-xl border theme-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="theme-bg-subtle border-b theme-border text-left">
                  <th className="px-4 py-3 font-semibold theme-text">Step</th>
                  <th className="px-4 py-3 font-semibold theme-text">ID</th>
                  <th className="px-4 py-3 font-semibold theme-text">Image</th>
                </tr>
              </thead>
              <tbody>
                {HERO_SLIDES.map((slide) => (
                  <tr key={slide.id} className="border-b theme-border-subtle last:border-0">
                    <td className="px-4 py-3 font-medium theme-text">{slide.label}</td>
                    <td className="px-4 py-3 font-mono text-xs theme-text-muted">{slide.id}</td>
                    <td className="px-4 py-3 font-mono text-xs theme-text-subtle">
                      {slide.image ?? 'placeholder'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <DemoBlock
          title="Tab active state"
          description="Fixed 64×64px icon slots prevent layout shift. Active step scales to full size with accent border."
          code={`<span className="w-16 h-16 flex items-center justify-center">
  <span className={isActive ? 'scale-100 theme-accent-bg-subtle' : 'scale-[0.857] theme-surface'}>
    <Icon />
  </span>
</span>`}
        >
          <p className="text-sm theme-text-muted">
            Inactive tabs scale to ~85.7% (<code>scale-[0.857]</code>) inside a fixed container so
            the banner height stays stable as users navigate.
          </p>
        </DemoBlock>

        <DemoBlock
          title="Carousel navigation"
          description="Arrow buttons sit in a pointer-events-none overlay; slides use pointer-events-none so clicks reach the controls."
          code={`<nav className="absolute inset-0 z-20 flex ... pointer-events-none">
  <button className="pointer-events-auto ... [@media(hover:hover)]:opacity-0
    [@media(hover:hover)]:group-hover:opacity-100">
    Previous
  </button>
</nav>`}
        >
          <ul className="text-sm theme-text-muted space-y-2 list-disc pl-5">
            <li>Auto-advances every 7 seconds; timer resets on manual navigation</li>
            <li>Arrow keys when the carousel section has focus</li>
            <li>Arrows fade in on hover (desktop) or stay partially visible (touch)</li>
            <li><code>aria-live</code> region announces slide changes to screen readers</li>
          </ul>
        </DemoBlock>

        <section className="space-y-4">
          <h2 className="text-xl font-bold theme-text">Accessibility mapping</h2>
          <div className="overflow-x-auto rounded-xl border theme-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="theme-bg-subtle border-b theme-border text-left">
                  <th className="px-4 py-3 font-semibold theme-text">Element</th>
                  <th className="px-4 py-3 font-semibold theme-text">ARIA</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Expertise banner', 'role="tablist"'],
                  ['Step buttons', 'role="tab", aria-selected, aria-controls'],
                  ['Slide panels', 'role="tabpanel", aria-labelledby, hidden, inert'],
                  ['Image carousel', 'aria-roledescription="carousel"'],
                  ['Slide nav', 'nav with aria-label="Slide navigation"'],
                  ['Status', 'aria-live="polite" screen reader announcement'],
                ].map(([element, aria]) => (
                  <tr key={element} className="border-b theme-border-subtle last:border-0">
                    <td className="px-4 py-3 theme-text">{element}</td>
                    <td className="px-4 py-3 font-mono text-xs theme-text-muted">{aria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <DemoBlock
          title="Connector dividers"
          description="Decorative lines between tab steps — border token for base, accent at reduced opacity for emphasis."
          code={`<span aria-hidden="true" className="flex items-center flex-1 max-w-16">
  <span style={{ backgroundColor: 'var(--color-border)' }} />
  <span style={{ backgroundColor: 'var(--color-accent)', opacity: 0.3 }} />
</span>`}
        >
          <div className="flex items-center justify-center gap-4 max-w-xs mx-auto">
            <span className="w-10 h-10 rounded-full theme-accent-bg-subtle border-2 theme-border" />
            <span className="flex items-center flex-1 max-w-16 self-center">
              <span className="h-px flex-1 block bg-[var(--color-border)]" />
              <span className="h-px flex-1 block bg-[var(--color-accent)] opacity-30" />
            </span>
            <span className="w-10 h-10 rounded-full theme-surface border-2 theme-border" />
          </div>
        </DemoBlock>
      </div>
    </>
  )
}

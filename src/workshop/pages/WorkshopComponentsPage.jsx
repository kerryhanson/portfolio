import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { DecorativeIcon } from '../../components/a11y'
import PlaceholderImage from '../../components/PlaceholderImage'
import { DemoBlock, PageIntro } from '../components/WorkshopPrimitives'

function GenericCard() {
  return (
    <article className="theme-card rounded-2xl overflow-hidden flex flex-col h-full">
      <PlaceholderImage
        label="Media placeholder"
        aspectRatio="16/9"
        className="rounded-none border-0 border-b theme-border"
        iconSize={28}
      />
      <section className="flex flex-col flex-1 p-6 gap-3">
        <header className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold theme-text">Card title</h3>
            <p className="text-sm theme-text-muted mt-0.5">Supporting subtitle</p>
          </div>
        </header>
        <p className="text-sm theme-text-muted leading-relaxed line-clamp-2 flex-1">
          Brief summary text that describes the content without referencing specific portfolio projects.
        </p>
        <footer className="flex flex-wrap gap-1.5 pt-1">
          {['Tag one', 'Tag two', 'Tag three'].map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-0.5 rounded-full theme-accent-bg-subtle theme-accent-text font-medium"
            >
              {tag}
            </span>
          ))}
        </footer>
      </section>
    </article>
  )
}

export default function WorkshopComponentsPage() {
  return (
    <>
      <PageIntro
        title="Components & patterns"
        description="Reusable UI patterns from the portfolio, shown with generic placeholder content. Each combines theme utilities and Tailwind layout classes."
      />

      <div className="space-y-10">
        <DemoBlock
          title="Badge / pill"
          description="Inline status or role indicator."
          code={`<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full theme-accent-bg-subtle text-sm font-medium theme-accent-text">
  Label
</span>`}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full theme-accent-bg-subtle text-sm font-medium theme-accent-text">
            Role or category
          </span>
        </DemoBlock>

        <DemoBlock
          title="Card (linked)"
          description="Interactive card with hover elevation. Only anchor elements use hover lift."
          code={`<Link className="group theme-card rounded-2xl overflow-hidden flex flex-col h-full">
  ...
  <DecorativeIcon icon={ArrowUpRight} className="group-hover:text-[var(--color-accent)]" />
</Link>`}
        >
          <div className="max-w-md">
            <Link to="/workshop/components" className="group theme-card rounded-2xl overflow-hidden flex flex-col">
              <PlaceholderImage
                label="Preview"
                aspectRatio="16/9"
                className="rounded-none border-0 border-b theme-border"
              />
              <div className="p-6">
                <header className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold theme-text group-hover:text-[var(--color-accent-text)] transition-colors">
                      Linked card title
                    </h3>
                    <p className="text-sm theme-text-muted mt-1">Hover to see accent and shadow shift.</p>
                  </div>
                  <DecorativeIcon
                    icon={ArrowUpRight}
                    size={18}
                    className="shrink-0 theme-text-subtle group-hover:text-[var(--color-accent)] transition-colors mt-1"
                  />
                </header>
              </div>
            </Link>
          </div>
        </DemoBlock>

        <DemoBlock title="Card (static)" description="Full card pattern with media, header, summary, and tags.">
          <div className="max-w-md">
            <GenericCard />
          </div>
        </DemoBlock>

        <DemoBlock
          title="Placeholder image"
          description="Gradient media placeholder for content not yet available."
          code={`<PlaceholderImage label="Label" aspectRatio="16/9" />`}
        >
          <PlaceholderImage label="Generic media" aspectRatio="16/9" />
        </DemoBlock>

        <DemoBlock
          title="Section band"
          description="Alternating page sections use subtle background and border separators."
          code={`<section className="theme-bg-subtle border-y theme-border-subtle">
  <div className="max-w-6xl mx-auto px-6 py-20">...</div>
</section>`}
        >
          <div className="theme-bg-subtle border-y theme-border-subtle -mx-6 px-6 py-8 rounded-lg">
            <p className="text-sm theme-text-muted text-center">Section band preview</p>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Callout / alert"
          description="Informational inset panel using accent subtle background."
        >
          <aside className="rounded-xl border theme-border theme-accent-bg-subtle px-4 py-3 text-sm theme-text">
            Informational message using accent subtle surface — used in workshop and can extend to
            inline page notices.
          </aside>
        </DemoBlock>

        <DemoBlock
          title="Navigation link (active)"
          description="Current page state in main nav."
        >
          <nav className="inline-flex gap-1 p-1 rounded-xl theme-bg-subtle border theme-border">
            <span className="px-4 py-2 rounded-lg text-sm font-medium theme-accent-bg-subtle theme-accent-text">
              Active
            </span>
            <span className="px-4 py-2 rounded-lg text-sm font-medium theme-text-muted">
              Default
            </span>
          </nav>
        </DemoBlock>

        <section className="space-y-4">
          <h2 className="text-xl font-bold theme-text">Focus states</h2>
          <p className="text-sm theme-text-muted">
            Global <code>:focus-visible</code> styles in <code>index.css</code> use the accent color
            for keyboard focus rings across all interactive elements.
          </p>
          <button type="button" className="px-5 py-2.5 rounded-xl theme-btn-primary text-sm font-medium">
            Tab to me
          </button>
        </section>
      </div>
    </>
  )
}

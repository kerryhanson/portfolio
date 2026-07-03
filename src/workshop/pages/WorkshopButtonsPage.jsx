import { ArrowRight } from 'lucide-react'
import { DecorativeIcon } from '../../components/a11y'
import { DemoBlock, PageIntro } from '../components/WorkshopPrimitives'

export default function WorkshopButtonsPage() {
  return (
    <>
      <PageIntro
        title="Buttons"
        description="Two primary patterns — filled accent (primary) and bordered ghost — defined as theme utilities in CSS and composed with Tailwind for sizing."
      />

      <div className="space-y-10">
        <DemoBlock
          title="Primary"
          description="Filled accent background with white label text."
          code={`<button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl theme-btn-primary text-sm font-medium">
  Label
</button>`}
        >
          <div className="flex flex-wrap gap-3">
            <button type="button" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl theme-btn-primary text-sm font-medium">
              Primary action
            </button>
            <button type="button" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl theme-btn-primary text-sm font-medium">
              With icon
              <DecorativeIcon icon={ArrowRight} size={16} />
            </button>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Ghost"
          description="Bordered surface button for secondary actions."
          code={`<button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl theme-btn-ghost text-sm font-medium">
  Secondary
</button>`}
        >
          <div className="flex flex-wrap gap-3">
            <button type="button" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl theme-btn-ghost text-sm font-medium">
              Secondary action
            </button>
            <button type="button" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl theme-btn-ghost text-sm font-medium">
              Cancel
            </button>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Nav / icon button"
          description="Compact ghost variant used in header and carousel controls."
          code={`<button className="p-2 rounded-lg theme-btn-ghost" aria-label="Open menu">
  ...
</button>`}
        >
          <button
            type="button"
            className="p-2 rounded-lg theme-btn-ghost"
            aria-label="Example icon button"
          >
            <DecorativeIcon icon={ArrowRight} size={20} />
          </button>
        </DemoBlock>

        <section className="space-y-4">
          <h2 className="text-xl font-bold theme-text">CSS source</h2>
          <pre className="rounded-xl border theme-border p-4 text-xs font-mono theme-bg-subtle theme-text-muted overflow-x-auto">
{`.theme-btn-primary {
  background-color: var(--color-accent);
  color: #ffffff;
}
.theme-btn-primary:hover {
  background-color: var(--color-accent-hover);
}

.theme-btn-ghost {
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
}`}
          </pre>
        </section>
      </div>
    </>
  )
}

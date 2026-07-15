import { envVariables, techStack } from '../../data/techStack'
import { Callout, CodeSnippet, PageIntro } from '../components/WorkshopPrimitives'

function StackSection({ section }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold theme-text">{section.title}</h2>
      {'items' in section && typeof section.items[0] === 'string' ? (
        <ul className="space-y-2 text-sm theme-text-muted list-disc pl-5">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <div className="overflow-x-auto rounded-xl border theme-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="theme-bg-subtle border-b theme-border text-left">
                <th className="px-4 py-3 font-semibold theme-text">Technology</th>
                <th className="px-4 py-3 font-semibold theme-text">Role</th>
                <th className="px-4 py-3 font-semibold theme-text hidden sm:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {section.items.map((item) => (
                <tr key={item.name} className="border-b theme-border-subtle last:border-0">
                  <td className="px-4 py-3 font-medium theme-text whitespace-nowrap">{item.name}</td>
                  <td className="px-4 py-3 theme-text-muted">{item.role}</td>
                  <td className="px-4 py-3 theme-text-muted hidden sm:table-cell">{item.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default function WorkshopTechStackPage() {
  return (
    <>
      <PageIntro
        title="Tech stack"
        description="Everything used to build, configure, and deploy this portfolio. Kept here as a living reference alongside the design system docs."
      />

      <div className="space-y-10">
        <Callout>
          This is a static single-page application. There is no backend, database, or CMS — content
          lives in JavaScript data files and images in <code>public/</code> and{' '}
          <code>src/assets/</code>.
        </Callout>

        {Object.values(techStack).map((section) => (
          <StackSection key={section.title} section={section} />
        ))}

        <section className="space-y-4">
          <h2 className="text-xl font-bold theme-text">Environment variables</h2>
          <p className="text-sm theme-text-muted leading-relaxed">
            Set in <code>.env.local</code> (see <code>.env.example</code>). Vite exposes only{' '}
            <code>VITE_*</code> variables to the client bundle.
          </p>
          <div className="overflow-x-auto rounded-xl border theme-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="theme-bg-subtle border-b theme-border text-left">
                  <th className="px-4 py-3 font-semibold theme-text">Variable</th>
                  <th className="px-4 py-3 font-semibold theme-text">Default</th>
                  <th className="px-4 py-3 font-semibold theme-text">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {envVariables.map((variable) => (
                  <tr key={variable.name} className="border-b theme-border-subtle last:border-0">
                    <td className="px-4 py-3 font-mono text-xs theme-accent-text">{variable.name}</td>
                    <td className="px-4 py-3 theme-text-muted whitespace-nowrap">{variable.default}</td>
                    <td className="px-4 py-3 theme-text-muted">{variable.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold theme-text">Build and deploy commands</h2>
          <CodeSnippet
            title="package.json scripts"
            code={`npm run dev      # Vite dev server
npm run build    # Production build → dist/
npm run preview  # Serve dist/ locally`}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold theme-text">Key directories</h2>
          <ul className="space-y-2 text-sm theme-text-muted">
            <li>
              <code className="theme-text">src/pages/</code> — Home, About, Project routes
            </li>
            <li>
              <code className="theme-text">src/components/</code> — Shared UI (Header, carousels, images)
            </li>
            <li>
              <code className="theme-text">src/context/</code> — Theme and hero visual providers
            </li>
            <li>
              <code className="theme-text">src/config/</code> — Feature flags, hero modes, design tokens
            </li>
            <li>
              <code className="theme-text">src/workshop/</code> — Internal design system reference
            </li>
            <li>
              <code className="theme-text">dist/</code> — Production build output (deployed to Vercel)
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}

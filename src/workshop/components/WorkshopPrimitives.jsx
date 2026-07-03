export function CodeSnippet({ code, title }) {
  return (
    <figure className="rounded-xl border theme-border overflow-hidden">
      {title && (
        <figcaption className="px-4 py-2 text-xs font-medium theme-text-subtle theme-bg-subtle border-b theme-border">
          {title}
        </figcaption>
      )}
      <pre className="p-4 text-xs leading-relaxed overflow-x-auto theme-bg-subtle m-0">
        <code className="font-mono theme-text-muted">{code}</code>
      </pre>
    </figure>
  )
}

export function DemoBlock({ title, description, children, code, codeTitle }) {
  return (
    <section className="space-y-4">
      <header>
        <h3 className="text-lg font-semibold theme-text">{title}</h3>
        {description && <p className="text-sm theme-text-muted mt-1">{description}</p>}
      </header>
      <div className="rounded-xl border theme-border theme-surface p-6">{children}</div>
      {code && <CodeSnippet code={code} title={codeTitle} />}
    </section>
  )
}

export function PageIntro({ title, description, children }) {
  return (
    <header className="space-y-4 pb-8 border-b theme-border mb-10">
      <div>
        <h1 className="text-3xl font-bold theme-text tracking-tight">{title}</h1>
        {description && (
          <p className="text-lg theme-text-muted mt-3 max-w-3xl leading-relaxed">{description}</p>
        )}
      </div>
      {children}
    </header>
  )
}

export function Callout({ children }) {
  return (
    <aside className="rounded-xl border theme-border theme-accent-bg-subtle px-4 py-3 text-sm theme-text leading-relaxed">
      {children}
    </aside>
  )
}

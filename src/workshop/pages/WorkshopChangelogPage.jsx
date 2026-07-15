import { changelog } from '../../data/changelog'
import { Callout, PageIntro } from '../components/WorkshopPrimitives'

function formatDate(dateString) {
  const [year, month, day] = dateString.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function WorkshopChangelogPage() {
  return (
    <>
      <PageIntro
        title="Changelog"
        description="Progression of this portfolio site from initial launch through ongoing updates. Add a new entry in src/data/changelog.js when shipping meaningful changes."
      />

      <div className="space-y-10">
        <Callout>
          Entries are written for readability, not as raw git commits. For the full commit history,
          see the GitHub repository.
        </Callout>

        <ol className="space-y-8 list-none p-0 m-0">
          {changelog.map((entry) => (
            <li key={`${entry.date}-${entry.title}`} className="relative pl-8">
              <span
                aria-hidden="true"
                className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full theme-accent-bg"
              />
              <article className="theme-card rounded-xl p-5 space-y-3">
                <header>
                  <time
                    dateTime={entry.date}
                    className="text-sm font-medium theme-text-subtle tabular-nums"
                  >
                    {formatDate(entry.date)}
                  </time>
                  <h2 className="text-lg font-semibold theme-text mt-1">{entry.title}</h2>
                </header>
                <ul className="space-y-2 text-sm theme-text-muted list-disc pl-5 m-0">
                  {entry.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}

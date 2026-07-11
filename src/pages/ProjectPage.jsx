import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Calendar, User, Wrench } from 'lucide-react'
import { getProjectBySlug, projects } from '../data/projects'
import { DecorativeIcon } from '../components/a11y'
import ProjectImage from '../components/ProjectImage'
import ProjectDetailImage from '../components/ProjectDetailImage'
import ProjectDetailCarousel from '../components/ProjectDetailCarousel'
import ProjectCard from '../components/ProjectCard'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-bold theme-text mb-4">Project not found</h1>
        <Link to="/" className="theme-link text-sm">
          ← Back to home
        </Link>
      </section>
    )
  }

  const related = projects
    .filter((p) => p.id !== project.id)
    .slice(0, 2)

  return (
    <article>
      <header className="theme-bg-subtle border-b theme-border-subtle">
        <div className="max-w-6xl mx-auto px-6 pt-8 pb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm theme-text-muted theme-link mb-8"
          >
            <DecorativeIcon icon={ArrowLeft} size={15} />
            Back to projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <span className="text-xs px-2.5 py-0.5 rounded-full theme-accent-bg-subtle theme-accent-text font-medium">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>

              <h1 className="text-3xl sm:text-4xl font-bold theme-text tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="text-lg theme-text-muted">{project.subtitle}</p>

              <dl className="flex flex-wrap gap-6 pt-2 text-sm theme-text-muted">
                <div className="flex items-center gap-1.5">
                  <DecorativeIcon icon={User} size={15} className="theme-accent" />
                  <dt className="sr-only">Role</dt>
                  <dd className="m-0">{project.role}</dd>
                </div>
                <div className="flex items-center gap-1.5">
                  <DecorativeIcon icon={Calendar} size={15} className="theme-accent" />
                  <dt className="sr-only">Timeline</dt>
                  <dd className="m-0">{project.timeline}</dd>
                </div>
                <div className="flex items-center gap-1.5">
                  <DecorativeIcon icon={Wrench} size={15} className="theme-accent" />
                  <dt className="sr-only">Tools</dt>
                  <dd className="m-0">{project.tools.join(', ')}</dd>
                </div>
              </dl>
            </div>

            <ProjectImage
              project={project}
              matchImageAspectRatio
              loading="eager"
              className="rounded-xl border theme-border theme-shadow-lg overflow-hidden"
              iconSize={40}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-12">
            <section aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="text-xl font-semibold theme-text mb-4">
                Overview
              </h2>
              <p className="theme-text-muted leading-relaxed">{project.summary}</p>
            </section>

            <section aria-labelledby="challenge-heading" className="flex flex-col gap-6">
              <div>
                <h2 id="challenge-heading" className="text-xl font-semibold theme-text mb-4">
                  The challenge
                </h2>
                <p className="theme-text-muted leading-relaxed">{project.challenge}</p>
              </div>
              {project.processImage && (
                <figure className="m-0">
                  <ProjectDetailImage
                    src={project.processImage}
                    alt={project.processImageAlt ?? 'Process / research'}
                    width={project.processImageWidth ?? 1024}
                    height={project.processImageHeight ?? 576}
                    aspectRatio="16/9"
                    fixedAspectRatio
                    className="theme-shadow"
                  />
                  {project.processImageCaption && (
                    <figcaption className="mt-3 text-sm theme-text-muted text-center">
                      {project.processImageCaption}
                    </figcaption>
                  )}
                </figure>
              )}
            </section>

            <section aria-labelledby="approach-heading" className="flex flex-col gap-6">
              <div>
                <h2 id="approach-heading" className="text-xl font-semibold theme-text mb-4">
                  Approach
                </h2>
                <ol className="space-y-3 list-none p-0 m-0">
                  {project.approach.map((item, i) => (
                    <li
                      key={i}
                      className="theme-text-muted leading-relaxed flex items-start gap-3"
                    >
                      <span
                        aria-hidden="true"
                        className="flex items-center justify-center w-6 h-6 rounded-full theme-accent-bg-subtle theme-accent-text text-xs font-semibold shrink-0 mt-0.5"
                      >
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>

              {project.approachImage && (
                <figure className="m-0">
                  <ProjectDetailImage
                    src={project.approachImage}
                    alt={project.approachImageAlt ?? 'Wireframe / prototype'}
                    width={project.approachImageWidth ?? 1024}
                    height={project.approachImageHeight ?? 576}
                    aspectRatio="16/9"
                    fixedAspectRatio
                    className="theme-shadow"
                  />
                  {project.approachImageCaption && (
                    <figcaption className="mt-3 text-sm theme-text-muted text-center">
                      {project.approachImageCaption}
                    </figcaption>
                  )}
                </figure>
              )}
            </section>

            {project.insights?.length > 0 && (
              <section aria-labelledby="insights-heading" className="flex flex-col gap-8">
                <div>
                  <h2 id="insights-heading" className="text-xl font-semibold theme-text mb-4">
                    Insights
                  </h2>
                  {project.insightsIntro && (
                    <p className="theme-text-muted leading-relaxed">{project.insightsIntro}</p>
                  )}
                </div>

                <div className="space-y-6">
                  {project.insights.map((insight, i) => (
                    <article key={i} className="theme-card rounded-xl p-6 space-y-4">
                      <h3 className="font-semibold theme-text leading-snug">{insight.title}</h3>
                      <ul className="space-y-2.5 list-none p-0 m-0">
                        {insight.findings.map((finding, j) => (
                          <li
                            key={j}
                            className="theme-text-muted leading-relaxed flex items-start gap-2.5 text-sm"
                          >
                            <span aria-hidden="true" className="theme-accent shrink-0 mt-1.5">
                              •
                            </span>
                            {finding}
                          </li>
                        ))}
                      </ul>
                      {insight.quote && (
                        <blockquote className="border-l-2 theme-border theme-accent pl-4 m-0 mt-8">
                          <p className="text-sm theme-text-muted italic leading-relaxed m-0">
                            {insight.quote.text}
                          </p>
                          {insight.quote.attribution && (
                            <footer className="text-xs theme-text-subtle mt-2 not-italic">
                              — {insight.quote.attribution}
                            </footer>
                          )}
                        </blockquote>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            )}

            <section aria-labelledby="outcomes-heading">
              <h2 id="outcomes-heading" className="text-xl font-semibold theme-text mb-4">
                Outcomes
              </h2>
              <ul className="space-y-3 list-none p-0 m-0">
                {project.outcomes.map((outcome, i) => (
                  <li
                    key={i}
                    className="theme-card rounded-xl p-4 theme-text-muted leading-relaxed flex items-start gap-2"
                  >
                    <span aria-hidden="true" className="theme-accent font-bold shrink-0">
                      ✓
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-6">
            <section className="theme-card rounded-2xl p-6 sticky top-24" aria-labelledby="details-heading">
              <h2 id="details-heading" className="font-semibold theme-text mb-4">
                Project details
              </h2>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="theme-text-subtle mb-0.5">Role</dt>
                  <dd className="theme-text font-medium m-0">{project.role}</dd>
                </div>
                <div>
                  <dt className="theme-text-subtle mb-0.5">Timeline</dt>
                  <dd className="theme-text font-medium m-0">{project.timeline}</dd>
                </div>
                <div>
                  <dt className="theme-text-subtle mb-0.5">Tools</dt>
                  <dd className="flex flex-wrap gap-1.5 mt-1 m-0">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded-md theme-bg-subtle theme-text-muted text-xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </section>
          </aside>
        </div>

        {project.finalDesignImages?.length > 0 && (
          <ProjectDetailCarousel
            images={project.finalDesignImages}
            aspectRatio="16/9"
            ariaLabel="Final design"
            className="mt-12 theme-shadow-lg"
          />
        )}

        {related.length > 0 && (
          <section className="mt-20 pt-16 border-t theme-border" aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-2xl font-bold theme-text mb-8">
              More projects
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </section>
        )}
      </section>
    </article>
  )
}

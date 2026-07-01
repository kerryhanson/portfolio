import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Calendar, User, Wrench } from 'lucide-react'
import { getProjectBySlug, projects } from '../data/projects'
import ProjectImage from '../components/ProjectImage'
import PlaceholderImage from '../components/PlaceholderImage'
import ProjectCard from '../components/ProjectCard'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-bold theme-text mb-4">Project not found</h1>
        <Link to="/" className="theme-link text-sm">
          ← Back to home
        </Link>
      </div>
    )
  }

  const related = projects
    .filter((p) => p.id !== project.id)
    .slice(0, 2)

  return (
    <article>
      {/* Hero */}
      <div className="theme-bg-subtle border-b theme-border-subtle">
        <div className="max-w-6xl mx-auto px-6 pt-8 pb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm theme-text-muted theme-link mb-8"
          >
            <ArrowLeft size={15} />
            Back to projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-0.5 rounded-full theme-accent-bg-subtle theme-accent-text font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold theme-text tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="text-lg theme-text-muted">{project.subtitle}</p>

              <div className="flex flex-wrap gap-6 pt-2 text-sm theme-text-muted">
                <span className="flex items-center gap-1.5">
                  <User size={15} className="theme-accent" />
                  {project.role}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={15} className="theme-accent" />
                  {project.timeline}
                </span>
                <span className="flex items-center gap-1.5">
                  <Wrench size={15} className="theme-accent" />
                  {project.tools.join(', ')}
                </span>
              </div>
            </div>

            <ProjectImage
              project={project}
              className="rounded-xl border theme-border theme-shadow-lg overflow-hidden"
              iconSize={40}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-xl font-semibold theme-text mb-4">Overview</h2>
              <p className="theme-text-muted leading-relaxed">{project.summary}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold theme-text mb-4">The challenge</h2>
              <p className="theme-text-muted leading-relaxed">{project.challenge}</p>
            </section>

            <PlaceholderImage
              label="Process / research image"
              aspectRatio="16/9"
              className="theme-shadow"
            />

            <section>
              <h2 className="text-xl font-semibold theme-text mb-4">Approach</h2>
              <ul className="space-y-3">
                {project.approach.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm theme-text-muted leading-relaxed flex items-start gap-3"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full theme-accent-bg-subtle theme-accent-text text-xs font-semibold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <div className="grid sm:grid-cols-2 gap-4">
              <PlaceholderImage label="Wireframe / design" aspectRatio="4/3" />
              <PlaceholderImage label="Prototype / UI" aspectRatio="4/3" />
            </div>

            <section>
              <h2 className="text-xl font-semibold theme-text mb-4">Outcomes</h2>
              <ul className="space-y-3">
                {project.outcomes.map((outcome, i) => (
                  <li
                    key={i}
                    className="theme-card rounded-xl p-4 text-sm theme-text-muted leading-relaxed flex items-start gap-2"
                  >
                    <span className="theme-accent font-bold shrink-0">✓</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </section>

            <PlaceholderImage
              label="Final design / results image"
              aspectRatio="16/9"
              className="theme-shadow-lg"
            />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="theme-card rounded-2xl p-6 sticky top-24">
              <h3 className="font-semibold theme-text mb-4">Project details</h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="theme-text-subtle mb-0.5">Role</dt>
                  <dd className="theme-text font-medium">{project.role}</dd>
                </div>
                <div>
                  <dt className="theme-text-subtle mb-0.5">Timeline</dt>
                  <dd className="theme-text font-medium">{project.timeline}</dd>
                </div>
                <div>
                  <dt className="theme-text-subtle mb-0.5">Tools</dt>
                  <dd className="flex flex-wrap gap-1.5 mt-1">
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
            </div>
          </aside>
        </div>

        {/* Related projects */}
        {related.length > 0 && (
          <section className="mt-20 pt-16 border-t theme-border">
            <h2 className="text-2xl font-bold theme-text mb-8">More projects</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  )
}

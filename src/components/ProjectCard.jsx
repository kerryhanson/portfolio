import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { DecorativeIcon } from './a11y'
import ProjectImage from './ProjectImage'

export default function ProjectCard({ project, featured = false }) {
  return (
    <article className="h-full">
      <Link
        to={`/projects/${project.slug}`}
        className="group theme-card rounded-2xl overflow-hidden flex flex-col h-full"
      >
        <ProjectImage
          project={project}
          aspectRatio={featured ? '16/10' : '16/9'}
          className="rounded-none border-0 border-b theme-border"
          sizes="(min-width: 640px) 50vw, 100vw"
        />

        <section className="flex flex-col flex-1 p-6 gap-3">
          <header className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold theme-text group-hover:text-[var(--color-accent-text)] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm theme-text-muted mt-0.5">{project.subtitle}</p>
            </div>
            <DecorativeIcon
              icon={ArrowUpRight}
              size={18}
              className="shrink-0 theme-text-subtle group-hover:text-[var(--color-accent)] transition-colors mt-1"
            />
          </header>

          <p className="text-sm theme-text-muted leading-relaxed line-clamp-2 flex-1">
            {project.summary}
          </p>

          <footer className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-0.5 rounded-full theme-accent-bg-subtle theme-accent-text font-medium"
              >
                {tag}
              </span>
            ))}
          </footer>
        </section>
      </Link>
    </article>
  )
}

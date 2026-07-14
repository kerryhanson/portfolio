import { ArrowRight, Award, Target } from 'lucide-react'
import { profile } from '../data/profile'
import { getFeaturedProjects } from '../data/projects'
import { DecorativeIcon } from '../components/a11y'
import ProjectCard from '../components/ProjectCard'
import { HERO_IMAGE, HERO_IMAGE_NARROW, showHeroBackgroundImage } from '../config/heroVisual'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function HomePage() {
  const featured = getFeaturedProjects()

  useDocumentMeta({ title: 'Kerry Hanson — UX Designer' })

  const heroSectionClass = showHeroBackgroundImage
    ? 'hero-section--visual relative max-w-6xl mx-auto px-6 pt-8 md:pt-10 pb-6 md:pb-8'
    : 'max-w-6xl mx-auto px-6 pt-8 pb-6 md:pt-12 md:pb-8'

  const heroSectionStyle = showHeroBackgroundImage
    ? {
        '--hero-bg-image': `url(${HERO_IMAGE.src})`,
        '--hero-bg-image-narrow': `url(${HERO_IMAGE_NARROW.src})`,
      }
    : undefined

  return (
    <>
      <section
        className={heroSectionClass}
        style={heroSectionStyle}
        aria-labelledby="hero-heading"
      >
        <header className="relative z-10 max-w-3xl space-y-5 md:space-y-6">
          <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full theme-badge text-sm font-medium">
            <DecorativeIcon icon={Target} size={14} />
            Senior UX Designer
          </p>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight theme-text leading-[1.1]"
          >
            Designing experiences that{' '}
            <span className="theme-accent">work for people</span>
          </h1>

          <p className="text-lg theme-text-muted leading-relaxed">
            {profile.tagline}
          </p>

          <div className="pt-2">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl theme-btn-primary text-sm font-medium"
            >
              Get in touch
              <DecorativeIcon icon={ArrowRight} size={16} />
            </a>
          </div>

          <p className="hidden sm:flex items-center gap-2 pt-2 theme-text-muted text-sm">
            <DecorativeIcon icon={Award} size={16} className="theme-accent shrink-0" />
            UX Certified (UXC) — Nielsen Norman Group, 2021
          </p>
        </header>
      </section>

      <section
        id="featured-projects"
        className="theme-bg-subtle border-y theme-border-subtle scroll-mt-20"
        aria-labelledby="featured-heading"
      >
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 id="featured-heading" className="text-3xl font-bold theme-text tracking-tight">
                Featured projects
              </h2>
              <p className="theme-text-muted mt-2 max-w-lg">
                Selected work spanning enterprise platform design, design systems,
                AI-enabled workflows, and user research.
              </p>
            </div>
          </header>

          <div className="grid sm:grid-cols-2 gap-6">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 text-center" aria-labelledby="connect-heading">
        <h2 id="connect-heading" className="text-2xl sm:text-3xl font-bold theme-text tracking-tight mb-4">
          Let's connect
        </h2>
        <p className="theme-text-muted max-w-lg mx-auto mb-8">
          Interested in working together or learning more about my experience?
          I'd love to hear from you.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl theme-btn-primary text-sm font-medium"
        >
          {profile.email}
          <DecorativeIcon icon={ArrowRight} size={16} />
        </a>
      </section>
    </>
  )
}

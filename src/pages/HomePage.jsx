import { ArrowRight, Award, Target } from 'lucide-react'
import { profile } from '../data/profile'
import { getFeaturedProjects } from '../data/projects'
import { DecorativeIcon } from '../components/a11y'
import ProjectCard from '../components/ProjectCard'
import HeroVisual from '../components/HeroVisual'
import { HERO_IMAGE } from '../config/heroVisual'
import { useHeroVisual } from '../context/HeroVisualContext'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function HomePage() {
  const featured = getFeaturedProjects()
  const { heroVisualMode } = useHeroVisual()

  useDocumentMeta({ title: 'Kerry Hanson — UX Designer' })

  const showHeroBackgroundImage = heroVisualMode === 'image'
  const showHeroProfileColumn = heroVisualMode === 'profile'
  const showCompactHeroVisual = showHeroBackgroundImage || showHeroProfileColumn

  const heroSectionClass = showHeroBackgroundImage
    ? 'hero-section--visual relative max-w-6xl mx-auto px-6 pt-8 md:pt-10 pb-6 md:pb-8'
    : showHeroProfileColumn
      ? 'max-w-6xl mx-auto px-6 pt-8 pb-6 md:pt-12 md:pb-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center'
      : 'max-w-6xl mx-auto px-6 pt-8 pb-6 md:pt-12 md:pb-8'

  const heroSectionStyle = showHeroBackgroundImage
    ? { '--hero-bg-image': `url(${HERO_IMAGE.src})` }
    : undefined

  const headerClassName = [
    showCompactHeroVisual ? 'hero-header--with-visual' : 'space-y-5 md:space-y-6',
    showHeroBackgroundImage ? 'relative z-10 lg:max-w-3xl' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <section
        className={heroSectionClass}
        style={heroSectionStyle}
        aria-labelledby="hero-heading"
      >
        <header className={headerClassName}>
          <p className="hero-header__badge inline-flex w-fit self-start items-center gap-2 px-3 py-1.5 rounded-full theme-badge text-sm font-medium">
            <DecorativeIcon icon={Target} size={14} />
            Senior UX Designer
          </p>

          {showCompactHeroVisual && (
            <div className="hero-header__media lg:hidden">
              <HeroVisual compact />
            </div>
          )}

          <h1
            id="hero-heading"
            className="hero-header__heading font-bold tracking-tight theme-text leading-[1.1] text-4xl sm:text-5xl lg:text-6xl"
          >
            Designing experiences that{' '}
            <span className="theme-accent">work for people</span>
          </h1>

          <p className="hero-header__tagline text-lg theme-text-muted leading-relaxed">
            {profile.tagline}
          </p>

          <div className="hero-header__cta pt-2">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl theme-btn-primary text-sm font-medium"
            >
              Get in touch
              <DecorativeIcon icon={ArrowRight} size={16} />
            </a>
          </div>

          <p className="hero-header__cert hidden sm:flex items-center gap-2 pt-2 theme-text-muted text-sm">
            <DecorativeIcon icon={Award} size={16} className="theme-accent shrink-0" />
            UX Certified (UXC) — Nielsen Norman Group, 2021
          </p>
        </header>

        {showHeroProfileColumn && (
          <div className="relative z-10 hidden lg:block">
            <HeroVisual />
          </div>
        )}
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

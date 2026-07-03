import { Link } from 'react-router-dom'
import { ArrowRight, Award, Target } from 'lucide-react'
import { profile } from '../data/profile'
import { getFeaturedProjects } from '../data/projects'
import { DecorativeIcon } from '../components/a11y'
import ProjectCard from '../components/ProjectCard'
import HeroVisual from '../components/HeroVisual'

export default function HomePage() {
  const featured = getFeaturedProjects()

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20" aria-labelledby="hero-heading">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <header className="space-y-6">
            <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full theme-accent-bg-subtle text-sm font-medium theme-accent-text">
              <DecorativeIcon icon={Target} size={14} />
              Senior UX Designer
            </p>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight theme-text leading-[1.1]"
            >
              Designing enterprise experiences that{' '}
              <span className="theme-accent">work for people</span>
            </h1>

            <p className="text-lg theme-text-muted leading-relaxed max-w-lg">
              {profile.tagline}. 9+ years leading UX strategy, research, and product design
              for complex platforms in higher education and enterprise.
            </p>

            <nav className="flex flex-wrap gap-3 pt-2" aria-label="Primary actions">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl theme-btn-primary text-sm font-medium"
              >
                About me
                <DecorativeIcon icon={ArrowRight} size={16} />
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl theme-btn-ghost text-sm font-medium"
              >
                Get in touch
              </a>
            </nav>

            <p className="flex items-center gap-2 pt-2 theme-text-muted text-sm">
              <DecorativeIcon icon={Award} size={16} className="theme-accent shrink-0" />
              UX Certified (UXC) — Nielsen Norman Group, 2021
            </p>
          </header>

          <HeroVisual />
        </div>
      </section>

      <section
        className="theme-bg-subtle border-y theme-border-subtle"
        aria-labelledby="featured-heading"
      >
        <div className="max-w-6xl mx-auto px-6 py-20">
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
            {featured.map((project, i) => (
              <div key={project.id} className={i === 0 ? 'sm:col-span-2' : ''}>
                <ProjectCard project={project} featured={i === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 text-center" aria-labelledby="connect-heading">
        <h2 id="connect-heading" className="text-2xl sm:text-3xl font-bold theme-text tracking-tight mb-4">
          Let's connect
        </h2>
        <p className="theme-text-muted max-w-md mx-auto mb-8">
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

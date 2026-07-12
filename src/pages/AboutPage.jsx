import {
  Award,
  Briefcase,
  GraduationCap,
  Link2,
  Mail,
  Phone,
  Wrench,
} from 'lucide-react'
import { profile } from '../data/profile'
import { DecorativeIcon } from '../components/a11y'
import ResponsiveImage from '../components/ResponsiveImage'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function AboutPage() {
  useDocumentMeta({ title: `About — Kerry Hanson` })

  return (
    <article className="max-w-6xl mx-auto px-6 py-16">
      <section className="grid lg:grid-cols-3 gap-12 mb-20" aria-labelledby="about-heading">
        <figure className="lg:col-span-1 m-0">
          <ResponsiveImage
            src="/images/kerry-hanson-profile.png"
            alt={`${profile.name} profile photo`}
            width={800}
            height={800}
            sizes="(min-width: 1024px) 33vw, 100vw"
            loading="eager"
            fetchPriority="high"
            className="w-full max-w-xs mx-auto lg:max-w-none aspect-square object-cover rounded-2xl border theme-border theme-shadow-lg"
          />
        </figure>

        <header className="lg:col-span-2 space-y-6">
          <div>
            <h1 id="about-heading" className="text-4xl font-bold theme-text tracking-tight">
              About me
            </h1>
            <p className="text-xl theme-text-muted mt-2">{profile.title}</p>
          </div>

          {profile.summary.split('\n\n').map((paragraph, i) => (
            <p key={i} className="theme-text-muted leading-relaxed">
              {paragraph}
            </p>
          ))}

          <nav className="flex flex-wrap gap-4 pt-2" aria-label="Contact links">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-sm theme-link"
            >
              <DecorativeIcon icon={Mail} size={15} />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\./g, '')}`}
              className="inline-flex items-center gap-2 text-sm theme-link"
            >
              <DecorativeIcon icon={Phone} size={15} />
              {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm theme-link"
            >
              <DecorativeIcon icon={Link2} size={15} />
              LinkedIn
            </a>
          </nav>
        </header>
      </section>

      <section className="mb-20" aria-labelledby="strengths-heading">
        <h2 id="strengths-heading" className="text-2xl font-bold theme-text mb-8">
          Strengths
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {profile.strengths.map((group) => (
            <article key={group.category} className="theme-card rounded-2xl p-6">
              <h3 className="font-semibold theme-text mb-4">{group.category}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm theme-text-muted flex gap-2 leading-relaxed">
                    <span
                      aria-hidden="true"
                      className="w-1.5 shrink-0 flex items-center self-start"
                      style={{ height: '1.625em' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full theme-accent-bg" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-20" aria-labelledby="tools-heading">
        <header className="flex items-center gap-2 mb-6">
          <DecorativeIcon icon={Wrench} size={20} className="theme-accent" />
          <h2 id="tools-heading" className="text-2xl font-bold theme-text">
            Tools
          </h2>
        </header>
        <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
          {profile.tools.map((tool) => (
            <li key={tool}>
              <span className="px-3.5 py-1.5 rounded-full text-sm font-medium theme-surface border theme-border theme-text-muted">
                {tool}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-20" aria-labelledby="experience-heading">
        <header className="flex items-center gap-2 mb-8">
          <DecorativeIcon icon={Briefcase} size={20} className="theme-accent" />
          <h2 id="experience-heading" className="text-2xl font-bold theme-text">
            Experience
          </h2>
        </header>

        <div className="space-y-10">
          {profile.experience.map((job) => (
            <article key={job.company} className="theme-card rounded-2xl p-6 sm:p-8">
              <header className="mb-6">
                <h3 className="text-lg font-semibold theme-text">{job.company}</h3>
                <p className="text-sm theme-text-muted">{job.location}</p>
              </header>

              {job.roles.map((role) => (
                <section key={role.title} className="space-y-3 mb-6 last:mb-0">
                  <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="font-medium theme-text">{role.title}</h4>
                    <time className="text-sm theme-text-subtle">{role.period}</time>
                  </header>
                  <ul className="space-y-2">
                    {role.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-sm theme-text-muted leading-relaxed flex gap-2"
                      >
                        <span
                          aria-hidden="true"
                          className="theme-accent shrink-0 flex items-center self-start leading-none"
                          style={{ height: '1.625em' }}
                        >
                          ‣
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </article>
          ))}
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <section aria-labelledby="education-heading">
          <header className="flex items-center gap-2 mb-6">
            <DecorativeIcon icon={GraduationCap} size={20} className="theme-accent" />
            <h2 id="education-heading" className="text-2xl font-bold theme-text">
              Education
            </h2>
          </header>
          {profile.education.map((edu) => (
            <article key={edu.school} className="theme-card rounded-2xl p-6">
              <h3 className="font-semibold theme-text">{edu.school}</h3>
              <p className="text-sm theme-text-muted mt-1">{edu.degree}</p>
              <p className="text-sm theme-text-subtle mt-1">
                {edu.location} · {edu.period}
              </p>
            </article>
          ))}
        </section>

        <section aria-labelledby="certifications-heading">
          <header className="flex items-center gap-2 mb-6">
            <DecorativeIcon icon={Award} size={20} className="theme-accent" />
            <h2 id="certifications-heading" className="text-2xl font-bold theme-text">
              Certifications
            </h2>
          </header>
          {profile.certifications.map((cert) => (
            <article key={cert.name} className="theme-card rounded-2xl p-6">
              <h3 className="font-semibold theme-text">{cert.name}</h3>
              <p className="text-sm theme-text-muted mt-1">
                {cert.issuer} · {cert.year}
              </p>
              <p className="text-sm theme-text-subtle mt-1">
                Specialization: {cert.specialization}
              </p>
            </article>
          ))}
        </section>
      </div>
    </article>
  )
}

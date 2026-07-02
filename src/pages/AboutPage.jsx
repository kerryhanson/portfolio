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

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="grid lg:grid-cols-3 gap-12 mb-20">
        <div className="lg:col-span-1">
          <img
            src="/images/kerry-hanson-profile.png"
            alt={`${profile.name} profile photo`}
            className="w-full max-w-xs mx-auto lg:max-w-none aspect-square object-cover rounded-2xl border theme-border theme-shadow-lg"
          />
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div>
            <h1 className="text-4xl font-bold theme-text tracking-tight">
              About me
            </h1>
            <p className="text-xl theme-text-muted mt-2">{profile.title}</p>
          </div>

          <div className="prose-spacing space-y-4">
            {profile.summary.split('\n\n').map((paragraph, i) => (
              <p key={i} className="theme-text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-sm theme-link"
            >
              <Mail size={15} />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\./g, '')}`}
              className="inline-flex items-center gap-2 text-sm theme-link"
            >
              <Phone size={15} />
              {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm theme-link"
            >
              <Link2 size={15} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Strengths */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold theme-text mb-8">Strengths</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {profile.strengths.map((group) => (
            <div key={group.category} className="theme-card rounded-2xl p-6">
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
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="mb-20">
        <div className="flex items-center gap-2 mb-6">
          <Wrench size={20} className="theme-accent" />
          <h2 className="text-2xl font-bold theme-text">Tools</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {profile.tools.map((tool) => (
            <span
              key={tool}
              className="px-3.5 py-1.5 rounded-full text-sm font-medium theme-surface border theme-border theme-text-muted"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-20">
        <div className="flex items-center gap-2 mb-8">
          <Briefcase size={20} className="theme-accent" />
          <h2 className="text-2xl font-bold theme-text">Experience</h2>
        </div>

        <div className="space-y-10">
          {profile.experience.map((job) => (
            <div key={job.company} className="theme-card rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-lg font-semibold theme-text">{job.company}</h3>
                  <p className="text-sm theme-text-muted">{job.location}</p>
                </div>
              </div>

              <div className="space-y-6">
                {job.roles.map((role) => (
                  <div key={role.title}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                      <h4 className="font-medium theme-text">{role.title}</h4>
                      <span className="text-sm theme-text-subtle">{role.period}</span>
                    </div>
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
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={20} className="theme-accent" />
            <h2 className="text-2xl font-bold theme-text">Education</h2>
          </div>
          {profile.education.map((edu) => (
            <div key={edu.school} className="theme-card rounded-2xl p-6">
              <h3 className="font-semibold theme-text">{edu.school}</h3>
              <p className="text-sm theme-text-muted mt-1">{edu.degree}</p>
              <p className="text-sm theme-text-subtle mt-1">
                {edu.location} · {edu.period}
              </p>
            </div>
          ))}
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <Award size={20} className="theme-accent" />
            <h2 className="text-2xl font-bold theme-text">Certifications</h2>
          </div>
          {profile.certifications.map((cert) => (
            <div key={cert.name} className="theme-card rounded-2xl p-6">
              <h3 className="font-semibold theme-text">{cert.name}</h3>
              <p className="text-sm theme-text-muted mt-1">
                {cert.issuer} · {cert.year}
              </p>
              <p className="text-sm theme-text-subtle mt-1">
                Specialization: {cert.specialization}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

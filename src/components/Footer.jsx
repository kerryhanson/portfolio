import { Mail, Linkedin } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t theme-border theme-bg-subtle mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm theme-text-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-1.5 text-sm theme-text-muted theme-link"
          >
            <Mail size={15} />
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm theme-text-muted theme-link"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

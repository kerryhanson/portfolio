import { lucideIconSvg, resumeContactIcons } from './resumeIcons.js'

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function renderFeaturedJob(job) {
  return `
    <section class="job job--featured">
      <h3 class="job-heading">${escapeHtml(job.displayCompany)} <span class="sep">|</span> ${escapeHtml(job.location)}</h3>
      ${job.roles
        .map(
          (role) => `
        <div class="role">
          <div class="role-header">
            <h4>${escapeHtml(role.title)}</h4>
            <time>${escapeHtml(role.period)}</time>
          </div>
          <ul>
            ${role.highlights.map((highlight) => `<li>${escapeHtml(highlight)}</li>`).join('')}
          </ul>
        </div>`,
        )
        .join('')}
    </section>`
}

function renderCompactJob(job) {
  return job.roles
    .map(
      (role) => `
    <section class="job job--compact">
      <div class="compact-heading">
        <span class="company">${escapeHtml(job.company)} <span class="sep">|</span> ${escapeHtml(job.location)}</span>
      </div>
      <div class="role-header">
        <span class="role-title">${escapeHtml(role.title)}</span>
        <time>${escapeHtml(role.period)}</time>
      </div>
      <p class="compact-summary">${escapeHtml(role.compactSummary)}</p>
    </section>`,
    )
    .join('')
}

function renderStrengthsBlock(resume) {
  const strengthLines = resume.strengths
    .map(
      (group) =>
        `<p class="strength-line"><span class="label">${escapeHtml(group.category)}:</span> ${escapeHtml(group.items.join(' • '))}</p>`,
    )
    .join('')

  return `
    <section class="block">
      <h2>Strengths</h2>
      <div class="strengths-content">
        ${strengthLines}
        <p class="strength-line tools-line"><span class="label">Tools:</span> ${escapeHtml(resume.tools.join(' • '))}</p>
      </div>
    </section>`
}

function renderEducationBlock(resume) {
  return `
    <section class="block footer-block">
      <h2>Education</h2>
      ${resume.education
        .map(
          (edu) => `
        <div class="footer-item">
          <p class="item-title">${escapeHtml(edu.school)} <span class="sep">|</span> ${escapeHtml(edu.location)}</p>
          <p class="item-meta">${escapeHtml(edu.degree)} <span class="sep">·</span> ${escapeHtml(edu.period)}</p>
        </div>`,
        )
        .join('')}
    </section>`
}

function renderCertificationsBlock(resume) {
  return `
    <section class="block footer-block">
      <h2>Certifications</h2>
      ${resume.certifications
        .map(
          (cert) => `
        <div class="footer-item">
          <p class="item-title">${escapeHtml(cert.name)}</p>
          <p class="item-meta">${escapeHtml(cert.issuer)} <span class="sep">·</span> ${escapeHtml(cert.year)} <span class="sep">·</span> Specialization: ${escapeHtml(cert.specialization)}</p>
        </div>`,
        )
        .join('')}
    </section>`
}

function renderContactItem(iconNode, content) {
  return `<span class="contact-item">${lucideIconSvg(iconNode)}<span class="contact-text">${content}</span></span>`
}

function renderContactLine(contact) {
  const items = [
    renderContactItem(resumeContactIcons.phone, escapeHtml(contact.phone)),
    renderContactItem(
      resumeContactIcons.mail,
      `<a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a>`,
    ),
    renderContactItem(
      resumeContactIcons.link,
      `<a href="${escapeHtml(contact.linkedinUrl)}">LinkedIn</a>`,
    ),
    renderContactItem(
      resumeContactIcons.globe,
      `<a href="${escapeHtml(contact.websiteUrl)}">Portfolio</a>`,
    ),
  ]

  return items.join('<span class="sep">|</span>')
}

export function buildResumeHtml(resume) {
  const featuredJobs = resume.experience.filter((job) => job.featured)
  const compactJobs = resume.experience.filter((job) => !job.featured)

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>${escapeHtml(resume.name)} — Resume</title>
    <style>
      @page {
        size: letter;
        margin: 0.55in;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        color: #0f172a;
        font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
        font-size: 9pt;
        line-height: 1.36;
      }

      h1,
      h2,
      h3,
      h4,
      p,
      ul {
        margin: 0;
      }

      .header {
        margin-bottom: 0.14in;
      }

      .header h1 {
        font-size: 17pt;
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.15;
      }

      .header .title {
        margin-top: 0.06in;
        font-size: 10pt;
        font-weight: 600;
        color: #334155;
      }

      .header .contact {
        margin-top: 0.08in;
        font-size: 9pt;
        color: #64748b;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        column-gap: 0.08in;
        row-gap: 0.04in;
      }

      .header .contact a {
        color: #64748b;
        text-decoration: none;
      }

      .contact-item {
        display: inline-flex;
        align-items: center;
        gap: 0.035in;
      }

      .contact-icon {
        color: #64748b;
        flex-shrink: 0;
        display: block;
      }

      section.block {
        break-inside: auto;
      }

      h2 {
        font-size: 9pt;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: #0f172a;
        margin-bottom: 0.1in;
        padding-bottom: 0.04in;
        border-bottom: 1px solid #cbd5e1;
        break-after: avoid;
      }

      .intro-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.2in;
        align-items: start;
        margin-bottom: 0.16in;
      }

      .summary p {
        color: #475569;
      }

      .summary p + p {
        margin-top: 0.08in;
      }

      .strength-line {
        color: #475569;
        font-size: 9pt;
        line-height: 1.42;
      }

      .strength-line + .strength-line {
        margin-top: 0.08in;
      }

      .strength-line .label {
        font-weight: 700;
        color: #0f172a;
      }

      .tools-line {
        margin-top: 0.1in;
      }

      .experience-block {
        margin-bottom: 0.14in;
      }

      .footer-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.2in;
        align-items: start;
      }

      .footer-item + .footer-item {
        margin-top: 0.08in;
      }

      .item-title {
        font-size: 9.5pt;
        font-weight: 700;
        color: #0f172a;
        line-height: 1.35;
      }

      .item-meta {
        margin-top: 0.03in;
        font-size: 9pt;
        color: #64748b;
        line-height: 1.35;
      }

      .sep {
        color: #94a3b8;
        font-weight: 400;
      }

      .experience-block h2 {
        margin-bottom: 0.12in;
      }

      .job--featured + .job--featured {
        margin-top: 0.1in;
      }

      .job--featured + .job--compact {
        margin-top: 0.14in;
      }

      .job--compact + .job--compact {
        margin-top: 0.12in;
      }

      .job--featured .job-heading {
        font-size: 10.5pt;
        font-weight: 700;
        line-height: 1.3;
        break-after: avoid;
      }

      .job--featured .role {
        margin-top: 0.05in;
        break-inside: avoid;
      }

      .job--featured .role + .role {
        margin-top: 0.1in;
      }

      .role-header {
        display: flex;
        justify-content: space-between;
        gap: 0.16in;
        align-items: baseline;
        break-after: avoid;
      }

      .job--featured .role-header h4 {
        font-size: 10pt;
        font-weight: 600;
        color: #0f172a;
      }

      .role-header time {
        font-size: 9pt;
        color: #64748b;
        white-space: nowrap;
      }

      .job--featured ul {
        margin-top: 0.05in;
        padding-left: 0.16in;
      }

      .job--featured li {
        color: #475569;
        font-size: 9pt;
        line-height: 1.36;
      }

      .job--featured li + li {
        margin-top: 0.035in;
      }

      .job--compact {
        break-inside: avoid;
        padding-bottom: 0.04in;
      }

      .compact-heading .company {
        font-size: 9.5pt;
        font-weight: 700;
        color: #0f172a;
        line-height: 1.3;
      }

      .job--compact .role-header {
        margin-top: 0.02in;
      }

      .job--compact .role-title {
        font-size: 9.5pt;
        font-weight: 600;
        color: #0f172a;
      }

      .compact-summary {
        margin-top: 0.05in;
        font-size: 8.5pt;
        color: #475569;
        line-height: 1.34;
      }
    </style>
  </head>
  <body>
    <header class="header">
      <h1>${escapeHtml(resume.name)}</h1>
      <p class="title">${escapeHtml(resume.title)}</p>
      <p class="contact">${renderContactLine(resume.contact)}</p>
    </header>

    <div class="intro-grid">
      <section class="block summary">
        <h2>Summary</h2>
        ${resume.summaryParagraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
      </section>
      ${renderStrengthsBlock(resume)}
    </div>

    <section class="block experience-block">
      <h2>Experience</h2>
      ${featuredJobs.map(renderFeaturedJob).join('')}
      ${compactJobs.map(renderCompactJob).join('')}
    </section>

    <div class="footer-grid">
      ${renderEducationBlock(resume)}
      ${renderCertificationsBlock(resume)}
    </div>
  </body>
</html>`
}

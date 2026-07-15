/** @typedef {import('../data/profile.js').profile} Profile */

const FEATURED_COMPANY = 'Strategic Education, Inc.'

const COMPANY_DISPLAY = {
  [FEATURED_COMPANY]: 'Strategic Education, Inc. (Strayer University, Capella University)',
}

/** Condensed single-line summaries derived from profile.js highlights (non-featured roles only). */
const COMPACT_ROLE_SUMMARY = {
  'Robert Half, The Creative Group|UI/UX Designer':
    'Completed multiple contracts as part of Robert Half\'s Salaried Professional Services.',
  'Thrivent Financial|Email Developer (Contract)':
    'Developed responsive marketing email templates and landing pages in HubSpot for Thrivent\'s cuLearn program; built reusable email components and tested templates across email clients for rendering consistency and deliverability.',
  'Christopher and Banks|UI/Web Designer (Contract)':
    'Designed and implemented UI updates for the e-commerce site in Demandware (Salesforce Commerce Cloud); produced HTML and CSS for category pages, promotional modules, and responsive layout updates.',
  'Schwan\'s Food Company|UX Designer (Contract)':
    'Created wireframes and mockups to refine the e-commerce checkout flow and contributed UX recommendations on layout, step progression, and content hierarchy.',
  'Colder Products Company (CPC)|Design and Production Artist':
    'Designed and coded responsive HTML email templates and web/print assets for B2B marketing, product launches, and sales enablement in a regulated industrial environment.',
  'Drebenstedt Consulting|UI Designer':
    'Designed UI for Angular-based web applications—from wireframes through visual design, HTML/CSS, and Angular templates for workflows, forms, and dashboard-style interfaces.',
  'Accurate Image Marketing|UI Designer, Production, and Project Manager':
    'Designed and maintained iOS, Android, and web applications for 30+ clients over 15 years; led end-to-end delivery as designer, production artist, and project manager including wireframes, prototypes, and HTML/CSS implementation.',
}

export function getCompanyDisplayName(company) {
  return COMPANY_DISPLAY[company] ?? company
}

export function isFeaturedJob(company) {
  return company === FEATURED_COMPANY
}

function getCompactRoleSummary(company, role) {
  const key = `${company}|${role.title}`
  if (COMPACT_ROLE_SUMMARY[key]) {
    return COMPACT_ROLE_SUMMARY[key]
  }

  if (role.highlights.length === 1) {
    return role.highlights[0]
  }

  return role.highlights.join(' ')
}

export function buildResumeModel(profile) {
  const experience = profile.experience.map((job) => {
    const featured = isFeaturedJob(job.company)

    return {
      ...job,
      displayCompany: getCompanyDisplayName(job.company),
      featured,
      roles: job.roles.map((role) => ({
        ...role,
        compactSummary: featured ? null : getCompactRoleSummary(job.company, role),
      })),
    }
  })

  return {
    name: profile.name,
    title: profile.title,
    contact: {
      phone: profile.phone,
      email: profile.email,
      linkedinUrl: profile.linkedin,
      websiteUrl: profile.website,
    },
    summaryParagraphs: profile.summary.split('\n\n').filter(Boolean),
    strengths: profile.strengths,
    tools: profile.tools,
    experience,
    education: profile.education,
    certifications: profile.certifications,
  }
}

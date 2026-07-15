/**
 * Site changelog — add an entry when shipping meaningful updates.
 * Newest first.
 */
export const changelog = [
  {
    date: '2026-07-15',
    title: 'Profile hero, Config hero switcher, Workshop docs',
    items: [
      'Added profile-photo hero as the default home layout (traditional two-column).',
      'Config menu now switches between profile, decorative, and text-only hero modes.',
      'Config menu enabled by default; choice persists in localStorage.',
      'Workshop: Tech Stack and Changelog pages documenting build, deploy, and site history.',
    ],
  },
  {
    date: '2026-07-14',
    title: 'Decorative hero, carousel captions, nav fix',
    items: [
      'Responsive decorative hero background with wide and narrow PNG assets.',
      'Per-slide captions on project Outcomes carousels.',
      'Work nav active state follows scroll position; hash clears when leaving Featured projects.',
      'Home hero layout refinements and featured project order updates.',
    ],
  },
  {
    date: '2026-07-13',
    title: 'Content, imagery, and case study polish',
    items: [
      'Converted project and hero images to compressed JPG where appropriate.',
      'Added outcome metric cards and refined case study copy across projects.',
      'Expanded About page experience section with updated platform scale and contract roles.',
      'Curriculum Authoring Modules promoted in featured project order.',
    ],
  },
  {
    date: '2026-07-12',
    title: 'Access gate, accessibility, and hero updates',
    items: [
      'Client-side site access gate with env-configurable password.',
      'Accessibility improvements across carousels, contrast, and touch targets.',
      'Mobile hero UX refinements and project content updates.',
      'Restored hero design slide asset.',
    ],
  },
  {
    date: '2026-07-11',
    title: 'Case study depth',
    items: [
      'Insights sections with research findings and coach quotes on select projects.',
      'Process, approach, and final-design imagery across case studies.',
      'Copy updates for challenge, approach, and outcomes narratives.',
    ],
  },
  {
    date: '2026-07-08',
    title: 'Project detail media',
    items: [
      'ProjectDetailCarousel and ProjectDetailImage components.',
      'Curriculum catalog approach image and three final-design carousel slides.',
      'Approach image captions on project pages.',
    ],
  },
  {
    date: '2026-07-07',
    title: 'Navigation and project cards',
    items: [
      'Work nav link with hash scroll to Featured projects.',
      'Real project card images with responsive sizing.',
      'Mobile navigation improvements.',
    ],
  },
  {
    date: '2026-07-03',
    title: 'Workshop design guide',
    items: [
      'Workshop area with tokens, colors, typography, components, and patterns.',
      'Config menu with theme picker and Workshop link.',
      'Excluded `/workshop` from search indexing.',
    ],
  },
  {
    date: '2026-07-02',
    title: 'Hero carousel and accessibility',
    items: [
      'Hero flow diagram with Research / Design / Measure slides.',
      'Carousel navigation, live regions, and reduced-motion support.',
      'Lucide icon migration and mobile nav polish.',
    ],
  },
  {
    date: '2026-07-01',
    title: 'Initial launch',
    items: [
      'Portfolio site scaffold: React, Vite, Tailwind, React Router.',
      'Home, About, and project detail pages with theme system.',
      'Vercel deployment configuration for SPA routing.',
    ],
  },
]

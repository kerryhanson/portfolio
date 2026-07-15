/**
 * Tech stack reference for the Workshop. Update when dependencies,
 * deployment, or architecture change.
 */
export const techStack = {
  deployment: {
    title: 'Deployment',
    items: [
      {
        name: 'Vercel',
        role: 'Hosting and continuous deployment from GitHub',
        notes: 'Production builds run `npm run build`; output served from `dist/`.',
      },
      {
        name: 'vercel.json',
        role: 'SPA routing',
        notes: 'Rewrites all paths to `/index.html` for client-side React Router.',
      },
      {
        name: 'GitHub',
        role: 'Source control',
        notes: 'Repository: kerryhanson/portfolio',
      },
    ],
  },
  frontend: {
    title: 'Frontend',
    items: [
      { name: 'React 19', role: 'UI framework', notes: 'Functional components, hooks, context providers.' },
      { name: 'React Router 7', role: 'Client-side routing', notes: 'Layout routes, hash navigation, scroll restoration.' },
      { name: 'Vite 7', role: 'Dev server and production bundler', notes: 'Fast HMR; ES modules; asset imports from `src/assets/`.' },
      { name: 'Tailwind CSS v4', role: 'Layout and utility styling', notes: 'Via `@tailwindcss/vite` plugin.' },
      { name: 'Lucide React', role: 'Icon system', notes: 'Decorative icons paired with screen-reader helpers.' },
      { name: 'JavaScript (ES modules)', role: 'Language', notes: 'No TypeScript; JSX throughout `src/`.' },
    ],
  },
  styling: {
    title: 'Styling & theming',
    items: [
      { name: 'CSS custom properties', role: 'Semantic design tokens', notes: 'Defined per theme in `src/index.css` under `[data-theme]`.' },
      { name: 'ThemeContext', role: 'Runtime theme switching', notes: 'Four themes; persisted in `localStorage`.' },
      { name: 'HeroVisualContext', role: 'Home hero mode switching', notes: 'Profile, decorative, or text-only hero; Config menu + env default.' },
    ],
  },
  content: {
    title: 'Content & data',
    items: [
      { name: 'src/data/profile.js', role: 'About / resume content', notes: 'Bio, experience, skills, contact.' },
      { name: 'src/data/projects.js', role: 'Case study content', notes: 'Projects, images, insights, outcome stats, carousel captions.' },
      { name: 'public/images/', role: 'Static media', notes: 'Project screenshots, hero slides, profile photo.' },
      { name: 'src/assets/', role: 'Bundled media', notes: 'Vite-imported hero PNGs with hashed build output.' },
    ],
  },
  features: {
    title: 'Site features',
    items: [
      { name: 'SiteAccessGate', role: 'Client-side access gate', notes: 'Soft password barrier; env-configurable, not real security.' },
      { name: 'Config menu', role: 'Theme + hero toggles', notes: 'Hidden from search; Workshop link included.' },
      { name: 'Workshop', role: 'Internal design system docs', notes: '`noindex` via robots.txt and page meta.' },
      { name: 'useDocumentMeta', role: 'Per-route title and robots', notes: 'Dynamic `<title>` and meta tags.' },
      { name: 'ResponsiveImage', role: 'Optimized images', notes: 'Width/height, srcSet, sizes, lazy loading.' },
    ],
  },
  tooling: {
    title: 'Local development',
    items: [
      { name: 'npm run dev', role: 'Development server', notes: 'Vite dev server (default port 5173).' },
      { name: 'npm run build', role: 'Production build', notes: 'Outputs static files to `dist/`.' },
      { name: 'npm run preview', role: 'Local production preview', notes: 'Serves the built `dist/` folder.' },
      { name: '.env.local', role: 'Environment overrides', notes: 'Vite `VITE_*` variables; see `.env.example`.' },
    ],
  },
  notUsed: {
    title: 'Not in this stack',
    items: [
      'Backend server or API',
      'Database or CMS',
      'Server-side rendering (SSR)',
      'Test runner or E2E framework',
      'CSS-in-JS library',
      'Component library (Material, Radix, etc.)',
    ],
  },
}

export const envVariables = [
  {
    name: 'VITE_SHOW_CONFIG_MENU',
    default: 'shown (unless set to false)',
    purpose: 'Show or hide the Config menu in global navigation.',
  },
  {
    name: 'VITE_HERO_VISUAL_MODE',
    default: 'profile',
    purpose: 'Default home hero: profile | image | none.',
  },
  {
    name: 'VITE_SITE_ACCESS',
    default: 'enabled',
    purpose: 'Set to false to disable the client-side access gate.',
  },
  {
    name: 'VITE_SITE_PASSWORD',
    default: 'Summer2026',
    purpose: 'Password for the site access gate.',
  },
]

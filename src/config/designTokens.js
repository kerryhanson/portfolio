export const colorTokens = [
  { name: 'Background', var: '--color-bg', utility: 'theme-bg', role: 'Page background' },
  { name: 'Background subtle', var: '--color-bg-subtle', utility: 'theme-bg-subtle', role: 'Section bands, hover fills' },
  { name: 'Surface', var: '--color-surface', utility: 'theme-surface', role: 'Cards, panels, inputs' },
  { name: 'Surface raised', var: '--color-surface-raised', utility: 'theme-surface-raised', role: 'Elevated surfaces' },
  { name: 'Text', var: '--color-text', utility: 'theme-text', role: 'Primary body copy' },
  { name: 'Text muted', var: '--color-text-muted', utility: 'theme-text-muted', role: 'Secondary copy' },
  { name: 'Text subtle', var: '--color-text-subtle', utility: 'theme-text-subtle', role: 'Hints, placeholders' },
  { name: 'Accent', var: '--color-accent', utility: 'theme-accent / theme-accent-bg', role: 'Links, CTAs, emphasis' },
  { name: 'Accent hover', var: '--color-accent-hover', utility: 'theme-link:hover', role: 'Interactive hover states' },
  { name: 'Accent subtle', var: '--color-accent-subtle', utility: 'theme-accent-bg-subtle', role: 'Badges, active nav' },
  { name: 'Accent text', var: '--color-accent-text', utility: 'theme-accent-text', role: 'Text on accent backgrounds' },
  { name: 'Border', var: '--color-border', utility: 'theme-border', role: 'Dividers, outlines' },
  { name: 'Border subtle', var: '--color-border-subtle', utility: 'theme-border-subtle', role: 'Low-contrast separators' },
  { name: 'Shadow', var: '--color-shadow', utility: 'theme-shadow', role: 'Card elevation' },
  { name: 'Shadow lg', var: '--color-shadow-lg', utility: 'theme-shadow-lg', role: 'Dropdowns, hover lift' },
]

export const spacingScale = [
  { token: '0.5', value: '0.125rem', px: '2px', usage: 'Tight icon gaps' },
  { token: '1', value: '0.25rem', px: '4px', usage: 'Tag padding, fine gaps' },
  { token: '1.5', value: '0.375rem', px: '6px', usage: 'Compact spacing' },
  { token: '2', value: '0.5rem', px: '8px', usage: 'Inline gaps, small padding' },
  { token: '3', value: '0.75rem', px: '12px', usage: 'Button padding, nav gaps' },
  { token: '4', value: '1rem', px: '16px', usage: 'Card padding (mobile)' },
  { token: '5', value: '1.25rem', px: '20px', usage: 'Section inner spacing' },
  { token: '6', value: '1.5rem', px: '24px', usage: 'Card padding, grid gaps' },
  { token: '8', value: '2rem', px: '32px', usage: 'Section padding' },
  { token: '12', value: '3rem', px: '48px', usage: 'Large section gaps' },
  { token: '16', value: '4rem', px: '64px', usage: 'Hero vertical rhythm' },
  { token: '20', value: '5rem', px: '80px', usage: 'Major section breaks' },
]

export const typographyScale = [
  { name: 'Display', class: 'text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]', sample: 'Display heading', usage: 'Hero headlines' },
  { name: 'Heading 1', class: 'text-3xl font-bold tracking-tight', sample: 'Page heading', usage: 'Section titles' },
  { name: 'Heading 2', class: 'text-2xl font-bold tracking-tight', sample: 'Subsection heading', usage: 'Case study sections' },
  { name: 'Heading 3', class: 'text-lg font-semibold', sample: 'Card title', usage: 'Cards, list items' },
  { name: 'Body large', class: 'text-lg leading-relaxed', sample: 'Introductory paragraph text for key messages.', usage: 'Hero subcopy' },
  { name: 'Body', class: 'text-base leading-relaxed', sample: 'Standard paragraph text used across pages and case studies.', usage: 'Default body' },
  { name: 'Body small', class: 'text-sm leading-relaxed', sample: 'Supporting detail and metadata.', usage: 'Summaries, captions' },
  { name: 'Label', class: 'text-xs font-medium tracking-wide uppercase', sample: 'Label text', usage: 'Badges, placeholders' },
  { name: 'Caption', class: 'text-xs theme-text-subtle', sample: 'Caption or helper text', usage: 'Hints, footnotes' },
]

export const portfolioIcons = [
  { name: 'Target', usage: 'Role badge' },
  { name: 'ArrowRight', usage: 'Primary CTA' },
  { name: 'ArrowUpRight', usage: 'External / card link' },
  { name: 'Award', usage: 'Certification' },
  { name: 'SquareUserRound', usage: 'Research step' },
  { name: 'LayoutDashboard', usage: 'Design step' },
  { name: 'Rocket', usage: 'Impact step' },
  { name: 'ImageIcon', usage: 'Placeholder media' },
  { name: 'Menu / X', usage: 'Mobile navigation' },
  { name: 'Settings', usage: 'Config menu' },
]

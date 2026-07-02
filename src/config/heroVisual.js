/**
 * Hero visual mode — change to 'placeholder' to revert to the plain image placeholder.
 */
export const HERO_VISUAL_MODE = 'flow-diagram'

/**
 * Hero slider slides — one image per step (Research, Design, Impact).
 * Place files in public/ and set image paths. Leave null to show placeholders.
 */
export const HERO_SLIDES = [
  {
    id: 'research',
    label: 'Research',
    image: null,
    imageAlt: 'User research and discovery',
  },
  {
    id: 'design',
    label: 'Design',
    image: null,
    imageAlt: 'Product and interaction design',
  },
  {
    id: 'impact',
    label: 'Impact',
    image: null,
    imageAlt: 'Measurable outcomes and analytics',
  },
]

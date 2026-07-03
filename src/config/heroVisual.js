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
    imageSizes: '(min-width: 1024px) 50vw, 100vw',
  },
  {
    id: 'design',
    label: 'Design',
    image: null,
    imageAlt: 'Product and interaction design',
    imageSizes: '(min-width: 1024px) 50vw, 100vw',
  },
  {
    id: 'impact',
    label: 'Impact',
    image: null,
    imageAlt: 'Measurable outcomes and analytics',
    imageSizes: '(min-width: 1024px) 50vw, 100vw',
  },
]

/**
 * Hero visual mode — change to 'placeholder' to revert to the plain image placeholder.
 */
export const HERO_VISUAL_MODE = 'flow-diagram'

/**
 * Hero slider slides — one image per step (Research, Design, Measure).
 * Place files in public/ and set image paths. Leave null to show placeholders.
 */
export const HERO_SLIDES = [
  {
    id: 'research',
    label: 'Research',
    image: '/images/hero/research.jpg',
    imageAlt: 'Affinity mapping session with sticky notes organized on a glass wall',
    imageWidth: 950,
    imageHeight: 950,
    imageSizes: '(min-width: 1024px) 50vw, 100vw',
  },
  {
    id: 'design',
    label: 'Design',
    image: '/images/hero/design.jpg',
    imageAlt: 'Low-fidelity wireframe layouts for desktop and mobile curriculum catalog views',
    imageWidth: 1574,
    imageHeight: 1563,
    imageSizes: '(min-width: 1024px) 50vw, 100vw',
  },
  {
    id: 'impact',
    label: 'Measure',
    image: '/images/hero/measure.jpg',
    imageAlt: 'UX Venn diagram showing user experience at the intersection of business, users, and technology',
    imageWidth: 1024,
    imageHeight: 1024,
    imageSizes: '(min-width: 1024px) 50vw, 100vw',
  },
]

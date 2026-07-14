import heroImageSrc from '../assets/hero-image.png'
import heroImageNarrowSrc from '../assets/hero-image-narrow.png'

/**
 * Hero visual on the home page.
 *
 * Modes:
 * - 'image' — decorative hero image (default)
 * - 'none' — no hero visual (text-only hero)
 * - 'flow-diagram' — Research / Design / Measure carousel with expertise tabs
 * - 'placeholder' — static placeholder frame
 *
 * Override via VITE_HERO_VISUAL_MODE in .env.local (e.g. flow-diagram).
 */
const VALID_HERO_VISUAL_MODES = ['image', 'none', 'flow-diagram', 'placeholder']
const configuredMode = import.meta.env.VITE_HERO_VISUAL_MODE ?? 'image'

export const HERO_VISUAL_MODE = VALID_HERO_VISUAL_MODES.includes(configuredMode)
  ? configuredMode
  : 'image'

export const showHeroVisual = HERO_VISUAL_MODE !== 'none'

export const showHeroBackgroundImage = HERO_VISUAL_MODE === 'image'

export const HERO_IMAGE = {
  src: heroImageSrc,
  width: 1110,
  height: 1012,
  sizes: '(min-width: 1280px) 45vw, 85vw',
}

export const HERO_IMAGE_NARROW = {
  src: heroImageNarrowSrc,
  width: 504,
  height: 1014,
  sizes: '(min-width: 1024px) 38vw',
}

/**
 * Hero slider slides — one image per step (Research, Design, Measure).
 * Used when HERO_VISUAL_MODE is 'flow-diagram'.
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

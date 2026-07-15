import heroImageSrc from '../assets/hero-image.png'

/**
 * Hero visual on the home page.
 *
 * Modes:
 * - 'profile' — two-column hero with About page profile photo (default)
 * - 'image' — decorative hero illustration (background on desktop; inline on mobile)
 * - 'none' — no hero visual (text-only hero)
 *
 * Default via VITE_HERO_VISUAL_MODE in .env.local. Override at runtime in the Config menu.
 */
export const HERO_VISUAL_MODE_IDS = ['profile', 'image', 'none']

export const HERO_VISUAL_MODES = [
  { id: 'profile', label: 'Profile photo', description: 'Traditional two-column layout' },
  { id: 'image', label: 'Decorative', description: 'Background illustration' },
  { id: 'none', label: 'Text only', description: 'No hero visual' },
]

const configuredMode = import.meta.env.VITE_HERO_VISUAL_MODE ?? 'profile'

export function isValidHeroVisualMode(mode) {
  return HERO_VISUAL_MODE_IDS.includes(mode)
}

export const DEFAULT_HERO_VISUAL_MODE = isValidHeroVisualMode(configuredMode)
  ? configuredMode
  : 'profile'

export const HERO_IMAGE = {
  src: heroImageSrc,
  width: 1110,
  height: 1012,
  sizes: '(min-width: 1024px) 45vw, 128px',
}

export const HERO_PROFILE = {
  src: '/images/kerry-hanson-profile.jpg',
  width: 800,
  height: 800,
  sizes: '(min-width: 1024px) 45vw, 128px',
}

/**
 * Hero slider slides — one image per step (Research, Design, Measure).
 * Used when hero visual mode is 'flow-diagram'.
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

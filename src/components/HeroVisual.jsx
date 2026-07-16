import { HERO_IMAGE, HERO_PROFILE } from '../config/heroVisual'
import { useHeroVisual } from '../context/HeroVisualContext'
import ResponsiveImage from './ResponsiveImage'

const compactClassName =
  'w-[8rem] sm:w-[8.5rem] aspect-square rounded-2xl border theme-border theme-shadow-lg object-cover'

const fullClassName =
  'w-full max-w-[21rem] lg:max-w-[25rem] mx-auto aspect-square object-cover rounded-2xl border theme-border theme-shadow-lg'

export default function HeroVisual({ compact = false }) {
  const { heroVisualMode } = useHeroVisual()

  if (heroVisualMode === 'profile') {
    return (
      <figure className="m-0">
        <ResponsiveImage
          src={HERO_PROFILE.src}
          alt="Kerry Hanson profile photo"
          width={HERO_PROFILE.width}
          height={HERO_PROFILE.height}
          sizes={compact ? '136px' : '(min-width: 1024px) 400px, 336px'}
          loading="eager"
          fetchPriority="high"
          className={compact ? compactClassName : fullClassName}
        />
      </figure>
    )
  }

  if (heroVisualMode === 'image') {
    if (!compact) return null

    return (
      <figure className="m-0">
        <ResponsiveImage
          src={HERO_IMAGE.src}
          alt=""
          width={HERO_IMAGE.width}
          height={HERO_IMAGE.height}
          sizes="128px"
          loading="eager"
          fetchPriority="high"
          className={`${compactClassName} object-contain theme-bg-subtle p-1`}
        />
      </figure>
    )
  }

  return null
}

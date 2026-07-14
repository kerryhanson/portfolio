import { HERO_IMAGE, HERO_VISUAL_MODE } from '../config/heroVisual'
import PlaceholderImage from './PlaceholderImage'
import HeroFlowDiagram from './HeroFlowDiagram'
import ResponsiveImage from './ResponsiveImage'

const desktopClassName = 'hidden lg:block max-w-md mx-auto lg:max-w-none w-full theme-shadow-lg'
const mobileBannerClassName = 'lg:hidden w-full theme-shadow-lg'

export default function HeroVisual() {
  if (HERO_VISUAL_MODE === 'none') {
    return null
  }

  if (HERO_VISUAL_MODE === 'image') {
    return (
      <ResponsiveImage
        src={HERO_IMAGE.src}
        alt=""
        width={HERO_IMAGE.width}
        height={HERO_IMAGE.height}
        sizes={HERO_IMAGE.sizes}
        loading="eager"
        fetchPriority="high"
        className="block w-full h-auto object-contain object-right pointer-events-none select-none"
      />
    )
  }

  if (HERO_VISUAL_MODE === 'flow-diagram') {
    return (
      <>
        <PlaceholderImage
          label="UX research, design, and impact"
          aspectRatio="5/2"
          className={mobileBannerClassName}
          iconSize={32}
        />
        <HeroFlowDiagram className={desktopClassName} />
      </>
    )
  }

  return (
    <PlaceholderImage
      label="Portrait / hero image"
      aspectRatio="4/5"
      className="max-w-md mx-auto lg:max-w-none w-full theme-shadow-lg"
      iconSize={40}
    />
  )
}

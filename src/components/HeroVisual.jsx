import { HERO_VISUAL_MODE } from '../config/heroVisual'
import PlaceholderImage from './PlaceholderImage'
import HeroFlowDiagram from './HeroFlowDiagram'

const desktopClassName = 'hidden lg:block max-w-md mx-auto lg:max-w-none w-full theme-shadow-lg'
const mobileBannerClassName = 'lg:hidden w-full theme-shadow-lg'

export default function HeroVisual() {
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

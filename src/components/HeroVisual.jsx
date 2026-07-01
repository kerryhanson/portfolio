import { HERO_VISUAL_MODE } from '../config/heroVisual'
import PlaceholderImage from './PlaceholderImage'
import HeroFlowDiagram from './HeroFlowDiagram'

const sharedClassName = 'max-w-md mx-auto lg:max-w-none w-full theme-shadow-lg'

export default function HeroVisual() {
  if (HERO_VISUAL_MODE === 'flow-diagram') {
    return <HeroFlowDiagram className={sharedClassName} />
  }

  return (
    <PlaceholderImage
      label="Portrait / hero image"
      aspectRatio="4/5"
      className={sharedClassName}
      iconSize={40}
    />
  )
}

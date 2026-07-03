import PlaceholderImage from './PlaceholderImage'
import ResponsiveImage from './ResponsiveImage'

export default function ProjectImage({
  project,
  aspectRatio = '16/9',
  className = '',
  iconSize = 32,
  sizes = '(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw',
  loading = 'lazy',
}) {
  if (project.image) {
    return (
      <figure className={`w-full theme-bg-subtle m-0 ${className}`}>
        <ResponsiveImage
          src={project.image}
          alt={project.imageAlt ?? project.title}
          width={project.imageWidth ?? 1024}
          height={project.imageHeight ?? 527}
          srcSet={project.imageSrcSet}
          sizes={project.imageSizes ?? sizes}
          loading={loading}
          className="w-full h-auto block"
        />
      </figure>
    )
  }

  return (
    <PlaceholderImage
      label={project.title}
      aspectRatio={aspectRatio}
      className={className}
      iconSize={iconSize}
    />
  )
}

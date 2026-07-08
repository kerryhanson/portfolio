import PlaceholderImage from './PlaceholderImage'
import ResponsiveImage from './ResponsiveImage'

export default function ProjectImage({
  project,
  aspectRatio = '16/9',
  matchImageAspectRatio = false,
  className = '',
  iconSize = 32,
  sizes = '(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw',
  loading = 'lazy',
}) {
  const displayAspectRatio =
    matchImageAspectRatio && project.image && project.imageWidth && project.imageHeight
      ? `${project.imageWidth} / ${project.imageHeight}`
      : aspectRatio

  if (project.image) {
    return (
      <figure
        className={`relative overflow-hidden rounded-xl border theme-border m-0 ${className}`}
        style={{ aspectRatio: displayAspectRatio }}
      >
        <ResponsiveImage
          src={project.image}
          alt={project.imageAlt ?? project.title}
          width={project.imageWidth ?? 1024}
          height={project.imageHeight ?? 527}
          srcSet={project.imageSrcSet}
          sizes={project.imageSizes ?? sizes}
          loading={loading}
          className={`absolute inset-0 w-full h-full ${
            matchImageAspectRatio ? 'object-contain' : 'object-cover'
          }`}
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

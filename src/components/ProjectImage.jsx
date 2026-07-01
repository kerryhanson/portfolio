import PlaceholderImage from './PlaceholderImage'

export default function ProjectImage({
  project,
  aspectRatio = '16/9',
  className = '',
  iconSize = 32,
}) {
  if (project.image) {
    return (
      <div className={`w-full theme-bg-subtle ${className}`}>
        <img
          src={project.image}
          alt={project.imageAlt ?? project.title}
          width={project.imageWidth ?? 1024}
          height={project.imageHeight ?? 527}
          className="w-full h-auto block"
          loading="lazy"
          decoding="async"
        />
      </div>
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

import ResponsiveImage from './ResponsiveImage'

export default function ProjectDetailImage({
  src,
  alt,
  width,
  height,
  aspectRatio = '4/3',
  fixedAspectRatio = false,
  className = '',
  loading = 'lazy',
}) {
  const displayAspectRatio =
    !fixedAspectRatio && width && height ? `${width} / ${height}` : aspectRatio

  return (
    <figure
      className={`relative overflow-hidden rounded-xl border theme-border m-0 ${className}`}
      style={{ aspectRatio: displayAspectRatio }}
    >
      <ResponsiveImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={`absolute inset-0 w-full h-full ${
          fixedAspectRatio ? 'object-cover' : 'object-contain theme-surface'
        }`}
      />
    </figure>
  )
}

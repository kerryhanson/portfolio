export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
  srcSet,
  sizes,
  loading = 'lazy',
  fetchPriority,
  className = '',
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      srcSet={srcSet}
      sizes={sizes}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      className={className}
    />
  )
}

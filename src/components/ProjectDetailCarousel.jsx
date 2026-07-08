import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DecorativeIcon, SrOnly } from './a11y'
import ResponsiveImage from './ResponsiveImage'
import PlaceholderImage from './PlaceholderImage'

export default function ProjectDetailCarousel({
  images = [],
  aspectRatio = '16/9',
  useNativeAspectRatio = false,
  placeholderLabel = 'Final design / results image',
  ariaLabel = 'Project images',
  className = '',
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!images.length) {
    return (
      <PlaceholderImage
        label={placeholderLabel}
        aspectRatio={aspectRatio}
        className={className}
      />
    )
  }

  const goPrev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length)
  const goNext = () => setActiveIndex((i) => (i + 1) % images.length)
  const activeImage = images[activeIndex]
  const showControls = images.length > 1
  const slideAspectRatio =
    useNativeAspectRatio && activeImage.width && activeImage.height
      ? `${activeImage.width} / ${activeImage.height}`
      : aspectRatio

  return (
    <section
      className={`group relative overflow-hidden rounded-xl border theme-border theme-shadow-lg ${className}`}
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <SrOnly aria-live="polite" aria-atomic="true">
        Showing image {activeIndex + 1} of {images.length}: {activeImage.alt}
      </SrOnly>

      <div
        className={`relative w-full overflow-hidden ${
          useNativeAspectRatio ? 'transition-[aspect-ratio] duration-300 ease-in-out' : 'aspect-video'
        }`}
        style={useNativeAspectRatio ? { aspectRatio: slideAspectRatio } : undefined}
      >
        {images.map((img, i) => (
          <figure
            key={img.src}
            className={`absolute inset-0 m-0 transition-opacity duration-300 ${
              i === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            hidden={i !== activeIndex}
            aria-hidden={i !== activeIndex}
          >
            <ResponsiveImage
              src={img.src}
              alt={img.alt ?? placeholderLabel}
              width={img.width}
              height={img.height}
              loading={i === 0 ? 'eager' : 'lazy'}
              className="w-full h-full object-contain"
            />
          </figure>
        ))}

        {showControls && (
          <nav
            aria-label={`${ariaLabel} navigation`}
            className="absolute inset-0 z-20 flex items-center justify-between px-3 pointer-events-none"
          >
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="pointer-events-auto cursor-pointer flex items-center justify-center w-9 h-9 rounded-full theme-surface border theme-border theme-shadow opacity-80 transition-opacity duration-200 hover:theme-accent-bg-subtle focus-visible:opacity-100"
            >
              <DecorativeIcon icon={ChevronLeft} size={18} className="theme-text" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="pointer-events-auto cursor-pointer flex items-center justify-center w-9 h-9 rounded-full theme-surface border theme-border theme-shadow opacity-80 transition-opacity duration-200 hover:theme-accent-bg-subtle focus-visible:opacity-100"
            >
              <DecorativeIcon icon={ChevronRight} size={18} className="theme-text" />
            </button>
          </nav>
        )}
      </div>

      {showControls && (
        <div
          className="flex items-center justify-center gap-2 py-3 px-4 border-t theme-border theme-bg-subtle"
          role="tablist"
          aria-label={`${ariaLabel} slides`}
        >
          {images.map((img, i) =>
            img.label ? (
              <button
                key={img.src}
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Show ${img.label}`}
                onClick={() => setActiveIndex(i)}
                className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                  i === activeIndex
                    ? 'theme-accent-bg-subtle theme-accent-text'
                    : 'theme-text-muted hover:text-[var(--color-text)] hover:bg-[var(--color-bg-subtle)]'
                }`}
              >
                {img.label}
              </button>
            ) : (
              <button
                key={img.src}
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Show image ${i + 1}: ${img.alt}`}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  i === activeIndex
                    ? 'w-6 theme-accent-bg'
                    : 'w-2 bg-[var(--color-border)] hover:bg-[var(--color-text-subtle)]'
                }`}
              />
            ),
          )}
        </div>
      )}
    </section>
  )
}

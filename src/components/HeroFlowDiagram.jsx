import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, LayoutDashboard, Rocket, SquareUserRound } from 'lucide-react'
import { HERO_SLIDES } from '../config/heroVisual'
import { DecorativeIcon, SrOnly } from './a11y'
import PlaceholderImage from './PlaceholderImage'
import ResponsiveImage from './ResponsiveImage'

const stepIcons = { research: SquareUserRound, design: LayoutDashboard, impact: Rocket }

const slides = HERO_SLIDES.map((slide) => ({
  ...slide,
  icon: stepIcons[slide.id],
}))

function Connector() {
  return (
    <span
      aria-hidden="true"
      className="flex items-center flex-1 max-w-16 min-w-6 self-start mt-8"
    >
      <span className="h-px flex-1 block" style={{ backgroundColor: 'var(--color-border)' }} />
      <span
        className="h-px flex-1 block"
        style={{ backgroundColor: 'var(--color-accent)', opacity: 0.3 }}
      />
    </span>
  )
}

function ExpertiseBanner({ activeIndex, onSelect }) {
  return (
    <section
      className="relative overflow-hidden px-6 py-5 border-b theme-border"
      aria-label="Expertise areas"
    >
      <span aria-hidden="true" className="absolute inset-0 theme-bg-subtle block" />
      <span
        aria-hidden="true"
        className="absolute inset-0 opacity-70 block"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, var(--color-accent-subtle), transparent 75%)',
        }}
      />

      <div
        className="relative flex items-center justify-center gap-2 sm:gap-4"
        role="tablist"
        aria-label="Hero slides"
      >
        {slides.map((step, i) => {
          const isActive = i === activeIndex
          const Icon = step.icon

          return (
            <span key={step.id} className="contents">
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`hero-slide-${step.id}`}
                id={`hero-tab-${step.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => onSelect(i)}
                className="flex flex-col items-center gap-2 shrink-0 cursor-pointer group/step"
              >
                <span className="w-16 h-16 flex items-center justify-center">
                  <span
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-transform duration-200 origin-center theme-shadow ${
                      isActive
                        ? 'scale-100 theme-accent-bg-subtle'
                        : 'scale-[0.857] theme-surface group-hover/step:theme-accent-bg-subtle'
                    }`}
                    style={{
                      borderColor: isActive
                        ? 'var(--color-accent)'
                        : 'var(--color-border)',
                    }}
                  >
                    <DecorativeIcon
                      icon={Icon}
                      size={20}
                      className={isActive ? 'theme-accent-text' : 'theme-accent'}
                      strokeWidth={1.5}
                    />
                  </span>
                </span>
                <span
                  className={`text-xs font-semibold transition-colors min-w-[4.5rem] text-center ${
                    isActive ? 'theme-accent-text' : 'theme-text-muted'
                  }`}
                >
                  {step.label}
                </span>
              </button>
              {i < slides.length - 1 && <Connector />}
            </span>
          )
        })}
      </div>
    </section>
  )
}

function HeroSlider({ activeIndex, onPrev, onNext }) {
  const sliderRef = useRef(null)

  useEffect(() => {
    const node = sliderRef.current
    if (!node) return

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        onPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        onNext()
      }
    }

    node.addEventListener('keydown', handleKeyDown)
    return () => node.removeEventListener('keydown', handleKeyDown)
  }, [onPrev, onNext])

  const activeSlide = slides[activeIndex]

  return (
    <section
      ref={sliderRef}
      className="group relative aspect-square theme-bg-subtle"
      aria-roledescription="carousel"
      aria-label="Portfolio highlight images"
      tabIndex={0}
    >
      <SrOnly aria-live="polite" aria-atomic="true">
        Showing slide {activeIndex + 1} of {slides.length}: {activeSlide.label}
      </SrOnly>

      {slides.map((slide, i) => (
        <article
          key={slide.id}
          id={`hero-slide-${slide.id}`}
          role="tabpanel"
          aria-labelledby={`hero-tab-${slide.id}`}
          hidden={i !== activeIndex}
          inert={i !== activeIndex || undefined}
          className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
            i === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {slide.image ? (
            <ResponsiveImage
              src={slide.image}
              alt={slide.imageAlt ?? slide.label}
              srcSet={slide.imageSrcSet}
              sizes={slide.imageSizes ?? '(min-width: 1024px) 50vw, 100vw'}
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : undefined}
              className="w-full h-full object-contain"
            />
          ) : (
            <PlaceholderImage
              label={`${slide.label} image`}
              aspectRatio="1/1"
              className="rounded-none border-0 h-full"
              iconSize={36}
            />
          )}
        </article>
      ))}

      <nav
        aria-label="Slide navigation"
        className="absolute inset-0 z-20 flex items-center justify-between px-3 pointer-events-none"
      >
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous slide"
          className="pointer-events-auto flex items-center justify-center w-9 h-9 rounded-full theme-surface border theme-border theme-shadow opacity-70 transition-opacity duration-200 hover:theme-accent-bg-subtle [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-within:opacity-100 focus-visible:opacity-100"
        >
          <DecorativeIcon icon={ChevronLeft} size={18} className="theme-text" />
        </button>

        <button
          type="button"
          onClick={onNext}
          aria-label="Next slide"
          className="pointer-events-auto flex items-center justify-center w-9 h-9 rounded-full theme-surface border theme-border theme-shadow opacity-70 transition-opacity duration-200 hover:theme-accent-bg-subtle [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-within:opacity-100 focus-visible:opacity-100"
        >
          <DecorativeIcon icon={ChevronRight} size={18} className="theme-text" />
        </button>
      </nav>
    </section>
  )
}

export default function HeroFlowDiagram({ className = '' }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const goTo = (index) => setActiveIndex(index)
  const goPrev = () => setActiveIndex((i) => (i - 1 + slides.length) % slides.length)
  const goNext = () => setActiveIndex((i) => (i + 1) % slides.length)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length)
    }, 10000)
    return () => clearInterval(id)
  }, [activeIndex])

  return (
    <section
      className={`relative overflow-hidden rounded-xl border theme-border w-full ${className}`}
      aria-label="UX expertise and portfolio highlights"
    >
      <ExpertiseBanner activeIndex={activeIndex} onSelect={goTo} />
      <HeroSlider activeIndex={activeIndex} onPrev={goPrev} onNext={goNext} />
    </section>
  )
}

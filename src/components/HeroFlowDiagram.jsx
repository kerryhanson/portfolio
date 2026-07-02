import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, LayoutDashboard, Rocket, SquareUserRound } from 'lucide-react'
import { HERO_SLIDES } from '../config/heroVisual'
import PlaceholderImage from './PlaceholderImage'

const stepIcons = { research: SquareUserRound, design: LayoutDashboard, impact: Rocket }

const slides = HERO_SLIDES.map((slide) => ({
  ...slide,
  icon: stepIcons[slide.id],
}))

function Connector() {
  return (
    <div className="flex items-center flex-1 max-w-16 min-w-6 self-start mt-8">
      <div className="h-px flex-1" style={{ backgroundColor: 'var(--color-border)' }} />
      <div
        className="h-px flex-1"
        style={{ backgroundColor: 'var(--color-accent)', opacity: 0.3 }}
      />
    </div>
  )
}

function ExpertiseBanner({ activeIndex, onSelect }) {
  return (
    <div className="relative overflow-hidden px-6 py-5 border-b theme-border">
      <div className="absolute inset-0 theme-bg-subtle" />
      <div
        className="absolute inset-0 opacity-70"
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
            <div key={step.id} className="contents">
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`hero-slide-${step.id}`}
                id={`hero-tab-${step.id}`}
                onClick={() => onSelect(i)}
                className="flex flex-col items-center gap-2 shrink-0 cursor-pointer group/step"
              >
                {/* Fixed slot — scale happens inside so layout never shifts */}
                <div className="w-16 h-16 flex items-center justify-center">
                  <div
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
                    <Icon
                      size={20}
                      className={isActive ? 'theme-accent-text' : 'theme-accent'}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <span
                  className={`text-xs font-semibold transition-colors min-w-[4.5rem] text-center ${
                    isActive ? 'theme-accent-text' : 'theme-text-muted'
                  }`}
                >
                  {step.label}
                </span>
              </button>
              {i < slides.length - 1 && <Connector />}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function HeroSlider({ activeIndex, onPrev, onNext }) {
  return (
    <div className="group relative aspect-square theme-bg-subtle">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          id={`hero-slide-${slide.id}`}
          role="tabpanel"
          aria-labelledby={`hero-tab-${slide.id}`}
          hidden={i !== activeIndex}
          className={`absolute inset-0 transition-opacity duration-300 ${
            i === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {slide.image ? (
            <img
              src={slide.image}
              alt={slide.imageAlt ?? slide.label}
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
        </div>
      ))}

      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full theme-surface border theme-border theme-shadow opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-200 hover:theme-accent-bg-subtle"
      >
        <ChevronLeft size={18} className="theme-text" />
      </button>

      <button
        type="button"
        onClick={onNext}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full theme-surface border theme-border theme-shadow opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-200 hover:theme-accent-bg-subtle"
      >
        <ChevronRight size={18} className="theme-text" />
      </button>
    </div>
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
    <div
      className={`relative overflow-hidden rounded-xl border theme-border w-full ${className}`}
    >
      <ExpertiseBanner activeIndex={activeIndex} onSelect={goTo} />
      <HeroSlider activeIndex={activeIndex} onPrev={goPrev} onNext={goNext} />
    </div>
  )
}

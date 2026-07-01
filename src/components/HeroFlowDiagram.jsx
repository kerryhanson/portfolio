import { BarChart3, Layers, Search } from 'lucide-react'
import { HERO_IMAGE_SRC } from '../config/heroVisual'
import PlaceholderImage from './PlaceholderImage'

const steps = [
  { icon: Search, label: 'Research' },
  { icon: Layers, label: 'Design' },
  { icon: BarChart3, label: 'Impact' },
]

function Connector() {
  return (
    <div className="flex items-center flex-1 max-w-16 min-w-6">
      <div className="h-px flex-1" style={{ backgroundColor: 'var(--color-border)' }} />
      <div className="h-px flex-1" style={{ backgroundColor: 'var(--color-accent)', opacity: 0.3 }} />
    </div>
  )
}

function ExpertiseBanner() {
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

      <div className="relative">
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          {steps.map((step, i) => (
            <div key={step.label} className="contents">
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full theme-surface border theme-border theme-shadow flex items-center justify-center">
                  <step.icon size={20} className="theme-accent" strokeWidth={1.5} />
                </div>
                <span className="text-xs font-medium theme-text-muted">{step.label}</span>
              </div>
              {i < steps.length - 1 && <Connector />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function HeroImageArea() {
  if (HERO_IMAGE_SRC) {
    return (
      <img
        src={HERO_IMAGE_SRC}
        alt="Hero illustration"
        className="w-full aspect-square object-cover"
      />
    )
  }

  return (
    <PlaceholderImage
      label="Custom hero image"
      aspectRatio="1/1"
      className="rounded-none border-0"
      iconSize={36}
    />
  )
}

export default function HeroFlowDiagram({ className = '' }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border theme-border w-full ${className}`}
    >
      <ExpertiseBanner />
      <HeroImageArea />
    </div>
  )
}

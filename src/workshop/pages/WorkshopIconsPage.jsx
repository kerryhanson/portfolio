import {
  ArrowRight,
  ArrowUpRight,
  Award,
  ImageIcon,
  LayoutDashboard,
  Menu,
  Rocket,
  Settings,
  SquareUserRound,
  Target,
  X,
} from 'lucide-react'
import { portfolioIcons } from '../../config/designTokens'
import { DecorativeIcon } from '../../components/a11y'
import { DemoBlock, PageIntro } from '../components/WorkshopPrimitives'

const iconMap = {
  Target,
  ArrowRight,
  ArrowUpRight,
  Award,
  SquareUserRound,
  LayoutDashboard,
  Rocket,
  ImageIcon,
  Menu,
  Settings,
}

export default function WorkshopIconsPage() {
  return (
    <>
      <PageIntro
        title="Icons"
        description="Lucide React provides consistent stroke icons. Decorative icons are wrapped for accessibility so assistive tech ignores them when adjacent text carries meaning."
      />

      <div className="space-y-10">
        <DemoBlock
          title="DecorativeIcon wrapper"
          description="Sets aria-hidden on icons that duplicate visible text or are purely visual."
          code={`import { DecorativeIcon } from './a11y'

<DecorativeIcon icon={ArrowRight} size={16} />`}
          codeTitle="Usage"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl theme-btn-primary text-sm font-medium text-white">
            Action label
            <DecorativeIcon icon={ArrowRight} size={16} />
          </div>
        </DemoBlock>

        <section className="space-y-4">
          <h2 className="text-xl font-bold theme-text">Portfolio icon set</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {portfolioIcons.map((item) => {
              if (item.name === 'Menu / X') {
                return (
                  <article key={item.name} className="theme-card rounded-xl p-4 text-center space-y-2">
                    <div className="flex justify-center gap-3">
                      <DecorativeIcon icon={Menu} size={22} className="theme-accent" />
                      <DecorativeIcon icon={X} size={22} className="theme-accent" />
                    </div>
                    <p className="text-sm font-medium theme-text">{item.name}</p>
                    <p className="text-xs theme-text-muted">{item.usage}</p>
                  </article>
                )
              }

              const Icon = iconMap[item.name]
              if (!Icon) return null

              return (
                <article key={item.name} className="theme-card rounded-xl p-4 text-center space-y-2">
                  <DecorativeIcon icon={Icon} size={22} className="theme-accent mx-auto" />
                  <p className="text-sm font-medium theme-text">{item.name}</p>
                  <p className="text-xs theme-text-muted">{item.usage}</p>
                </article>
              )
            })}
          </div>
        </section>

        <DemoBlock
          title="Sizing conventions"
          description="Icons scale with context — smaller in nav, larger in hero steps."
        >
          <div className="flex flex-wrap items-end gap-8">
            {[14, 16, 18, 20, 22, 36].map((size) => (
              <div key={size} className="text-center space-y-2">
                <DecorativeIcon icon={Target} size={size} className="theme-accent mx-auto" />
                <span className="text-xs theme-text-subtle">{size}px</span>
              </div>
            ))}
          </div>
        </DemoBlock>
      </div>
    </>
  )
}

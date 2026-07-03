import { DecorativeIcon } from './a11y'
import { ImageIcon } from 'lucide-react'

export default function PlaceholderImage({
  label = 'Image placeholder',
  aspectRatio = '16/9',
  className = '',
  iconSize = 32,
}) {
  return (
    <figure
      className={`relative overflow-hidden rounded-xl border theme-border m-0 ${className}`}
      style={{ aspectRatio }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 block"
        style={{
          background: `linear-gradient(135deg, var(--color-placeholder-from), var(--color-placeholder-to))`,
        }}
      />
      <figcaption className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <span
          aria-hidden="true"
          className="flex items-center justify-center rounded-full theme-surface theme-shadow"
          style={{ width: iconSize + 24, height: iconSize + 24 }}
        >
          <DecorativeIcon
            icon={ImageIcon}
            size={iconSize}
            strokeWidth={1.25}
            style={{ color: 'var(--color-placeholder-icon)' }}
          />
        </span>
        <span className="text-xs font-medium theme-text-subtle tracking-wide uppercase">
          {label}
        </span>
      </figcaption>
    </figure>
  )
}

import { ImageIcon } from 'lucide-react'

export default function PlaceholderImage({
  label = 'Image placeholder',
  aspectRatio = '16/9',
  className = '',
  iconSize = 32,
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border theme-border ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={label}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, var(--color-placeholder-from), var(--color-placeholder-to))`,
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <div
          className="flex items-center justify-center rounded-full theme-surface theme-shadow"
          style={{ width: iconSize + 24, height: iconSize + 24 }}
        >
          <ImageIcon
            size={iconSize}
            strokeWidth={1.25}
            style={{ color: 'var(--color-placeholder-icon)' }}
          />
        </div>
        <span className="text-xs font-medium theme-text-subtle tracking-wide uppercase">
          {label}
        </span>
      </div>
    </div>
  )
}

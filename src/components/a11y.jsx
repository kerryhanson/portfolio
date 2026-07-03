/**
 * Visually hidden text for screen readers (e.g. carousel live regions).
 */
export function SrOnly({ children, ...props }) {
  return (
    <span className="sr-only" {...props}>
      {children}
    </span>
  )
}

/**
 * Decorative Lucide icon wrapper — use when adjacent text or aria-label
 * already conveys meaning.
 */
export function DecorativeIcon({ icon: Icon, ...props }) {
  return <Icon aria-hidden="true" {...props} />
}

import defaultAttributes from 'lucide/dist/esm/defaultAttributes.mjs'
import Globe from 'lucide/dist/esm/icons/globe.mjs'
import Link2 from 'lucide/dist/esm/icons/link-2.mjs'
import Mail from 'lucide/dist/esm/icons/mail.mjs'
import Phone from 'lucide/dist/esm/icons/phone.mjs'

function renderIconNode([tag, attrs, children]) {
  const attrString = Object.entries(attrs)
    .map(([name, value]) => `${name}="${String(value).replace(/"/g, '&quot;')}"`)
    .join(' ')

  if (children?.length) {
    return `<${tag} ${attrString}>${children.map(renderIconNode).join('')}</${tag}>`
  }

  return `<${tag} ${attrString}/>`
}

export function lucideIconSvg(iconNode, { size = 13, className = 'contact-icon' } = {}) {
  const attrs = {
    ...defaultAttributes,
    width: size,
    height: size,
    class: className,
    'aria-hidden': 'true',
  }

  return renderIconNode(['svg', attrs, iconNode])
}

export const resumeContactIcons = {
  phone: Phone,
  mail: Mail,
  link: Link2,
  globe: Globe,
}

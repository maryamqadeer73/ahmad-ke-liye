import { motion } from 'framer-motion'

/* Soft reveal when something scrolls into view (fade + small rise + 0.98 -> 1). */
const ease = [0.22, 0.61, 0.36, 1]

export default function Reveal({ as = 'div', children, className, style, delay = 0, slow = false, blur = false, amount = 0.5 }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      style={style}
      initial={{ opacity: 0, y: 18, scale: 0.98, ...(blur ? { filter: 'blur(5px)' } : {}) }}
      whileInView={{ opacity: 1, y: 0, scale: 1, ...(blur ? { filter: 'blur(0px)' } : {}) }}
      viewport={{ once: true, amount }}
      transition={{ duration: slow ? 1.4 : 0.95, delay, ease }}
    >
      {children}
    </Tag>
  )
}

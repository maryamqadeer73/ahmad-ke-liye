import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import Lines from '../components/Lines'
import { trust } from '../data/story'

const NOTE_STYLE = [
  { rotate: -6, bg: '#FFF4E4' },
  { rotate: 3, bg: '#F6E4D8' },
  { rotate: -2, bg: '#FFF9F4' },
]

/* Scene 11 — three sticky notes land one by one */
export default function Trust() {
  return (
    <section id="trust" className="scene-page" data-tone="warm" aria-labelledby="trust-title">
      <SectionTitle id="trust-title">{trust.title}</SectionTitle>
      <div className="sticky-notes">
        {trust.notes.map((n, i) => (
          <motion.p
            key={n}
            className="sticky-note hand"
            style={{ background: NOTE_STYLE[i].bg }}
            initial={{ opacity: 0, y: -24, rotate: 0, scale: 1.08 }}
            whileInView={{ opacity: 1, y: 0, rotate: NOTE_STYLE[i].rotate, scale: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ type: 'spring', stiffness: 110, damping: 13, delay: i * 0.25 }}
          >
            {n}
          </motion.p>
        ))}
      </div>
      <Lines lines={trust.lines} />
    </section>
  )
}

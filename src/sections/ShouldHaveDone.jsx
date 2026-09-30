import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import FloatingNote from '../components/FloatingNote'
import { shouldHave } from '../data/story'

const STROKE = { fill: 'none', stroke: '#6B4541', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

function Icon({ type }) {
  if (type === 'talk')
    return (
      <svg viewBox="0 0 48 40" aria-hidden="true">
        <path d="M6 8 h26 a4 4 0 0 1 4 4 v10 a4 4 0 0 1 -4 4 h-14 l-7 6 v-6 h-5 a4 4 0 0 1 -4 -4 v-10 a4 4 0 0 1 4 -4z" {...STROKE} fill="#FFF9F4" />
        <path d="M14 17 h14" {...STROKE} />
        <path d="M40 16 a6 6 0 0 1 0 10" {...STROKE} />
      </svg>
    )
  if (type === 'clock')
    return (
      <svg viewBox="0 0 48 40" aria-hidden="true">
        <circle cx="24" cy="21" r="14" {...STROKE} fill="#FFF9F4" />
        <path d="M24 13 v8 l6 4" {...STROKE} />
        <path d="M17 5 h14" {...STROKE} />
      </svg>
    )
  return (
    <svg viewBox="0 0 48 40" aria-hidden="true">
      <path d="M24 4 v34" {...STROKE} />
      <path d="M24 8 h14 l5 5 l-5 5 h-14z" {...STROKE} fill="#FFF9F4" />
      <path d="M24 20 h-14 l-5 5 l5 5 h14z" {...STROKE} fill="#EFE1D4" />
    </svg>
  )
}

const TILTS = [-2, 1.5, -1]

/* Scene 08 — three small cards */
export default function ShouldHaveDone() {
  return (
    <section id="kya-karna-chahiye-tha" className="scene-page" data-tone="hush" aria-labelledby="should-title">
      <SectionTitle id="should-title">{shouldHave.title}</SectionTitle>
      <div className="mini-cards">
        {shouldHave.cards.map((c, i) => (
          <Reveal key={i} className="mini-card" style={{ rotate: TILTS[i] }} delay={i * 0.15} amount={0.6}>
            <Icon type={c.icon} />
            <p>{c.text}</p>
          </Reveal>
        ))}
      </div>
      <Reveal as="p" slow amount={1} className="line line--big">
        {shouldHave.closing}
      </Reveal>
      <FloatingNote {...shouldHave.note} side="left" />
    </section>
  )
}

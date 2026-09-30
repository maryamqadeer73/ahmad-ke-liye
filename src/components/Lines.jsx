import Reveal from './Reveal'
import { lineKind, lineText } from './line'

/* Text lines that appear one after another as they scroll into view. */
export default function Lines({ lines = [], slow = true }) {
  return (
    <div className="lines">
      {lines.map((l, i) => {
        const kind = lineKind(l)
        return (
          <Reveal key={i} as="p" slow={slow} amount={0.9} delay={kind === 'pause' ? 0.6 : 0.1} className={`line line--${kind}`}>
            {lineText(l)}
          </Reveal>
        )
      })}
    </div>
  )
}

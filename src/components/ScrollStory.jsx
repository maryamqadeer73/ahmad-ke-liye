import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { lineKind, lineText } from './line'

/*
  A tall section whose picture stays fixed on screen while the text changes
  as Ahmad scrolls. Each "beat" fades in, its lines appear one by one, then
  it fades out for the next beat.
*/
function Line({ progress, at, line }) {
  const opacity = useTransform(progress, [at, at + 0.045], [0, 1])
  const y = useTransform(progress, [at, at + 0.045], [12, 0])
  const kind = lineKind(line)
  const Tag = kind === 'title' ? motion.h2 : motion.p
  return (
    <Tag className={`line line--${kind}`} style={{ opacity, y }}>
      {lineText(line)}
    </Tag>
  )
}

function Beat({ progress, beat, index, isLast }) {
  const [s, e] = beat.range
  const input = index === 0 ? [-1, -0.99, e - 0.04, e] : isLast ? [s, s + 0.03, 2, 3] : [s, s + 0.03, e - 0.04, e]
  const opacity = useTransform(progress, input, [0, 1, 1, 0])
  const n = beat.lines.length
  const span = (e - s) * 0.62
  return (
    <motion.div className="beat" style={{ opacity }}>
      {beat.lines.map((line, i) => {
        let at = s + 0.02 + (n > 1 ? (i / (n - 1)) * span : 0)
        if (index === 0 && i === 0) at = -1 // first line is visible straight away
        return <Line key={i} progress={progress} at={at} line={line} />
      })}
    </motion.div>
  )
}

export default function ScrollStory({ id, height = '320vh', tone = 'plain', beats, renderScene, label }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  return (
    <section id={id} ref={ref} className="story" data-tone={tone} style={{ height }} aria-label={label}>
      <div className="story-sticky">
        <div className="story-scene">{renderScene(scrollYProgress)}</div>
        <div className="story-text">
          {beats.map((beat, i) => (
            <Beat key={i} progress={scrollYProgress} beat={beat} index={i} isLast={i === beats.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

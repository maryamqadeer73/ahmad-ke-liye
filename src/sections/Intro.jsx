import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import BubuScene from '../components/BubuScene'
import { intro } from '../data/story'

const ease = [0.22, 0.61, 0.36, 1]

export default function Intro({ onOpen }) {
  const reduce = useReducedMotion()
  const times = reduce ? [0.1, 0.3, 0.5, 0.7, 0.9] : [0.8, 2.4, 3.9, 5.4, 7]
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), times[4] * 1000)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const line = (i) => ({
    initial: { opacity: 0, y: 8, filter: 'blur(6px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { delay: times[i], duration: 1.3, ease },
  })

  return (
    <motion.section
      className="intro"
      aria-label={intro.ariaLabel}
      initial={{ opacity: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
      animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
      exit={{ clipPath: 'inset(0% 0% 100% 0%)', opacity: 0.7 }}
      transition={{ duration: 1.1, ease }}
    >
      <div className="intro-text">
        <motion.h1 className="intro-name" {...line(0)}>
          {intro.lines[0]}
        </motion.h1>
        {intro.lines.slice(1).map((l, i) => (
          <motion.p key={i} className="intro-line" {...line(i + 1)}>
            {l}
          </motion.p>
        ))}
        <div className="intro-action">
          {ready && (
            <motion.button
              type="button"
              className="soft-btn"
              onClick={onOpen}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
            >
              {intro.button}
            </motion.button>
          )}
        </div>
      </div>
      <div className="intro-scene">
        <BubuScene variant="holding-letter" size="sm" still />
      </div>
    </motion.section>
  )
}

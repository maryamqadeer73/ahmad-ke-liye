import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ScenePicture } from '../components/BubuScene'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import Lines from '../components/Lines'
import { drama } from '../data/story'

/* Scene 03 — playful. Tap Bubu behind the curtain and she reacts. */
export default function Drama() {
  const [step, setStep] = useState(-1)

  useEffect(() => {
    if (step < 0) return
    const t = setTimeout(() => setStep((s) => (s < drama.reactions.length - 1 ? s + 1 : -1)), 1900)
    return () => clearTimeout(t)
  }, [step])

  return (
    <section id="drama" className="scene-page scene-page--drama" aria-labelledby="drama-title">
      <SectionTitle id="drama-title">{drama.title}</SectionTitle>

      <motion.p
        className="drama-word hand"
        initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ type: 'spring', stiffness: 140, damping: 11, delay: 0.3 }}
      >
        {drama.big}
      </motion.p>

      <div className="drama-stage">
        <button
          type="button"
          className="tap-scene"
          aria-label={drama.tapHint}
          onClick={() => setStep(0)}
        >
          <motion.span
            className="tap-scene-inner"
            animate={step >= 0 ? { rotate: [0, -2, 2, -1, 0] } : { rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ScenePicture variant="curtain" />
          </motion.span>
        </button>

        <motion.p
          className="drama-sign hand"
          initial={{ opacity: 0, y: 12, rotate: 6 }}
          whileInView={{ opacity: 1, y: 0, rotate: 4 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 120, damping: 12, delay: 0.8 }}
        >
          {drama.sign}
        </motion.p>

        <AnimatePresence mode="wait">
          {step >= 0 && (
            <motion.p
              key={step}
              className="drama-bubble hand"
              role="status"
              initial={{ opacity: 0, y: 6, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {drama.reactions[step]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <Reveal as="p" className="tap-hint hand" amount={1}>
        {drama.tapHint}
      </Reveal>

      <Lines lines={drama.lines} slow={false} />
    </section>
  )
}

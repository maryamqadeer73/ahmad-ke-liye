import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Envelope from '../components/Envelope'
import { letter } from '../data/story'

/* Scene 01 — the envelope opens by itself right after "andar aayen?" */
export default function LetterScene() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 600)
    return () => clearTimeout(t)
  }, [])

  const fade = (delay) => ({
    initial: { opacity: 0 },
    animate: open ? { opacity: 1 } : { opacity: 0 },
    transition: { delay, duration: 1.2 },
  })

  return (
    <section className="scene-page scene-page--letter" aria-label={letter.lines[0]}>
      <Envelope open={open} peek>
        <motion.p className="env-line" {...fade(2.5)}>
          {letter.lines[0]}
        </motion.p>
        <motion.p className="env-line" {...fade(3.8)}>
          {letter.lines[1]}
        </motion.p>
      </Envelope>
      <motion.p className="scroll-hint hand" {...fade(5.2)}>
        {letter.hint}
      </motion.p>
    </section>
  )
}

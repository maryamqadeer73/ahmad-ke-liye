import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Head } from './BubuScene'

/* Envelope: flap folds back, letter slides up, Bubu peeks from behind it. */
const ease = [0.22, 0.61, 0.36, 1]

function PeekBuddy() {
  return (
    <svg viewBox="-34 -36 68 58" focusable="false">
      <Head kind="her" />
      <ellipse cx="-12" cy="19" rx="6" ry="4.5" fill="#FFF6EE" stroke="#4A3A35" strokeWidth="2" />
      <ellipse cx="12" cy="19" rx="6" ry="4.5" fill="#FFF6EE" stroke="#4A3A35" strokeWidth="2" />
    </svg>
  )
}

export default function Envelope({ open, children, peek = false }) {
  const [flapBehind, setFlapBehind] = useState(false)
  useEffect(() => {
    if (!open) return
    const t = setTimeout(() => setFlapBehind(true), 450)
    return () => clearTimeout(t)
  }, [open])

  return (
    <div className="envelope">
      <div className="env-back" aria-hidden="true" />
      <motion.div
        className="env-letter-wrap"
        initial={false}
        animate={{ y: open ? '-54%' : '0%' }}
        transition={{ delay: open ? 0.8 : 0, duration: 1.4, ease }}
      >
        {peek && (
          <motion.div
            className="env-peek"
            aria-hidden="true"
            initial={{ y: 34, opacity: 0 }}
            animate={open ? { y: 0, opacity: 1 } : { y: 34, opacity: 0 }}
            transition={{ delay: 2.2, duration: 0.9, ease }}
          >
            <PeekBuddy />
          </motion.div>
        )}
        <div className="env-letter">{children}</div>
      </motion.div>
      <div className="env-pocket" aria-hidden="true" />
      <motion.div
        className="env-flap"
        aria-hidden="true"
        initial={false}
        animate={{ rotateX: open ? 180 : 0 }}
        transition={{ duration: 0.9, ease }}
        style={{ zIndex: flapBehind ? 1 : 4 }}
      />
    </div>
  )
}

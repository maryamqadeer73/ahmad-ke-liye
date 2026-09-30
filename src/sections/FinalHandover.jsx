import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Buddy, Prop } from '../components/BubuScene'
import { config, handover, sceneLabels } from '../data/story'

/* Final visual — one tap: Bubu hands Dudu the letter. Then they just sit quietly. */
export default function FinalHandover() {
  const [given, setGiven] = useState(false)

  return (
    <section id="aakhir" className="scene-page scene-page--end" data-tone="plain" aria-label={handover.lines[0]}>
      <figure className="scene scene--md">
        <svg viewBox="0 0 320 200" role="img" aria-label={sceneLabels.handover} focusable="false">
          <path d="M24 180 Q160 171 296 180" fill="none" stroke="rgba(185,130,120,0.28)" strokeWidth="1.6" strokeLinecap="round" />
          <Buddy kind="her" x={124} />
          <Buddy kind="him" x={198} />
          <motion.g initial={false} animate={{ x: given ? 30 : 0, y: given ? -4 : 0 }} transition={{ duration: 1.4, ease: [0.22, 0.61, 0.36, 1] }}>
            <g transform="translate(147 146)">
              <Prop type="letter" />
            </g>
          </motion.g>
          <AnimatePresence>
            {given && (
              <motion.path
                d="M160 70 C150 64 152 54 160 59 C168 54 170 64 160 70Z"
                fill="#C99B91"
                stroke="#4A3A35"
                strokeWidth="1.3"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1.2 }}
              />
            )}
          </AnimatePresence>
        </svg>
      </figure>

      <div className="end-area">
        <AnimatePresence mode="wait">
          {!given ? (
            <motion.button
              key="btn"
              type="button"
              className="soft-btn"
              onClick={() => setGiven(true)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.8 }}
            >
              {handover.button}
            </motion.button>
          ) : (
            <motion.div key="lines" className="end-lines" aria-live="polite">
              <motion.p className="end-line hand" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 1.4 }}>
                {handover.lines[0]}
              </motion.p>
              <motion.p className="end-line hand" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.4, duration: 1.4 }}>
                {handover.lines[1]}
              </motion.p>
              <motion.p className="end-sign" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5, duration: 1.4 }}>
                — {config.fromName}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

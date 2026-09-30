import { useEffect, useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { labels } from '../data/story'

/* A small taped "sorry" note. Tap it to open a hidden line. */
export default function FloatingNote({ text, message = '', side = 'right' }) {
  const [open, setOpen] = useState(false)
  const id = useId()

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className={`note note--${side}`}>
      <button
        type="button"
        className="note-paper hand"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        style={{ '--tilt': side === 'left' ? '-4deg' : '3deg' }}
      >
        {text}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={id}
            className="note-message"
            role="note"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.35 }}
          >
            {message.split('\n').map((l, i) => (
              <p key={i}>{l}</p>
            ))}
            <button type="button" className="text-btn" onClick={() => setOpen(false)}>
              {labels.close}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

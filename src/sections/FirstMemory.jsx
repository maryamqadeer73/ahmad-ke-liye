import { motion, useTransform } from 'framer-motion'
import ScrollStory from '../components/ScrollStory'
import { ScenePicture } from '../components/BubuScene'
import { firstMemory } from '../data/story'

/* Scene 02 — late night talks slowly turn into quiet waiting as he scrolls. */
function MemoryPicture({ progress }) {
  const nightOpacity = useTransform(progress, [0.3, 0.44], [1, 0])
  const waitOpacity = useTransform(progress, [0.34, 0.48], [0, 1])

  return (
    <div className="stack">
      <motion.div className="stack-layer" style={{ opacity: nightOpacity }}>
        <ScenePicture variant="late-night" />
        <div className="floaters" aria-hidden="true">
          {firstMemory.floaters.map((f, i) => (
            <span key={i} className="floater hand" style={{ '--i': i }}>
              {f}
            </span>
          ))}
        </div>
      </motion.div>
      <motion.div className="stack-layer" style={{ opacity: waitOpacity }}>
        <ScenePicture variant="waiting-phone" />
        <span className="waiting-note hand" aria-hidden="true">
          {firstMemory.waitingNote}
        </span>
      </motion.div>
    </div>
  )
}

export default function FirstMemory() {
  return (
    <ScrollStory
      id="pehli-yaad"
      tone="night"
      height="330vh"
      label="sab se pehli yaad"
      beats={firstMemory.beats}
      renderScene={(p) => <MemoryPicture progress={p} />}
    />
  )
}

import { motion, useReducedMotion, useTransform } from 'framer-motion'
import ScrollStory from '../components/ScrollStory'
import { ScenePicture } from '../components/BubuScene'
import { aatma } from '../data/story'

/* Scene 04 — the ghost follows him across the screen as he scrolls. */
function GhostPicture({ progress }) {
  const reduce = useReducedMotion()
  const x = useTransform(progress, [0, 1], reduce ? ['0%', '0%'] : ['-12%', '8%'])
  return (
    <motion.div className="ghost-track" style={{ x }}>
      <ScenePicture variant="ghost-chase" />
    </motion.div>
  )
}

export default function Aatma() {
  return (
    <ScrollStory
      id="aaatma"
      tone="playful"
      height="360vh"
      label="AaaTma"
      beats={aatma.beats}
      renderScene={(p) => <GhostPicture progress={p} />}
    />
  )
}

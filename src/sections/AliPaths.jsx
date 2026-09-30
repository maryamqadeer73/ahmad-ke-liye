import { motion, useTransform } from 'framer-motion'
import ScrollStory from '../components/ScrollStory'
import { Buddy, INK, Prop } from '../components/BubuScene'
import { ali, sceneLabels } from '../data/story'

/* Scene 07 — Bubu stands where two paths split, then leaves both and walks to a quiet letter. */
function PathsPicture({ progress }) {
  const x = useTransform(progress, [0.62, 0.9], [0, 70])
  const y = useTransform(progress, [0.62, 0.9], [0, 14])
  const pathsOpacity = useTransform(progress, [0.62, 0.9], [1, 0.35])
  const letterGlow = useTransform(progress, [0.6, 0.85], [0.25, 1])

  return (
    <svg viewBox="0 0 320 220" role="img" aria-label={sceneLabels.paths} focusable="false">
      <motion.g style={{ opacity: pathsOpacity }} fill="none" strokeLinecap="round">
        <path d="M150 208 C140 160 96 120 36 44" stroke="#D8B8A8" strokeWidth="14" />
        <path d="M170 208 C180 160 224 120 284 44" stroke="#D8B8A8" strokeWidth="14" />
        <path d="M150 208 C140 160 96 120 36 44" stroke="#FFF9F4" strokeWidth="2" strokeDasharray="2 9" />
        <path d="M170 208 C180 160 224 120 284 44" stroke="#FFF9F4" strokeWidth="2" strokeDasharray="2 9" />
      </motion.g>
      <g transform="translate(262 200)">
        <motion.circle r="20" fill="rgba(255,226,184,0.6)" style={{ opacity: letterGlow }} />
        <g transform="scale(1.3)">
          <Prop type="letter" />
        </g>
      </g>
      <motion.g style={{ x, y }}>
        <Buddy kind="her" x={160} y={184} s={0.8} />
      </motion.g>
      <path d="M20 214 H300" stroke={INK} strokeOpacity="0.08" />
    </svg>
  )
}

export default function AliPaths() {
  return (
    <ScrollStory
      id="ali"
      tone="hush"
      height="300vh"
      label="Ali ke bare mein bhi sach"
      beats={ali.beats}
      renderScene={(p) => <PathsPicture progress={p} />}
    />
  )
}

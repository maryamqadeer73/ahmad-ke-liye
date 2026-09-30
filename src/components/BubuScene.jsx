import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { config, sceneLabels } from '../data/story'

/*
  <BubuScene variant="late-night" />

  Draws an ORIGINAL little couple: "her" (Bubu, cream kitty-ish) and
  "him" (Dudu, round brown bear-ish). No copyrighted artwork is used.
  To use your own stickers, set config.sceneImages in src/data/story.js.
*/

export const INK = '#4A3A35'
const SW = 2.2

export const PALETTE = {
  him: { fur: '#A87A6C', belly: '#C9A193', inner: '#E8CFC2' },
  her: { fur: '#FFF6EE', belly: '#FBE9DD', inner: '#EDC6BA' },
}

/* viewBox 320 x 200, ground at y = 178 */
const VARIANTS = {
  'holding-letter': { him: { x: 104 }, her: { x: 196, prop: 'letter' } },
  'late-night': {
    back: ['window', 'headboard'],
    him: { x: 120, prop: 'phone', propPos: [-31, -44] },
    her: { x: 200, prop: 'phone', propPos: [31, -44] },
    front: ['blanket'],
  },
  'waiting-phone': {
    back: ['window', 'headboard'],
    her: { x: 160, prop: 'phone', propPos: [31, -44] },
    front: ['blanket'],
  },
  curtain: { him: { x: 86, mood: 'eyeroll' }, her: { x: 194 }, front: ['curtain'] },
  'ghost-chase': { her: { x: 96, y: 170, ghost: true }, him: { x: 222, mood: 'smirk' } },
  'sit-quiet': { her: { x: 160 } },
  'apart-quiet': { him: { x: 80, mood: 'sad' }, her: { x: 240, mood: 'sad' } },
  hug: { him: { x: 147 }, her: { x: 175 }, front: ['heart'] },
  future: { back: ['moon', 'house'], him: { x: 108 }, her: { x: 212 } },
  'alone-letter': { her: { x: 160, prop: 'letter' } },
}

function Face({ mood, kind }) {
  const my = kind === 'him' ? 10.5 : 8.5
  if (mood === 'eyeroll') {
    return (
      <g stroke={INK} strokeWidth="1.5" strokeLinecap="round">
        <circle cx="-9" cy="-2" r="3.8" fill="#fff" />
        <circle cx="9" cy="-2" r="3.8" fill="#fff" />
        <circle cx="-8" cy="-4.4" r="1.7" fill={INK} stroke="none" />
        <circle cx="10" cy="-4.4" r="1.7" fill={INK} stroke="none" />
        <path d={`M-4 ${my + 0.5} h8`} fill="none" />
      </g>
    )
  }
  return (
    <g fill="none" stroke={INK} strokeWidth="1.8" strokeLinecap="round">
      {mood === 'sad' && (
        <>
          <path d="M-14 -7.5 l7 -2.5" />
          <path d="M14 -7.5 l-7 -2.5" />
        </>
      )}
      {mood === 'sleep' ? (
        <>
          <path d="M-13 -2 q4 3 8 0" />
          <path d="M5 -2 q4 3 8 0" />
        </>
      ) : (
        <>
          <circle cx="-9" cy="-2" r="2.6" fill={INK} stroke="none" />
          <circle cx="9" cy="-2" r="2.6" fill={INK} stroke="none" />
        </>
      )}
      {mood === 'sad' && <path d={`M-3.5 ${my + 2} q3.5 -2.6 7 0`} />}
      {mood === 'smirk' && <path d={`M-4 ${my} q4 2.6 8 -1.6`} />}
      {mood !== 'sad' && mood !== 'smirk' && <path d={`M-3.5 ${my} q3.5 3 7 0`} />}
    </g>
  )
}

export function Head({ kind = 'her', mood = 'soft' }) {
  const c = PALETTE[kind]
  return (
    <g stroke={INK} strokeWidth={SW} strokeLinejoin="round">
      {kind === 'him' ? (
        <>
          <circle cx="-19" cy="-17" r="9" fill={c.fur} />
          <circle cx="-19" cy="-17" r="4" fill={c.inner} stroke="none" />
          <circle cx="19" cy="-17" r="9" fill={c.fur} />
          <circle cx="19" cy="-17" r="4" fill={c.inner} stroke="none" />
        </>
      ) : (
        <KittyEars c={c} />
      )}
      <ellipse cx="0" cy="0" rx="27" ry="23.5" fill={c.fur} />
      {kind === 'him' && <ellipse cx="0" cy="7" rx="11" ry="8" fill="#F3E3D6" strokeWidth="1.6" />}
      <ellipse cx="-16" cy="7" rx="4.5" ry="2.6" fill="#E7A99B" opacity="0.55" stroke="none" />
      <ellipse cx="16" cy="7" rx="4.5" ry="2.6" fill="#E7A99B" opacity="0.55" stroke="none" />
      {kind === 'him' ? (
        <ellipse cx="0" cy="3.5" rx="3.2" ry="2.2" fill={INK} stroke="none" />
      ) : (
        <ellipse cx="0" cy="4" rx="2" ry="1.4" fill="#C98B80" stroke="none" />
      )}
      <Face mood={mood} kind={kind} />
    </g>
  )
}

function KittyEars({ c }) {
  return (
    <>
      <path d="M-23 -6 L-18 -31 L-3 -21 Z" fill={c.fur} />
      <path d="M-18.5 -11 L-16.5 -24.5 L-9 -19 Z" fill={c.inner} stroke="none" />
      <path d="M23 -6 L18 -31 L3 -21 Z" fill={c.fur} />
      <path d="M18.5 -11 L16.5 -24.5 L9 -19 Z" fill={c.inner} stroke="none" />
    </>
  )
}

export function Prop({ type }) {
  switch (type) {
    case 'letter':
      return (
        <g transform="rotate(-8)">
          <rect x="-11" y="-8" width="24" height="16" rx="2" fill="#FFF9F4" stroke={INK} strokeWidth="1.8" />
          <path d="M-11 -8 L1 1 L13 -8" fill="none" stroke={INK} strokeWidth="1.4" />
          <path d="M1 3.5 c-2 -2 -4.2 0.3 0 3 c4.2 -2.7 2 -5 0 -3z" fill="#C99B91" />
        </g>
      )
    case 'phone':
      return (
        <g>
          <circle r="15" fill="rgba(255,225,180,0.35)" />
          <rect x="-6" y="-10" width="12" height="20" rx="2.6" fill={INK} />
          <rect x="-4.4" y="-8" width="8.8" height="15" rx="1.4" fill="#FFE9C9" />
        </g>
      )
    default:
      return null
  }
}

/* One character. Origin = feet centre. */
export function Buddy({ kind, x, y = 178, s = 1, mood = 'soft', prop, propPos = [22, -32], opacity = 1, ghost = false }) {
  const c = PALETTE[kind]

  if (ghost) {
    return (
      <g transform={`translate(${x} ${y}) scale(${s})`} opacity={opacity}>
        <ellipse cx="0" cy="9" rx="24" ry="4" fill="rgba(74,58,53,0.1)" />
        <g className="ghost-float" stroke={INK} strokeWidth={SW} strokeLinejoin="round">
          <g transform="translate(0 -60)">
            <KittyEars c={c} />
          </g>
          <path
            d="M-28 -60 C-28 -94 28 -94 28 -60 L31 -4 Q23 5 15.5 -4 Q8 5 0 -4 Q-8 5 -15.5 -4 Q-23 5 -31 -4 Z"
            fill="#FFFFFF"
          />
          <circle cx="-9" cy="-60" r="2.8" fill={INK} stroke="none" />
          <circle cx="9" cy="-60" r="2.8" fill={INK} stroke="none" />
          <ellipse cx="-16" cy="-52" rx="4.5" ry="2.6" fill="#E7A99B" opacity="0.6" stroke="none" />
          <ellipse cx="16" cy="-52" rx="4.5" ry="2.6" fill="#E7A99B" opacity="0.6" stroke="none" />
          <ellipse cx="0" cy="-49" rx="2.4" ry="3" fill={INK} stroke="none" />
        </g>
      </g>
    )
  }

  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} opacity={opacity}>
      <ellipse cx="0" cy="1" rx="30" ry="5" fill="rgba(74,58,53,0.12)" />
      <g className="buddy-breathe" stroke={INK} strokeWidth={SW} strokeLinejoin="round">
        <ellipse cx="-12" cy="-3" rx="9" ry="5.5" fill={c.fur} />
        <ellipse cx="12" cy="-3" rx="9" ry="5.5" fill={c.fur} />
        <ellipse cx="0" cy="-24" rx="26" ry="23" fill={c.fur} />
        <ellipse cx="0" cy="-19" rx="14" ry="12" fill={c.belly} stroke="none" />
        <g transform="translate(0 -60)">
          <Head kind={kind} mood={mood} />
        </g>
        <ellipse cx="-22" cy="-30" rx="7" ry="10" fill={c.fur} transform="rotate(25 -22 -30)" />
        <ellipse cx="22" cy="-30" rx="7" ry="10" fill={c.fur} transform="rotate(-25 22 -30)" />
        {prop && (
          <g transform={`translate(${propPos[0]} ${propPos[1]})`}>
            <Prop type={prop} />
            {prop === 'phone' && <ellipse cx="0" cy="10" rx="6" ry="4.5" fill={c.fur} />}
          </g>
        )}
      </g>
    </g>
  )
}

function Extra({ type }) {
  switch (type) {
    case 'moon':
      return (
        <g>
          <path d="M270 22 a20 20 0 1 0 18 32 a15 15 0 1 1 -18 -32z" fill="#FFF1D8" stroke="#E5CDB0" strokeWidth="1" />
          <circle cx="238" cy="30" r="1.6" fill="#E3C9B4" />
          <circle cx="300" cy="74" r="1.4" fill="#E3C9B4" />
        </g>
      )
    case 'window':
      return (
        <g stroke={INK} strokeWidth="1.8">
          <rect x="18" y="16" width="70" height="62" rx="8" fill="#6B4541" />
          <path d="M53 16 V78 M18 47 H88" strokeWidth="1.4" />
          <path d="M70 26 a9 9 0 1 0 8 14 a7 7 0 1 1 -8 -14z" fill="#FFF1D8" stroke="none" />
          <circle cx="30" cy="30" r="1.3" fill="#FFF1D8" stroke="none" />
          <circle cx="40" cy="62" r="1.1" fill="#FFF1D8" stroke="none" />
          <circle cx="75" cy="66" r="1.2" fill="#FFF1D8" stroke="none" />
        </g>
      )
    case 'headboard':
      return <path d="M58 150 V112 Q58 96 76 96 H244 Q262 96 262 112 V150 Z" fill="#D8B8A8" stroke={INK} strokeWidth="1.8" />
    case 'blanket':
      return (
        <g stroke={INK} strokeWidth="1.8" strokeLinejoin="round">
          <path d="M46 146 Q160 130 274 146 L278 186 Q160 194 42 186 Z" fill="#EFE1D4" />
          <path d="M80 160 q20 6 40 0 M190 162 q22 6 44 0" fill="none" strokeWidth="1.2" opacity="0.5" />
        </g>
      )
    case 'curtain':
      return (
        <g stroke={INK} strokeWidth="1.8" strokeLinejoin="round">
          <path d="M190 30 H316" strokeWidth="3" strokeLinecap="round" />
          <path d="M206 32 Q198 80 206 120 Q212 160 200 186 L316 186 L316 32 Z" fill="#D8B8A8" />
          <path d="M232 36 Q226 110 236 184 M262 36 Q256 110 266 184 M290 36 Q286 110 294 184" fill="none" strokeWidth="1.2" opacity="0.45" />
        </g>
      )
    case 'house':
      return (
        <g transform="translate(160 112) scale(0.85)" stroke={INK} strokeWidth="1.8" strokeLinejoin="round" opacity="0.9">
          <circle cx="13" cy="11" r="18" fill="rgba(255,226,184,0.45)" stroke="none" />
          <path d="M-28 2 L0 -22 L28 2" fill="#E7D5C7" />
          <rect x="-21" y="0" width="42" height="32" fill="#F3E6DA" />
          <rect x="-6" y="13" width="12" height="19" fill="#E7D5C7" />
          <rect x="9" y="7" width="8" height="8" fill="#FFE2B8" />
        </g>
      )
    case 'heart':
      return (
        <g transform="translate(161 78) scale(1.2)">
          <path d="M0 6 C-10 -1 -7 -11 0 -6 C7 -11 10 -1 0 6Z" fill="#C99B91" stroke={INK} strokeWidth="1.4" />
        </g>
      )
    default:
      return null
  }
}

export function SceneSvg({ variant, label }) {
  const v = VARIANTS[variant] || VARIANTS['sit-quiet']
  return (
    <svg viewBox="0 0 320 200" role="img" aria-label={label} focusable="false">
      <path d="M24 180 Q160 171 296 180" fill="none" stroke="rgba(185,130,120,0.28)" strokeWidth="1.6" strokeLinecap="round" />
      {(v.back || []).map((e) => (
        <Extra key={e} type={e} />
      ))}
      {v.him && <Buddy kind="him" {...v.him} />}
      {v.her && <Buddy kind="her" {...v.her} />}
      {(v.front || []).map((e) => (
        <Extra key={e} type={e} />
      ))}
    </svg>
  )
}

/* Picture only (no wrapper) — uses your own image if set in config. */
export function ScenePicture({ variant }) {
  const src = config.sceneImages?.[variant]
  const label = sceneLabels[variant] || ''
  return src ? <img src={src} alt={label} loading="lazy" decoding="async" /> : <SceneSvg variant={variant} label={label} />
}

/* Picture with gentle scroll parallax */
export default function BubuScene({ variant = 'sit-quiet', size = 'md', still = false, className = '' }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], still || reduce ? [0, 0] : [14, -14])

  return (
    <motion.figure ref={ref} className={`scene scene--${size} ${className}`} style={{ y }}>
      <ScenePicture variant={variant} />
    </motion.figure>
  )
}

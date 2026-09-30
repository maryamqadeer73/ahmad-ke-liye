import { useRef, useState } from 'react'
import { config, labels } from '../data/story'

/* "soft music" toggle. OFF by default, never autoplays. Hidden if no musicSrc. */
export default function MusicToggle() {
  const audioRef = useRef(null)
  const [on, setOn] = useState(false)
  if (!config.musicSrc) return null

  const toggle = async () => {
    const a = audioRef.current
    if (!a) return
    if (on) {
      a.pause()
      setOn(false)
      return
    }
    try {
      a.volume = 0.45
      await a.play()
      setOn(true)
    } catch {
      setOn(false)
    }
  }

  return (
    <>
      <audio ref={audioRef} src={config.musicSrc} loop preload="none" />
      <button type="button" className="music-toggle hand" aria-pressed={on} onClick={toggle}>
        <span className="music-bars" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        {labels.music}
      </button>
    </>
  )
}

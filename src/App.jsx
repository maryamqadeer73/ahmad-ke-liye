import { useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import Lenis from 'lenis'

import Atmosphere from './components/Atmosphere'
import MusicToggle from './components/MusicToggle'
import Intro from './sections/Intro'
import LetterScene from './sections/LetterScene'
import FirstMemory from './sections/FirstMemory'
import Drama from './sections/Drama'
import Aatma from './sections/Aatma'
import QuietScene from './sections/QuietScene'
import AliPaths from './sections/AliPaths'
import ShouldHaveDone from './sections/ShouldHaveDone'
import Trust from './sections/Trust'
import FinalHandover from './sections/FinalHandover'
import { finalApology, kal, marriage, mistake, moodShift, stillFeel } from './data/story'

export default function App() {
  const [stage, setStage] = useState('intro') // 'intro' -> 'story'

  useEffect(() => {
    document.body.style.overflow = stage === 'intro' ? 'hidden' : ''
    window.scrollTo(0, 0)
  }, [stage])

  // Smooth scrolling (off for people who prefer reduced motion)
  useEffect(() => {
    if (stage !== 'story') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true })
    let id
    const raf = (t) => {
      lenis.raf(t)
      id = requestAnimationFrame(raf)
    }
    id = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
    }
  }, [stage])

  return (
    <MotionConfig reducedMotion="user">
      <Atmosphere />
      <AnimatePresence mode="wait">
        {stage === 'intro' ? (
          <Intro key="intro" onOpen={() => setStage('story')} />
        ) : (
          <motion.main key="story" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            {/* Playful first... */}
            <LetterScene />
            <FirstMemory />
            <Drama />
            <Aatma />
            {/* ...then honest... */}
            <QuietScene data={moodShift} />
            <QuietScene data={mistake} />
            <AliPaths />
            <ShouldHaveDone />
            {/* ...then emotional... */}
            <QuietScene data={stillFeel} />
            <QuietScene data={kal} />
            <Trust />
            <QuietScene data={marriage} />
            {/* ...then peaceful. */}
            <QuietScene data={finalApology} />
            <FinalHandover />
          </motion.main>
        )}
      </AnimatePresence>
      {stage === 'story' && <MusicToggle />}
    </MotionConfig>
  )
}

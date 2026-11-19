import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { Music, VolumeX, RotateCcw } from 'lucide-react'
import { destinations, music, storageKey } from './config'
import useMusicBox from './hooks/useMusicBox'
import Envelope from './components/Envelope'
import Letter from './components/Letter'
import Adventures from './components/Adventures'
import Choice from './components/Choice'
import Confirmation from './components/Confirmation'

const SCREENS = ['envelope', 'letter', 'adventures', 'choice', 'confirmation']

const readSaved = () => {
  try {
    const id = localStorage.getItem(storageKey)
    return destinations.some((d) => d.id === id) ? id : null
  } catch { return null }
}
const writeSaved = (id) => {
  try { id ? localStorage.setItem(storageKey, id) : localStorage.removeItem(storageKey) } catch { /* private mode */ }
}

export default function App() {
  const saved = readSaved()
  const [screen, setScreen] = useState(saved ? 'confirmation' : 'envelope')
  const [opened, setOpened] = useState(saved ? destinations.map((d) => d.id) : [])
  const [selected, setSelected] = useState(saved)
  const { playing, toggle } = useMusicBox()

  const go = useCallback((s) => {
    setScreen(s)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  useEffect(() => { document.documentElement.dataset.screen = screen }, [screen])

  const markOpened = (id) => setOpened((o) => (o.includes(id) ? o : [...o, id]))

  const confirm = () => { writeSaved(selected); go('confirmation') }
  const changeMind = () => { writeSaved(null); go('choice') }
  const restart = () => {
    writeSaved(null); setSelected(null); setOpened([]); go('envelope')
  }

  const chosen = destinations.find((d) => d.id === selected)
  const step = SCREENS.indexOf(screen)

  return (
    <MotionConfig reducedMotion="user">
      <div className="paper relative min-h-[100svh] overflow-x-hidden">
        {/* top bar: progress dots + music + restart */}
        <header className="fixed inset-x-0 top-0 z-20 flex items-center justify-between px-3 pt-[max(.5rem,env(safe-area-inset-top))]">
          <div className="flex gap-1.5 pl-2" aria-label={`Step ${step + 1} of ${SCREENS.length}`}>
            {SCREENS.map((s, i) => (
              <span key={s} className={`h-1.5 rounded-full transition-all ${i <= step ? 'w-5 bg-coffee/70' : 'w-1.5 bg-coffee/20'}`} />
            ))}
          </div>
          <div className="flex gap-2">
            {screen !== 'envelope' && screen !== 'confirmation' && (
              <button type="button" onClick={restart} aria-label="Restart from the beginning"
                className="grid h-11 w-11 place-items-center rounded-full bg-ivory/85 text-coffee soft-shadow backdrop-blur">
                <RotateCcw className="h-4 w-4" />
              </button>
            )}
            <button
              type="button" onClick={toggle} aria-pressed={playing}
              aria-label={playing ? 'Turn music off' : 'Turn music on'}
              className="flex h-11 items-center gap-1.5 rounded-full bg-ivory/85 px-3.5 text-sm text-coffee soft-shadow backdrop-blur"
            >
              {playing ? <Music className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              <span>{music.label} {playing ? 'on' : 'off'}</span>
            </button>
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.main
            key={screen}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            transition={{ duration: .45, ease: 'easeOut' }}
          >
            {screen === 'envelope' && <Envelope onOpen={() => go('letter')} />}
            {screen === 'letter' && <Letter onNext={() => go('adventures')} />}
            {screen === 'adventures' && <Adventures opened={opened} onOpened={markOpened} onNext={() => go('choice')} />}
            {screen === 'choice' && <Choice selected={selected} onSelect={setSelected} onConfirm={confirm} />}
            {screen === 'confirmation' && chosen && (
              <Confirmation destination={chosen} onChangeMind={changeMind} onRestart={restart} />
            )}
          </motion.main>
        </AnimatePresence>
      </div>
    </MotionConfig>
  )
}

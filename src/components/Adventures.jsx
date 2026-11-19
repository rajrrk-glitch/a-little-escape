import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, RotateCcw } from 'lucide-react'
import { adventuresIntro, destinations } from '../config'
import CoverArt from './CoverArt'
import DestinationDetail from './DestinationDetail'
import { Heart, Sparkle } from './Doodles'

function SealedCard({ d, index, opened, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: [-2, 1.5, -1][index] }}
      transition={{ delay: .3 + index * .15, type: 'spring', stiffness: 110, damping: 14 }}
      whileHover={{ y: -6, rotate: 0 }}
      className="relative"
    >
      <button
        type="button" onClick={onOpen}
        aria-label={opened ? `Revisit ${d.title}` : `Open ${d.title}`}
        className="group block w-full overflow-hidden rounded-2xl text-left soft-shadow"
        style={{ background: d.theme.paper, color: d.theme.ink }}
      >
        <div className="relative aspect-[3/2] overflow-hidden">
          <CoverArt id={d.id} />
          {!opened && (
            <div className="absolute inset-0 grid place-items-center bg-[#604944]/10 backdrop-blur-[1px]">
              <span
                className="grid h-16 w-16 place-items-center rounded-full text-ivory shadow-lg transition-transform group-hover:scale-110"
                style={{ background: d.sealColor }}
              >
                <Heart className="h-8 w-8" filled />
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[.2em] opacity-70">No. {index + 1}</p>
            <p className="font-serif text-2xl font-semibold leading-tight">{d.title}</p>
            <p className="font-hand text-lg opacity-80">{opened ? `${d.name} ♡` : `${d.teaser}…`}</p>
          </div>
          <span className="shrink-0 rounded-full border border-dashed px-3 py-1.5 text-xs" style={{ borderColor: d.theme.ink }}>
            {opened ? <span className="inline-flex items-center gap-1"><RotateCcw className="h-3 w-3" aria-hidden="true" />Revisit</span> : 'Break the seal'}
          </span>
        </div>
      </button>
    </motion.div>
  )
}

function RevealSheet({ d, onClose }) {
  const closeRef = useRef(null)
  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-end justify-center bg-[#3b2b28]/45 sm:items-center sm:p-6"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog" aria-modal="true" aria-label={`${d.title}: ${d.name}`}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 80, rotateY: -70, scale: .9, opacity: 0 }}
        animate={{ y: 0, rotateY: 0, scale: 1, opacity: 1 }}
        exit={{ y: 60, opacity: 0, scale: .95 }}
        transition={{ type: 'spring', stiffness: 120, damping: 16 }}
        className="relative max-h-[92svh] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-t-2xl sm:rounded-2xl"
        style={{ background: d.theme.paper, transformPerspective: 1200 }}
      >
        <button
          ref={closeRef} type="button" onClick={onClose} aria-label="Close"
          className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-ivory/90 text-coffee soft-shadow"
        >
          <X className="h-5 w-5" />
        </button>
        {/* confetti burst */}
        <div className="pointer-events-none absolute inset-x-0 top-24 z-10 flex justify-center" aria-hidden="true">
          {[...Array(8)].map((_, i) => (
            <motion.span
              key={i} className="absolute text-pink"
              initial={{ opacity: 1, x: 0, y: 0, scale: .6 }}
              animate={{ opacity: 0, x: Math.cos((i / 8) * Math.PI * 2) * 140, y: Math.sin((i / 8) * Math.PI * 2) * 90, scale: 1.1 }}
              transition={{ duration: 1.1, ease: 'easeOut', delay: .2 }}
            >
              {i % 2 ? <Heart className="w-5" filled /> : <Sparkle className="w-5" />}
            </motion.span>
          ))}
        </div>
        <DestinationDetail d={d} />
        <div className="px-5 pb-6 sm:px-7">
          <button type="button" onClick={onClose} className="btn w-full">Close & keep exploring</button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Adventures({ opened, onOpened, onNext }) {
  const [active, setActive] = useState(null)
  const allOpened = destinations.every((d) => opened.includes(d.id))
  const current = destinations.find((d) => d.id === active)

  const open = (id) => { setActive(id); onOpened(id) }

  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-24 pt-14 sm:px-6">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-serif text-4xl font-semibold leading-tight text-coffee sm:text-5xl">{adventuresIntro.heading}</h2>
        <div className="mt-5 space-y-1 font-hand text-[22px] leading-snug text-coffee/90">
          {adventuresIntro.lines.map((l, i) => (
            <motion.p key={l} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 + i * .25 }}>{l}</motion.p>
          ))}
        </div>
        <p className="mt-6 text-sm text-coffee/70">{adventuresIntro.hint}</p>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((d, i) => (
          <SealedCard key={d.id} d={d} index={i} opened={opened.includes(d.id)} onOpen={() => open(d.id)} />
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center gap-3 text-center" aria-live="polite">
        <p className="font-hand text-2xl text-coffee">
          {allOpened ? adventuresIntro.allOpened : `${opened.length} of ${destinations.length} opened`}
        </p>
        {allOpened && (
          <motion.button initial={{ scale: .9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} type="button" onClick={onNext} className="btn">
            {adventuresIntro.button}
          </motion.button>
        )}
      </div>

      <AnimatePresence>{current && <RevealSheet d={current} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  )
}

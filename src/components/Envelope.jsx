import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { envelope } from '../config'
import { Heart, FloatingDoodles, Squiggle } from './Doodles'

export default function Envelope({ onOpen }) {
  const [opening, setOpening] = useState(false)
  const reduce = useReducedMotion()

  const open = () => {
    if (opening) return
    setOpening(true)
    setTimeout(onOpen, reduce ? 150 : 1700)
  }

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 py-12 text-center">
      <FloatingDoodles />

      <motion.p
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }}
        className="mb-3 rounded-full border border-dashed border-coffee/40 px-4 py-1 text-[11px] font-medium tracking-[.25em] text-coffee/80"
      >
        {envelope.tag}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 }}
        className="font-serif text-5xl font-semibold text-coffee sm:text-6xl"
      >
        {envelope.greeting}
      </motion.h1>
      <Squiggle className="mt-2 w-28 text-pink" />
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .55 }}
        className="mt-3 font-hand text-2xl text-coffee/80"
      >
        {envelope.line}
      </motion.p>

      {/* Envelope */}
      <div className="relative mt-10 w-[min(84vw,340px)]" style={{ perspective: 900 }}>
        <motion.div
          className="relative aspect-[3/2] w-full"
          animate={opening && !reduce ? { y: [0, -6, 0, 40], scale: [1, 1.03, 1, .96], opacity: [1, 1, 1, 0] } : {}}
          transition={{ duration: 1.6, times: [0, .2, .55, 1], delay: .2 }}
        >
          {/* back */}
          <div className="absolute inset-0 rounded-md bg-[#E6CFC6] soft-shadow" />
          {/* letter peeking out */}
          <motion.div
            className="absolute inset-x-[8%] top-[10%] h-[80%] rounded-sm bg-ivory lined soft-shadow"
            animate={opening ? { y: reduce ? 0 : '-55%' } : { y: 0 }}
            transition={{ delay: .55, duration: .7, ease: 'easeOut' }}
          >
            <p className="pt-3 font-hand text-xl text-coffee/80">for you ♡</p>
          </motion.div>
          {/* front pocket */}
          <div
            className="absolute inset-0 rounded-md bg-[#EBD8D0]"
            style={{ clipPath: 'polygon(0 30%, 50% 70%, 100% 30%, 100% 100%, 0 100%)' }}
          />
          <div
            className="absolute inset-0 rounded-md bg-[#E3CBC2]"
            style={{ clipPath: 'polygon(0 100%, 50% 62%, 100% 100%)' }}
          />
          {/* flap */}
          <motion.div
            className="absolute inset-x-0 top-0 h-[62%] origin-top bg-[#DDBFB5]"
            style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)', backfaceVisibility: 'hidden' }}
            animate={opening ? { rotateX: 180, zIndex: 0 } : { rotateX: 0 }}
            transition={{ duration: .55, ease: 'easeInOut' }}
          />
          {/* wax seal */}
          <motion.div
            className="absolute left-1/2 top-[52%] z-10 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#A8555A] text-ivory shadow-md"
            animate={opening ? { scale: 0, rotate: 30, opacity: 0 } : { scale: [1, 1.06, 1] }}
            transition={opening ? { duration: .3 } : { duration: 2.4, repeat: Infinity }}
          >
            <Heart className="h-7 w-7" filled />
          </motion.div>
          {/* stamp + postmark */}
          <div className="absolute right-3 top-3 z-0 h-10 w-8 rotate-6 border-2 border-dotted border-coffee/30 bg-ivory p-0.5">
            <div className="grid h-full w-full place-items-center bg-pink/60 text-[10px] text-coffee">♡</div>
          </div>
        </motion.div>
      </div>

      <motion.button
        type="button" onClick={open} disabled={opening}
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: opening ? 0 : 1, y: 0 }} transition={{ delay: opening ? 0 : .8 }}
        className="btn mt-10"
      >
        {envelope.button}
      </motion.button>
    </section>
  )
}

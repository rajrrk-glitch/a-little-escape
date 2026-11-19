import { motion } from 'framer-motion'
import { MapPin, CalendarHeart, RotateCcw, Undo2 } from 'lucide-react'
import { confirmation, getaway } from '../config'
import Photo from './Photo'
import CoverArt from './CoverArt'
import { Heart, Sparkle, Star, FloatingDoodles, Squiggle } from './Doodles'

export default function Confirmation({ destination: d, onChangeMind, onRestart }) {
  return (
    <section className="relative mx-auto flex min-h-[100svh] max-w-3xl flex-col items-center px-4 pb-20 pt-14 text-center sm:px-6">
      <FloatingDoodles />
      <motion.h2
        initial={{ scale: .6, opacity: 0, rotate: -6 }} animate={{ scale: 1, opacity: 1, rotate: -2 }}
        transition={{ type: 'spring', stiffness: 160, damping: 10 }}
        className="font-serif text-5xl font-bold tracking-wide text-coffee sm:text-6xl"
      >
        {confirmation.heading}
      </motion.h2>
      <Squiggle className="mt-2 w-32 text-pink" />
      <p className="mt-3 font-hand text-2xl text-coffee/90">{confirmation.line}</p>

      {/* postcard */}
      <motion.div
        initial={{ y: 40, opacity: 0, rotate: 4 }} animate={{ y: 0, opacity: 1, rotate: -1.5 }}
        transition={{ delay: .3, type: 'spring', stiffness: 90, damping: 14 }}
        className="postcard-edge mt-10 w-full max-w-xl soft-shadow"
      >
        <div className="grid gap-0 bg-[#FFFBF7] text-left sm:grid-cols-2" style={{ color: d.theme.ink }}>
          <Photo photo={d.photos[0]} fallback={<CoverArt id={d.id} />} className="aspect-[4/3] h-full w-full sm:aspect-auto" rounded="rounded-none" />
          <div className="relative p-5">
            <div className="absolute right-3 top-3 h-12 w-10 rotate-6 border-2 border-dotted border-coffee/30 bg-rose p-1">
              <Heart className="h-full w-full text-[#A8555A]" filled />
            </div>
            <p className="text-[11px] font-medium uppercase tracking-[.2em] opacity-70">Destination</p>
            <p className="pr-12 font-serif text-3xl font-semibold leading-tight">{d.name}</p>
            <p className="mt-1 flex items-center gap-1 text-sm opacity-80"><MapPin className="h-4 w-4" aria-hidden="true" />{d.location}</p>
            <p className="mt-2 font-hand text-xl">{d.title}</p>
            <p className="mt-3 flex items-center gap-1.5 border-t border-dashed border-coffee/30 pt-3 text-sm">
              <CalendarHeart className="h-4 w-4 shrink-0" aria-hidden="true" /> {getaway.dates || getaway.note}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }} className="mt-10 max-w-md">
        {confirmation.message.map((m) => (
          <p key={m} className="font-hand text-[26px] leading-snug text-coffee">{m}</p>
        ))}
        <div className="mt-6 font-hand text-2xl text-coffee">
          <p>{confirmation.signOff}</p>
          <p className="text-3xl font-bold">{confirmation.signature}</p>
        </div>
        <p className="mt-6 text-xs text-coffee/60">{confirmation.disclaimer}</p>
      </motion.div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button type="button" onClick={onChangeMind} className="btn-ghost text-sm"><Undo2 className="h-4 w-4" aria-hidden="true" />{confirmation.changeMind}</button>
        <button type="button" onClick={onRestart} className="btn-ghost text-sm"><RotateCcw className="h-4 w-4" aria-hidden="true" />{confirmation.restart}</button>
      </div>

      <div className="pointer-events-none mt-8 flex gap-3 text-pink" aria-hidden="true">
        <Star className="w-5 float" /><Heart className="w-6 float" filled style={{ animationDelay: '.5s' }} /><Sparkle className="w-5 float" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  )
}

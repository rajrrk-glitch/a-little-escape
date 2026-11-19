import { motion } from 'framer-motion'
import { MapPin, Check } from 'lucide-react'
import { choice, destinations } from '../config'
import Photo from './Photo'
import CoverArt from './CoverArt'
import { Heart } from './Doodles'

export default function Choice({ selected, onSelect, onConfirm }) {
  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-28 pt-14 sm:px-6">
      <div className="text-center">
        <p className="font-hand text-3xl text-coffee/90">{choice.heading}</p>
        <h2 className="mt-1 font-serif text-4xl font-semibold leading-tight text-coffee sm:text-5xl">{choice.subheading}</h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3" role="radiogroup" aria-label="Choose our escape">
        {destinations.map((d, i) => {
          const isSel = selected === d.id
          const dim = selected && !isSel
          return (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: dim ? .6 : 1, y: 0, scale: isSel ? 1.02 : 1 }}
              transition={{ delay: i * .08, type: 'spring', stiffness: 140, damping: 16 }}
              className={`relative flex flex-col overflow-hidden rounded-2xl soft-shadow transition-[outline] ${isSel ? 'outline outline-[3px] outline-offset-4 outline-[#B5838D]' : ''}`}
              style={{ background: d.theme.paper, color: d.theme.ink }}
            >
              {isSel && (
                <motion.span
                  initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: -12 }}
                  className="absolute right-3 top-3 z-10 rounded-full bg-[#A8555A] px-3 py-1 font-hand text-lg text-ivory shadow-md"
                >
                  {choice.chosen}
                </motion.span>
              )}
              <Photo photo={d.photos[0]} fallback={<CoverArt id={d.id} />} className="aspect-[4/3] w-full" rounded="rounded-none" />
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[11px] font-medium uppercase tracking-[.2em] opacity-70">{d.title}</p>
                <h3 className="font-serif text-3xl font-semibold leading-tight">{d.name}</h3>
                <p className="mt-1 flex items-center gap-1 text-sm opacity-80"><MapPin className="h-4 w-4" aria-hidden="true" />{d.location}</p>
                <p className="mt-3 font-hand text-xl leading-snug">“{d.description}”</p>
                <ul className="mb-5 mt-3 space-y-1.5 text-sm">
                  {d.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: d.theme.accent }} aria-hidden="true" />{h}</li>
                  ))}
                </ul>
                <button
                  type="button" role="radio" aria-checked={isSel}
                  onClick={() => onSelect(d.id)}
                  className={`mt-auto ${isSel ? 'btn' : 'btn-ghost'} w-full`}
                >
                  {isSel && <Heart className="h-4 w-4" filled />}
                  {choice.buttonFor(d.title)}
                </button>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* sticky confirm bar */}
      <motion.div
        initial={false}
        animate={{ y: selected ? 0 : 120, opacity: selected ? 1 : 0 }}
        className="fixed inset-x-0 bottom-0 z-30 flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
        aria-hidden={!selected}
      >
        <button type="button" onClick={onConfirm} tabIndex={selected ? 0 : -1} className="btn w-full max-w-sm text-base">
          {choice.confirm}
        </button>
      </motion.div>
    </section>
  )
}

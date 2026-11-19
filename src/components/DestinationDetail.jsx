import { motion } from 'framer-motion'
import { MapPin, Check, ExternalLink } from 'lucide-react'
import Photo from './Photo'
import CoverArt from './CoverArt'

// Full reveal of one destination (Screen 4 content). Used inside the reveal sheet.
export default function DestinationDetail({ d }) {
  const [cover, ...rest] = d.photos
  return (
    <div style={{ color: d.theme.ink }}>
      <div className="relative">
        <Photo photo={cover} fallback={<CoverArt id={d.id} />} className="aspect-[4/3] w-full sm:aspect-[16/9]" rounded="rounded-t-2xl" />
        <span className="absolute left-3 top-3 rounded-full bg-ivory/90 px-3 py-1 font-hand text-lg soft-shadow">
          {d.title}
        </span>
      </div>

      <div className="px-5 pb-6 pt-5 sm:px-7">
        <motion.h3
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25 }}
          className="font-serif text-4xl font-semibold leading-none"
        >
          {d.name}
        </motion.h3>
        <p className="mt-2 flex items-center gap-1 text-sm opacity-80">
          <MapPin className="h-4 w-4" aria-hidden="true" /> {d.location}
        </p>
        <p className="mt-4 font-hand text-2xl leading-snug">“{d.description}”</p>

        <ul className="mt-4 space-y-2">
          {d.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-[15px]">
              <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: d.theme.accent }} aria-hidden="true" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {d.variants && (
          <div className="mt-5">
            <p className="font-hand text-xl">Two cabins to choose from:</p>
            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              {d.variants.map((v) => (
                <a
                  key={v.name} href={v.url} target="_blank" rel="noreferrer"
                  className="block rounded-xl border border-dashed p-3 transition hover:bg-white/60"
                  style={{ borderColor: d.theme.accent }}
                >
                  <span className="flex items-center justify-between gap-2 font-medium">
                    {v.name} <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-60" aria-hidden="true" />
                  </span>
                  <span className="mt-1 block text-sm opacity-80">{v.detail}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {rest.length > 0 && (
          <div className="mt-5 grid grid-cols-2 gap-3">
            {rest.map((p, i) => {
              const wide = rest.length % 2 === 1 && i === rest.length - 1
              return (
                <figure key={p.alt} className={`bg-white p-1.5 soft-shadow ${wide ? 'col-span-2 rotate-1' : i % 2 ? 'rotate-2' : '-rotate-2'}`}>
                  <Photo photo={p} className={`${wide ? 'aspect-[2/1]' : 'aspect-square'} w-full`} rounded="rounded-none" />
                  <figcaption className="px-1 pt-1 text-center font-hand text-sm leading-tight text-coffee/80">{p.alt}</figcaption>
                </figure>
              )
            })}
          </div>
        )}

        {d.footnote && <p className="mt-5 text-xs italic opacity-70">{d.footnote}</p>}
        {d.website && (
          <a href={d.website} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 text-xs underline decoration-dotted opacity-80">
            Official website <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  )
}

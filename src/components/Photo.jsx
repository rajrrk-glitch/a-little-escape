import { useState } from 'react'
import { ImageOff } from 'lucide-react'

// Shows a local property photo. If the file hasn't been added yet, shows a clearly
// labelled placeholder that names the source so it can be replaced manually.
export default function Photo({ photo, className = '', rounded = 'rounded-xl', fallback = null }) {
  const [failed, setFailed] = useState(!photo?.src)

  if (failed) {
    const isUrl = photo?.source?.startsWith('http')
    return (
      <figure className={`relative flex flex-col items-center justify-center overflow-hidden bg-beige/70 text-center ${rounded} ${className}`}>
        {fallback && <div className="absolute inset-0 opacity-60">{fallback}</div>}
        <figcaption className="relative z-10 m-3 rounded-lg bg-ivory/90 px-3 py-2 text-[11px] leading-snug text-coffee/80 soft-shadow">
          <span className="flex items-center justify-center gap-1 font-medium text-coffee">
            <ImageOff className="h-3.5 w-3.5" aria-hidden="true" /> Photo placeholder
          </span>
          <span className="block">{photo?.alt}</span>
          {isUrl && (
            <a href={photo.source} target="_blank" rel="noreferrer" className="underline decoration-dotted">
              see the real one ↗
            </a>
          )}
        </figcaption>
      </figure>
    )
  }

  return (
    <img
      src={photo.src}
      alt={photo.alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`object-cover ${rounded} ${className}`}
    />
  )
}

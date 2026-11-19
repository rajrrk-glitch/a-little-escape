// Small hand-drawn SVG doodles. All strokes use currentColor so they tint with the parent.

export function Heart({ className = '', filled = false, ...rest }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" {...rest}>
      <path
        d="M16 27c-1-.9-11.5-7.6-11.5-15A6 6 0 0 1 16 8.6 6 6 0 0 1 27.5 12c0 7.4-10.5 14.1-11.5 15Z"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

export function Star({ className = '', ...rest }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" {...rest}>
      <path d="M16 3.5 18.6 13l9.9.5-7.8 6 2.8 9.4L16 23.6l-7.5 5.3 2.8-9.4-7.8-6 9.9-.5Z"
        fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  )
}

export function Sparkle({ className = '', ...rest }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" {...rest}>
      <path d="M16 4c.8 6.5 3.5 9.2 12 12-8.5 2.8-11.2 5.5-12 12-.8-6.5-3.5-9.2-12-12 8.5-2.8 11.2-5.5 12-12Z"
        fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

export function Squiggle({ className = '' }) {
  return (
    <svg viewBox="0 0 160 16" className={className} aria-hidden="true">
      <path d="M2 9c10-8 18 8 28 0s18 8 28 0 18 8 28 0 18 8 28 0 18 8 28 0 10 4 16 0"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function Arrow({ className = '' }) {
  return (
    <svg viewBox="0 0 80 50" className={className} aria-hidden="true">
      <path d="M4 8c18 2 40 10 52 30M50 30l7 9 2-11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Floating background confetti of hearts/stars. Purely decorative.
export function FloatingDoodles({ density = 'normal' }) {
  const items = [
    { C: Heart, cls: 'left-[6%] top-[12%] w-6 text-pink', r: '-12deg', d: 0 },
    { C: Star, cls: 'right-[8%] top-[18%] w-5 text-coffee/40', r: '8deg', d: 1.2 },
    { C: Sparkle, cls: 'left-[12%] bottom-[18%] w-6 text-pink/80', r: '0deg', d: 2 },
    { C: Heart, cls: 'right-[14%] bottom-[10%] w-4 text-coffee/30', r: '14deg', d: .6 },
    { C: Sparkle, cls: 'right-[4%] top-[48%] w-4 text-pink', r: '0deg', d: 1.8 },
    { C: Star, cls: 'left-[3%] top-[55%] w-4 text-coffee/30', r: '-6deg', d: 2.4 },
  ]
  const shown = density === 'light' ? items.slice(0, 3) : items
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {shown.map(({ C, cls, r, d }, i) => (
        <div key={i} className={`absolute float ${cls}`} style={{ '--r': r, animationDelay: `${d}s` }}>
          <C className="w-full" />
        </div>
      ))}
    </div>
  )
}

// Polaroid doodles used when no personal photo is configured.
export function PolaroidDoodle({ kind }) {
  if (kind === 'cups') {
    return (
      <svg viewBox="0 0 120 100" className="h-full w-full" aria-hidden="true">
        <rect width="120" height="100" fill="#E6DCCB" />
        <g fill="none" stroke="#604944" strokeWidth="2" strokeLinecap="round">
          <path d="M28 46h26l-3 26H31Z" /><path d="M54 52c8 0 8 12 0 12" />
          <path d="M66 46h26l-3 26H69Z" /><path d="M66 52c-8 0-8 12 0 12" />
          <path d="M36 38c-2-5 3-6 1-11M46 38c-2-5 3-6 1-11M74 38c-2-5 3-6 1-11M84 38c-2-5 3-6 1-11" opacity=".5" />
        </g>
        <path d="M60 24c-1-.9-6-3.6-6-7.4A3 3 0 0 1 60 15a3 3 0 0 1 6 1.6c0 3.8-5 6.5-6 7.4Z" fill="#D9AAA9" />
      </svg>
    )
  }
  if (kind === 'mountains') {
    return (
      <svg viewBox="0 0 120 100" className="h-full w-full" aria-hidden="true">
        <rect width="120" height="100" fill="#E8CFCB" />
        <circle cx="88" cy="28" r="10" fill="#F8EFE9" />
        <path d="M0 80 34 40l20 22 18-18 48 36v20H0Z" fill="#B9A08F" />
        <path d="M0 88 40 62l22 14 20-10 38 18v16H0Z" fill="#8E7468" />
        <path d="M20 30q4-4 8 0M32 24q4-4 8 0" fill="none" stroke="#604944" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 120 100" className="h-full w-full" aria-hidden="true">
      <rect width="120" height="100" fill="#F3E3DF" />
      <path d="M60 78c-2-1.8-22-14-22-28a11 11 0 0 1 22-5 11 11 0 0 1 22 5c0 14-20 26.2-22 28Z" fill="#D9AAA9" />
      <text x="60" y="56" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="18" fill="#604944">8</text>
      <path d="M22 26l3 3M25 26l-3 3M96 70l3 3M99 70l-3 3" stroke="#604944" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

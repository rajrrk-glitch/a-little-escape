// Illustrated "sealed card" covers — one distinct identity per escape.
// They hide the destination and never pretend to be photographs.

function Luxe() {
  return (
    <svg viewBox="0 0 300 200" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="200" fill="#F3E3DF" />
      <circle cx="232" cy="52" r="26" fill="#F8EFE9" />
      {/* building silhouette with lit windows */}
      <rect x="60" y="56" width="70" height="144" rx="4" fill="#B5838D" opacity=".85" />
      <rect x="138" y="86" width="52" height="114" rx="4" fill="#C9A27E" opacity=".8" />
      {[0, 1, 2, 3, 4, 5].map((r) => [0, 1, 2].map((c) => (
        <rect key={`${r}-${c}`} x={70 + c * 20} y={68 + r * 20} width="10" height="12" rx="2" fill={(r + c) % 3 ? '#F8EFE9' : '#F6D8A8'} />
      )))}
      {/* bubbles of a jacuzzi */}
      <g fill="none" stroke="#604944" strokeWidth="2" opacity=".7">
        <circle cx="222" cy="150" r="6" /><circle cx="240" cy="134" r="4" /><circle cx="252" cy="152" r="8" /><circle cx="236" cy="116" r="3" />
      </g>
      {/* champagne glasses */}
      <g stroke="#604944" strokeWidth="2.2" fill="none" strokeLinecap="round">
        <path d="M206 168l6-22h12l-4 22M212 168h8" /><path d="M244 168l4-22h12l2 22M246 168h14" />
      </g>
      <path d="M232 132c-1-.9-6-3.6-6-7.4a3 3 0 0 1 6-1.6 3 3 0 0 1 6 1.6c0 3.8-5 6.5-6 7.4Z" fill="#D9AAA9" />
    </svg>
  )
}

function Nature() {
  return (
    <svg viewBox="0 0 300 200" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="200" fill="#E9E6D6" />
      <circle cx="70" cy="50" r="20" fill="#F6D8A8" />
      <path d="M0 130 70 70l50 40 60-56 120 86v60H0Z" fill="#9AAB89" />
      <path d="M0 160 90 112l60 30 70-36 80 50v44H0Z" fill="#7D8F69" />
      {/* lake */}
      <path d="M0 176c50-10 110 6 160-2s100-8 140 4v22H0Z" fill="#A7BCC4" />
      {/* chalet */}
      <path d="M176 140l26-26 26 26v24h-52Z" fill="#E6DCCB" stroke="#604944" strokeWidth="2" strokeLinejoin="round" />
      <path d="M170 142l32-34 32 34" fill="none" stroke="#604944" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="196" y="146" width="12" height="18" fill="#F6D8A8" stroke="#604944" strokeWidth="1.5" />
      {/* pines */}
      {[40, 58, 254, 272].map((x, i) => (
        <path key={x} d={`M${x} ${150 - (i % 2) * 8}l10 22h-20Z M${x} ${140 - (i % 2) * 8}l8 18h-16Z`} fill="#4F5641" />
      ))}
      <path d="M110 40q5-5 10 0M126 34q5-5 10 0" fill="none" stroke="#4F5641" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function Ultimate() {
  return (
    <svg viewBox="0 0 300 200" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="night" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#4B3A4F" /><stop offset="1" stopColor="#8C5A50" />
        </linearGradient>
      </defs>
      <rect width="300" height="200" fill="url(#night)" />
      {[[30, 30], [80, 18], [130, 40], [190, 22], [250, 36], [270, 70], [56, 70], [160, 64], [220, 60]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 ? 1.4 : 2.2} fill="#F8EFE9" opacity=".9" />
      ))}
      <path d="M236 30a14 14 0 1 0 12 22 11 11 0 1 1-12-22Z" fill="#F6D8A8" />
      <path d="M0 150 60 104l50 30 60-50 130 70v46H0Z" fill="#3E3040" opacity=".8" />
      {/* cabin with glowing window */}
      <path d="M96 168v-34l34-26 34 26v34Z" fill="#E6DCCB" />
      <path d="M90 136l40-32 40 32" fill="none" stroke="#F8EFE9" strokeWidth="3" strokeLinecap="round" />
      <rect x="116" y="140" width="28" height="22" rx="2" fill="#F6D8A8" />
      {/* plunge pool + steam */}
      <ellipse cx="214" cy="176" rx="46" ry="12" fill="#9DB1C7" />
      <path d="M200 160c-3-6 4-8 1-14M214 158c-3-6 4-8 1-14M228 160c-3-6 4-8 1-14" fill="none" stroke="#F8EFE9" strokeWidth="1.8" strokeLinecap="round" opacity=".7" />
      {/* candles */}
      {[60, 72].map((x) => (
        <g key={x}><rect x={x} y="166" width="7" height="14" rx="1.5" fill="#F8EFE9" /><path d={`M${x + 3.5} 158c-3 4 0 7 0 7s3-3 0-7Z`} fill="#F6D8A8" /></g>
      ))}
    </svg>
  )
}

export default function CoverArt({ id }) {
  if (id === 'luxe') return <Luxe />
  if (id === 'nature') return <Nature />
  return <Ultimate />
}

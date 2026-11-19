// ─────────────────────────────────────────────────────────────
//  A Little Escape for Us ♡ — central configuration
//  Every name, line of copy, destination and image lives here.
//  Marathi is written in Roman script only.
// ─────────────────────────────────────────────────────────────

// Resolves files in /public relative to the deployed base path.
const asset = (p) => `${import.meta.env.BASE_URL}${p}`

export const people = {
  from: 'Raj',
  // Her name is optional — the site says "Hey, You!" by design.
  to: '',
  yearsTogether: 8,
}

export const getaway = {
  // Fill these in once you've decided. Leave empty to show a soft "we'll pick together" line.
  dates: '',
  note: 'Dates? Let’s pick them together ♡',
}

export const envelope = {
  tag: 'A SPECIAL DELIVERY ♡',
  greeting: 'Hey, You!',
  line: 'Someone has a little surprise for you…',
  button: 'Open your invitation ♡',
}

export const letter = {
  heading: '8 years, and still my favourite adventure. ♡',
  salutation: 'Hey love,',
  paragraphs: [
    '8 years, huh? 🥹',
    'Kiti kahi zala ya 8 years madhye. So many memories, stupid fights, random laughs, difficult days and moments that I’ll always keep close to my heart.',
    'You’ve seen different versions of me. You’ve stood by me, believed in me, and honestly, pushed me to become a better version of myself.',
    'Kadhikadhi tu mala evdha push kartes ki mala swatahla pan kalat nahi ki mi he sagla karu shakto. And I don’t think I say thank you enough for that.',
    'I know mi nehmich perfect nasto, and sometimes I get caught up in a thousand things. But I want you to know that I notice everything you do for me.',
    'So this time, thoda extra effort taktoy. No big occasion, no special reason. Just because you deserve it.',
    'No wedding planning, no work talks, no responsibilities.',
    'Just you and me. Thoda quality time, thodya gappa, lots of laughs and one more memory for our little story.',
    'After 8 years, I’d still choose another adventure with you. Every single time. ❤️',
  ],
  signOff: 'Your favourite human,',
  signature: 'Raj ♡',
  outro: 'Okay, now let me show you something…',
  button: 'Show me the surprise!',
  // Polaroids beside the letter. Add a `src` (e.g. asset('photos/us/private-1.webp'))
  // to show a real photo; without it a hand-drawn doodle is shown instead.
  // ⚠ Only commit personal photos if you're OK with them being public.
  polaroids: [
    { caption: '8 years of us', doodle: 'hearts', tilt: -6 },
    { caption: 'chai & gappa', doodle: 'cups', tilt: 4 },
    { caption: 'next stop: ?', doodle: 'mountains', tilt: -3 },
  ],
}

export const adventuresIntro = {
  heading: 'I’ve been planning something for us…',
  lines: [
    'I have three little escapes in mind.',
    'One is a little luxurious.',
    'One is surrounded by nature.',
    'And one is a little more exclusive.',
    'Each has its own charm.',
    'But I want you to choose where our next little memory happens.',
  ],
  hint: 'Tap each envelope to break the seal ♡',
  allOpened: 'Seen all three? Okay then…',
  button: 'Time to choose ♡',
}

// Image slots: `src` is a local file in /public/photos. If the file is missing,
// a labelled placeholder appears with a link to the original source so it can be
// replaced manually (see docs/ASSET_INVENTORY.md).
export const destinations = [
  {
    id: 'luxe',
    title: 'The Luxe Escape',
    teaser: 'a little luxurious',
    sealColor: '#B5838D',
    theme: { paper: '#F3E3DF', ink: '#604944', accent: '#C9A27E' },
    name: 'Lodha Belmondo',
    location: 'Gahunje, Pune',
    description: 'A little luxury, a little pampering, and a whole lot of us.',
    highlights: [
      'Exclusive private apartment stay — golf course one way, river the other',
      'Private Jacuzzi within the apartment*',
      'Romantic dinner at CopaCabana',
      'A relaxed evening, just us',
    ],
    footnote: '*Photos show the “riverfront home with the jacuzzi” (16th floor). Jacuzzi subject to property verification before booking.',
    photos: [
      { src: asset('photos/luxe/apartment-living.webp'), alt: 'The apartment’s living room and kitchen', source: 'https://bnbsolutions.co.in/homes/riverfront-jacuzzi-golf-view/' },
      { src: asset('photos/luxe/jacuzzi.webp'), alt: 'Private Jacuzzi tub in the apartment', source: 'https://bnbsolutions.co.in/homes/riverfront-jacuzzi-golf-view/' },
      { src: asset('photos/luxe/bedroom.webp'), alt: 'The bedroom', source: 'https://bnbsolutions.co.in/homes/riverfront-jacuzzi-golf-view/' },
      { src: asset('photos/luxe/balcony-golf-view.webp'), alt: 'Balcony looking over the golf course', source: 'https://bnbsolutions.co.in/homes/riverfront-jacuzzi-golf-view/' },
      { src: asset('photos/luxe/golf-course.webp'), alt: 'Lodha Belmondo golf course from above', source: 'https://bnbsolutions.co.in/' },
    ],
  },
  {
    id: 'nature',
    title: 'The Nature Escape',
    teaser: 'surrounded by nature',
    sealColor: '#7D8F69',
    theme: { paper: '#E9E6D6', ink: '#4F5641', accent: '#9AAB89' },
    name: 'The Chalets',
    location: 'Mulshi, Pune',
    description: 'A little escape into nature, where time slows down and it’s just us.',
    highlights: [
      'Exclusive chalet stay',
      'Nature and peaceful surroundings',
      'A break from city life',
      'Slow mornings and quality time',
    ],
    footnote: '',
    photos: [
      { src: asset('photos/nature/chalet-exterior.webp'), alt: 'The two chalets with the lake and hills behind', source: 'https://maps.app.goo.gl/GPYw2dNrBX19j5Ni9' },
      { src: asset('photos/nature/chalet-bedroom.webp'), alt: 'Chalet bedroom', source: 'https://maps.app.goo.gl/GPYw2dNrBX19j5Ni9' },
      { src: asset('photos/nature/bathtub-valley-view.webp'), alt: 'Bathtub with a view of the valley', source: 'https://maps.app.goo.gl/GPYw2dNrBX19j5Ni9' },
      { src: asset('photos/nature/garden-lake-view.webp'), alt: 'Garden path with lanterns and the lake', source: 'https://maps.app.goo.gl/GPYw2dNrBX19j5Ni9' },
    ],
  },
  {
    id: 'ultimate',
    title: 'The Ultimate Escape',
    teaser: 'a little more exclusive',
    sealColor: '#8C5A50',
    theme: { paper: '#EADBD3', ink: '#5A3F39', accent: '#D9AAA9' },
    name: 'Shubhraangan',
    location: 'Velhe, Pune',
    website: 'https://shubhraangan.com/',
    description: 'Somewhere a little secluded, a little magical, and entirely ours.',
    highlights: [
      'Exclusive couples’ cabin — only two on the property',
      'Romantic setting surrounded by nature',
      'Stargazing nights',
      'Candlelight dinner & décor — possible, to confirm with them',
    ],
    // Shubhraangan has two distinct cabins — shown as a little choice-within-a-choice.
    variants: [
      {
        name: 'Private Jacuzzi Cabin',
        detail: 'Its own private, outdoor, hot-water Jacuzzi.',
        url: 'https://shubhraangan.com/private-jacuzzi-cabin/',
      },
      {
        name: 'Private Pool Cabin with Jacuzzi',
        detail: 'A private plunge pool under the stars, with Jacuzzi.',
        url: 'https://shubhraangan.com/private-pool-cabin/',
      },
    ],
    footnote: 'Meals, décor and packages aren’t booked yet — we’ll check what they offer.',
    photos: [
      { src: asset('photos/ultimate/jacuzzi-cabin-night.webp'), alt: 'Private Jacuzzi Cabin — outdoor Jacuzzi at night', source: 'https://shubhraangan.com/private-jacuzzi-cabin/' },
      { src: asset('photos/ultimate/pool-cabin.webp'), alt: 'Private Pool Cabin — plunge pool', source: 'https://shubhraangan.com/private-pool-cabin/' },
      { src: asset('photos/ultimate/bedroom.webp'), alt: 'Cabin bedroom', source: 'https://shubhraangan.com/image-gallery/' },
      { src: asset('photos/ultimate/jacuzzi-cabin-day.webp'), alt: 'Private Jacuzzi Cabin — outdoor Jacuzzi by day', source: 'https://shubhraangan.com/private-jacuzzi-cabin/' },
      { src: asset('photos/ultimate/candlelight-dinner.webp'), alt: 'Candlelight dinner setup (offered by the property)', source: 'https://shubhraangan.com/image-gallery/' },
    ],
  },
]

export const choice = {
  heading: 'Okay, my favourite person…',
  subheading: 'Where should we disappear for a little while?',
  buttonFor: (title) => `I choose ${title} ♡`,
  chosen: 'Chosen ♡',
  confirm: 'Lock it in ♡',
}

export const confirmation = {
  heading: 'IT’S A DATE! ♡',
  line: 'Well, looks like we have a little getaway to plan!',
  message: [
    'Can’t wait to make another beautiful memory with you.',
    '8 years down, and many more little adventures to go. ❤️',
  ],
  signOff: 'With love,',
  signature: 'Your favourite human.',
  disclaimer: 'Nothing’s booked yet — this is me officially starting to plan it. ♡',
  changeMind: 'Wait, let me pick again',
  restart: 'Start the whole thing again',
}

export const music = {
  // Off by default. Plays a soft, original music-box tune generated in the browser
  // (no audio file, no copyright issues).
  enabledByDefault: false,
  label: 'Music',
}

export const storageKey = 'a-little-escape:choice'

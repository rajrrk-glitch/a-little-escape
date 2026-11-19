# Asset inventory

Research date: 19 Nov 2026. Every image slot in `src/config.js` points at a local file in
`public/photos/`. **No property photos are committed yet** — each slot currently renders a
clearly labelled placeholder with a "see the real one ↗" link, plus the hand-drawn cover art.

## Why no photos were downloaded

| Property | Finding |
|---|---|
| Shubhraangan | Official site's Terms of Service, §8: text, graphics and images are the property of Shubhraangan; you may not use, modify or distribute them without prior permission. GitHub Pages from a public repo = distribution. |
| Lodha Belmondo | No single "official" apartment exists — short-stay units are individual Airbnb/Expedia listings owned by different hosts. Photos must come from the **exact unit you book** (and its Jacuzzi must be verified). Lodha's own project page shows the community, not a rental apartment. |
| The Chalets, Mulshi | No official website or Instagram found. Only OTA listings (MakeMyTrip, cozycozy), whose photos belong to the owner/OTA. |

Google Images / Google Maps photos were not used: they don't grant reuse rights.

**Easiest legitimate route:** message each property (or the Airbnb host) and ask:
"Can I use 2–3 of your photos on a small personal invitation page for my fiancée?"
Most say yes. Then drop the files in with the filenames below.

## Inventory

| # | Property | Image description | Original source | Local filename | Status |
|---|---|---|---|---|---|
| 1 | Lodha Belmondo | Apartment living room / interiors | Listing of the unit you book; project page: https://www.lodhagroup.com/projects/residential-property-in-pune/the-reserve-at-lodha-belmondo | `public/photos/luxe/apartment-living.webp` | Placeholder — needs host permission |
| 2 | Lodha Belmondo | In-apartment private Jacuzzi | Listing of the unit you book | `public/photos/luxe/jacuzzi.webp` | Placeholder — verify Jacuzzi + permission |
| 3 | Lodha Belmondo | Balcony / golf-course view | Listing of the unit you book | `public/photos/luxe/balcony-golf-view.webp` | Placeholder — needs host permission |
| 4 | The Chalets, Mulshi | Chalet exterior | https://www.makemytrip.global/hotels/the_chalets_pune-details-mulshi.html | `public/photos/nature/chalet-exterior.webp` | Placeholder — needs owner permission |
| 5 | The Chalets, Mulshi | Bedroom interior | Owner / listing | `public/photos/nature/chalet-bedroom.webp` | Placeholder — needs owner permission |
| 6 | The Chalets, Mulshi | Hills / lake view | Owner / listing | `public/photos/nature/nature-view.webp` | Placeholder — needs owner permission |
| 7 | Shubhraangan | **Private Jacuzzi Cabin** — outdoor Jacuzzi at night ("Pushpaangan Outdoor Jacuzzi in Night") | https://shubhraangan.com/private-jacuzzi-cabin/ | `public/photos/ultimate/jacuzzi-cabin-night.webp` | Placeholder — ToS requires permission |
| 8 | Shubhraangan | **Private Pool Cabin with Jacuzzi** — plunge pool ("Taraangan Private Pool") | https://shubhraangan.com/private-pool-cabin/ | `public/photos/ultimate/pool-cabin.webp` | Placeholder — ToS requires permission |
| 9 | Shubhraangan | Cabin bedroom ("Taraangan Bedroom") | https://shubhraangan.com/image-gallery/ | `public/photos/ultimate/bedroom.webp` | Placeholder — ToS requires permission |

Other Shubhraangan gallery images worth asking for: outdoor Jacuzzi in daylight, cabin front at
dusk, stargazing, candle-light dinner setup, Jacuzzi décor with petals (all on
https://shubhraangan.com/image-gallery/).

## Adding a photo once you have permission

```bash
# convert + compress to WebP (macOS: brew install webp)
cwebp -q 78 -resize 1600 0 original.jpg -o public/photos/ultimate/pool-cabin.webp
```

Keep the aspect ratio (the `-resize 1600 0` keeps it). Then add the credit line to the table
above (e.g. "© Shubhraangan, used with permission, <date>").

Want a photo only on your machine, not in the public repo? Name it `private-*.webp` — those are
git-ignored — but note they then won't appear on the live site either.

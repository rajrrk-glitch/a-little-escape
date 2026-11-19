# Asset inventory

Collected 19 Nov 2026. All property photos are the properties' own (or their listing's) real
photos, used for a personal, non-commercial invitation at the owner's request (Raj). All were
resized to max 1600 px wide, aspect ratio kept, re-encoded as WebP (q78) with metadata stripped.

Usage status for every image: **personal non-commercial use, attributed; no licence granted by
the source.** Shubhraangan's Terms of Service (§8) say its images may not be used or distributed
without prior permission — if the property asks, remove them. To be safe, a quick
"Can I use your photos on a personal invite for my fiancée?" message to each property is
still worthwhile.

## Lodha Belmondo — The Luxe Escape

Unit shown: **"The riverfront home with the jacuzzi"**, 1BHK, 16th floor, operated by
BNB Solutions (Airbnb Superhost) — https://bnbsolutions.co.in/homes/riverfront-jacuzzi-golf-view/

| Local file | Description | Source URL | Credit |
|---|---|---|---|
| `public/photos/luxe/apartment-living.webp` | Living room + kitchen | https://bnbsolutions.co.in/img/riverfront-jacuzzi-golf-view/w/01.jpg | © BNB Solutions |
| `public/photos/luxe/jacuzzi.webp` | Bathroom with private Jacuzzi tub | https://bnbsolutions.co.in/img/riverfront-jacuzzi-golf-view/th/06.jpg | © BNB Solutions |
| `public/photos/luxe/bedroom.webp` | Bedroom | https://bnbsolutions.co.in/img/riverfront-jacuzzi-golf-view/w/04.jpg | © BNB Solutions |
| `public/photos/luxe/balcony-golf-view.webp` | Balcony over the golf course | https://bnbsolutions.co.in/img/riverfront-jacuzzi-golf-view/th/14.jpg | © BNB Solutions |
| `public/photos/luxe/golf-course.webp` | Estate golf course from above | https://bnbsolutions.co.in/img/estate/08.jpg | © BNB Solutions |

Note: images 06 and 14 were only available at 480×480 on the site, so they're small.

## The Chalets, Mulshi — The Nature Escape

Google Maps listing (link supplied by Raj): https://maps.app.goo.gl/GPYw2dNrBX19j5Ni9

| Local file | Description | Source | Credit |
|---|---|---|---|
| `public/photos/nature/chalet-exterior.webp` | Both chalets, lily pond, lake and hills | Google Maps photo posted by "The Chalets, Mulshi" (owner) | © The Chalets, Mulshi |
| `public/photos/nature/chalet-bedroom.webp` | Green-walled bedroom | Google Maps listing photo | © The Chalets, Mulshi / Google Maps contributor |
| `public/photos/nature/bathtub-valley-view.webp` | Bathtub facing the valley | Google Maps listing photo | © The Chalets, Mulshi / Google Maps contributor |
| `public/photos/nature/garden-lake-view.webp` | Garden path, lanterns, lake | Google Maps listing photo | © The Chalets, Mulshi / Google Maps contributor |

## Shubhraangan, Velhe — The Ultimate Escape

Official site: https://shubhraangan.com/ — images from its CDN
`https://b3177919.assetcdn.net/2.0/3177919/wp-content/uploads/…`

| Local file | Description | Cabin | Original file | Credit |
|---|---|---|---|---|
| `public/photos/ultimate/jacuzzi-cabin-night.webp` | Outdoor Jacuzzi at night | Private Jacuzzi Cabin (Pushpaangan) | `2023/09/Pushpaangan-Outdoor-Jacuzzi-in-Night-1536x1152.jpeg` | © Shubhraangan |
| `public/photos/ultimate/jacuzzi-cabin-day.webp` | Outdoor Jacuzzi by day | Private Jacuzzi Cabin (Pushpaangan) | `2023/09/Pushpaangan-Outdoor-Jacuzzi-in-Daylight-1536x1152.jpg` | © Shubhraangan |
| `public/photos/ultimate/pool-cabin.webp` | Private plunge pool | Private Pool Cabin with Jacuzzi (Taraangan) | `2023/09/Taraangan-Private-Pool-1536x1152.jpeg` | © Shubhraangan |
| `public/photos/ultimate/bedroom.webp` | Bedroom | Taraangan | `2023/09/Taraangan-Bedroom-1536x1152.jpeg` | © Shubhraangan |
| `public/photos/ultimate/candlelight-dinner.webp` | Candlelight dinner setup (a property add-on, not booked) | — | `2024/11/Candle-light-dinner-setup-scaled.jpg` | © Shubhraangan |

Cabin ↔ photo mapping (Pushpaangan = Jacuzzi cabin, Taraangan = Pool cabin) is inferred from the
site's file names and cabin pages.

## Not used

Google Images thumbnails (never hotlinked), guest photos showing people, and unrelated photos
from the Maps gallery (bus stand, other venues).

## Swapping a photo

```bash
cwebp -q 78 -resize 1600 0 -metadata none original.jpg -o public/photos/<folder>/<name>.webp
```

Then point the matching `photos` entry in `src/config.js` at it and add a row above.

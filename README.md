# Visit Cancún — Travel Guide Site

A fast, responsive, SEO-oriented static site for Cancún, Quintana Roo, built around
real keyword-research clusters (all-inclusive resorts, hotels, weather, things to do,
flights/transfers and travel tips).

## Pages

| File | Targets |
| --- | --- |
| `index.html` | Cancún overview / hub |
| `all-inclusive-resorts.html` | all-inclusive, adults-only, family, luxury packages |
| `hotels.html` | hotels, Hotel Zone, beachfront, 5-star |
| `things-to-do.html` | attractions, cenotes, Chichén Itzá, snorkeling, nightlife |
| `weather.html` | weather by month, best time to visit, hurricane/sargassum |
| `getting-there.html` | flights, CUN airport, transfers, transportation |
| `travel-tips.html` | safety, time zone, currency, VisiTax, packing, map |
| `about.html` | about Cancún + the guide |
| `contact.html` | trip-planning enquiry form |

Supporting files: `404.html`, `robots.txt`, `sitemap.xml`, `.nojekyll`.

## Images

The site references two images you provide:

- `assets/img/cancun-day.webp` — daytime hero / splits
- `assets/img/cancun-night.webp` — nighttime banners / splits

Drop your two labeled images into `assets/img/` with those exact names (or update the
`src` / `background-image` references if your filenames differ).

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Going live (GitHub Pages)

A workflow at `.github/workflows/deploy.yml` deploys the site automatically.

1. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to the `claude/zen-cannon-6e3ad1` branch (the workflow's trigger branch).
3. The site publishes at the URL shown under Settings → Pages.

After you have the final URL, replace the `https://example.com/` placeholders in
`sitemap.xml`, `robots.txt`, and the `<link rel="canonical">` / `og:` tags.

## Stack

Plain HTML + CSS + a small vanilla-JS file (`assets/js/main.js`) — no build step.
Features: sticky responsive nav with mobile menu, day/night hero toggle, and a
client-side contact-form demo handler.

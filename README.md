# UX Design Portfolio — Creative Landing Site

A dark, tarot-card–styled single-page portfolio for a multidisciplinary creator:
a marketing agency, music, UX design, Twilight Shamanwear fashion, and writing —
presented as five fanned "cards" over a moody red-and-black background.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Single-page site: hero card deck + About, Portfolio, Testimonials, Contact |
| `404.html` | Themed not-found page |

The five hero cards:

1. **Singer & Rapper**
2. **UX Design Expert**
3. **Marketing Agency** (center / front card)
4. **Author**
5. **Fashion Artist** — Twilight Shamanwear (handmade ponchos and spiritual hoodies)

Supporting files: `robots.txt`, `sitemap.xml`, `.nojekyll`, `.htaccess`.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Customizing

- **Brand / monogram:** edit the `.brand` block in `index.html` (the `UX` mark and
  `UX DESIGN / PORTFOLIO` text).
- **Card artwork:** each card's 2×2 grid uses CSS gradient tiles (`.tg` in
  `assets/css/style.css`). Swap them for real images with `background-image` if desired.
- **Contact:** update the `mailto:` link in the Contact section.

## Stack

Plain HTML + CSS + a small vanilla-JS file (`assets/js/main.js`) — no build step.
Features: sticky responsive nav with mobile menu, scroll-spy active nav links,
hover-lift card deck, and a fully responsive layout that stacks the deck on mobile.

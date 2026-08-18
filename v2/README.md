# MonAra — Corporate Website (Static Build)

Production-quality, responsive corporate website for **MonAra Trading Contracting & Services W.L.L.** (Doha, Qatar).

Built as a standalone HTML/CSS/Tailwind site — no backend required. Structured so it can later be ported
into a Laravel CMS (models: `Service`, `Project`, `Client`, `Career`, `QuoteRequest`, `Setting`, …).

## Tech

- HTML5 + Tailwind CSS v4 (CSS-first config) + custom component CSS
- Vanilla JS (no framework) — header scroll, mobile menu, reveal animations, count-up, form validation, i18n preview
- Vite-free: plain Tailwind CLI build + a tiny static page assembler
- Font Awesome-free: inline SVG icons (Lucide-style)
- Font: Manrope (Google Fonts) with Inter/Arial fallback

## Quick start

```bash
npm install
npm run build      # compiles Tailwind CSS + assembles pages at the project root
npm run dev        # Tailwind watch mode (CSS only)
npm run preview    # serves the project root at http://localhost:8080
```

Open `index.html` directly, or serve the project root.

## Project layout

```text
src/
  partials/           shared fragments: head, topbar, header, footer, scripts
  pages/              page sources (one HTML file per route)
  css/app.css         Tailwind input + design tokens + components + RTL + reduced-motion
  js/main.js          interactions (menu, header, reveal, count-up, forms)
  js/i18n.js          lightweight EN/AR + RTL preview dictionary
scripts/build-pages.mjs   assembles partials into final pages, syncs assets
assets/               images, fonts, PDF placeholder, compiled CSS + JS
index.html            build output (project root)
```

## Routes

| Route            | File                    |
| ---------------- | ----------------------- |
| `/`              | `index.html`            |
| `/about`         | `about.html`            |
| `/services`      | `services.html`         |
| `/services/{slug}` | `service-detail.html` |
| `/projects`      | `projects.html`         |
| `/projects/{slug}` | `project-detail.html` |
| `/clients`       | `clients.html`          |
| `/careers`       | `careers.html`          |
| `/contact`       | `contact.html`          |
| `/request-quote` | `request-quote.html`    |

## Design system

Brand tokens are defined in `src/css/app.css` under `@theme`:

- `--color-orange: #f97316`, `--color-ink: #181818`, `--color-black: #0f0f0f`
- `--color-surface: #f6f6f4`, `--color-border: #e5e5e5`, `--color-text: #222222`, `--color-muted: #6b6b6b`

All layout uses logical CSS properties (`margin-inline`, `padding-inline`, `inset-inline`) so the same
stylesheet works in LTR (English) and RTL (Arabic).

## Localization / RTL

`src/js/i18n.js` mirrors a Laravel `lang/en` + `lang/ar` dictionary. Toggle **EN | العربية** in the
topbar to switch `dir`/`lang` and swap `[data-i18n]` text. The production CMS build should replace this
with Laravel localization and real `/ar` URLs.

## Demo / placeholder content

The following are placeholder demo values and must be replaced from the CMS later (marked with
`<!-- (placeholder …) -->` comments in the source):

- "15+ Years of Experience" and "50+ Projects" stats
- Client logos (inline SVG placeholders)
- Project names, service descriptions, careers listings
- `assets/files/monara-company-profile.pdf` (placeholder file)
- Real company credentials/certifications

## Build & quality notes

- Hero image is `fetchpriority="high"` (LCP-friendly); all below-the-fold images are `loading="lazy"`
- Images carry width/height or `aspect-ratio` to minimise CLS
- `prefers-reduced-motion` respected
- WCAG-conscious: semantic landmarks, focus-visible states, ARIA labels, form validation with
  `aria-invalid` and visible error messages
- No horizontal overflow at 375 / 390 / 430 / 768 / 1024 / 1366 / 1440 / 1920 px

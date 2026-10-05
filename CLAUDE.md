# Al Sakr Conveying — Website

Bilingual (Arabic / English) marketing website for **Al Sakr Conveying** (الصقر لأنظمة النقل والسيور),
an industrial conveyor-systems company. Structure is modelled on https://iconicmach.com/en/ but
rebuilt as a modern, video-first site using the company's own factory footage in this folder.

> Status: **v1 built** (2026-10-05) — all pages live in EN + AR. Next: real project/client details, real stats, deploy.

## Goals
- Present Al Sakr as a premium industrial-engineering partner (design → manufacture → install → support).
- Showcase products through real video (flex chain, spiral, modular belt, gripper conveyors).
- Generate leads: quote requests, WhatsApp, phone, email.
- Full parity between Arabic (RTL) and English (LTR). Arabic is a first-class language, not a translation afterthought.
- Fast: Lighthouse ≥ 90 on mobile despite heavy video.

## Sitemap (mirrors reference, adapted to conveying)
| Route (`/en/…`, `/ar/…`) | Purpose |
|---|---|
| `/` Home | Video hero, what we do, product categories, stats counter, featured projects, industries, partners, CTA, FAQ |
| `/about` | Story, mission/vision, values, timeline, team/factory |
| `/conveyor-systems` | Product catalogue (filterable) |
| `/conveyor-systems/[slug]` | Product detail: video, specs table, applications, related, quote CTA |
| `/industries` | Food, pharma, FMCG/detergents, beverage, logistics |
| `/projects` | Case studies with video |
| `/services` | Design, manufacturing, installation, maintenance, spare parts |
| `/spare-parts` | Parts categories + inquiry |
| `/request-quotation` | Multi-step quote wizard |
| `/contact` | Form, map, WhatsApp, phone, emails |
| `/faq`, `/blog` (TBD), `/privacy-policy`, `/terms` | Supporting pages |

## Product categories derived from the videos
| Category | Source videos |
|---|---|
| Flexible chain conveyors | `flex chain conveyor for food.mp4`, `flexible chain conveyor for pharmceutical.mp4`, `flex chain conveyor video for Pharmaceutical.mp4`, `SUS304 flex chain conveyor.mp4`, `no-gap flex chain conveyor.mp4`, `flexible chain conveyor with pallet.mp4`, `flexible buffer chain onveyor.mp4` |
| Spiral conveyors | `spiralconveyor.mp4`, `spiral conveyor 2022.mp4`, `flex spiral conveyor 2.mp4`, `narrow spiral conveyor.mp4`, `Spiral conveyor YA-VA made recently (1).mp4`, `Spiral conveyor for blue moon laundry detergent.mp4` |
| Gripper / elevating conveyors | `stainless steel gripper conveyor.mp4` |
| Modular belt conveyors | `modular belt assembly.mp4` |
| Complete systems / lines | `food industry conveyor system.mp4`, `flex conveyor system video from factory.mp4`, `flex conveyor system and mini spiral covneyor in YA-VA factory.mp4` |

Note: YA-VA is a confirmed partner (the videos carry YA-VA watermarks) and may be named. Blue Moon (client brand) must not appear on the site
unless the owner confirms rights.

## "Modern features" beyond the reference
- Full-screen looping **video hero** with a muted showreel cut from the footage, poster frame fallback.
- **Hover-to-play** video cards on the product grid; lightbox player with chapters.
- Scroll-driven animations (reveal, parallax, animated stat counters, pinned process timeline).
- **Product finder / configurator**: industry + product type + throughput → recommended conveyor → prefilled quote.
- Multi-step **quote wizard** with file upload (layout drawings).
- Floating WhatsApp / call / email dock (as on reference) + sticky CTA on mobile.
- Dark/light theme, language switcher that keeps the same page, `hreflang` + per-language SEO metadata, JSON-LD (Organization, Product, FAQPage).
- Cookie consent (privacy-preserving default) like the reference.

## Tech stack
- **Astro + Tailwind CSS** (static output), TypeScript.
- Astro i18n routing: `/en/…` and `/ar/…`; UI strings in `src/i18n/en.ts` / `src/i18n/ar.ts`; bilingual content in `src/data/*.ts`.
- Tailwind logical utilities (`ms-`, `pe-`, `start-`) so RTL works from one stylesheet; `<html dir>` set per locale.
- Vanilla TS scripts for interactivity (video lazy-play, lightbox, counters, quote wizard, theme/lang switch) — no UI framework.
- Fonts: Cairo (Arabic) + Inter / Space Grotesk (Latin) from Google Fonts.
- Hosting: **GitHub Pages** — repo `alsakronline-cyber/alsakronline-cyber.github.io` (public), live at https://alsakronline-cyber.github.io/. Every push to `main` builds and deploys via `.github/workflows/deploy.yml`. If a custom domain is added, update `site` in `astro.config.mjs`.

## Video pipeline
Raw footage (~530 MB) lives untouched in `raw-videos/`. `scripts/encode-videos.mjs` (ffmpeg) writes ~121 MB to `public/media/`:
- `<slug>.mp4` — full clip, H.264 CRF 27, max 1280 px, `+faststart`, AAC 96k (lightbox / project pages).
- `<slug>-loop.mp4` — 7 s silent teaser, max 854 px (~0.5 MB) for cards and section backgrounds.
- `<slug>.webp` — poster frame. `showreel.mp4/.webp` — 24 s silent 1600×900 hero reel.
- Slugs are kebab-case English, mapped to source files in the `VIDEOS` table.
- Playback: `muted playsinline loop preload="none"` + `data-src`; `main.ts` loads/plays only while visible, pauses off-screen,
  and shows posters only under `prefers-reduced-motion`.

## Conventions
- User-facing text lives in `src/i18n` or `src/data` as `{ en, ar }` pairs; one-off page copy may sit in the page as an `ar ? … : …` pair, but always in both languages.
- Use logical CSS properties only; never `left/right` margins/padding. Mirror directional icons (arrows) in RTL.
- Arabic numerals: Western digits (0-9) by default (TBD).
- Components in `components/`, page sections in `components/sections/`, product data in `data/products.ts` (bilingual fields).
- Accessibility: WCAG 2.1 AA, keyboard nav, captions/`aria-label` on videos, visible focus states.

## Commands
```bash
npm run dev        # dev server on http://localhost:4321 (→ /en/ or /ar/)
npm run build      # static site → dist/ (upload dist/ to any static host)
npm run preview    # serve the built dist/
npm run videos     # transcode raw-videos/ → public/media (skips existing files; --force redoes all)
```

## Project structure
- `src/i18n/` — `en.ts` / `ar.ts` UI dictionaries (same typed shape) + helpers (`useT`, `tr`, `href`, `switchPath`).
- `src/data/` — bilingual content: `site.ts` (contacts, socials, **stats placeholders**), `products.ts` (catalogue + finder map),
  `content.ts` (industries, projects, services, process, spare parts, FAQs), `posts.ts` (blog + legal text).
- `src/pages/[lang]/…` — every page is generated for `en` and `ar`; `src/pages/index.astro` picks a language (saved choice → browser → en).
- `src/components/` — Header, Footer, Dock (floating WhatsApp/call/email + mobile action bar), VideoCard (hover-to-play + lightbox), PageHero, CtaBand, FaqList, Icon.
- `src/scripts/main.ts` — lazy video play/pause, hover-play, lightbox, counters, reveal, filters, theme, mobile menu. `send.ts` builds WhatsApp/mailto messages.
- `raw-videos/` — untouched original footage (git-ignored). `public/media/` — encoded `<slug>.mp4`, `<slug>-loop.mp4`, `<slug>.webp`, `showreel.*`.

## Video notes
- Most source clips open with a YA-VA logo / Chinese title card in the first 3–5 s; teaser start times in `scripts/encode-videos.mjs` skip them. Check frames before changing them.
- `SUS304 flex chain conveyor.mp4` has burned-in Chinese subtitles → bottom 20 % is cropped (third tuple value).
- Showreel segments avoid glitch / zoom-blur transitions; re-check with a frame sheet after edits.

## Decisions (confirmed by owner, 2026-10-05)
- **Stack:** Astro + Tailwind CSS (static output). Replaces the Next.js proposal above — use Astro's built-in i18n routing (`/en/`, `/ar/`), Astro components, minimal client JS (islands only where needed).
- **Forms:** no backend. Contact & quote forms compose a prefilled **WhatsApp** message (wa.me) or a **mailto:** email.
- **Scope v1:** all pages — Core (Home, About, Conveyor Systems + details, Contact), Industries & Projects, Services & Spare Parts + quote wizard, FAQ, Blog, Privacy, Terms.
- **Logo:** from the company Facebook page (blue circular badge: "ALSAKR — Trading & Manufacturing — CONVEYOR SYSTEMS", conveyor + gear motif). Brand palette derived from it: royal/sky blue + steel grey on white/navy.

## Company facts (from Facebook page)
- Name: **Alsakr For Conveying & Handling System** — site brand **Al Sakr Conveying** / **الصقر لأنظمة النقل والسيور**
- Tagline: Innovative conveyor and material handling solutions
- Address: Plot VH, Industrial Area C3, 10th of Ramadan City, Egypt
- Phone/WhatsApp: 010 20588660 (+20 10 20588660)
- Email: hagar@topgroupco.com
- YouTube: youtube.com/@AlsakrForConveyingHandlingSyst · LinkedIn: linkedin.com/company/143707116 · Facebook: facebook.com/profile.php?id=61591571368549
- **YA-VA is an official partner** — show in a partners section and on product pages. (Blue Moon is a client brand in a filename — do not show it.)

- Logo: downloaded from the Facebook profile photo → `public/brand/logo.jpg`.
- Stats are **placeholders** (edit in `src/data/site.ts`): 10+ years, 200+ conveyors installed, 24/7 support, Egypt & MENA coverage.

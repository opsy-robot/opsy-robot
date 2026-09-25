# Opsy Robot

The build log for **Opsy Robot**, an unofficial, non-commercial 1:1 rebuild of the Microduck robot for personal study and research.

The site has a cartoon theme: bold black outlines, bright colours, chunky type, bouncy hover effects and sticker-style badges. It is built with **Next.js 15 + Tailwind CSS v4 + shadcn/ui**.

## Sections

| # | Section | What's there |
|---|---------|--------------|
| 01 | Purpose (hero) | Looping build video with a play/pause button, a GitHub button, and a "Public record" pop-up with the Pollen team exchanges |
| 02 | Goals | The three project goals |
| 03 | Progress | Status card (the rebuild video plays in place), the official-policies video, four close-up photos that open in a lightbox, and a strip of 8 build stages you can click or swipe |
| 04 | Software | The Ducklink app screens in a carousel, the software status board, release stats, test results and the play roadmap |

A floating section menu on the left (a bottom pill on mobile) tracks which section you are in as you scroll.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build & deploy

The site is exported as fully static files:

```bash
npm run build      # writes plain HTML/CSS/JS to ./out
npm run preview    # serves ./out on http://localhost:3000
```

You can upload `out/` to any static host, such as GitHub Pages, Netlify, Vercel or Cloudflare Pages.

**GitHub Pages as a project site** (`https://<user>.github.io/<repo>/`): build with a base path so asset links resolve:

```bash
NEXT_PUBLIC_BASE_PATH=/<repo> npm run build
```

### Environment variables (all optional)

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_GITHUB_URL` | Where every GitHub button points (the default is set in `src/lib/site.ts`) |
| `NEXT_PUBLIC_SITE_URL` | The public URL, used for social-share previews |
| `NEXT_PUBLIC_BASE_PATH` | A sub-path for hosting, such as `/opsy-robot` |

## Updating content

All the page text lives in **`src/lib/content.ts`**. To post a daily update, edit that file. Put new photos or videos in `public/` and reference them with `asset("/photos/your-file.jpg")`.

The brand name and links are in **`src/lib/site.ts`**.

## Project layout

```
src/
  app/            layout, global cartoon theme (globals.css), page
  components/
    ui/           shadcn/ui primitives restyled for the theme (button, card, badge, dialog, carousel)
    sections/     hero, records dialog, goals, progress, software, footer
    dock.tsx      floating section menu with scroll tracking
    logo.tsx      Opsy Robot logo (an original SVG)
  lib/
    content.ts    all page copy
    site.ts       brand name, links, base path helper
public/
  media/          build videos + posters
  photos/         robot close-ups and the first camera selfie
  stages/         the 8 build-stage images
  app/            Ducklink app screens
```

## Credits and notices

- The hero's floating photo layout is adapted from the 21st.dev *Modern Hero Section* pattern.
- Microduck is a Pollen Robotics project. Opsy Robot is **not** affiliated with, authorised or endorsed by Pollen Robotics.
- The 3D models are under a non-commercial licence. This build is for personal, non-commercial use only.

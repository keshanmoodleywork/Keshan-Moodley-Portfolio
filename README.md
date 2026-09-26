# Orbital Site

A fresh Next.js + TypeScript + Tailwind CSS v4 + shadcn project, with the
main page built around the radial orbital timeline component.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn-style components (Badge, Button, Card) — installed manually below

## Why the `/components/ui` folder matters

shadcn's convention is that every primitive UI component (Button, Card,
Badge, etc.) lives at `components/ui/<name>.tsx`, and app code imports them
via the `@/components/ui/...` path alias set up in `tsconfig.json` and
`components.json`. Keeping that structure means:

- The shadcn CLI (`npx shadcn add <component>`) can add new components
  straight into this project without guessing paths.
- Every component's styling lives with shadcn's own conventions (Tailwind
  utility classes + `class-variance-authority` variants), so new components
  stay visually consistent with existing ones.
- Anyone else opening the repo — or another AI tool — can predict where a
  given UI primitive lives.

This project already follows that structure: `Badge`, `Button`, `Card`, and
`RadialOrbitalTimeline` all live in `components/ui/`.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000. The site now has four pages, all sharing
one fixed fluid-shader background and nav bar (both live in `app/layout.tsx`):

- `/` — Home, the orbital timeline
- `/about` — About Me
- `/projects` — Projects
- `/contact` — Contact

Every page has `[bracketed placeholders]` for you to replace with your own
name, bio, skills, projects, and contact details — search the `app/`
folder for `[` to find them all.

If you're adding this into an **existing** project instead of using this
scaffold, and it doesn't already have shadcn/Tailwind/TypeScript set up, run:

```bash
npx create-next-app@latest my-app --typescript --tailwind --app
cd my-app
npx shadcn@latest init
npx shadcn@latest add badge button card
npm install lucide-react
```

Then copy `components/ui/radial-orbital-timeline.tsx` and the CSS block
from `app/globals.css` (below the `@theme inline` block) into the new
project.

## Customizing the timeline

Edit `app/page.tsx`:

- `title` / `date` / `content` — what shows on each node and its expanded card
- `icon` — any icon from `lucide-react`
- `status` — `"completed" | "in-progress" | "pending"`, controls the badge and node styling
- `energy` — 0–100, drives the glow size and the energy bar in the expanded card
- `relatedIds` — ids of other nodes this one links to; clicking a node highlights and pulses its related nodes, and the expanded card shows jump-to buttons for them

Click a node to expand it and stop auto-rotation; click the empty
background to release it and resume rotating.

## Background

`components/ui/fluid-field.tsx` renders a slow-moving WebGL fluid/noise
shader (three.js, run inside a sandboxed `<iframe>`) as the site's
background. It's mounted once in `app/layout.tsx`, `fixed inset-0` behind
everything, so it's shared across every page rather than reloaded per
route. The timeline's own root was switched from `bg-black` to
`bg-transparent` so the shader shows through it on the home page.

Optional props on `<FluidFieldBackground />`:
- `hue` (-180 to 180), `saturation` (0–2), `brightness` (0.35–1.65) — tweak the shader's look via CSS filters
- `mode` — `"dark"` (default) or `"light"`, exposed as a `data-mode` attribute if you want to hook styling off it

It loads its own copies of Tailwind, GSAP, and Three.js from CDNs inside the
iframe (that's why it needs `sandbox="allow-scripts"`), so it works
independent of your app's own bundle — no extra npm installs needed.

## Next steps

This is the home page only, as requested. Once you're happy with it, natural
next additions:
- More pages (About, Projects, Contact) linked from here
- Your own milestone data in place of the placeholders
- A non-fullscreen variant if you want the timeline as one section rather
  than the whole page

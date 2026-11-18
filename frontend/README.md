# Vocalis frontend

SvelteKit 5 + TypeScript + Tailwind CSS v4 + shadcn-svelte.

## Run locally

Requirements: Node.js **22.17 or newer**.

```bash
npm ci
npm run dev
```

Validate and build:

```bash
npm run check
npm run build
```

## Routes

| Route | Page | Main components |
| --- | --- | --- |
| `/` | Landing page | `components/landing/*` |
| `/sign-in`, `/sign-up` | Auth (login-04 / signup-04 layout) | `components/auth/*` |
| `/home` | Welcome dashboard | `components/home/*` |
| `/studio` | Text to speech | `components/studio/*`, `components/history/RecentActivityCard` |
| `/cloning` | Voice cloning (placeholder, needs backend) | `ui/empty` |
| `/voices` | Voice library (search + filter) | `components/voices/*` |
| `/projects` | Projects | `components/projects/*` |
| `/models` | Models | `components/models/*` |
| `/history` | History | `components/history/*` |
| `/settings` | Appearance (mode + accent colour) | `components/settings/*` |

All `(app)` routes share `src/routes/(app)/+layout.svelte` (shadcn Sidebar + header).

## Project structure

```text
src/
├── app.css                  # THEME: every colour is a CSS variable here
├── routes/
│   ├── +layout.svelte       # global CSS + ModeWatcher (light/dark)
│   ├── +page.svelte         # landing
│   ├── sign-in/  sign-up/   # auth
│   └── (app)/               # sidebar layout + all dashboard pages
└── lib/
    ├── components/
    │   ├── ui/              # shadcn-svelte primitives (+ BrandMark, SectionHeading)
    │   ├── layout/          # AppSidebar, AppHeader
    │   ├── home/ studio/ voices/ projects/ models/ history/ settings/ auth/ landing/ shared/
    ├── data/
    │   ├── dashboard.ts     # demo data (voices, projects, models, activity, usage)
    │   └── navigation.ts    # ONE list drives sidebar, header title and active state
    ├── speech.svelte.ts     # browser speechSynthesis preview (demo only)
    ├── studio.svelte.ts     # selected voice shared between /studio and /voices
    └── theme.svelte.ts      # accent palette switching
```

## Customising

- **Colours:** edit `--brand` (and the `--palette-*` swatches) in `src/app.css`. Or pick a palette in Settings → Appearance. Neutral tokens (`--background`, `--card`, ...) have a light and a `.dark` set in the same file.
- **Light / dark:** toggle in the sidebar footer (mode-watcher adds the `dark` class on `<html>`).
- **Add a page:** create `src/routes/(app)/<name>/+page.svelte`, then add one line to `src/lib/data/navigation.ts`.
- **Replace demo data:** edit `src/lib/data/dashboard.ts` (later: load it in a route `load` function).
- The landing page keeps its own light-only stylesheet, `components/landing/landing.css`, scoped under `.page-shell`.

## Current behaviour (demo)

- Sign in / sign up have no backend: a valid form just opens `/home`.
- Speech preview uses the browser's `speechSynthesis`, not a TTS service. Voices differ by pitch/rate only.
- Usage, projects, history and models are static demo data.
- Voice cloning, billing and project CRUD are not implemented.

# Vocalis frontend

SvelteKit 5 + TypeScript + Tailwind CSS v4 + shadcn-svelte primitives.

## Run locally

Requirements: Node.js **22.17 or newer** (SvelteKit in the lockfile requires it).

```bash
npm ci
npm run dev
```

Validation and production build:

```bash
npm run check
npm run build
```

## Project structure

```text
src/
├── routes/
│   ├── +layout.svelte              # global CSS, metadata and app shell
│   ├── +page.svelte                # public landing page composition
│   └── home/+page.svelte           # dashboard composition root
└── lib/
    ├── components/
    │   ├── dashboard/              # dashboard feature components
    │   ├── landing/                 # public marketing page sections
    │   └── ui/                      # shared primitives / shadcn-svelte
    ├── data/dashboard.ts           # temporary typed dashboard demo records
    ├── speech.svelte.ts            # shared browser speech preview state
    └── utils.ts                    # shadcn utility types and class helpers
```

## Component conventions

- `components/ui/` is for generic, reusable primitives. Keep product-specific UI out of this folder.
- `components/dashboard/` contains dashboard feature composition. Components should receive data through props when real API data is connected.
- `components/landing/` contains marketing-only sections; do not import these into the authenticated dashboard.
- `data/` contains typed demo records. Replace these records with API data without rewriting the card/list markup.
- Use the existing shadcn-svelte `Button` and `buttonVariants` rather than creating one-off button styles.
- Prefer semantic HTML, accessible labels, visible focus states, and minimum 44px touch targets for primary mobile interactions.
- Keep responsive breakpoints local to the component that owns the layout. Shared design tokens belong in `src/app.css`.
- Add comments for non-obvious state, integration boundaries and decisions; avoid comments that merely restate the markup.

## Dashboard extension guide

1. Add a route under `src/routes/home/` for the new workspace page.
2. Reuse `DashboardSidebar` and `DashboardHeader` as the shared application shell.
3. Put generic controls (tabs, dialogs, dropdowns, cards, form fields) in `components/ui/`, using shadcn-svelte conventions.
4. Put feature-specific components in a named folder under `components/` (for example `components/voice-cloning/`).
5. Define API response types and temporary fixture records outside Svelte components.
6. Keep API calls, loading/error states and mutations in route-level loaders or feature services; keep reusable cards presentational.
7. For audio playback, extend `speech.svelte.ts` or replace it with the real audio player service. Do not use browser speech synthesis as a substitute for the production TTS API.

## Current demo behavior

- The TTS editor supports text entry, character counting, language/voice selection and local advanced controls.
- Preview uses the browser's `speechSynthesis` API. It is **not** a call to Chatterbox, Modal, or a Vocalis backend.
- Usage, plan, activity, voice and project records are static demo data.
- Search shortcut (`Ctrl/Cmd + K`) focuses the search field; search indexing/filtering is not connected.
- Navigation links are layout anchors/placeholders until the corresponding routes exist.

## Not implemented in this pass

- Authentication, user profile menu, billing/checkout and subscription enforcement.
- Real TTS generation, audio file storage, download, queue/job status and API error handling.
- Voice cloning upload/consent workflow, voice management CRUD and production voice catalogue.
- Projects CRUD, rename/delete actions, project detail route and real audio playback.
- Search results, command palette, notifications and dark theme.
- Backend integration, database schemas, analytics, rate limits and deployment configuration.

The dashboard UI is a front-end foundation, not a production speech-generation implementation.

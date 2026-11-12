# Changes made and limitations

## Fixed / improved

- Compared the Svelte dashboard composition with the supplied `vocalis_ai_speech_dashboard.html` reference.
- Kept the existing landing page and SvelteKit route structure instead of replacing the app with a standalone HTML page.
- Preserved the reference dashboard's neutral visual language: fixed desktop sidebar, sticky search header, rounded white surfaces, waveform treatment, TTS hero, usage panel, recent activity and voice cards.
- Added responsive project cards to the previously empty Recent Projects section, with 3/2/1-column layouts.
- Added shared `BrandMark`, `SectionHeading` and `SurfaceCard` UI primitives and a UI barrel export for quick imports.
- Moved dashboard voice, activity and project fixtures into `src/lib/data/dashboard.ts` so components are data-driven.
- Added Ctrl/Cmd + K to focus dashboard search.
- Added Escape-to-close behavior for the mobile sidebar.
- Removed misleading inactive theme toggle and inert overflow actions; the UI now indicates that only light appearance is implemented.
- Set the correct speech language for browser-based Bangla and English previews.
- Added architecture documentation and comments describing where API data and future features should be connected.
- Kept the existing shadcn-svelte Button implementation and component conventions.

## Not implemented

- No production TTS request or audio generation endpoint.
- No Modal / Chatterbox / Maya / ElevenLabs API integration.
- No audio download, persistent audio player, queue, job status or retry logic.
- No authentication, profile editing, billing, checkout, subscription enforcement or credit deduction.
- No voice cloning workflow, upload/consent verification or clone management.
- No real voice catalogue, voice search/filtering or voice CRUD.
- No project CRUD, project details, rename/delete or persistent project storage.
- No functional global search results, notifications or command palette.
- No dark theme; the sidebar shows the current light appearance rather than a nonfunctional toggle.
- No backend, database, analytics, automated tests or deployment adapter changes.
- No redesign of the public landing page.

## Validation note

The project declares Node.js 22.17+ because the locked SvelteKit version requires it. This execution environment only has Node.js 22.16.0. Dependency installation did not complete here, so `npm run check` and `npm run build` could not be truthfully marked as passed. Run them with Node.js 22.17+ after `npm ci`.

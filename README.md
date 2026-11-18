# Vocalis / ElevenLabs-inspired frontend

This repository contains the SvelteKit frontend and the supplied dashboard HTML reference.

## Start here

- Frontend setup and scripts: [`frontend/README.md`](frontend/README.md)
- Component architecture and extension rules: [`frontend/COMPONENT_ARCHITECTURE.md`](frontend/COMPONENT_ARCHITECTURE.md)
- Dashboard HTML source reference: [`frontend/reference/vocalis_ai_speech_dashboard.html`](frontend/reference/vocalis_ai_speech_dashboard.html)

## Routes

| Route | Page |
| --- | --- |
| `/` | Landing page |
| `/sign-in`, `/sign-up` | Auth (demo: a valid form opens `/home`) |
| `/home` | Welcome dashboard (hero, trending voices, quick access, models) |
| `/studio` | Text to speech + usage + recent activity |
| `/voices` | Voice library |
| `/projects` | Projects |
| `/models` | Models |
| `/history` | History |
| `/settings` | Appearance (light/dark, accent colour) |
| `/cloning` | Voice cloning placeholder (needs a backend) |

The dashboard pages share the sidebar/header layout in `frontend/src/routes/(app)/+layout.svelte`.

## Runtime

Use Node.js 22.17 or newer, then install the frontend dependencies and start the app:

```bash
cd frontend
npm ci
npm run dev
```

The root-level scripts delegate to `frontend/` after its dependencies are installed.

The app is a UI foundation. It does not yet connect to a production TTS backend, billing, authentication or persistent project storage.

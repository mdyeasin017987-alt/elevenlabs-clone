# Component architecture

| Layer | Location | Responsibility |
|---|---|---|
| Routes | `src/routes/` | Page metadata and composition only. Dashboard pages live in `(app)/` and share one layout. |
| Feature UI | `src/lib/components/<feature>/` | `home`, `studio`, `voices`, `projects`, `models`, `history`, `settings`, `auth`, `landing`, `layout`. |
| Shared UI | `src/lib/components/shared/` | Small product pieces used by several features (`PlayButton`, `StatTile`). |
| Primitives | `src/lib/components/ui/` | shadcn-svelte components plus `BrandMark` and `SectionHeading`. |
| Data | `src/lib/data/` | Demo fixtures and the single navigation list. |
| Services | `src/lib/*.svelte.ts` | Browser-only state: speech preview, selected voice, accent palette. |

## Rules

- Build UI from shadcn components in `ui/`: import with `import { Button, Card } from '#lib/components/ui'`, or `import * as Tabs from '#lib/components/ui/tabs'` for compound ones.
- Never hard-code colours in app components. Use tokens: `bg-background`, `text-muted-foreground`, `border`, `bg-brand`, `text-brand`, `bg-tone-1..4`. They all resolve to CSS variables in `src/app.css`.
- One component per file; a list component renders a card component (`ProjectList` -> `ProjectCard`).
- Pages stay thin: compose components, do not hold markup.
- Links: use the routes listed in `data/navigation.ts`. Do not link to a route that does not exist.
- Check layouts at 360, 768 and 1280px. Use `min-w-0` / `truncate` in flex and grid children.

## Adding a feature page

1. Create `src/routes/(app)/<name>/+page.svelte`.
2. Add `{ title, href, icon }` to `src/lib/data/navigation.ts`: the sidebar, header title and active state update automatically.
3. Put the page's components in `src/lib/components/<name>/`.

## Before connecting a backend

1. Define request/response types next to `data/dashboard.ts`.
2. Load data in route `load` functions; pass it to components as props.
3. Add loading, empty and error states.
4. Replace `speech.svelte.ts` with the real audio player.

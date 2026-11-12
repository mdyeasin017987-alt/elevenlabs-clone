# Component architecture and future frontend workflow

## Layer boundaries

| Layer | Location | Responsibility |
|---|---|---|
| Routes | `src/routes/` | Routing, page metadata, data loading and page composition |
| Feature UI | `src/lib/components/dashboard/`, `landing/` | Product-specific sections and interactions |
| Shared UI | `src/lib/components/ui/` | Buttons, cards, headings, brand primitives, future dialogs/tabs/inputs |
| Data contracts / fixtures | `src/lib/data/` | Typed demo data and later shared response types |
| Client services | `src/lib/` | Browser-only helpers such as preview playback |

## Fast component access

Use the `#lib` alias configured in `tsconfig.json`:

```ts
import { Button, SurfaceCard, SectionHeading } from '#lib/components/ui';
import { dashboardProjects } from '#lib/data/dashboard';
```

For larger UI additions, install the shadcn-svelte primitive first and keep its generated component under `src/lib/components/ui/<component>/`. Extend it with variants rather than creating near-duplicate buttons, dialogs or inputs.

## Suggested feature layout as the product grows

```text
src/lib/components/
├── ui/                         # generic design-system primitives
├── dashboard/                  # shared app shell and dashboard overview
├── speech-studio/              # TTS editor, settings and player controls
├── voice-library/              # voice search, filters and voice cards
├── voice-cloning/              # upload, consent, verification and clone status
├── projects/                   # project list, cards and project details
└── settings/                   # account, API keys, billing and preferences
```

Move a component into a feature folder when that feature has enough components to justify its own boundary. Do not create folders for one-file abstractions prematurely.

## Design-system rules

- Keep the current neutral white/black/gray palette and subtle blue-gray borders.
- Use CSS variables in `src/app.css` for new shared color, radius and spacing tokens.
- Keep feature-specific responsive behavior close to the component; test at 360px, 390px, 768px, 1024px and wide desktop.
- Prefer grid with `minmax(0, ...)` and `min-width: 0` to prevent overflow.
- Use semantic headings in order, labels for controls, `aria-pressed` for toggle-like buttons and keyboard-visible focus.
- Keep touch controls comfortably tappable on mobile.
- Do not add gradients, glass cards or excessive icon decoration; the reference uses restrained surfaces and typography.

## Before connecting a backend

1. Define request/response types.
2. Add route `load` functions or a feature service for API calls.
3. Pass typed data into presentational components.
4. Add explicit loading, empty and error states.
5. Add real mutation handlers and optimistic updates only where safe.
6. Replace browser `speechSynthesis` preview with the generated audio URL/player service.
7. Add tests for character limits, voice selection, playback state and responsive navigation.

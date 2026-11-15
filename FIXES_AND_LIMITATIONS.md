# Changes made and limitations

## Fixed / improved

- **Integrated shadcn-svelte primitives**: Added official shadcn-svelte components under `src/lib/components/ui/`:
  - `card` (`Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`, `CardAction`)
  - `badge` (`Badge`, `badgeVariants`)
  - `progress` (`Progress`)
  - `input` (`Input`)
  - `textarea` (`Textarea`)
  - `separator` (`Separator`)
  - `button` (`Button`, `buttonVariants`)
  - Exported through a unified barrel in `src/lib/components/ui/index.ts`.
- **Fixed VoiceLibrary UI defect**: Replaced broken, arbitrary styling (`rgb(163, 11, 11)` red borders, purple focus rings, and distorted 50% width avatar boxes) with high-fidelity voice cards matching the reference dashboard design. Included clean active selection rings, wave icon containers, sample play buttons, and subtle three-dot action triggers.
- **Fixed TypeScript Svelte 5 Rune errors**: Corrected type annotations in `BrandMark.svelte` and `SectionHeading.svelte` where `$props<...>()` syntax was causing compiler errors.
- **Fixed unused CSS selector warnings**: Removed obsolete unscoped `.panel` and `.activity-panel` CSS rules in `DashboardOverview.svelte` and adopted standard Tailwind utility and shadcn primitive classes.
- **Refactored Dashboard Components**:
  - `DashboardOverview.svelte`: Rebuilt with shadcn `Card`, `Progress` (character meter), `Badge` ("Active" pro badge), and clean activity list with interactive speech playback triggers.
  - `SpeechStudio.svelte`: Rebuilt with shadcn `Card`, `Button`, styled language and voice selector dropdowns, character counter, collapsible advanced settings (speed and pitch), and speech playback integration.
  - `RecentProjects.svelte`: Styled with responsive 3/2/1-column layouts, shadcn `Badge` for duration, folder art, and playable audio preview.
  - `DashboardHeader.svelte`: Clean sticky top bar with responsive `⌘ + K` search affordance, notification trigger, and generate CTA.
  - `DashboardSidebar.svelte`: Streamlined desktop navigation, responsive mobile drawer with backdrop scrim and escape-key handling, upgrade card, and user profile block.
- **Shared Brand Primitives**: Converted ad-hoc SVG/span logos across landing sections (`SiteHeader.svelte`, `FeaturesSection.svelte`, `SiteFooter.svelte`) to use the unified `BrandMark` component.
- **Build & Diagnostic Verification**:
  - `npm run check`: **0 errors, 0 warnings**.
  - `npm run build`: Production build succeeded with zero warnings.
  - Browser agent visual verification: Confirmed clean rendering of both `/home` and `/` routes without layout bugs.

## Not implemented

- No production TTS request or audio generation endpoint (browser `speechSynthesis` is used for demonstration previews).
- No Modal / Chatterbox / Maya / ElevenLabs API integration.
- No audio file download, persistent queue, or job status retry logic.
- No authentication, profile editing, billing, or subscription checkout.
- No backend database or persistent project storage.

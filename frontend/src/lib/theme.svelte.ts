// Colour palette switching. The actual colours live in src/app.css (see the THEME block).
// Light/dark is handled separately by `mode-watcher` (sidebar toggle).

export const palettes = [
	{ id: 'ink', label: 'Ink' },
	{ id: 'blue', label: 'Blue' },
	{ id: 'violet', label: 'Violet' },
	{ id: 'emerald', label: 'Emerald' },
	{ id: 'rose', label: 'Rose' }
] as const;

export type PaletteId = (typeof palettes)[number]['id'];

const STORAGE_KEY = 'vocalis-palette';

export const theme = $state<{ palette: PaletteId }>({ palette: 'ink' });

/** Read the saved palette into state. Call once from `onMount`. */
export function loadPalette(): void {
	try {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (saved && palettes.some((p) => p.id === saved)) theme.palette = saved as PaletteId;
	} catch {
		// Storage can be blocked (private mode); the default palette is fine.
	}
}

export function setPalette(id: PaletteId): void {
	theme.palette = id;
	document.documentElement.setAttribute('data-palette', id);
	try {
		localStorage.setItem(STORAGE_KEY, id);
	} catch {
		// Not persisted, still applied for this visit.
	}
}

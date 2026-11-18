// Tiny shared helper around the browser's built-in speech synthesis (demo playback only).
// Only one preview can play at a time; `player.active` tells components which one.

export const player = $state({ active: '' });

let token = 0;

export type SpeechOptions = {
	lang?: string;
	rate?: number;
	pitch?: number;
};

export function speechSupported(): boolean {
	return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

export function stopSpeaking(): void {
	token++;
	player.active = '';
	if (speechSupported()) window.speechSynthesis.cancel();
}

/**
 * Splits text into short pieces. Some browsers silently stop long utterances
 * after ~15 seconds, so each piece is queued as its own utterance.
 */
function chunkText(text: string, max = 180): string[] {
	const sentences = (text.match(/[^.!?।\n]+[.!?।]*\s*/g) ?? [text]).map((s) => s.trim()).filter(Boolean);
	const chunks: string[] = [];
	let current = '';

	for (const sentence of sentences) {
		let rest = sentence;
		while (rest.length > max) {
			if (current) {
				chunks.push(current);
				current = '';
			}
			let cut = rest.lastIndexOf(' ', max);
			if (cut <= 0) cut = max;
			chunks.push(rest.slice(0, cut).trim());
			rest = rest.slice(cut).trim();
		}
		if (!rest) continue;
		if (current && current.length + rest.length + 1 > max) {
			chunks.push(current);
			current = rest;
		} else {
			current = current ? `${current} ${rest}` : rest;
		}
	}
	if (current) chunks.push(current);
	return chunks;
}

/** Speaks `text`, marking `id` as the active player until it ends. Returns false if unsupported. */
export function speak(id: string, text: string, options: SpeechOptions = {}): boolean {
	if (!speechSupported()) return false;
	const synth = window.speechSynthesis;
	synth.cancel();
	const mine = ++token;
	const done = () => {
		if (token === mine) player.active = '';
	};

	const chunks = chunkText(text);
	if (chunks.length === 0) return false;

	chunks.forEach((chunk, index) => {
		const utterance = new SpeechSynthesisUtterance(chunk);
		// Setting `lang` lets the browser pick a matching installed voice by itself.
		if (options.lang) utterance.lang = options.lang;
		if (options.rate !== undefined) utterance.rate = options.rate;
		if (options.pitch !== undefined) utterance.pitch = options.pitch;
		if (index === chunks.length - 1) utterance.onend = done;
		utterance.onerror = done;
		synth.speak(utterance);
	});

	player.active = id;
	return true;
}

/** Click handler helper: toggles playback for `id`. */
export function toggleSpeech(id: string, text: string, options: SpeechOptions = {}): void {
	if (player.active === id) stopSpeaking();
	else speak(id, text, options);
}

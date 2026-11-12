// Tiny shared helper around the browser's built-in speech synthesis.
// Only one preview can play at a time; `player.active` tells components which one.

export const player = $state({ active: '' });

let token = 0;

export type SpeechOptions = {
	lang?: string;
	voiceName?: string;
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

/** Speaks `text`, marking `id` as the active player until it ends. Returns false if unsupported. */
export function speak(id: string, text: string, options: SpeechOptions = {}): boolean {
	if (!speechSupported()) return false;
	window.speechSynthesis.cancel();
	const mine = ++token;
	const done = () => {
		if (token === mine) player.active = '';
	};
	const utterance = new SpeechSynthesisUtterance(text);
	if (options.lang) utterance.lang = options.lang;
	if (options.rate !== undefined) utterance.rate = options.rate;
	if (options.pitch !== undefined) utterance.pitch = options.pitch;
	const availableVoices = window.speechSynthesis.getVoices();
	const matchingVoice = availableVoices.find((voice) => voice.name === options.voiceName)
		?? availableVoices.find((voice) => options.lang && voice.lang.toLowerCase().startsWith(options.lang.toLowerCase().split('-')[0]));
	if (matchingVoice) utterance.voice = matchingVoice;
	utterance.onend = done;
	utterance.onerror = done;
	player.active = id;
	window.speechSynthesis.speak(utterance);
	return true;
}

/** Click handler helper: toggles playback for `id`. */
export function toggleSpeech(id: string, text: string, options: SpeechOptions = {}): void {
	if (player.active === id) stopSpeaking();
	else speak(id, text, options);
}

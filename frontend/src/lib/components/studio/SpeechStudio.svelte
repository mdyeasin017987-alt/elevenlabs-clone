<script lang="ts">
	import {
		ChevronDown,
		Download,
		Gauge,
		Globe,
		Music2,
		Pause,
		Play,
		PlusCircle,
		SkipForward,
		SlidersHorizontal,
		Volume2
	} from '@lucide/svelte';
	import { Button } from '#lib/components/ui';
	import { languages, voiceByName, voices } from '#lib/data/dashboard';
	import { player, speak, speechSupported, stopSpeaking } from '#lib/speech.svelte';

	const maxCharacters = 2000;
	const speeds = [0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5];
	const pitches = [-30, -20, -10, 0, 10, 20, 30];
	const BARS = 56;

	let { selectedVoice = $bindable('Ayesha') }: { selectedVoice?: string } = $props();

	let text = $state('');
	let language = $state<string>(voiceByName(selectedVoice).lang);
	let rate = $state(1);
	let pitchPct = $state(0); // -30 … +30 (%)
	let message = $state('');
	let pickingVoice = $state(false);
	let textarea = $state<HTMLTextAreaElement | null>(null);

	// Player bar state
	let generated = $state(false);
	let expanded = $state(false);
	let paused = $state(false);
	let elapsed = $state(0);
	let spokenText = $state('');
	let spokenRate = $state(1);

	const voice = $derived(voiceByName(selectedVoice));
	const speakingStudio = $derived(player.active === 'studio');

	// Each voice has its own base pitch/rate; the controls scale them.
	const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
	const voiceOptions = $derived({
		rate: clamp(voice.rate * rate, 0.5, 2),
		pitch: clamp(voice.pitch * (1 + pitchPct / 100), 0.1, 2)
	});

	// Browser speech gives no real audio length, so estimate it (~14 characters per second at 1x).
	const total = $derived(Math.max(1, Math.round(spokenText.length / (14 * spokenRate))));
	const progress = $derived(total ? clamp(elapsed / total, 0, 1) : 0);

	// Deterministic pseudo-waveform based on the spoken text.
	const bars = $derived.by(() => {
		let seed = 2166136261;
		for (let i = 0; i < spokenText.length; i++) seed = Math.imul(seed ^ spokenText.charCodeAt(i), 16777619);
		const out: number[] = [];
		for (let i = 0; i < BARS; i++) {
			seed = Math.imul(seed ^ (seed >>> 15), 2246822507) + i;
			const r = ((seed >>> 0) % 1000) / 1000;
			out.push(0.2 + 0.8 * Math.abs(Math.sin(i * 0.45) * 0.5 + r * 0.7));
		}
		return out.map((v) => Math.min(1, v));
	});

	const fmt = (seconds: number) => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
	const pitchLabel = (value: number) => `${value > 0 ? '+' : ''}${value}%`;

	// Tick the clock while speech is playing.
	$effect(() => {
		if (!speakingStudio || paused) return;
		const id = setInterval(() => {
			elapsed = Math.min(total, elapsed + 0.2);
		}, 200);
		return () => clearInterval(id);
	});

	// When speech ends on its own, show the bar as completed.
	let wasSpeaking = false;
	$effect(() => {
		if (wasSpeaking && !speakingStudio && !paused) elapsed = total;
		wasSpeaking = speakingStudio;
	});

	function generate() {
		if (!text.trim()) return;
		paused = false;
		elapsed = 0;
		spokenText = text;
		spokenRate = voiceOptions.rate;
		if (!speak('studio', text, { lang: language, ...voiceOptions })) {
			message = 'Speech playback is not supported in this browser.';
			return;
		}
		message = '';
		generated = true;
	}

	function resume() {
		if (paused && speechSupported()) {
			window.speechSynthesis.resume();
			paused = false;
		} else if (!speakingStudio) {
			generate();
		}
	}

	function pause() {
		if (speakingStudio && !paused && speechSupported()) {
			window.speechSynthesis.pause();
			paused = true;
		}
	}

	function skip() {
		paused = false;
		stopSpeaking();
		elapsed = total;
	}

	function addSpeaker() {
		const separator = text && !text.endsWith('\n\n') ? (text.endsWith('\n') ? '\n' : '\n\n') : '';
		text = (text + separator).slice(0, maxCharacters);
		textarea?.focus();
	}

	function chooseVoice(name: string) {
		selectedVoice = name;
		language = voiceByName(name).lang;
		pickingVoice = false;
	}
</script>

<div id="studio" class="space-y-3">
	<div class="overflow-visible rounded-3xl border bg-card p-3 text-card-foreground shadow-sm sm:p-4">
		<!-- Voice header -->
		<div class="relative flex items-center justify-between gap-3 pb-3">
			<div class="flex min-w-0 items-center gap-3">
				<div
					class="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand to-foreground/80 text-lg font-bold text-white"
					aria-hidden="true"
				>
					{voice.name.charAt(0)}
				</div>
				<div class="min-w-0">
					<p class="truncate font-semibold">{voice.name}</p>
					<p class="truncate text-sm text-muted-foreground">{voice.style} voice · {voice.detail}</p>
				</div>
			</div>

			<Button
				variant="outline"
				class="h-10 shrink-0 gap-2 rounded-full px-4"
				aria-expanded={pickingVoice}
				aria-haspopup="listbox"
				onclick={() => (pickingVoice = !pickingVoice)}
			>
				<SlidersHorizontal />
				Change Voice
			</Button>

			{#if pickingVoice}
				<ul
					role="listbox"
					aria-label="Choose a voice"
					class="absolute top-full right-0 z-20 mt-1 max-h-72 w-64 overflow-y-auto rounded-2xl border bg-popover p-1 text-popover-foreground shadow-lg"
				>
					{#each voices as item}
						<li role="option" aria-selected={item.name === selectedVoice}>
							<button
								type="button"
								class="flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2 text-left text-sm hover:bg-muted {item.name === selectedVoice ? 'bg-muted font-semibold' : ''}"
								onclick={() => chooseVoice(item.name)}
							>
								<span>{item.name}</span>
								<span class="text-xs text-muted-foreground">{item.style}</span>
							</button>
						</li>
					{/each}
				</ul>
			{/if}
		</div>

		<!-- Text box -->
		<div class="rounded-2xl border bg-background/60 focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/30">
			<label for="speech-text" class="sr-only">Text to convert</label>
			<textarea
				id="speech-text"
				bind:this={textarea}
				bind:value={text}
				maxlength={maxCharacters}
				placeholder="Type your text here..."
				class="block h-56 w-full resize-none overflow-y-auto bg-transparent px-4 pt-3 text-base leading-snug outline-none placeholder:text-muted-foreground sm:text-lg"
			></textarea>
			<div class="flex items-center justify-between px-4 pb-2.5 text-sm text-muted-foreground">
				<button type="button" class="inline-flex items-center gap-1.5 hover:text-foreground" onclick={addSpeaker}>
					<PlusCircle class="size-4" /> Add new speaker
				</button>
				<span class="text-xs">{text.length.toLocaleString()}/{maxCharacters.toLocaleString()}</span>
			</div>
		</div>

		<!-- Controls -->
		<div class="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-[repeat(4,auto)_1fr]">
			<label class="relative flex h-11 items-center rounded-full border bg-background pl-3.5 pr-8 text-sm font-medium">
				<Globe class="size-4 shrink-0" aria-hidden="true" />
				<span class="sr-only">Language</span>
				<select bind:value={language} class="w-full min-w-0 cursor-pointer appearance-none bg-transparent pl-2 outline-none">
					{#each languages as item}
						<option value={item.value}>{item.label.split(' (')[0]}</option>
					{/each}
				</select>
				<ChevronDown class="pointer-events-none absolute right-3 size-4 text-muted-foreground" />
			</label>

			<label class="relative flex h-11 items-center rounded-full border bg-background pl-3.5 pr-8 text-sm font-medium">
				<Volume2 class="size-4 shrink-0" aria-hidden="true" />
				<span class="sr-only">Voice</span>
				<select
					bind:value={selectedVoice}
					onchange={(event) => (language = voiceByName(event.currentTarget.value).lang)}
					class="w-full min-w-0 cursor-pointer appearance-none bg-transparent pl-2 outline-none"
				>
					{#each voices as item}
						<option value={item.name}>{item.name}</option>
					{/each}
				</select>
				<ChevronDown class="pointer-events-none absolute right-3 size-4 text-muted-foreground" />
			</label>

			<label class="relative flex h-11 items-center rounded-full border bg-background pl-3.5 pr-8 text-sm font-medium">
				<Gauge class="size-4 shrink-0" aria-hidden="true" />
				<span class="sr-only">Speed</span>
				<select bind:value={rate} class="w-full min-w-0 cursor-pointer appearance-none bg-transparent pl-2 outline-none">
					{#each speeds as item}
						<option value={item}>{item.toFixed(1)}x</option>
					{/each}
				</select>
				<ChevronDown class="pointer-events-none absolute right-3 size-4 text-muted-foreground" />
			</label>

			<label class="relative flex h-11 items-center rounded-full border bg-background pl-3.5 pr-8 text-sm font-medium">
				<Music2 class="size-4 shrink-0" aria-hidden="true" />
				<span class="sr-only">Pitch</span>
				<select bind:value={pitchPct} class="w-full min-w-0 cursor-pointer appearance-none bg-transparent pl-2 outline-none">
					{#each pitches as item}
						<option value={item}>{pitchLabel(item)}</option>
					{/each}
				</select>
				<ChevronDown class="pointer-events-none absolute right-3 size-4 text-muted-foreground" />
			</label>

			<Button
				size="lg"
				class="col-span-2 h-11 gap-2 rounded-full bg-foreground px-6 text-background hover:bg-foreground/85 sm:col-span-1"
				disabled={!text.trim() || text.length > maxCharacters}
				onclick={generate}
			>
				<Play class="fill-current" /> Generate Voice
			</Button>
		</div>

		{#if message}
			<p class="mt-2 text-sm font-medium text-destructive" role="status">{message}</p>
		{/if}
	</div>

	<!-- Player bar -->
	{#if generated}
		<div class="rounded-3xl border bg-card p-2 text-card-foreground shadow-sm">
			<div class="flex items-center gap-2 px-2 py-1 sm:gap-3">
				<div class="flex items-center gap-0.5">
					<Button variant="ghost" size="icon" class="rounded-full" aria-label="Play" disabled={speakingStudio && !paused} onclick={resume}>
						<Play class="fill-current" />
					</Button>
					<Button variant="ghost" size="icon" class="rounded-full" aria-label="Pause" disabled={!speakingStudio || paused} onclick={pause}>
						<Pause class="fill-current" />
					</Button>
					<Button variant="ghost" size="icon" class="rounded-full" aria-label="Skip to end" onclick={skip}>
						<SkipForward class="fill-current" />
					</Button>
				</div>

				<span class="w-9 shrink-0 text-xs tabular-nums text-muted-foreground">{fmt(elapsed)}</span>

				<div
					class="flex h-8 min-w-0 flex-1 items-center gap-[2px]"
					role="progressbar"
					aria-label="Playback progress"
					aria-valuemin={0}
					aria-valuemax={total}
					aria-valuenow={Math.round(elapsed)}
				>
					{#each bars as bar, i}
						<span
							class="w-full max-w-[3px] flex-1 rounded-full {(i + 1) / BARS <= progress ? 'bg-foreground' : 'bg-muted-foreground/35'}"
							style="height: {Math.round(bar * 100)}%"
						></span>
					{/each}
				</div>

				<span class="w-9 shrink-0 text-right text-xs tabular-nums text-muted-foreground">{fmt(total)}</span>

				<Button
					variant="ghost"
					size="icon"
					class="rounded-full"
					aria-label="Download (not available with browser speech)"
					title="Download isn't available with in-browser speech"
					disabled
				>
					<Download />
				</Button>
				<Button
					variant="ghost"
					size="icon"
					class="rounded-full"
					aria-label="Show spoken text"
					aria-expanded={expanded}
					onclick={() => (expanded = !expanded)}
				>
					<ChevronDown class="transition-transform {expanded ? 'rotate-180' : ''}" />
				</Button>
			</div>

			{#if expanded}
				<p class="max-h-40 overflow-y-auto px-4 pt-1 pb-3 text-sm whitespace-pre-line text-muted-foreground">{spokenText}</p>
			{/if}
		</div>
	{/if}
</div>

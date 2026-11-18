<script lang="ts">
	import { AudioLines, ChevronDown, Globe, Pause, Play, Settings2, Volume2 } from '@lucide/svelte';
	import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Textarea } from '#lib/components/ui';
	import { Label } from '#lib/components/ui/label';
	import { NativeSelect, NativeSelectOption } from '#lib/components/ui/native-select';
	import { Slider } from '#lib/components/ui/slider';
	import { languages, voiceByName, voices } from '#lib/data/dashboard';
	import { player, speak, speechSupported, stopSpeaking } from '#lib/speech.svelte';

	const maxCharacters = 5000;
	let { selectedVoice = $bindable('Ayesha') }: { selectedVoice?: string } = $props();

	let text = $state('');
	let language = $state<string>(voiceByName(selectedVoice).lang);
	let showAdvanced = $state(false);
	let rate = $state(1);
	let pitch = $state(1);
	let message = $state('');

	const voice = $derived(voiceByName(selectedVoice));
	const speakingStudio = $derived(player.active === 'studio');
	const speakingSample = $derived(player.active === 'studio-sample');

	// Each voice has its own base pitch/rate; the sliders scale them.
	const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
	const voiceOptions = $derived({ rate: clamp(voice.rate * rate, 0.5, 2), pitch: clamp(voice.pitch * pitch, 0.1, 2) });

	function play(id: string, value: string, lang: string) {
		if (player.active === id) {
			stopSpeaking();
			return;
		}
		if (!speak(id, value, { lang, ...voiceOptions })) {
			message = 'Speech playback is not supported in this browser.';
			return;
		}
		message = '';
	}
</script>

<Card id="studio" class="relative overflow-hidden">
	<div class="pointer-events-none absolute -top-6 -right-6 hidden size-40 text-brand/15 sm:block" aria-hidden="true">
		<AudioLines class="size-full" />
	</div>

	<CardHeader class="relative">
		<CardTitle class="text-2xl font-extrabold tracking-tight">Convert text to natural speech</CardTitle>
		<CardDescription>Type anything, choose a voice, and listen instantly.</CardDescription>
	</CardHeader>

	<CardContent class="relative space-y-4">
		<div class="flex flex-wrap items-end gap-3">
			<div class="space-y-1.5">
				<Label for="studio-language"><Globe class="size-3.5" /> Language</Label>
				<NativeSelect id="studio-language" bind:value={language}>
					{#each languages as item}
						<NativeSelectOption value={item.value}>{item.label}</NativeSelectOption>
					{/each}
				</NativeSelect>
			</div>

			<div class="space-y-1.5">
				<Label for="studio-voice"><Volume2 class="size-3.5" /> Voice</Label>
				<NativeSelect
					id="studio-voice"
					bind:value={selectedVoice}
					onchange={(event) => (language = voiceByName(event.currentTarget.value).lang)}
				>
					{#each voices as item}
						<NativeSelectOption value={item.name}>{item.name} · {item.style}</NativeSelectOption>
					{/each}
				</NativeSelect>
			</div>

			<Button variant="secondary" class="gap-1.5" onclick={() => play('studio-sample', voice.sample, voice.lang)}>
				{#if speakingSample}
					<Pause class="fill-current" /> Stop sample
				{:else}
					<Play class="fill-current" /> Play sample
				{/if}
			</Button>
		</div>

		<div class="space-y-1.5">
			<Label for="speech-text" class="sr-only">Text to convert</Label>
			<Textarea
				id="speech-text"
				bind:value={text}
				maxlength={maxCharacters}
				rows={5}
				placeholder="Type your text here..."
				class="min-h-32 resize-none"
			/>
			<p class="text-right text-xs text-muted-foreground">
				{text.length.toLocaleString()} / {maxCharacters.toLocaleString()}
			</p>
		</div>

		{#if showAdvanced}
			<div class="grid grid-cols-1 gap-5 rounded-xl border bg-muted/40 p-4 sm:grid-cols-2">
				<div class="space-y-3">
					<div class="flex items-center justify-between text-sm">
						<Label>Speed</Label>
						<output class="font-semibold">{rate.toFixed(1)}×</output>
					</div>
					<Slider aria-label="Speed" type="single" bind:value={rate} min={0.6} max={1.5} step={0.1} />
				</div>
				<div class="space-y-3">
					<div class="flex items-center justify-between text-sm">
						<Label>Pitch</Label>
						<output class="font-semibold">{pitch.toFixed(1)}</output>
					</div>
					<Slider aria-label="Pitch" type="single" bind:value={pitch} min={0.7} max={1.3} step={0.1} />
				</div>
			</div>
		{/if}

		{#if message}
			<p class="text-sm font-medium text-destructive" role="status">{message}</p>
		{/if}
	</CardContent>

	<CardFooter class="relative flex-col items-stretch gap-3 border-t-0 bg-transparent sm:flex-row sm:items-center sm:justify-between">
		<Button variant="ghost" class="gap-1.5 self-start" aria-expanded={showAdvanced} onclick={() => (showAdvanced = !showAdvanced)}>
			<Settings2 />
			Advanced settings
			<ChevronDown class="transition-transform {showAdvanced ? 'rotate-180' : ''}" />
		</Button>

		<Button
			size="lg"
			class="h-10 gap-2 rounded-full px-6"
			disabled={!speakingStudio && (!text.trim() || text.length > maxCharacters)}
			onclick={() => play('studio', text, language)}
		>
			{#if speakingStudio}
				<Pause class="fill-current" /> Stop speech
			{:else}
				<Play class="fill-current" /> Generate speech
			{/if}
		</Button>
	</CardFooter>
</Card>

<script lang="ts">
	import { ChevronDown, Globe2, Pause, Play, Settings2, Volume2 } from '@lucide/svelte';
	import { Button, Card } from '#lib/components/ui';
	import { player, speak, speechSupported, stopSpeaking } from '#lib/speech.svelte';

	const maxCharacters = 5000;
	let { selectedVoice = $bindable('Ayesha') }: { selectedVoice?: string } = $props();

	let text = $state('');
	let language = $state('bn-BD');
	let showAdvanced = $state(false);
	let rate = $state(1);
	let pitch = $state(1);
	let message = $state('');

	const voices = [
		{ name: 'Ayesha', kind: 'Natural · Female', sample: 'সুন্দর কথায় গড়ে উঠুক আপনার গল্প।' },
		{ name: 'Rahim', kind: 'Natural · Male', sample: 'প্রতিটি নতুন দিন নিয়ে আসে নতুন সম্ভাবনা।' },
		{ name: 'Sadia', kind: 'Expressive · Female', sample: 'এই মুহূর্তটিকে মনে রাখুন।' },
		{ name: 'Tanvir', kind: 'Conversational · Male', sample: 'চলুন, একসাথে কিছু তৈরি করি।' }
	];

	function play(id: string, value: string) {
		if (!value.trim()) {
			message = 'Please type some text before generating speech.';
			return;
		}
		if (player.active === id) {
			stopSpeaking();
			return;
		}
		if (!speechSupported()) {
			message = 'Speech synthesis playback is not supported in this browser.';
			return;
		}
		message = '';
		speak(id, value, { lang: language, voiceName: selectedVoice, rate, pitch });
	}

	function playVoiceSample() {
		const current = voices.find((v) => v.name === selectedVoice) ?? voices[0];
		play('studio-sample', current.sample);
	}
</script>

<Card
	class="relative overflow-hidden rounded-2xl border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
	id="studio"
>
	<!-- Wave graphic in top-right background -->
	<div
		class="pointer-events-none absolute top-0 right-0 h-[190px] w-[50%] overflow-hidden opacity-25 mix-blend-multiply"
		aria-hidden="true"
	>
		<svg viewBox="0 0 420 150" class="h-full w-full" preserveAspectRatio="none">
			<path d="M0 83C55 42 95 39 150 63S250 119 310 73 370 34 420 69" fill="none" stroke="#64748b" stroke-width="1.4" />
			<path d="M0 91C55 50 95 47 150 71S250 127 310 81 370 42 420 77" fill="none" stroke="#64748b" stroke-width="1.2" />
			<path d="M0 75C55 34 95 31 150 55S250 111 310 65 370 26 420 61" fill="none" stroke="#64748b" stroke-width="1.1" />
			<path d="M0 99C55 58 95 55 150 79S250 135 310 89 370 50 420 85" fill="none" stroke="#64748b" stroke-width="1.0" />
			<path d="M0 67C55 26 95 23 150 47S250 103 310 57 370 18 420 53" fill="none" stroke="#64748b" stroke-width="1.0" />
		</svg>
	</div>

	<div class="relative z-10 space-y-5">
		<!-- Studio Header Tag -->
		<div class="flex items-center gap-2 text-xs font-semibold text-slate-800">
			<div class="flex items-center gap-0.5" aria-hidden="true">
				<span class="h-2 w-0.5 rounded-full bg-slate-900"></span>
				<span class="h-3.5 w-0.5 rounded-full bg-slate-900"></span>
				<span class="h-2 w-0.5 rounded-full bg-slate-900"></span>
			</div>
			<span>Text to Speech</span>
		</div>

		<!-- Big Banner Title & Description -->
		<div class="max-w-[440px] space-y-1.5">
			<h2 class="text-2xl sm:text-[26px] font-extrabold leading-tight tracking-tight text-slate-900">
				Convert text to<br />natural speech
			</h2>
			<p class="pt-1 text-xs leading-relaxed font-normal text-slate-500">
				Type anything, choose a voice, and listen instantly.<br class="hidden sm:inline" />
				Support for Bangla and 50+ languages.
			</p>
		</div>

		<!-- Voice Controls Toolbar -->
		<div class="flex flex-wrap items-center gap-2.5 pt-1">
			<!-- Language Dropdown -->
			<div class="relative inline-flex items-center">
				<div
					class="flex h-8 items-center gap-2 rounded-full border border-slate-200/90 bg-white px-3.5 text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors"
				>
					<Globe2 class="size-3.5 text-slate-500 shrink-0" />
					<select
						bind:value={language}
						aria-label="Speech language"
						class="cursor-pointer appearance-none bg-transparent pr-4 text-xs font-medium text-slate-700 outline-none"
					>
						<option value="bn-BD">Bangla (Bangladesh)</option>
						<option value="en-US">English · United States</option>
						<option value="en-GB">English · United Kingdom</option>
						<option value="hi-IN">Hindi · India</option>
						<option value="es-ES">Spanish · Spain</option>
					</select>
					<ChevronDown class="pointer-events-none absolute right-3 size-3 text-slate-400" />
				</div>
			</div>

			<!-- Voice Dropdown -->
			<div class="relative inline-flex items-center">
				<div
					class="flex h-8 items-center gap-2 rounded-full border border-slate-200/90 bg-white px-3.5 text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors"
				>
					<Volume2 class="size-3.5 text-slate-500 shrink-0" />
					<select
						bind:value={selectedVoice}
						aria-label="Speech voice"
						class="cursor-pointer appearance-none bg-transparent pr-4 text-xs font-medium text-slate-700 outline-none"
					>
						{#each voices as voice}
							<option value={voice.name}>{voice.name}</option>
						{/each}
					</select>
					<ChevronDown class="pointer-events-none absolute right-3 size-3 text-slate-400" />
				</div>
			</div>

			<!-- Play Sample Button -->
			<Button
				variant="secondary"
				size="sm"
				class="h-8 rounded-full bg-slate-100 px-3.5 text-xs font-semibold text-slate-800 hover:bg-slate-200/80 transition-colors gap-1.5"
				onclick={playVoiceSample}
			>
				{#if player.active === 'studio-sample'}
					<Pause class="size-2.5 fill-current" />
					<span>Stop Sample</span>
				{:else}
					<Play class="size-2.5 fill-current ml-0.5" />
					<span>Play Sample</span>
				{/if}
			</Button>
		</div>

		<!-- Text Input Container -->
		<div
			class="relative rounded-2xl border border-slate-200/90 bg-white p-4 transition-all focus-within:border-slate-400 focus-within:ring-2 focus-within:ring-slate-900/5"
		>
			<textarea
				id="speech-text"
				bind:value={text}
				maxlength={maxCharacters}
				placeholder="Type your text here..."
				rows={4}
				class="w-full resize-none border-none p-0 text-xs leading-relaxed text-slate-800 placeholder-slate-400 outline-none focus:ring-0"
			></textarea>
			<div class="flex justify-end pt-2">
				<span class="text-[11px] font-medium tracking-wider text-slate-400">
					{text.length.toLocaleString()} / {maxCharacters.toLocaleString()}
				</span>
			</div>
		</div>

		<!-- Advanced Controls Drawer -->
		{#if showAdvanced}
			<div
				class="grid grid-cols-1 gap-4 rounded-xl border border-slate-200/90 bg-slate-50/70 p-4 sm:grid-cols-2"
			>
				<label class="space-y-1.5 text-xs font-medium text-slate-600">
					<div class="flex items-center justify-between">
						<span>Speed</span>
						<output class="font-semibold text-slate-900">{rate.toFixed(1)}×</output>
					</div>
					<input
						type="range"
						min="0.6"
						max="1.5"
						step="0.1"
						bind:value={rate}
						class="w-full accent-slate-900 cursor-pointer"
					/>
				</label>
				<label class="space-y-1.5 text-xs font-medium text-slate-600">
					<div class="flex items-center justify-between">
						<span>Pitch</span>
						<output class="font-semibold text-slate-900">{pitch.toFixed(1)}</output>
					</div>
					<input
						type="range"
						min="0.7"
						max="1.3"
						step="0.1"
						bind:value={pitch}
						class="w-full accent-slate-900 cursor-pointer"
					/>
				</label>
			</div>
		{/if}

		<!-- Action Bottom Bar -->
		<div class="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
			<Button
				variant="ghost"
				size="sm"
				class="h-8 gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-full px-3 justify-start sm:justify-center"
				aria-expanded={showAdvanced}
				onclick={() => (showAdvanced = !showAdvanced)}
			>
				<Settings2 class="size-3.5 text-slate-600" />
				<span>Advanced Settings</span>
				<ChevronDown class="size-3 text-slate-500 transition-transform duration-200 {showAdvanced ? 'rotate-180' : ''}" />
			</Button>

			<Button
				size="default"
				disabled={!text.trim() || text.length > maxCharacters}
				onclick={() => play('studio', text)}
				class="h-9 gap-2 rounded-full bg-slate-900 px-5 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 transition-colors w-full sm:w-auto"
			>
				<div class="flex items-center gap-0.5" aria-hidden="true">
					<span class="h-2 w-0.5 rounded-full bg-white"></span>
					<span class="h-3.5 w-0.5 rounded-full bg-white"></span>
					<span class="h-2 w-0.5 rounded-full bg-white"></span>
				</div>
				<span>{player.active === 'studio' ? 'Stop Speech' : 'Generate Speech'}</span>
				<span aria-hidden="true" class="text-slate-400">→</span>
			</Button>
		</div>

		{#if message}
			<p class="text-xs text-amber-600 font-medium" role="status">{message}</p>
		{/if}
	</div>
</Card>

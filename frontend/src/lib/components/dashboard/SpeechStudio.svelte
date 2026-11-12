<script lang="ts">
	import { AudioLines, ChevronDown, Globe2, Pause, Play, Settings2, Sparkles, Volume2 } from '@lucide/svelte';
	import { Button } from '#lib/components/ui';
	import { player, speak, speechSupported, stopSpeaking } from '#lib/speech.svelte';

	const maxCharacters = 5000;
	let { selectedVoice = $bindable('Ayesha') } = $props();
	let text = $state('');
	let language = $state('bn-BD');
	let showAdvanced = $state(false);
	let rate = $state(1);
	let pitch = $state(1);
	let message = $state('');
	const voices = [
		{ name: 'Ayesha', kind: 'Natural · Female' },
		{ name: 'Rahim', kind: 'Natural · Male' },
		{ name: 'Sadia', kind: 'Expressive · Female' },
		{ name: 'Tanvir', kind: 'Conversational · Male' }
	];

	function play(id: string, value: string) {
		if (!value.trim()) {
			message = 'Add some text before generating speech.';
			return;
		}
		if (player.active === id) {
			stopSpeaking();
			return;
		}
		if (!speechSupported()) {
			message = 'Speech playback is not supported in this browser.';
			return;
		}
		message = '';
		speak(id, value, { lang: language, voiceName: selectedVoice, rate, pitch });
	}
</script>

<section class="tts-studio-panel" id="studio" aria-labelledby="studio-title">
	<div class="studio-heading">
		<div class="heading-copy">
			<p class="eyebrow"><AudioLines size={15} /> TEXT TO SPEECH</p>
			<h2 id="studio-title">Convert text to<br class="desktop-break" /> natural speech</h2>
			<p class="intro">Type anything, choose a voice, and listen instantly. Support for Bangla and 50+ languages.</p>
		</div>
		<div class="wave-art" aria-hidden="true">
			<svg viewBox="0 0 420 150" preserveAspectRatio="none">
				<path d="M0 83C55 42 95 39 150 63S250 119 310 73 370 34 420 69" />
				<path d="M0 91C55 50 95 47 150 71S250 127 310 81 370 42 420 77" />
				<path d="M0 75C55 34 95 31 150 55S250 111 310 65 370 26 420 61" />
				<path d="M0 99C55 58 95 55 150 79S250 135 310 89 370 50 420 85" />
				<path d="M0 67C55 26 95 23 150 47S250 103 310 57 370 18 420 53" />
			</svg>
		</div>
	</div>

	<div class="settings-row">
		<label class="select-wrap">
			<Globe2 size={15} />
			<select bind:value={language} aria-label="Speech language">
				<option value="bn-BD">Bangla (Bangladesh)</option>
				<option value="en-US">English · United States</option>
				<option value="en-GB">English · United Kingdom</option>
				<option value="hi-IN">Hindi · India</option>
				<option value="es-ES">Spanish · Spain</option>
			</select>
			<ChevronDown size={13} />
		</label>
		<label class="select-wrap voice-select">
			<Volume2 size={15} />
			<select bind:value={selectedVoice} aria-label="Speech voice">
				{#each voices as voice}
					<option value={voice.name}>{voice.name}</option>
				{/each}
			</select>
			<ChevronDown size={13} />
		</label>
		<Button variant="outline" class="sample-button" onclick={() => play('studio-sample', 'সুন্দর কথায় গড়ে উঠুক আপনার গল্প।')}>
			{#if player.active === 'studio-sample'}<Pause size={14} />{:else}<Play size={14} />{/if}
			<span>{player.active === 'studio-sample' ? 'Stop sample' : 'Play Sample'}</span>
		</Button>
	</div>

	<label class="text-entry" for="speech-text">
		<textarea id="speech-text" bind:value={text} maxlength={maxCharacters} placeholder="Type your text here..." rows="4"></textarea>
		<span class="character-count" class:at-limit={text.length >= maxCharacters}>{text.length.toLocaleString()} <span>/ {maxCharacters.toLocaleString()}</span></span>
	</label>

	{#if showAdvanced}
		<div class="advanced-controls">
			<label>Speed <output>{rate.toFixed(1)}×</output><input type="range" min="0.6" max="1.5" step="0.1" bind:value={rate} /></label>
			<label>Pitch <output>{pitch.toFixed(1)}</output><input type="range" min="0.7" max="1.3" step="0.1" bind:value={pitch} /></label>
		</div>
	{/if}

	<div class="studio-footer">
		<Button variant="ghost" class="advanced-toggle" aria-expanded={showAdvanced} onclick={() => (showAdvanced = !showAdvanced)}>
			<Settings2 size={15} /><span>Advanced Settings</span><ChevronDown size={14} class={showAdvanced ? 'rotated' : ''} />
		</Button>
		<Button class="generate-button" disabled={!text.trim() || text.length > maxCharacters} onclick={() => play('studio', text)}>
			{#if player.active === 'studio'}<Pause size={15} />{:else}<Sparkles size={15} />{/if}
			<span>{player.active === 'studio' ? 'Stop playback' : 'Generate Speech'}</span>
			<span class="button-arrow" aria-hidden="true">↗</span>
		</Button>
	</div>
	{#if message}<p class="status-message" role="status">{message}</p>{/if}
</section>

<style>
	.tts-studio-panel { position: relative; overflow: hidden; border: 1px solid #e5e7eb; border-radius: 20px; background: #fff; padding: 27px 28px 20px; }
	.studio-heading { position: relative; display: flex; min-height: 162px; align-items: flex-start; justify-content: space-between; }
	.heading-copy { position: relative; z-index: 1; }
	.eyebrow { display: flex; align-items: center; gap: 8px; margin: 0 0 19px; color: #334155; font-size: 10px; font-weight: 700; letter-spacing: .04em; }
	.eyebrow :global(svg) { color: #111827; }
	h2 { margin: 0; color: #0f172a; font-size: 26px; font-weight: 800; line-height: 1.15; letter-spacing: 0; }
	.intro { max-width: 440px; margin: 10px 0 0; color: #64748b; font-size: 12px; line-height: 1.6; }
	.wave-art { position: absolute; top: 0; right: -9px; width: min(52%, 340px); height: 150px; color: #64748b; opacity: .25; mask-image: linear-gradient(90deg, transparent, #000 30%, #000); }
	.wave-art svg { width: 100%; height: 100%; overflow: visible; }
	.wave-art path { fill: none; stroke: currentColor; stroke-width: 1.3; }
	.settings-row { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-bottom: 14px; }
	.select-wrap { display: inline-flex; height: 34px; max-width: 100%; align-items: center; gap: 8px; border: 1px solid #e2e8f0; border-radius: 999px; background: white; padding: 0 12px; color: #64748b; }
	.select-wrap select { width: auto; max-width: 205px; border: 0; outline: 0; appearance: none; background: transparent; color: #334155; font-size: 10px; cursor: pointer; }
	.voice-select select { max-width: 180px; }
	:global(.sample-button) { height: 34px; border-color: #e2e8f0; border-radius: 999px; color: #334155; font-size: 10px; }
	.text-entry { position: relative; display: block; border: 1px solid #e2e8f0; border-radius: 16px; background: #fff; transition: border-color .16s ease, box-shadow .16s ease; }
	.text-entry:focus-within { border-color: #94a3b8; box-shadow: 0 0 0 3px rgb(100 116 139 / 9%); }
	textarea { display: block; width: 100%; min-height: 148px; resize: vertical; border: 0; outline: 0; background: transparent; padding: 15px 15px 32px; color: #1e293b; font-size: 12px; line-height: 1.7; }
	textarea::placeholder { color: #94a3b8; }
	.character-count { position: absolute; right: 12px; bottom: 10px; color: #64748b; font-size: 10px; }
	.character-count span { color: #94a3b8; }
	.character-count.at-limit { color: #475569; }
	.advanced-controls { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; border: 1px solid #e2e8f0; border-top: 0; border-radius: 0 0 12px 12px; padding: 13px 15px; }
	.advanced-controls label { display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 8px; color: #64748b; font-size: 10px; }
	.advanced-controls output { color: #1e293b; font-weight: 650; }
	.advanced-controls input { grid-column: 1 / -1; width: 100%; accent-color: #111827; }
	.studio-footer { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding-top: 15px; }
	:global(.advanced-toggle) { gap: 8px; color: #475569; font-size: 10px; }
	:global(.advanced-toggle svg:last-child) { transition: transform .16s ease; }
	:global(.advanced-toggle svg.rotated) { transform: rotate(180deg); }
	:global(.generate-button) { min-height: 38px; gap: 9px; border-radius: 999px; background: #111827; padding: 0 18px; color: white; font-size: 10px; }
	:global(.generate-button:hover) { background: #1f2937; }
	:global(.generate-button svg) { color: white; }
	.button-arrow { margin-left: 5px; color: #d3d8e0; font-size: 15px; }
	.status-message { margin: 9px 0 0; color: #475569; font-size: 11px; }
	@media (max-width: 520px) {
		.tts-studio-panel { padding: 21px 17px 16px; }
		.studio-heading { min-height: 147px; }
		.wave-art { top: 10px; width: 40%; opacity: .2; }
		.eyebrow { margin-bottom: 15px; }
		.intro { max-width: 250px; }
		.select-wrap { flex: 1 1 100%; justify-content: flex-start; }
		.select-wrap select { max-width: none; flex: 1; }
		:global(.sample-button) { flex: 1; }
		.advanced-controls { grid-template-columns: 1fr; }
		.studio-footer { align-items: flex-start; flex-direction: column; }
		:global(.generate-button) { width: 100%; }
	}
	@media (prefers-reduced-motion: reduce) { .text-entry, :global(.advanced-toggle svg:last-child) { transition: none; } }
</style>

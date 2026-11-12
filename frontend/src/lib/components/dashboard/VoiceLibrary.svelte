<script lang="ts">
	import { Pause, Play, Waves } from '@lucide/svelte';
	import { Button, SectionHeading } from '#lib/components/ui';
	import { dashboardVoices } from '#lib/data/dashboard';
	import { player, toggleSpeech } from '#lib/speech.svelte';
	let { selectedVoice = $bindable('Ayesha') } = $props();
</script>

	<section class="voices-section" id="voices" aria-labelledby="voices-title">
	<SectionHeading id="voices-title" title="Your Voices" href="#studio" />
	<div class="voice-grid">
		{#each dashboardVoices as voice}
			<article class:selected={selectedVoice === voice.name} class="voice-card">
				<div class="voice-top">
					<button class="voice-select" type="button" aria-pressed={selectedVoice === voice.name} aria-label={`Select ${voice.name} voice`} onclick={() => (selectedVoice = voice.name)}>
						<span class={`voice-avatar ${voice.tone}`}><Waves size={19} strokeWidth={1.7} /></span>
						<span class="voice-info"><strong>{voice.name}</strong><small>{voice.style} <span aria-hidden="true">·</span> {voice.detail}</small></span>
					</button>
					<Button variant="secondary" size="icon-sm" class="voice-play" aria-label={`${player.active === `voice-${voice.name}` ? 'Stop' : 'Play'} ${voice.name} sample`} aria-pressed={player.active === `voice-${voice.name}`} onclick={() => toggleSpeech(`voice-${voice.name}`, voice.sample, { lang: 'bn-BD' })}>
						{#if player.active === `voice-${voice.name}`}<Pause size={13} />{:else}<Play size={13} />{/if}
					</Button>
				</div>
				<div class="voice-actions" aria-hidden="true"><span>···</span></div>
			</article>
		{/each}
	</div>
</section>

<style>
	.voices-section { display: grid; gap: 14px; }
	.voice-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 14px; }
	.voice-card { min-width: 0; border: 1px solid #e5e7eb; border-radius: 16px; background: #fff; padding: 14px; }
	.voice-card { transition: border-color .16s ease, box-shadow .16s ease; }
	.voice-card.selected { border-color: #cbd5e1; box-shadow: inset 0 0 0 1px #cbd5e1; }
	.voice-top { display: flex; min-width: 0; align-items: center; justify-content: space-between; gap: 7px; }
	.voice-select { display: flex; width: 100%; min-width: 0; align-items: center; gap: 9px; border: 0; background: transparent; padding: 0; text-align: left; cursor: pointer; }
	.voice-avatar { display: grid; width: 35px; height: 35px; flex: 0 0 auto; place-items: center; border-radius: 6px; }
	.voice-avatar.rose, .voice-avatar.green, .voice-avatar.blue, .voice-avatar.gold { background: #f1f5f9; color: #334155; }
	.voice-info { display: grid; min-width: 0; gap: 4px; }
	.voice-info strong { color: #0f172a; font-size: 11px; font-weight: 700; }
	.voice-info small { overflow: hidden; color: #64748b; font-size: 8px; text-overflow: ellipsis; white-space: nowrap; }
	.voice-actions { display: flex; justify-content: flex-end; margin-top: 5px; color: #cbd5e1; font-size: 17px; letter-spacing: 1px; }
	.voice-play { width: 26px; height: 26px; border-radius: 50%; }
	@media (max-width: 1100px) { .voice-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
	@media (max-width: 650px) { .voice-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
	@media (max-width: 390px) { .voice-grid { grid-template-columns: 1fr; } }
	@media (prefers-reduced-motion: reduce) { .voice-card { transition: none; } }
</style>

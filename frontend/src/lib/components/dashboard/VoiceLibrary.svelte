<script lang="ts">
	import { MoreHorizontal, Pause, Play, Waves } from '@lucide/svelte';
	import { Button, SectionHeading } from '#lib/components/ui';
	import { dashboardVoices } from '#lib/data/dashboard';
	import { player, toggleSpeech } from '#lib/speech.svelte';

	let { selectedVoice = $bindable('Ayesha') }: { selectedVoice?: string } = $props();
</script>

<section class="space-y-3.5 pt-2" id="voices" aria-labelledby="voices-title">
	<SectionHeading id="voices-title" title="Your Voices" href="#studio" />

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each dashboardVoices as voice}
			{@const isSelected = selectedVoice === voice.name}
			{@const isPlaying = player.active === `voice-${voice.name}`}
			<div
				class="group relative flex flex-col justify-between rounded-2xl border bg-card p-4 transition-all duration-200 hover:shadow-sm {isSelected
					? 'border-slate-900 ring-2 ring-slate-900/10 dark:border-white'
					: 'border-slate-200/80 hover:border-slate-300'}"
			>
				<div class="flex items-center justify-between gap-3">
					<button
						type="button"
						class="flex flex-1 items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
						aria-pressed={isSelected}
						aria-label={`Select ${voice.name} voice`}
						onclick={() => (selectedVoice = voice.name)}
					>
						<div
							class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-slate-200/70"
						>
							<div class="flex items-center gap-0.5" aria-hidden="true">
								<span class="h-2 w-0.5 rounded-full bg-slate-800"></span>
								<span class="h-4 w-0.5 rounded-full bg-slate-800"></span>
								<span class="h-2.5 w-0.5 rounded-full bg-slate-800"></span>
							</div>
						</div>
						<div class="min-w-0 flex-1">
							<div class="flex items-center gap-1.5">
								<h4 class="truncate text-xs font-bold text-slate-900">{voice.name}</h4>
								{#if isSelected}
									<span class="h-1.5 w-1.5 rounded-full bg-emerald-500" title="Selected voice"></span>
								{/if}
							</div>
							<span class="block truncate text-[10px] font-medium text-slate-400">
								{voice.style} • {voice.detail}
							</span>
						</div>
					</button>

					<Button
						variant="secondary"
						size="icon-xs"
						class="h-7 w-7 shrink-0 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
						aria-label={`${isPlaying ? 'Stop' : 'Play'} ${voice.name} sample`}
						aria-pressed={isPlaying}
						onclick={() => toggleSpeech(`voice-${voice.name}`, voice.sample, { lang: 'bn-BD' })}
					>
						{#if isPlaying}
							<Pause class="size-3 fill-current" />
						{:else}
							<Play class="size-3 fill-current ml-0.5" />
						{/if}
					</Button>
				</div>

				<div class="flex items-center justify-between pt-2">
					<span class="text-[9px] font-medium text-slate-400">
						{isSelected ? 'Active voice' : 'Click to select'}
					</span>
					<button
						type="button"
						class="text-slate-300 hover:text-slate-600 transition-colors p-0.5 rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
						aria-label={`Options for ${voice.name}`}
					>
						<MoreHorizontal class="size-3.5" />
					</button>
				</div>
			</div>
		{/each}
	</div>
</section>

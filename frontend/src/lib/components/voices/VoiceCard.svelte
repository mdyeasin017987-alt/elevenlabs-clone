<script lang="ts">
	import { Check } from '@lucide/svelte';
	import { Avatar, AvatarFallback, Badge, Card } from '#lib/components/ui';
	import PlayButton from '#lib/components/shared/PlayButton.svelte';
	import type { Voice } from '#lib/data/dashboard';

	let {
		voice,
		selected = false,
		onselect
	}: { voice: Voice; selected?: boolean; onselect: (name: string) => void } = $props();
</script>

<Card class="flex-row items-center gap-3 px-4 py-4 transition-shadow hover:shadow-md {selected ? 'ring-2 ring-primary' : ''}">
	<button
		type="button"
		class="flex min-w-0 flex-1 items-center gap-3 rounded-lg text-left focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
		aria-pressed={selected}
		aria-label={`Select ${voice.name} voice`}
		onclick={() => onselect(voice.name)}
	>
		<Avatar class="size-11">
			<AvatarFallback class="bg-brand/10 font-semibold text-brand">{voice.name[0]}</AvatarFallback>
		</Avatar>
		<div class="min-w-0 flex-1 space-y-1">
			<div class="flex items-center gap-1.5">
				<h3 class="truncate text-sm font-semibold">{voice.name}</h3>
				{#if selected}
					<Check class="size-3.5 shrink-0 text-brand" aria-label="Selected" />
				{/if}
			</div>
			<p class="truncate text-xs text-muted-foreground">{voice.style} • {voice.detail}</p>
			<Badge variant="outline" class="text-[10px]">{voice.lang === 'bn-BD' ? 'Bangla' : 'English'}</Badge>
		</div>
	</button>
	<PlayButton
		id={`voice-${voice.name}`}
		text={voice.sample}
		label={`${voice.name} sample`}
		options={{ lang: voice.lang, pitch: voice.pitch, rate: voice.rate }}
	/>
</Card>

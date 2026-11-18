<script lang="ts">
	import { Library, Search } from '@lucide/svelte';
	import { Button, Card, Input, SectionHeading } from '#lib/components/ui';
	import * as Tabs from '#lib/components/ui/tabs';
	import { voices } from '#lib/data/dashboard';
	import VoiceCard from './VoiceCard.svelte';

	let { selectedVoice = $bindable('Ayesha') }: { selectedVoice?: string } = $props();

	let query = $state('');
	let filter = $state('all');

	const filtered = $derived(
		voices.filter((voice) => {
			const matchesFilter =
				filter === 'all' || (filter === 'bangla' ? voice.lang === 'bn-BD' : voice.lang.startsWith('en'));
			const needle = query.trim().toLowerCase();
			const matchesQuery =
				!needle || `${voice.name} ${voice.style} ${voice.detail}`.toLowerCase().includes(needle);
			return matchesFilter && matchesQuery;
		})
	);
</script>

<section class="space-y-4" aria-labelledby="voices-title">
	<SectionHeading id="voices-title" title="Voice Library" icon={Library} />

	<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
		<Tabs.Root bind:value={filter}>
			<Tabs.List>
				<Tabs.Trigger value="all">All</Tabs.Trigger>
				<Tabs.Trigger value="bangla">Bangla</Tabs.Trigger>
				<Tabs.Trigger value="english">English</Tabs.Trigger>
			</Tabs.List>
		</Tabs.Root>

		<div class="relative w-full sm:max-w-xs">
			<Search class="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
			<Input type="search" bind:value={query} placeholder="Search voices..." aria-label="Search voices" class="pl-8" />
		</div>
	</div>

	{#if filtered.length}
		<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
			{#each filtered as voice (voice.name)}
				<VoiceCard {voice} selected={selectedVoice === voice.name} onselect={(name) => (selectedVoice = name)} />
			{/each}
		</div>
	{:else}
		<Card class="items-center px-4 py-10 text-center">
			<p class="font-semibold">No voices found</p>
			<p class="text-sm text-muted-foreground">Try a different search or filter.</p>
			<Button variant="outline" size="sm" onclick={() => { query = ''; filter = 'all'; }}>Clear filters</Button>
		</Card>
	{/if}

	<p class="text-sm text-muted-foreground">
		Selected voice: <span class="font-semibold text-foreground">{selectedVoice}</span> — used in
		<a href="/studio" class="font-medium text-foreground underline underline-offset-4">Text to Speech</a>.
	</p>
</section>

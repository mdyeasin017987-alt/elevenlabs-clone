<script lang="ts">
	import { Flame } from '@lucide/svelte';
	import { Avatar, AvatarFallback, Badge, Card, SectionHeading } from '#lib/components/ui';
	import PlayButton from '#lib/components/shared/PlayButton.svelte';
	import { trendingVoices } from '#lib/data/dashboard';
</script>

<section class="space-y-4" aria-labelledby="trending-title">
	<SectionHeading id="trending-title" title="Trending Voices" icon={Flame} href="/voices" linkLabel="See all voices" />

	<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
		{#each trendingVoices as voice}
			<Card class="flex-row items-center gap-3 px-4 py-4">
				<Avatar class="size-12">
					<AvatarFallback class="bg-brand/10 font-semibold text-brand">{voice.name[0]}</AvatarFallback>
				</Avatar>
				<div class="min-w-0 flex-1 space-y-1">
					<h3 class="truncate text-sm font-semibold">{voice.name}</h3>
					<p class="truncate text-xs text-muted-foreground">{voice.style} • {voice.detail}</p>
					<Badge variant="secondary" class="text-[10px]">
						<Flame />
						{voice.uses}
					</Badge>
				</div>
				<PlayButton
					id={`trending-${voice.name}`}
					text={voice.sample}
					label={`${voice.name} sample`}
					options={{ lang: voice.lang, pitch: voice.pitch, rate: voice.rate }}
				/>
			</Card>
		{/each}
	</div>
</section>

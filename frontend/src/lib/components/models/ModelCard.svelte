<script lang="ts">
	import { ArrowRight, Gem, Globe, Sparkles, Zap } from '@lucide/svelte';
	import { Badge, Button, Card } from '#lib/components/ui';
	import type { models } from '#lib/data/dashboard';

	type Model = (typeof models)[number];

	let { model }: { model: Model } = $props();

	const tagIcons = { Multilingual: Globe, 'Higher Quality': Gem, 'More Expressive': Sparkles, Fast: Zap } as const;
</script>

<Card class="flex-col items-stretch gap-0 overflow-hidden py-0 sm:flex-row">
	<div class="h-20 bg-linear-to-br from-brand/20 via-brand/60 to-brand sm:h-auto sm:w-44 sm:shrink-0" aria-hidden="true"></div>
	<div class="flex flex-1 flex-col gap-4 p-5 lg:flex-row lg:items-center">
		<div class="relative flex h-14 w-20 shrink-0 items-center justify-center rounded-xl bg-foreground text-2xl font-bold text-background">
			{model.version}
			{#if model.isNew}
				<Badge class="absolute -top-2 -right-2 h-4 bg-brand px-1.5 text-[9px] text-brand-foreground">NEW</Badge>
			{/if}
		</div>
		<div class="min-w-0 flex-1 space-y-2">
			<h3 class="font-semibold">{model.name}</h3>
			<p class="text-sm text-muted-foreground">{model.text}</p>
			<div class="flex flex-wrap gap-2">
				{#each model.tags as tag}
					{@const Icon = tagIcons[tag as keyof typeof tagIcons]}
					<Badge variant="outline">
						{#if Icon}<Icon />{/if}
						{tag}
					</Badge>
				{/each}
			</div>
		</div>
		<Button href="/studio" size="lg" class="h-11 gap-2 rounded-full px-6 lg:shrink-0">
			Try Now <ArrowRight />
		</Button>
	</div>
</Card>

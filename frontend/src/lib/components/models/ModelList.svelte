<script lang="ts">
	import { Box } from '@lucide/svelte';
	import { SectionHeading } from '#lib/components/ui';
	import { models } from '#lib/data/dashboard';
	import ModelCard from './ModelCard.svelte';
</script>

<section class="space-y-4" aria-labelledby="models-list-title">
	<SectionHeading id="models-list-title" title="Models" icon={Box} />
	<div class="space-y-4">
		{#each models as model}
			<ModelCard {model} />
		{/each}
	</div>
	<p class="text-sm text-muted-foreground">
		Demo catalogue: previews use your browser's built-in speech until a real speech backend is connected.
	</p>
</section>

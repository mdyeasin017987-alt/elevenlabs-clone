<script lang="ts">
	import { Box } from '@lucide/svelte';
	import ModelCard from '#lib/components/models/ModelCard.svelte';
	import { SectionHeading } from '#lib/components/ui';
	import { models } from '#lib/data/dashboard';
</script>

<section class="space-y-4" aria-labelledby="models-title">
	<SectionHeading id="models-title" title="New Models" icon={Box} href="/models" linkLabel="View all models" />
	<ModelCard model={models[0]} />
</section>

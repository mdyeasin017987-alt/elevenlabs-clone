<script lang="ts">
	import RecentActivityCard from '#lib/components/history/RecentActivityCard.svelte';
	import SpeechStudio from '#lib/components/studio/SpeechStudio.svelte';
	import UsageCard from '#lib/components/studio/UsageCard.svelte';
	import { studio } from '#lib/studio.svelte';
</script>

<svelte:head>
	<title>Text to Speech - Vocalis</title>
</svelte:head>

<div class="grid grid-cols-1 items-start gap-6 xl:grid-cols-12">
	<div class="xl:col-span-8">
		<SpeechStudio bind:selectedVoice={studio.voice} />
	</div>
	<div class="space-y-6 xl:col-span-4">
		<UsageCard />
		<RecentActivityCard />
	</div>
</div>

<script lang="ts">
	import { Clock } from '@lucide/svelte';
	import ActivityList from '#lib/components/history/ActivityList.svelte';
	import { Card, CardContent, SectionHeading } from '#lib/components/ui';
</script>

<svelte:head>
	<title>History - Vocalis</title>
</svelte:head>

<section class="space-y-4" aria-labelledby="history-title">
	<SectionHeading id="history-title" title="History" icon={Clock} />
	<Card>
		<CardContent>
			<ActivityList />
		</CardContent>
	</Card>
</section>

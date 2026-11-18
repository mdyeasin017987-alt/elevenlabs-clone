<script lang="ts">
	import { Clock } from '@lucide/svelte';
	import { Button, Card, CardContent, CardHeader, CardTitle } from '#lib/components/ui';
	import ActivityList from './ActivityList.svelte';
</script>

<Card id="activity">
	<CardHeader>
		<CardTitle class="flex items-center gap-2 text-sm">
			<Clock class="size-4" />
			Recent activity
		</CardTitle>
	</CardHeader>
	<CardContent class="space-y-4">
		<ActivityList limit={3} />
		<Button href="/history" variant="outline" size="sm" class="w-full">View all history</Button>
	</CardContent>
</Card>

<script lang="ts">
	import { BarChart3 } from '@lucide/svelte';
	import { Card, CardContent, CardHeader, CardTitle, Progress } from '#lib/components/ui';
	import { usage } from '#lib/data/dashboard';

	const remaining = usage.limit - usage.used;
	const percent = Math.round((usage.used / usage.limit) * 100);
</script>

<Card id="usage">
	<CardHeader>
		<CardTitle class="flex items-center gap-2 text-sm">
			<BarChart3 class="size-4" />
			Usage
		</CardTitle>
	</CardHeader>
	<CardContent class="space-y-3">
		<div>
			<p class="text-3xl font-extrabold tracking-tight">{remaining.toLocaleString()}</p>
			<p class="text-sm text-muted-foreground">characters remaining this month</p>
		</div>
		<Progress value={percent} class="h-2" aria-label="Characters used this month" />
		<p class="text-xs text-muted-foreground">
			{usage.used.toLocaleString()} of {usage.limit.toLocaleString()} used ({percent}%)
		</p>
	</CardContent>
</Card>

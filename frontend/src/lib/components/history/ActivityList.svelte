<script lang="ts">
	import PlayButton from '#lib/components/shared/PlayButton.svelte';
	import { activities, voiceByName } from '#lib/data/dashboard';

	/** `limit` lets the studio sidebar show a short list while /history shows everything. */
	let { limit }: { limit?: number } = $props();
	const items = $derived(limit ? activities.slice(0, limit) : activities);
</script>

<ul class="divide-y">
	{#each items as activity, index}
		{@const voice = voiceByName(activity.voice)}
		<li class="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
			<PlayButton
				id={`activity-${activity.title}-${index}`}
				text={activity.text}
				label={activity.title}
				options={{ lang: activity.lang, pitch: voice.pitch, rate: voice.rate }}
			/>
			<div class="min-w-0 flex-1">
				<p class="truncate text-sm font-semibold">{activity.title}</p>
				<p class="truncate text-xs text-muted-foreground">{activity.voice} · {activity.age}</p>
			</div>
		</li>
	{/each}
</ul>

<script lang="ts">
	import type { Component } from 'svelte';

	let {
		icon: Icon,
		value,
		label
	}: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		icon: Component<any>;
		value: string;
		label: string;
	} = $props();
</script>

<div class="flex items-center gap-3">
	<span class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
		<Icon class="size-5" />
	</span>
	<div>
		<p class="text-xl leading-none font-bold">{value}</p>
		<p class="mt-1 text-sm text-muted-foreground">{label}</p>
	</div>
</div>

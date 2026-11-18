<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import type { Component } from 'svelte';
	import { Button } from '#lib/components/ui/button';

	/**
	 * Standard section heading: optional icon, title and an optional "view all" link.
	 * Use it for every list section so spacing and link behaviour stay consistent.
	 */
	let {
		title,
		id,
		icon: Icon,
		href,
		linkLabel = 'View all'
	}: {
		title: string;
		id?: string;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		icon?: Component<any>;
		href?: string;
		linkLabel?: string;
	} = $props();
</script>

<div class="flex items-center justify-between gap-4">
	<h2 {id} class="flex items-center gap-2 text-lg font-bold tracking-tight">
		{#if Icon}<Icon class="size-5" />{/if}
		{title}
	</h2>
	{#if href}
		<Button {href} variant="link" class="h-auto gap-1 p-0 text-sm font-semibold text-foreground">
			{linkLabel}
			<ArrowRight />
		</Button>
	{/if}
</div>

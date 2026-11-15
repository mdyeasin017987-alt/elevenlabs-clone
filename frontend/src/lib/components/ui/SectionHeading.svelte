<script lang="ts">
	/**
	 * Standard section heading for dashboard content.
	 * Use the same component for list sections to keep spacing and link behavior
	 * consistent as the dashboard grows.
	 */
	let {
		title,
		id,
		href = '#',
		linkLabel = 'View all',
		showBars = true
	}: {
		title: string;
		id?: string;
		href?: string;
		linkLabel?: string;
		showBars?: boolean;
	} = $props();
</script>

<div class="section-heading">
	<div class="heading-title-wrap">
		{#if showBars}
			<div class="mini-sound-bars" aria-hidden="true">
				<span></span>
				<span></span>
				<span></span>
			</div>
		{/if}
		<h2 {id}>{title}</h2>
	</div>
	<a class="view-all" {href}>{linkLabel} <span aria-hidden="true">→</span></a>
</div>

<style>
	.section-heading { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
	.heading-title-wrap { display: flex; align-items: center; gap: 8px; }
	.mini-sound-bars { display: flex; align-items: center; gap: 2px; }
	.mini-sound-bars span { display: block; width: 2.5px; border-radius: 999px; background: #0f172a; }
	.mini-sound-bars span:nth-child(1) { height: 8px; }
	.mini-sound-bars span:nth-child(2) { height: 14px; }
	.mini-sound-bars span:nth-child(3) { height: 8px; }
	h2 { margin: 0; color: #0f172a; font-size: 14px; font-weight: 700; }
	.view-all { display: inline-flex; align-items: center; gap: 6px; color: #475569; font-size: 11px; font-weight: 500; text-decoration: none; white-space: nowrap; transition: color .15s ease; }
	.view-all:hover { color: #0f172a; }
	.view-all:focus-visible { outline: 2px solid #64748b; outline-offset: 3px; border-radius: 4px; }
</style>

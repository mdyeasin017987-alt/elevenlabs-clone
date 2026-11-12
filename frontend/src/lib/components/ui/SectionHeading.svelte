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
		linkLabel = 'View all'
	} = $props<{ title: string; id?: string; href?: string; linkLabel?: string }>();
</script>

<div class="section-heading">
	<h2 {id}>{title}</h2>
	<a class="view-all" {href}>{linkLabel} <span aria-hidden="true">→</span></a>
</div>

<style>
	.section-heading { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
	h2 { margin: 0; color: #0f172a; font-size: 14px; font-weight: 700; }
	.view-all { display: inline-flex; align-items: center; gap: 6px; color: #475569; font-size: 10px; text-decoration: none; white-space: nowrap; }
	.view-all:hover { color: #0f172a; }
	.view-all:focus-visible { outline: 2px solid #64748b; outline-offset: 3px; border-radius: 4px; }
</style>

<script lang="ts">
	import type { Snippet } from 'svelte';

	/**
	 * Shared bordered surface for dashboard panels.
	 * Feature components own padding and layout through `class`; this primitive
	 * only provides the common surface treatment and accepts a Svelte snippet.
	 */
	let {
		class: className = '',
		id,
		'aria-labelledby': ariaLabelledby,
		children
	}: {
		class?: string;
		id?: string;
		'aria-labelledby'?: string;
		children: Snippet;
	} = $props();
</script>

<section id={id} aria-labelledby={ariaLabelledby} class={`surface-card ${className}`}>
	{@render children()}
</section>

<style>
	.surface-card { min-width: 0; border: 1px solid #e5e7eb; border-radius: 20px; background: #fff; }
</style>

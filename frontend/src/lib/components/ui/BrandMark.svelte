<script lang="ts">
	/**
	 * Vocalis waveform wordmark.
	 * Keep the mark here so sidebar, landing header and future app shells
	 * use one consistent brand treatment. `compact` is useful in tight spaces.
	 */
	let { compact = false }: { compact?: boolean } = $props();
</script>

<span class:compact class="brand-mark" aria-hidden="true">
	<i></i><i></i><i></i><i></i>
</span>

<style>
	.brand-mark { display: inline-flex; height: 24px; align-items: center; gap: 3px; flex: 0 0 auto; }
	.brand-mark i { display: block; width: 3px; border-radius: 99px; background: currentColor; }
	.brand-mark i:nth-child(1) { height: 14px; }
	.brand-mark i:nth-child(2) { height: 24px; }
	.brand-mark i:nth-child(3) { height: 17px; }
	.brand-mark i:nth-child(4) { height: 9px; }
	.brand-mark.compact { height: 17px; gap: 2px; }
	.brand-mark.compact i { width: 2px; }
	.brand-mark.compact i:nth-child(1) { height: 9px; }
	.brand-mark.compact i:nth-child(2) { height: 17px; }
	.brand-mark.compact i:nth-child(3) { height: 12px; }
	.brand-mark.compact i:nth-child(4) { height: 6px; }
</style>

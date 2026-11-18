<script lang="ts">
	import { BrandMark } from '#lib/components/ui';
</script>

<!-- Decorative side panel (login-04 / signup-04 layout). Colours follow the brand variable. -->
<div class="relative hidden flex-col justify-between overflow-hidden bg-linear-to-br from-brand to-brand/50 p-8 text-brand-foreground md:flex">
	<a href="/" class="flex items-center gap-2.5 self-start" aria-label="Vocalis home">
		<BrandMark />
		<span class="text-xl font-bold tracking-tight">Vocalis</span>
	</a>
	<div class="space-y-3">
		<h2 class="text-3xl leading-tight font-extrabold tracking-tight">Turn your text into lifelike speech</h2>
		<p class="text-sm opacity-80">Natural, expressive voices in Bangla, English and more.</p>
	</div>
	<div class="pointer-events-none absolute -right-10 -bottom-10 flex items-end gap-2 opacity-20" aria-hidden="true">
		{#each [60, 110, 160, 220, 150, 100, 70] as height}
			<span class="w-5 rounded-full bg-current" style="height: {height}px"></span>
		{/each}
	</div>
</div>

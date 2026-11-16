<script lang="ts">
	import BrandMark from '#lib/components/ui/BrandMark.svelte';
	import { Button } from '#lib/components/ui/button';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
</script>

<header class="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-10">
	<a href="/" class="flex items-center gap-2.5 text-white no-underline">
		<BrandMark />
		<span class="text-xl font-bold tracking-tight">Vocalis</span>
	</a>
	<Button
		variant="outline"
		href="/"
		class="rounded-full border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
	>
		Back to home
		<ArrowRight class="ml-1 size-4" />
	</Button>
</header>

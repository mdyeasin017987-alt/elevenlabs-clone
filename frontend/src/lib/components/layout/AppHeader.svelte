<script lang="ts">
	import { page } from '$app/state';
	import { ArrowRight } from '@lucide/svelte';
	import { Button, Separator } from '#lib/components/ui';
	import * as Sidebar from '#lib/components/ui/sidebar/index.js';
	import { titleForPath } from '#lib/data/navigation';
</script>

<header
	class="sticky top-0 z-20 flex h-14 shrink-0 items-center gap-2 border-b bg-background/80 px-4 backdrop-blur-md sm:px-6"
>
	<Sidebar.Trigger class="-ml-1" />
	<Separator orientation="vertical" class="mr-1 h-4" />
	<span class="truncate text-sm font-semibold">{titleForPath(page.url.pathname)}</span>

	<Button href="/studio" size="sm" class="ml-auto gap-1.5 rounded-full px-4">
		<span class="hidden sm:inline">Generate Speech</span>
		<span class="sm:hidden">Generate</span>
		<ArrowRight />
	</Button>
</header>

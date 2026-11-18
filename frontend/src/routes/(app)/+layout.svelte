<script lang="ts">
	import AppHeader from '#lib/components/layout/AppHeader.svelte';
	import AppSidebar from '#lib/components/layout/AppSidebar.svelte';
	import * as Sidebar from '#lib/components/ui/sidebar/index.js';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset class="min-w-0 bg-muted/30">
		<AppHeader />
		<div class="mx-auto w-full max-w-[1400px] flex-1 space-y-8 p-4 sm:p-6 lg:p-8">
			{@render children()}
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>

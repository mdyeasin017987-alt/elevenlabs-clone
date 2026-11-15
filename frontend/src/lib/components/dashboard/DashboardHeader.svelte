<script lang="ts">
	import { ArrowRight, Bell, Menu, Search } from '@lucide/svelte';
	import { Button } from '#lib/components/ui';

	let { mobileOpen = $bindable(false) }: { mobileOpen?: boolean } = $props();
	let query = $state('');
	let searchInput: HTMLInputElement | null = null;

	function handleShortcut(event: KeyboardEvent) {
		if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
			event.preventDefault();
			searchInput?.focus();
		}
	}
</script>

<svelte:window onkeydown={handleShortcut} />

<header class="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200/70 bg-white/80 px-4 sm:px-8 backdrop-blur-md" id="top">
	<div class="flex items-center gap-3 flex-1 max-w-xl">
		<!-- Mobile menu button -->
		<Button
			variant="ghost"
			size="icon-sm"
			class="md:hidden text-slate-600 hover:text-slate-900"
			aria-label="Open navigation"
			aria-expanded={mobileOpen}
			onclick={() => (mobileOpen = true)}
		>
			<Menu class="size-5" />
		</Button>

		<!-- Search Input Box -->
		<div class="relative w-full max-w-[480px]">
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
				<Search class="size-4" />
			</div>
			<input
				bind:this={searchInput}
				bind:value={query}
				type="search"
				placeholder="Search voices, projects..."
				aria-label="Search voices or projects"
				class="w-full rounded-full border-none bg-[#F3F4F6] py-2 pr-16 pl-9 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300"
			/>
			<div class="absolute inset-y-0 right-0 flex items-center pr-3">
				<kbd class="hidden sm:inline-block rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[9px] font-medium text-slate-400 shadow-2xs">
					⌘ + K
				</kbd>
			</div>
		</div>
	</div>

	<!-- Top Right Actions -->
	<div class="flex items-center gap-2 sm:gap-4 pl-3">
		<Button
			variant="ghost"
			size="icon-sm"
			class="relative rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
			aria-label="Notifications"
		>
			<Bell class="size-4" />
			<span class="absolute top-1.5 right-1.5 h-2 w-2 rounded-full border border-white bg-slate-900" aria-hidden="true"></span>
		</Button>

		<Button
			href="#studio"
			size="sm"
			class="h-8 gap-1.5 rounded-full bg-slate-900 px-4 text-xs font-semibold text-white shadow-2xs hover:bg-slate-800 transition-colors"
		>
			<span class="hidden sm:inline">Generate Speech</span>
			<span class="sm:hidden">Generate</span>
			<ArrowRight class="size-3.5" />
		</Button>
	</div>
</header>

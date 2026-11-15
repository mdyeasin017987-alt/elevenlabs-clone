<script lang="ts">
	import { ChevronDown, Clock3, FolderClosed, Home, Library, Mic2, Moon, Settings, Sparkles, Sun, X } from '@lucide/svelte';
	import { BrandMark, Button } from '#lib/components/ui';

	let { mobileOpen = $bindable(false) }: { mobileOpen?: boolean } = $props();
	let activeSection = $state('Home');

	const navigation = [
		{ label: 'Home', icon: Home, href: '#top' },
		{ label: 'Voices', icon: Mic2, href: '#voices' },
		{ label: 'Projects', icon: FolderClosed, href: '#projects' },
		{ label: 'Library', icon: Library, href: '#voices' },
		{ label: 'History', icon: Clock3, href: '#activity' },
		{ label: 'Settings', icon: Settings, href: '#studio' }
	];

	function handleWindowKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') mobileOpen = false;
	}
</script>

<svelte:window onkeydown={handleWindowKeydown} />

<!-- Mobile Scrim -->
{#if mobileOpen}
	<div
		class="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-xs md:hidden"
		onclick={() => (mobileOpen = false)}
		aria-hidden="true"
	></div>
{/if}

<!-- Sidebar Container -->
<aside
	class="fixed inset-y-0 left-0 z-50 flex h-dvh w-64 flex-col justify-between border-r border-slate-200/80 bg-white p-5 transition-transform duration-200 ease-in-out md:sticky md:top-0 md:translate-x-0 {mobileOpen
		? 'translate-x-0 shadow-2xl'
		: '-translate-x-full md:shadow-none'}"
	aria-label="Main navigation"
>
	<!-- Top Area -->
	<div class="space-y-6">
		<!-- Brand Header -->
		<div class="flex items-center justify-between px-2 pt-1">
			<a
				href="#top"
				class="flex items-center gap-2.5 text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
				onclick={() => (mobileOpen = false)}
				aria-label="Vocalis home"
			>
				<BrandMark />
				<span class="text-xl font-bold tracking-tight">Vocalis</span>
			</a>
			<Button
				variant="ghost"
				size="icon-xs"
				class="md:hidden text-slate-500 hover:text-slate-900"
				aria-label="Close menu"
				onclick={() => (mobileOpen = false)}
			>
				<X class="size-4" />
			</Button>
		</div>

		<!-- Navigation Links -->
		<nav class="space-y-1 text-sm font-medium">
			{#each navigation as item}
				{@const isActive = activeSection === item.label}
				<a
					href={item.href}
					class="flex items-center gap-3.5 rounded-xl px-3.5 py-2.5 text-xs font-medium transition-all {isActive
						? 'bg-slate-100 font-semibold text-slate-900'
						: 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}"
					aria-current={isActive ? 'page' : undefined}
					onclick={() => {
						activeSection = item.label;
						mobileOpen = false;
					}}
				>
					<item.icon class="size-4 shrink-0 {isActive ? 'text-slate-900' : 'text-slate-500'}" />
					<span>{item.label}</span>
				</a>
			{/each}
		</nav>
	</div>

	<!-- Bottom Area -->
	<div class="space-y-4 pt-4 border-t border-slate-100">
		<!-- Upgrade to Pro Card -->
		<div class="space-y-3 rounded-2xl border border-slate-200/70 bg-[#F8F9FB] p-4">
			<div class="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-slate-800">
				<Sparkles class="size-3.5 fill-slate-800 text-slate-800" />
				<span>Upgrade to Pro</span>
			</div>
			<p class="text-[11px] leading-relaxed text-slate-500 font-normal">
				Unlock more credits, premium voices and advanced features.
			</p>
			<Button
				href="#usage"
				size="sm"
				class="w-full gap-1.5 rounded-full bg-slate-900 py-2 text-xs font-semibold text-white shadow-2xs hover:bg-slate-800 transition-colors"
			>
				<span>Upgrade</span>
				<span aria-hidden="true">→</span>
			</Button>
		</div>

		<!-- Appearance indicator -->
		<div class="flex items-center px-1">
			<div class="flex items-center rounded-full border border-slate-200/80 bg-slate-100 p-0.5" title="Light theme active">
				<span class="flex h-6 w-6 items-center justify-center rounded-full bg-white text-slate-700 shadow-2xs">
					<Sun class="size-3.5" />
				</span>
				<span class="flex h-6 w-6 items-center justify-center rounded-full text-slate-400">
					<Moon class="size-3" />
				</span>
			</div>
			<span class="ml-2.5 text-[11px] text-slate-500 font-medium">Light mode</span>
		</div>

		<!-- User Profile -->
		<div class="flex items-center justify-between px-1 pt-1 border-t border-slate-100">
			<div class="flex items-center gap-2.5">
				<div class="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-700">
					S
				</div>
				<div class="leading-tight">
					<span class="block text-xs font-semibold text-slate-800">Sahadat</span>
					<span class="block text-[10px] text-slate-400">Personal workspace</span>
				</div>
			</div>
			<button
				type="button"
				class="text-slate-400 hover:text-slate-600 transition-colors p-1"
				aria-label="User profile menu"
			>
				<ChevronDown class="size-3.5" />
			</button>
		</div>
	</div>
</aside>

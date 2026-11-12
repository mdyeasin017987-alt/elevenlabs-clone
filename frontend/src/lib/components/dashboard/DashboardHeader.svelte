<script lang="ts">
	import { ArrowRight, Bell, Menu, Search } from '@lucide/svelte';
	import { Button } from '#lib/components/ui';

	let { mobileOpen = $bindable(false) } = $props();
	let query = $state('');
	let searchInput: HTMLInputElement;

	// Keyboard shortcut mirrors the familiar command palette affordance.
	// It focuses the search field only; global result filtering is intentionally
	// left for the future search endpoint rather than showing fake results.
	function handleShortcut(event: KeyboardEvent) {
		if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
			event.preventDefault();
			searchInput?.focus();
		}
	}
</script>

<svelte:window onkeydown={handleShortcut} />

<header class="topbar" id="top">
	<div class="topbar-inner">
		<div class="header-start">
			<Button variant="ghost" size="icon-sm" class="menu-toggle" aria-label="Open navigation" aria-expanded={mobileOpen} onclick={() => (mobileOpen = true)}>
				<Menu size={19} />
			</Button>
			<label class="search-box">
				<Search size={16} aria-hidden="true" />
				<input bind:this={searchInput} bind:value={query} type="search" placeholder="Search voices, projects..." aria-label="Search voices or projects" />
				<kbd>⌘ + K</kbd>
			</label>
		</div>
		<div class="header-actions">
			<Button variant="ghost" size="icon-sm" class="notification" aria-label="Notifications">
				<Bell size={18} />
				<span class="notification-dot"></span>
			</Button>
			<Button href="#studio" class="header-cta"><span>Generate Speech</span><ArrowRight size={15} /></Button>
		</div>
	</div>
</header>

<style>
	.topbar { position: sticky; top: 0; z-index: 30; border-bottom: 1px solid #e8e9e7; background: rgb(255 255 255 / 92%); backdrop-filter: blur(14px); }
	.topbar-inner { display: flex; min-height: 64px; align-items: center; justify-content: space-between; gap: 18px; padding: 0 34px; }
	.header-start, .header-actions { display: flex; align-items: center; gap: 12px; }
	.search-box { display: flex; width: min(480px, 52vw); height: 36px; align-items: center; gap: 9px; border: 0; border-radius: 999px; background: #f3f4f6; padding: 0 12px; color: #94a3b8; }
	.search-box input { width: 100%; min-width: 0; border: 0; outline: 0; background: transparent; color: #334155; font-size: 11px; }
	.search-box input::placeholder { color: #94a3b8; }
	.search-box kbd { flex: 0 0 auto; border: 1px solid #e2e8f0; border-radius: 4px; background: #fff; padding: 2px 5px; color: #64748b; font-size: 9px; }
	:global(.header-cta) { min-height: 35px; border-radius: 999px; background: #111827; color: #fff; font-size: 11px; }
	:global(.header-cta:hover) { background: #1f2937; }
	:global(.notification) { position: relative; color: #475569; }
	.notification-dot { position: absolute; top: 7px; right: 7px; width: 6px; height: 6px; border: 1px solid white; border-radius: 50%; background: #111827; }
	:global(.menu-toggle) { display: none; }
	@media (max-width: 760px) {
		.topbar-inner { min-height: 58px; padding: 0 16px; }
		:global(.menu-toggle) { display: inline-flex; }
		.search-box { width: min(52vw, 320px); }
		.search-box kbd, :global(.notification) { display: none; }
		.header-actions { gap: 7px; }
		:global(.header-cta) { width: 36px; padding: 0; }
		:global(.header-cta span) { display: none; }
	}
</style>

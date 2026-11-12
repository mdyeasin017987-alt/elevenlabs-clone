<script lang="ts">
	import { Clock3, FolderClosed, Home, Library, Mic2, Settings, Sparkles, Sun, X } from '@lucide/svelte';
	import { Button, BrandMark } from '#lib/components/ui';

	let { mobileOpen = $bindable(false) } = $props();
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

{#if mobileOpen}
	<button class="sidebar-scrim" aria-label="Close navigation" onclick={() => (mobileOpen = false)}></button>
{/if}

<aside class:open={mobileOpen} class="sidebar" aria-label="Main navigation">
	<div class="sidebar-main">
		<div class="brand-row">
			<a class="brand" href="#top" onclick={() => (mobileOpen = false)} aria-label="Vocalis home">
				<BrandMark />
				<span>Vocalis</span>
			</a>
			<Button variant="ghost" size="icon-sm" class="mobile-close" aria-label="Close menu" onclick={() => (mobileOpen = false)}>
				<X size={18} />
			</Button>
		</div>

		<p class="nav-caption">WORKSPACE</p>
		<nav class="nav-list">
			{#each navigation as item}
				<a
					href={item.href}
					class:active={activeSection === item.label}
					class="nav-item"
					aria-current={activeSection === item.label ? 'page' : undefined}
					onclick={() => {
						activeSection = item.label;
						mobileOpen = false;
					}}
				>
					<item.icon size={18} strokeWidth={1.8} />
					<span>{item.label}</span>
				</a>
			{/each}
		</nav>
	</div>

	<div class="sidebar-bottom">
		<div class="plan-box">
			<div class="plan-title"><Sparkles size={15} /> Upgrade to Pro</div>
			<p>Unlock more credits, premium voices and advanced features.</p>
			<Button href="#usage" class="upgrade-button">Upgrade <span aria-hidden="true">→</span></Button>
		</div>
		<!-- Light theme is the only implemented theme. A toggle is intentionally
		     not shown until dark-mode tokens are applied to dashboard components. -->
		<div class="theme-indicator" aria-label="Current theme: light">
			<Sun size={15} /><span>Light appearance</span>
		</div>
		<button class="profile" type="button">
			<span class="avatar">S</span>
			<span class="profile-copy"><strong>Sahadat</strong><small>Personal workspace</small></span>
			<span class="profile-more" aria-hidden="true">···</span>
		</button>
	</div>
</aside>

<style>
	.sidebar {
		position: sticky;
		top: 0;
		z-index: 40;
		display: flex;
		width: 256px;
		min-width: 256px;
		height: 100dvh;
		flex-direction: column;
		justify-content: space-between;
		border-right: 1px solid #e8e9e9;
		background: #fff;
		padding: 25px 16px 18px;
	}
	.sidebar-main { display: flex; flex-direction: column; }
	.brand-row { display: flex; align-items: center; justify-content: space-between; padding: 0 7px; }
	.brand { display: inline-flex; align-items: center; gap: 9px; color: #0f172a; font-size: 20px; font-weight: 750; letter-spacing: 0; text-decoration: none; }
	.nav-caption { margin: 42px 10px 12px; color: #94a3b8; font-size: 10px; font-weight: 700; letter-spacing: 0.1em; }
	.nav-list { display: grid; gap: 4px; }
	.nav-item { display: flex; align-items: center; gap: 12px; min-height: 42px; border-radius: 10px; padding: 0 11px; color: #64748b; font-size: 13px; font-weight: 550; text-decoration: none; transition: background .16s ease, color .16s ease; }
	.nav-item:hover { background: #f8fafc; color: #111827; }
	.nav-item.active { background: #f1f5f9; color: #111827; font-weight: 650; }
	.sidebar-bottom { display: grid; gap: 16px; }
	.plan-box { border: 1px solid #e2e8f0; border-radius: 16px; background: #f8f9fb; padding: 15px; }
	.plan-title { display: flex; align-items: center; gap: 8px; color: #1e293b; font-size: 12px; font-weight: 700; }
	.plan-title :global(svg) { color: #1e293b; }
	.plan-box p { margin: 9px 0 13px; color: #64748b; font-size: 11px; line-height: 1.55; }
	:global(.upgrade-button) { display: flex; width: 100%; justify-content: space-between; background: #111827; color: white; font-size: 11px; }
	.theme-indicator { display: inline-flex; width: max-content; align-items: center; gap: 7px; border: 1px solid #e8e9e7; border-radius: 8px; padding: 7px 9px; color: #64748b; font-size: 10px; }
	.profile { display: flex; align-items: center; gap: 10px; border: 0; border-top: 1px solid #eeefec; background: transparent; padding: 15px 3px 0; text-align: left; cursor: pointer; }
	.avatar { display: grid; width: 34px; height: 34px; place-items: center; border-radius: 50%; background: #e2e8f0; color: #334155; font-size: 12px; font-weight: 700; }
	.profile-copy { display: grid; gap: 3px; color: #2a2d2c; font-size: 11px; }
	.profile-copy small { color: #929694; font-size: 10px; }
	.profile-more { margin-left: auto; color: #747a77; font-size: 20px; letter-spacing: 0; }
	:global(.mobile-close), .sidebar-scrim { display: none; }
	@media (max-width: 760px) {
		.sidebar { position: fixed; left: 0; top: 0; z-index: 80; width: min(290px, calc(100vw - 48px)); min-width: 0; transform: translateX(-105%); transition: transform .22s ease; box-shadow: 12px 0 35px rgb(22 27 23 / 10%); }
		.sidebar.open { transform: translateX(0); }
		:global(.mobile-close) { display: inline-flex; }
		.sidebar-scrim { position: fixed; inset: 0; z-index: 70; display: block; border: 0; background: rgb(20 24 22 / 35%); }
	}
	@media (prefers-reduced-motion: reduce) { .sidebar { transition: none; } }
</style>

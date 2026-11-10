<script lang="ts">
	import { Button } from '#lib/components/ui/button/index.js';

	let menuOpen = $state(false);
	const navItems = [
		{ label: 'Products', href: '#features' },
		{ label: 'Voices', href: '#voices' },
		{ label: 'Get started', href: '#cta' },
		{ label: 'Resources', href: '#footer' }
	];
</script>

<svelte:window onkeydown={(event) => { if (event.key === 'Escape') menuOpen = false; }} />

<header class="topbar">
	<div class="container topbar-inner">
		<a class="brand" href="/" aria-label="Vocalis home">
			<div class="brand-mark" aria-hidden="true"><span class="bar short"></span><span class="bar tall"></span><span class="bar mid"></span><span class="bar short"></span></div>
			<span class="brand-name">Vocalis</span>
		</a>
		<nav id="primary-nav" class="desktop-nav" class:open={menuOpen} aria-label="Main navigation">
			{#each navItems as item}
				<a href={item.href} class="nav-link" onclick={() => (menuOpen = false)}>{item.label}</a>
			{/each}
			<a href="/" class="nav-link mobile-signin" onclick={() => (menuOpen = false)}>Sign in</a>
		</nav>
		<div class="nav-actions">
			<a href="/" class="sign-in">Sign in</a>
			<Button href="#features" class="primary-cta"><span>Get started free</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg></Button>
		</div>
		<button type="button" class="menu-toggle" class:open={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="primary-nav" onclick={() => (menuOpen = !menuOpen)}>
			<span></span><span></span>
		</button>
	</div>
</header>

<style>
	.menu-toggle { display: none; width: 44px; height: 44px; place-content: center; gap: 5px; border: 1px solid #d4d4d4; border-radius: 8px; background: #fff; cursor: pointer; }
	.menu-toggle span { display: block; width: 17px; height: 2px; background: #111; transition: transform .2s ease; }
	.menu-toggle.open span:first-child { transform: translateY(3.5px) rotate(45deg); }
	.menu-toggle.open span:last-child { transform: translateY(-3.5px) rotate(-45deg); }
	.mobile-signin { display: none; }
	@media (max-width: 960px) {
		.menu-toggle { display: grid; }
		.desktop-nav { display: none; position: absolute; top: 100%; left: 0; right: 0; padding: 12px 16px; border-bottom: 1px solid rgba(17,17,17,.12); background: #fff; }
		.desktop-nav.open { display: grid; gap: 0; }
		.desktop-nav .nav-link { min-height: 44px; }
		.desktop-nav .mobile-signin { display: inline-flex; }
		.nav-actions .sign-in { display: none; }
	}
</style>

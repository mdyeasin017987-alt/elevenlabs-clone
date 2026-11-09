<script lang="ts">
	import { Button } from '#lib/components/ui/button/index.js';

	let menuOpen = $state(false);
	const navItems = [
		{ label: 'Products', href: '#features' },
		{ label: 'Voices', href: '#voices' },
		{ label: 'Pricing', href: '#cta' },
		{ label: 'Resources', href: '#footer' },
		{ label: 'Enterprise', href: '#footer' }
	];
</script>

<header class="topbar">
	<div class="container topbar-inner">
		<a class="brand" href="/" aria-label="Vocalis home">
			<div class="brand-mark" aria-hidden="true"><span class="bar short"></span><span class="bar tall"></span><span class="bar mid"></span><span class="bar short"></span></div>
			<span class="brand-name">Vocalis</span>
		</a>
		<nav class="desktop-nav" class:open={menuOpen} aria-label="Main navigation">
			{#each navItems as item}
				<a href={item.href} class="nav-link" onclick={() => (menuOpen = false)}>{item.label}</a>
			{/each}
		</nav>
		<div class="nav-actions">
			<a href="/" class="sign-in">Sign in</a>
			<Button href="#features" class="primary-cta"><span>Get started free</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg></Button>
		</div>
		<button type="button" class="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onclick={() => (menuOpen = !menuOpen)}>
			<span></span><span></span>
		</button>
	</div>
</header>

<style>
	.menu-toggle { display: none; width: 40px; height: 40px; place-content: center; gap: 5px; border: 1px solid #d4d4d4; border-radius: 8px; background: #fff; cursor: pointer; }
	.menu-toggle span { display: block; width: 17px; height: 2px; background: #111; }
	@media (max-width: 720px) {
		.menu-toggle { display: grid; }
		.desktop-nav { display: none; position: absolute; top: 100%; left: 0; right: 0; padding: 12px 16px; border-bottom: 1px solid rgba(17,17,17,.12); background: #fff; }
		.desktop-nav.open { display: grid; gap: 0; }
		.desktop-nav .nav-link { min-height: 44px; }
		.nav-actions .sign-in { display: none; }
	}
</style>
<script lang="ts">
	let menuOpen = $state(false);
	const links = [
		{ label: 'Studio', href: '#studio' },
		{ label: 'Voices', href: '#voices' },
		{ label: 'Features', href: '#features' },
		{ label: 'Pricing', href: '#pricing' }
	];
</script>

<div class="announcement mono"><div class="container announcement-inner"><p><span class="update">NEW</span> A voice for every story. 70+ languages, one creative studio.</p><a href="#studio">Try the studio <span aria-hidden="true">↗</span></a></div></div>
<header class="header">
	<div class="container nav-row">
		<a class="brand" href="#top" aria-label="Vocalis home"><span class="brand-mark" aria-hidden="true">V</span><span class="display">VOCALIS</span></a>
		<nav class:open={menuOpen} aria-label="Main navigation">
			{#each links as link}<a href={link.href} onclick={() => (menuOpen = false)}>{link.label}</a>{/each}
		</nav>
		<div class="nav-actions"><a class="login" href="#footer">Log in</a><a class="button primary" href="#studio">Make some noise <span aria-hidden="true">↗</span></a></div>
		<button class="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onclick={() => (menuOpen = !menuOpen)}>{menuOpen ? '×' : '☰'}</button>
	</div>
</header>

<style>
	.announcement { background: #ffc900; border-bottom: 2px solid #000; font-size: 10px; font-weight: 700; }
	.announcement-inner { min-height: 34px; display: flex; align-items: center; justify-content: space-between; gap: 12px; }
	.announcement p { margin: 0; }
	.update { margin-right: 8px; padding: 3px 6px; background: #000; color: #fff; font-size: 9px; }
	.announcement a { color: inherit; text-decoration-thickness: 1px; text-underline-offset: 3px; }
	.header { position: sticky; z-index: 20; top: 0; background: #fffdf9; border-bottom: 2px solid #000; }
	.nav-row { min-height: 72px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
	.brand { display: flex; align-items: center; gap: 11px; color: #000; text-decoration: none; font-size: 22px; font-weight: 700; }
	.brand-mark { width: 35px; aspect-ratio: 1; display: grid; place-items: center; border: 2px solid #000; background: #ff90e8; box-shadow: 3px 3px 0 #000; font: 700 20px 'Space Grotesk', sans-serif; }
	nav { display: flex; align-items: center; gap: 4px; }
	nav a, .login { padding: 9px 10px; color: #000; text-decoration: none; font: 600 11px 'JetBrains Mono', monospace; }
	nav a:hover { background: #000; color: #fff; }
	.nav-actions { display: flex; align-items: center; gap: 7px; }
	.button { display: inline-flex; min-height: 40px; align-items: center; justify-content: center; gap: 11px; padding: 0 15px; border: 2px solid #000; background: #ff90e8; box-shadow: 3px 3px 0 #000; color: #000; text-decoration: none; font: 700 10px 'JetBrains Mono', monospace; transition: transform .12s, box-shadow .12s; }
	.button:hover { transform: translate(-2px, -2px); box-shadow: 5px 5px 0 #000; }
	.menu-toggle { display: none; width: 40px; height: 40px; border: 2px solid #000; background: #fff; font-size: 18px; }
	@media (max-width: 860px) {
		nav { display: none; position: absolute; top: 100%; left: 0; right: 0; padding: 12px 24px 18px; border-bottom: 2px solid #000; background: #fffdf9; }
		nav.open { display: grid; }
		nav a { padding: 12px; border: 1px solid #000; }
		.menu-toggle { display: block; }
		.nav-actions { margin-left: auto; }
		.login { display: none; }
	}
	@media (max-width: 440px) { .announcement-inner { padding-block: 7px; } .announcement a { display: none; } .nav-row { min-height: 64px; } .brand { font-size: 19px; } .nav-actions .button { min-height: 36px; padding-inline: 9px; font-size: 9px; } }
</style>
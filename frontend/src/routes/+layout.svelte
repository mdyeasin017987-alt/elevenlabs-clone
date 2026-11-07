<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
	<meta name="theme-color" content="#fffdf9" />
</svelte:head>

{@render children()}

<style>
	:global(*) { box-sizing: border-box; }
	:global(html) { scroll-behavior: smooth; scroll-padding-top: 5rem; }
	:global(body) {
		margin: 0;
		border-top: 7px solid #000;
		background: #fffdf9;
		color: #111;
		font-family: 'Work Sans', 'Segoe UI', sans-serif;
		-webkit-font-smoothing: antialiased;
	}
	:global(button), :global(input), :global(select), :global(textarea) { font: inherit; }
	:global(button), :global(a), :global(input), :global(select), :global(textarea) { -webkit-tap-highlight-color: transparent; }
	:global(button:focus-visible), :global(a:focus-visible), :global(input:focus-visible), :global(select:focus-visible), :global(textarea:focus-visible) { outline: 3px solid #23a094; outline-offset: 3px; }
	:global(::selection) { background: #ff90e8; color: #000; }
	:global(.display) { font-family: 'Space Grotesk', 'Arial Black', sans-serif; }
	:global(.mono) { font-family: 'JetBrains Mono', Consolas, monospace; }
	:global(.container) { width: min(1200px, calc(100% - 48px)); margin-inline: auto; }
	@media (max-width: 640px) { :global(.container) { width: calc(100% - 32px); } }
	@media (prefers-reduced-motion: reduce) { :global(*), :global(*::before), :global(*::after) { scroll-behavior: auto !important; animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; } }
</style>

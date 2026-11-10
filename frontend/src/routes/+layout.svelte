<script lang="ts">
	import '../app.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/svg+xml" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

{@render children()}

<style>
	:global(html) { scroll-behavior: smooth; scroll-padding-top: 5rem; }
	:global(button), :global(input), :global(select), :global(textarea) { font: inherit; }
	:global(button), :global(a), :global(input), :global(select), :global(textarea) { -webkit-tap-highlight-color: transparent; }
	:global(button:focus-visible), :global(a:focus-visible), :global(input:focus-visible), :global(select:focus-visible), :global(textarea:focus-visible) { outline: 3px solid #2563eb; outline-offset: 3px; }
	@media (prefers-reduced-motion: reduce) { :global(*), :global(*::before), :global(*::after) { scroll-behavior: auto !important; animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; } }
</style>

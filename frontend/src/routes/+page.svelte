<script lang="ts">
	import SiteHeader from '#lib/components/SiteHeader.svelte';
	import HeroSection from '#lib/components/HeroSection.svelte';
	import StudioSection from '#lib/components/StudioSection.svelte';
	import VoiceLibrary from '#lib/components/VoiceLibrary.svelte';
	import FeatureSections from '#lib/components/FeatureSections.svelte';
	import PricingFaq from '#lib/components/PricingFaq.svelte';
	import SiteFooter from '#lib/components/SiteFooter.svelte';
</script>

<svelte:head>
	<title>Vocalis | Voice studio for every story</title>
	<meta name="description" content="Explore a playful voice studio concept for expressive speech, multilingual creators, and audio builders." />
</svelte:head>

<SiteHeader />
<main>
	<HeroSection />
	<div class="ticker" aria-label="Platform highlights"><div class="ticker-track mono">{#each Array(2) as _}<span>70+ LANGUAGES</span><b>+</b><span>NATIVE BANGLA</span><b>+</b><span>VOICE CLONING</span><b>+</b><span>STUDIO-QUALITY AUDIO</span><b>+</b><span>BUILT FOR CREATORS</span><b>+</b>{/each}</div></div>
	<StudioSection />
	<VoiceLibrary />
	<FeatureSections />
	<PricingFaq />
</main>
<SiteFooter />

<style>
	.ticker { overflow: hidden; border-bottom: 2px solid #000; background: #000; color: #fff; }
	.ticker-track { min-width: max-content; display: flex; align-items: center; justify-content: space-around; gap: 30px; padding: 13px 20px; font-size: 11px; font-weight: 700; letter-spacing: .08em; animation: travel 30s linear infinite; }
	.ticker b { color: #ff90e8; }
	@keyframes travel { to { transform: translateX(-50%); } }
	@media (prefers-reduced-motion: reduce) { .ticker-track { animation: none; } }
</style>

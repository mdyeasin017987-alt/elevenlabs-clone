<script lang="ts">
	import SiteHeader from '#lib/components/landing/SiteHeader.svelte';
	import HeroSection from '#lib/components/landing/HeroSection.svelte';
	import FeaturesSection from '#lib/components/landing/FeaturesSection.svelte';
	import UseCasesSection from '#lib/components/landing/UseCasesSection.svelte';
	import VoiceLibrarySection from '#lib/components/landing/VoiceLibrarySection.svelte';
	import ConversionSection from '#lib/components/landing/ConversionSection.svelte';
	import SiteFooter from '#lib/components/landing/SiteFooter.svelte';
</script>

<svelte:head>
	<title>Vocalis - Create realistic AI voices in seconds</title>
	<meta name="description" content="Create realistic AI voices in seconds with Vocalis." />
</svelte:head>

<div class="page-shell">
	<SiteHeader />
	<main>
		<HeroSection />
		<FeaturesSection />
		<UseCasesSection />
		<VoiceLibrarySection />
		<ConversionSection />
	</main>
	<SiteFooter />
</div>

<script lang="ts">
	import HomeHero from '#lib/components/home/HomeHero.svelte';
	import NewModels from '#lib/components/home/NewModels.svelte';
	import QuickAccess from '#lib/components/home/QuickAccess.svelte';
	import TrendingVoices from '#lib/components/home/TrendingVoices.svelte';
</script>

<svelte:head>
	<title>Home - Vocalis</title>
</svelte:head>

<h1 class="text-xl font-bold tracking-tight">Welcome to Vocalis 👋</h1>

<HomeHero />
<TrendingVoices />
<QuickAccess />
<NewModels />

<script lang="ts">
	import DashboardHeader from '#lib/components/dashboard/DashboardHeader.svelte';
	import DashboardOverview from '#lib/components/dashboard/DashboardOverview.svelte';
	import DashboardSidebar from '#lib/components/dashboard/DashboardSidebar.svelte';
	import RecentProjects from '#lib/components/dashboard/RecentProjects.svelte';
	import SpeechStudio from '#lib/components/dashboard/SpeechStudio.svelte';
	import VoiceLibrary from '#lib/components/dashboard/VoiceLibrary.svelte';

	let mobileOpen = $state(false);
	let selectedVoice = $state('Ayesha');
</script>

<svelte:head>
	<title>Vocalis Studio - AI Speech Dashboard</title>
	<meta name="description" content="Create and manage natural-sounding speech with Vocalis Studio." />
</svelte:head>

<!--
	Dashboard composition root:
	- Sidebar: workspace navigation & mobile drawer
	- Header: global search shortcut & primary CTA
	- SpeechStudio: text-to-speech hero workspace
	- DashboardOverview: usage meters, activity stream & pro promo
	- VoiceLibrary: interactive voice selection & audio playback
	- RecentProjects: data-driven project collection
-->
<div class="min-h-screen flex bg-[#FBFBFC] text-slate-900">
	<DashboardSidebar bind:mobileOpen />
	<div class="flex-1 flex flex-col min-w-0">
		<DashboardHeader bind:mobileOpen />
		<main class="flex-1 p-4 sm:p-8 space-y-7 max-w-[1400px] w-full mx-auto">
			<!-- Greeting Header -->
			<section class="space-y-1" aria-labelledby="welcome-title">
				<h1 id="welcome-title" class="text-2xl font-bold tracking-tight text-slate-900">
					Welcome back, Sahadat!
				</h1>
				<p class="text-xs font-medium text-slate-500">
					Turn your text into lifelike speech with Vocalis.
				</p>
			</section>

			<!-- Upper Grid: Speech Studio (8 cols) + Overview (4 cols) -->
			<div class="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
				<div class="xl:col-span-8">
					<SpeechStudio bind:selectedVoice />
				</div>
				<div class="xl:col-span-4">
					<DashboardOverview />
				</div>
			</div>

			<!-- Voice Library -->
			<VoiceLibrary bind:selectedVoice />

			<!-- Recent Projects -->
			<RecentProjects />
		</main>
	</div>
</div>

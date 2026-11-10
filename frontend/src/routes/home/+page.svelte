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
	<title>Vocalis Studio - Speech dashboard</title>
	<meta name="description" content="Create and manage natural-sounding speech with Vocalis Studio." />
</svelte:head>

<div class="dashboard-shell">
	<DashboardSidebar bind:mobileOpen />
	<div class="dashboard-main">
		<DashboardHeader bind:mobileOpen />
		<main class="dashboard-content">
			<section class="welcome" aria-labelledby="welcome-title">
				<div><h1 id="welcome-title">Welcome back, Sahadat!</h1><p>Turn your text into lifelike speech with Vocalis.</p></div>
			</section>
			<div class="workspace-grid">
				<SpeechStudio bind:selectedVoice />
				<DashboardOverview />
			</div>
			<VoiceLibrary bind:selectedVoice />
			<RecentProjects />
		</main>
	</div>
</div>

<style>
	.dashboard-shell { display: flex; min-height: 100vh; background: #fbfbfc; color: #0f172a; }
	.dashboard-main { min-width: 0; flex: 1; }
	.dashboard-content { display: grid; width: min(1400px, 100%); gap: 27px; margin: 0 auto; padding: 29px 34px 42px; }
	.welcome h1 { margin: 0; color: #0f172a; font-size: 24px; font-weight: 700; line-height: 1.2; }
	.welcome p { margin: 7px 0 0; color: #64748b; font-size: 12px; }
	.workspace-grid { display: grid; grid-template-columns: minmax(0, 2fr) minmax(270px, 1fr); align-items: start; gap: 24px; }
	@media (max-width: 1200px) { .workspace-grid { grid-template-columns: minmax(0, 1fr); } }
	@media (max-width: 760px) { .dashboard-content { gap: 22px; padding: 23px 18px 34px; } }
	@media (max-width: 420px) { .dashboard-content { padding-right: 12px; padding-left: 12px; } .welcome h1 { font-size: 23px; } }
</style>

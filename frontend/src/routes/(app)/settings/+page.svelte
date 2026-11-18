<script lang="ts">
	import { Settings } from '@lucide/svelte';
	import AppearanceSettings from '#lib/components/settings/AppearanceSettings.svelte';
	import { SectionHeading } from '#lib/components/ui';
</script>

<svelte:head>
	<title>Settings - Vocalis</title>
</svelte:head>

<section class="max-w-2xl space-y-4" aria-labelledby="settings-title">
	<SectionHeading id="settings-title" title="Settings" icon={Settings} />
	<AppearanceSettings />
</section>

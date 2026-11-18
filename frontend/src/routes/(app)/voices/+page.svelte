<script lang="ts">
	import VoiceLibrary from '#lib/components/voices/VoiceLibrary.svelte';
	import { studio } from '#lib/studio.svelte';
</script>

<svelte:head>
	<title>Voice Library - Vocalis</title>
</svelte:head>

<VoiceLibrary bind:selectedVoice={studio.voice} />

<script lang="ts">
	import { Pause, Play } from '@lucide/svelte';
	import { Button } from '#lib/components/ui';
	import { player, toggleSpeech, type SpeechOptions } from '#lib/speech.svelte';

	/** Round play/stop button for a demo speech preview. `id` must be unique per playable item. */
	let {
		id,
		text,
		label,
		options = {},
		variant = 'secondary',
		class: className = ''
	}: {
		id: string;
		text: string;
		label: string;
		options?: SpeechOptions;
		variant?: 'secondary' | 'default' | 'outline' | 'ghost';
		class?: string;
	} = $props();

	const playing = $derived(player.active === id);
</script>

<Button
	{variant}
	size="icon"
	class={`shrink-0 rounded-full ${className}`}
	aria-label={`${playing ? 'Stop' : 'Play'} ${label}`}
	aria-pressed={playing}
	onclick={() => toggleSpeech(id, text, options)}
>
	{#if playing}
		<Pause class="fill-current" />
	{:else}
		<Play class="fill-current" />
	{/if}
</Button>

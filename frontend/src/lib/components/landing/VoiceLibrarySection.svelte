<script lang="ts">
	import { player, toggleSpeech } from '$lib/speech.svelte';

	const voices = [
		{ name: 'Ayesha', meta: 'Natural · Female', type: 'Popular', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80' },
		{ name: 'Rahim', meta: 'Natural · Male', type: 'Trending', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80' },
		{ name: 'Sadia', meta: 'Expressive · Female', type: '', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80' },
		{ name: 'Tanvir', meta: 'Conversational · Male', type: '', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80' }
	];
</script>

<section class="voice-library" id="voices"><div class="container"><div class="section-header"><div><span class="mini-heading">Voice Library</span><h2>A diverse library<br />of ultra-realistic voices</h2><p>Choose from 100+ natural voices, or clone your own. Find the perfect voice for any project.</p></div><div class="header-controls"><a href="#voice-grid" class="primary-cta small-inline"><span>Browse Voices</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg></a><div class="arrow-group"><button type="button" aria-label="Previous voices" title="All voices are shown" disabled><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg></button><button type="button" aria-label="Next voices" title="All voices are shown" disabled><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg></button></div></div></div>
	<div class="voice-grid" id="voice-grid">{#each voices as voice}{@const active = player.active === `voice-${voice.name}`}<article class="voice-card-item"><div class="voice-image-wrap"><img src={voice.image} alt={voice.name} width="900" height="900" loading="lazy" decoding="async" /><button type="button" class="voice-play" aria-label={active ? `Stop ${voice.name}` : `Listen to ${voice.name}`} aria-pressed={active} onclick={() => toggleSpeech(`voice-${voice.name}`, `Hi, I'm ${voice.name}. Welcome to Vocalis.`)}><svg viewBox="0 0 24 24" aria-hidden="true">{#if active}<path d="M6 5h4v14H6zM14 5h4v14h-4z" />{:else}<path d="M8 5v14l11-7z" />{/if}</svg></button></div><div class="voice-meta-row"><h3>{voice.name}</h3>{#if voice.type}<span class="voice-type">{voice.type}</span>{/if}</div><p>{voice.meta}</p></article>{/each}</div>
</div></section>

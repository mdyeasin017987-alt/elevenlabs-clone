<script lang="ts">
	import { player, toggleSpeech } from '$lib/speech.svelte';

	const sampleText = 'Hello! Welcome to Vocalis.';
	const limit = 5000;
	const features = [
		{ title: 'Text to Speech', copy: 'Turn text into natural, lifelike speech.', paths: ['M2 10v3', 'M6 6v11', 'M10 3v18', 'M14 8v7', 'M18 5v13', 'M22 10v3'] },
		{ title: 'Voice Cloning', copy: 'Clone your own voice with high accuracy.', paths: ['M10 8h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z', 'M4 16H3a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h11a1 1 0 0 1 1 1v1'] },
		{ title: 'Voice Library', copy: 'Explore 100+ premium voices.', paths: ['m16 6 4 14', 'M12 6v14', 'M8 8v12', 'M4 4v16'] },
		{ title: 'Multilingual Support', copy: 'Generate voices in 50+ languages.', paths: ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z', 'M2 12h20', 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'] }
	];
	const playing = $derived(player.active === 'studio');
	let copied = $state(false);

	async function copyLink() {
		try {
			await navigator.clipboard.writeText(window.location.href);
			copied = true;
			setTimeout(() => (copied = false), 1500);
		} catch {
			copied = false;
		}
	}
</script>

<section class="features-section" id="features"><div class="container features-grid">
	<div class="feature-copy"><span class="mini-heading">Powerful Features</span><h2>Everything you need for AI voice generation</h2><p>From text to speech to voice cloning, Vocalis gives you the complete toolkit to create, customize, and scale voices.</p>
		<div class="feature-bullets">{#each features as feature}<div class="bullet-item"><div class="bullet-icon" aria-hidden="true"><svg viewBox="0 0 24 24">{#each feature.paths as d}<path {d} />{/each}</svg></div><div><h3>{feature.title}</h3><p>{feature.copy}</p></div></div>{/each}</div>
		<a href="#use-cases" class="primary-cta small-cta"><span>Explore all features</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg></a>
	</div>
	<div class="studio-panel" role="img" aria-label="Preview of the Vocalis text to speech studio"><aside class="studio-sidebar"><div class="studio-brand"><div class="brand-mark tiny"><span class="bar short"></span><span class="bar tall"></span><span class="bar mid"></span><span class="bar short"></span></div><span>Vocalis</span></div><nav aria-hidden="true"><div class="studio-link active"><span class="nav-signal"></span>Home</div><div class="studio-link"><span class="nav-signal"></span>Voices</div><div class="studio-link"><span class="nav-signal"></span>Projects</div><div class="studio-link"><span class="nav-signal"></span>Library</div></nav><div class="sidebar-footer" aria-hidden="true"><div class="studio-link"><span class="nav-signal"></span>Settings</div></div></aside>
		<div class="studio-content"><div class="studio-header"><h3>Text to Speech</h3><p>Type anything and turn it into realistic speech.</p></div><div class="text-box"><p>{sampleText}</p><span>{sampleText.length} / {limit}</span></div><div class="studio-controls"><div class="selector-group"><div class="selector"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg><span>English</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></div><div class="selector"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80" alt="" width="16" height="16" loading="lazy" decoding="async" /><span>Rachel</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></div></div><button type="button" class="generate-button" onclick={() => toggleSpeech('studio', sampleText)}>{playing ? 'Stop' : 'Generate Speech'}</button></div><div class="mini-player"><button type="button" class="mini-play" aria-label={playing ? 'Stop generated voice' : 'Play generated voice'} aria-pressed={playing} onclick={() => toggleSpeech('studio', sampleText)}><svg viewBox="0 0 24 24" aria-hidden="true">{#if playing}<path d="M6 5h4v14H6zM14 5h4v14h-4z" />{:else}<path d="M8 5v14l11-7z" />{/if}</svg></button><div class="mini-wave" aria-hidden="true">{#each [8, 14, 18, 10, 15, 19, 12, 16] as height}<span style={`height:${height}px`}></span>{/each}</div><span class="mini-time">0:00 / 0:06</span><div class="mini-actions"><button type="button" aria-label="Download clip (coming soon)" title="Coming soon" disabled><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0l4-4m-4 4l-4-4M4 19.5h16" /></svg></button><button type="button" aria-label={copied ? 'Link copied' : 'Copy link'} title={copied ? 'Copied!' : 'Copy link'} onclick={copyLink}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg></button></div></div></div>
	</div>
</div></section>

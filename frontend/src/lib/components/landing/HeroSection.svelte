<script lang="ts">
	import { player, toggleSpeech } from '#lib/speech.svelte';

	const sampleText = 'Hello! Welcome to Vocalis. Natural, expressive, powerful.';
	const heroFeatures = [
		{ title: 'Text to Speech', copy: 'Turn text into lifelike speech', paths: ['M2 10v3', 'M6 6v11', 'M10 3v18', 'M14 8v7', 'M18 5v13', 'M22 10v3'] },
		{ title: 'Voice Cloning', copy: 'Clone your own voice', paths: ['M10 8h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z', 'M4 16H3a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h11a1 1 0 0 1 1 1v1'] },
		{ title: 'Voice Library', copy: 'Explore 100+ voices', paths: ['m16 6 4 14', 'M12 6v14', 'M8 8v12', 'M4 4v16'] },
		{ title: 'Multiple Languages', copy: 'Support for 50+ languages', paths: ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z', 'M2 12h20', 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'] }
	];
	const playing = $derived(player.active === 'hero');
</script>

<section class="hero-section">
	<svg class="hero-wave" viewBox="0 0 980 720" aria-hidden="true" preserveAspectRatio="none">
		<path d="M40 470C210 280 310 510 540 360C700 260 800 185 980 245" /><path d="M60 485C245 290 340 535 570 380C730 282 820 200 990 265" /><path d="M80 500C280 310 355 555 610 400C752 318 840 220 1005 285" /><path d="M100 515C310 325 370 570 650 420C790 344 870 235 1015 305" /><path d="M120 528C335 340 390 585 690 442C825 374 900 250 1030 325" /><path d="M140 540C355 350 410 598 720 462C855 396 920 270 1050 350" opacity=".7"/><path d="M165 555C375 365 440 610 748 480C873 422 938 290 1075 375" opacity=".45"/>
	</svg>
	<div class="container hero-grid">
		<div class="hero-copy">
			<div class="badge-row"><span class="badge badge-primary"><span class="dot"></span>Bangladesh's most advanced AI voice platform</span></div>
			<h1>Create realistic<br />AI voices in seconds</h1>
			<p>Generate natural-sounding speech, clone your voice, and bring your ideas to life with the power of AI.</p>
			<div class="cta-row"><a href="/home" class="primary-cta large"><span>Get started free</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg></a><a href="#voices" class="secondary-cta large"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg><span>Explore voices</span></a></div>
			<div class="social-proof"><div class="avatar-stack" aria-hidden="true"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" alt="" width="34" height="34" loading="lazy" decoding="async" /><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" alt="" width="34" height="34" loading="lazy" decoding="async" /><img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=80&q=80" alt="" width="34" height="34" loading="lazy" decoding="async" /><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80" alt="" width="34" height="34" loading="lazy" decoding="async" /></div><span>Trusted by 500K+ creators worldwide</span></div>
		</div>
		<div class="hero-visual"><div class="mini-badge">Multi-Language Support</div><div class="voice-card">
			<div class="voice-card-head"><div class="voice-icon-wrap"><div class="voice-icon"><span></span><span></span><span></span><span></span></div></div><div class="voice-copy"><h2>Hello! Welcome to Vocalis.</h2><p>Natural. Expressive. Powerful.</p></div><div class="language-pill"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg><span>English</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></div></div>
			<div class="player-row"><button type="button" class="play-button" aria-label={playing ? 'Stop sample' : 'Play sample'} aria-pressed={playing} onclick={() => toggleSpeech('hero', sampleText)}><svg viewBox="0 0 24 24" aria-hidden="true">{#if playing}<path d="M6 5h4v14H6zM14 5h4v14h-4z" />{:else}<path d="M8 5v14l11-7z" />{/if}</svg></button><div class="waveform" aria-hidden="true">{#each [8, 12, 16, 24, 12, 20, 30, 15, 24, 10, 18, 28, 23, 16, 8, 12, 18, 24, 10, 16] as height}<span style={`height:${height}px`}></span>{/each}</div><span class="timecode">0:00 / 0:06</span><button type="button" class="download-button" aria-label="Download audio (coming soon)" title="Coming soon" disabled><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0l4-4m-4 4l-4-4M4 19.5h16" /></svg></button></div><div class="natural-pill">Ultra Natural Voice</div>
		</div></div>
	</div>
	<div class="container hero-feature-grid">{#each heroFeatures as feature}<div class="feature-chip"><div class="feature-icon" aria-hidden="true"><svg viewBox="0 0 24 24">{#each feature.paths as d}<path {d} />{/each}</svg></div><div><h3>{feature.title}</h3><p>{feature.copy}</p></div></div>{/each}</div>
</section>

<script lang="ts">
	const heroFeatures = [
		{ title: 'Text to Speech', copy: 'Turn text into lifelike speech', icon: 'mic' },
		{ title: 'Voice Cloning', copy: 'Clone your own voice', icon: 'clone' },
		{ title: 'Voice Library', copy: 'Explore 1000+ voices', icon: 'library' },
		{ title: 'Multiple Languages', copy: 'Support for 50+ languages', icon: 'globe' }
	];
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
			<div class="cta-row"><a href="#features" class="primary-cta large"><span>Get started free</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg></a><a href="#voices" class="secondary-cta large"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg><span>Explore voices</span></a></div>
			<div class="social-proof"><div class="avatar-stack" aria-hidden="true"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80" alt="" /><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" alt="" /><img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80" alt="" /><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80" alt="" /></div><span>Trusted by 500K+ creators worldwide</span></div>
		</div>
		<div class="hero-visual"><div class="mini-badge">Multi-Language Support</div><div class="voice-card">
			<div class="voice-card-head"><div class="voice-icon-wrap"><div class="voice-icon"><span></span><span></span><span></span><span></span></div></div><div class="voice-copy"><h2>Hello! Welcome to Vocalis.</h2><p>Natural. Expressive. Powerful.</p></div><div class="language-pill"><span>🇺🇸</span><span>English</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></div></div>
			<div class="player-row"><button type="button" class="play-button" aria-label="Play sample"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg></button><div class="waveform" aria-hidden="true">{#each [8, 12, 16, 24, 12, 20, 30, 15, 24, 10, 18, 28, 23, 16, 8, 12, 18, 24, 10, 16] as height}<span style={`height:${height}px`}></span>{/each}</div><span class="timecode">0:00 / 0:06</span><button type="button" class="download-button" aria-label="Download audio"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0l4-4m-4 4l-4-4M4 19.5h16" /></svg></button></div><div class="natural-pill">Ultra Natural Voice</div>
		</div></div>
	</div>
	<div class="container hero-feature-grid">{#each heroFeatures as feature}<div class="feature-chip"><div class="feature-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d={feature.icon === 'mic' ? 'M12 2a3 3 0 0 1 3 3v6a3 3 0 1 1-6 0V5a3 3 0 0 1 3-3zm-8 9h2a6 6 0 0 0 12 0h2a8 8 0 0 1-7 7.94V22h-2v-3.06A8 8 0 0 1 4 11z' : feature.icon === 'clone' ? 'M7 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-2 4H4v12h1m4-10h8m-8 4h8m-8 4h5' : feature.icon === 'library' ? 'M4 5h16M4 10h16M4 15h16M4 20h16' : 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-7 10h14m-7-10a15 15 0 0 1 0 20m0-20a15 15 0 0 0 0 20'} /></svg></div><div><h3>{feature.title}</h3><p>{feature.copy}</p></div></div>{/each}</div>
</section>
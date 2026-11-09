<script lang="ts">
	const features = [
		{ title: 'Text to Speech', copy: 'Turn text into natural, lifelike speech.', icon: '▶' },
		{ title: 'Voice Cloning', copy: 'Clone your own voice with high accuracy.', icon: '▣' },
		{ title: 'Voice Library', copy: 'Explore 100+ premium voices.', icon: '⌘' },
		{ title: 'Multilingual Support', copy: 'Generate voices in 50+ languages.', icon: '◎' }
	];
</script>

<section class="features-section" id="features"><div class="container features-grid">
	<div class="feature-copy"><span class="mini-heading">Powerful Features</span><h2>Everything you need for AI voice generation</h2><p>From text to speech to voice cloning, Vocalis gives you the complete toolkit to create, customize, and scale voices.</p>
		<div class="feature-bullets">{#each features as feature}<div class="bullet-item"><div class="bullet-icon" aria-hidden="true">{feature.icon}</div><div><h3>{feature.title}</h3><p>{feature.copy}</p></div></div>{/each}</div>
		<a href="#voices" class="primary-cta small-cta"><span>Explore all features</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg></a>
	</div>
	<div class="studio-panel"><aside class="studio-sidebar"><div class="studio-brand"><div class="brand-mark tiny"><span class="bar short"></span><span class="bar tall"></span><span class="bar mid"></span></div><span>Vocalis</span></div><nav aria-label="Studio preview"><a class="active" href="#features"><span class="nav-signal"></span>Home</a><a href="#voices"><span class="nav-signal"></span>Voices</a><a href="#features"><span class="nav-signal"></span>Projects</a><a href="#voices"><span class="nav-signal"></span>Library</a></nav><div class="sidebar-footer"><a href="#footer"><span class="nav-signal"></span>Settings</a></div></aside>
		<div class="studio-content"><div class="studio-header"><h3>Text to Speech</h3><p>Type anything and turn it into realistic speech.</p></div><div class="text-box"><p>Hello! Welcome to Vocalis.</p><span>0 / 5000</span></div><div class="studio-controls"><div class="selector-group"><div class="selector"><span>◷</span><span>English</span><span>⌄</span></div><div class="selector"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" alt="Rachel portrait" /><span>Rachel</span><span>⌄</span></div></div><button type="button" class="generate-button">Generate Speech</button></div><div class="mini-player"><button type="button" class="mini-play" aria-label="Play generated voice">▶</button><div class="mini-wave" aria-hidden="true">{#each [8, 14, 18, 10, 15, 19, 12, 16] as height}<span style={`height:${height}px`}></span>{/each}</div><span class="mini-time">0:00 / 0:06</span><div class="mini-actions"><button type="button" aria-label="Download clip">↓</button><button type="button" aria-label="Copy link">↗</button></div></div></div>
	</div>
</div></section>
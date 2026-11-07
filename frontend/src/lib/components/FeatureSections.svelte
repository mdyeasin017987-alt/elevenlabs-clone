<script lang="ts">
	const features = [
		{ number: '01', color: '#ff90e8', title: 'Human in every syllable', copy: 'Keep the breath, cadence, and feeling that make a voice sound like someone, not something.', mark: '↗' },
		{ number: '02', color: '#b8c0ff', title: 'Made for more voices', copy: 'Build for the world with multilingual workflows and localized delivery in mind.', mark: '文' },
		{ number: '03', color: '#b8ff9f', title: 'Your tone, your call', copy: 'Shape pacing, clarity, and character until the read feels unmistakably yours.', mark: '⌁' },
		{ number: '04', color: '#ffc900', title: 'From draft to done', copy: 'A focused studio flow helps turn the words on your page into a polished performance.', mark: '▶' }
	];
	const steps = [
		{ title: 'Bring the words', copy: 'Start with a script, a rough draft, or the one sentence you cannot stop thinking about.', color: '#ffc900' },
		{ title: 'Find the feeling', copy: 'Choose a voice and tune the delivery for your audience, language, and moment.', color: '#ff90e8' },
		{ title: 'Share the story', copy: 'Preview, refine, and export your finished voice when a speech provider is connected.', color: '#b8c0ff' }
	];
</script>

<section class="features" id="features">
	<div class="container"><div class="center-heading"><span class="kicker mono">BUILT AROUND THE HUMAN VOICE</span><h2 class="display">Big feeling.<br />Ridiculously good audio.</h2><p>A creative workspace for getting the right read, with fewer knobs between you and the good part.</p></div>
		<div class="feature-grid">{#each features as feature}<article class="feature-card" style={`--feature:${feature.color}`}><div class="feature-top"><span class="mono">/ {feature.number}</span><b aria-hidden="true">{feature.mark}</b></div><h3 class="display">{feature.title}</h3><p>{feature.copy}</p></article>{/each}</div>
	</div>
</section>

<section class="workflow" id="workflow"><div class="container"><div class="center-heading"><span class="kicker white mono">THREE STEPS, ONE GOOD TAKE</span><h2 class="display">Script to sound, simply.</h2></div><div class="step-grid">{#each steps as step, i}<article class="step-card"><span class="step-num display" style={`--step:${step.color}`}>0{i + 1}</span><h3 class="display">{step.title}</h3><p>{step.copy}</p></article>{/each}</div></div></section>

<section class="builders" id="developers"><div class="container builder-grid"><div><span class="kicker mint mono">FOR THE BUILDERS</span><h2 class="display">Good voices.<br />Good endpoints.</h2><p>Bring voice generation into your own product with a provider connection and the API shape your team needs.</p><a class="text-link mono" href="#studio">Explore the studio <span aria-hidden="true">↗</span></a></div><div class="code-window"><div class="code-top mono"><span><i></i><i></i><i></i></span><b>voice-preview.ts</b></div><pre class="mono"><code><span class="kw">const</span> response = await vocalis.speech.create({'{'}
  text: <span class="str">"Your story, in every voice."</span>,
  voice: <span class="str">"animesh"</span>,
  format: <span class="str">"audio/mpeg"</span>
{'}'});

await response.audio.play();</code></pre><div class="code-foot mono"><span>API INTEGRATION PREVIEW</span><span>YOUR PROVIDER · YOUR KEYS</span></div></div></div></section>

<style>
	.features { padding-block: 84px; border-bottom: 2px solid #000; background: #ffc900; }
	.center-heading { max-width: 700px; margin: 0 auto 34px; text-align: center; }.kicker { display: inline-block; padding: 6px 9px; border: 2px solid #000; background: #fff; box-shadow: 3px 3px 0 #000; font-size: 9px; font-weight: 700; }.center-heading h2 { margin: 22px 0 10px; font-size: clamp(36px, 5vw, 58px); line-height: 1.02; letter-spacing: -.045em; text-transform: uppercase; }.center-heading p { max-width: 550px; margin: auto; font-size: 14px; line-height: 1.7; }
	.feature-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
	.feature-card { min-height: 230px; padding: 20px; border: 2px solid #000; background: var(--feature); box-shadow: 4px 4px 0 #000; }.feature-top { display: flex; align-items: center; justify-content: space-between; font: 700 9px 'JetBrains Mono', monospace; }.feature-top b { display: grid; width: 35px; aspect-ratio: 1; place-items: center; border: 2px solid #000; background: #fff; box-shadow: 2px 2px 0 #000; font-size: 17px; }.feature-card h3 { margin: 24px 0 8px; font-size: 18px; line-height: 1.1; text-transform: uppercase; }.feature-card p { margin: 0; font-size: 12px; line-height: 1.65; }
	.workflow { padding-block: 78px 84px; border-bottom: 2px solid #000; background: #fffdf9; }.white { background: #fff; }.step-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }.step-card { min-height: 190px; padding: 21px; border: 2px solid #000; background: #fff; box-shadow: 4px 4px 0 #000; }.step-num { display: grid; width: 43px; height: 43px; place-items: center; border: 2px solid #000; background: var(--step); box-shadow: 3px 3px 0 #000; font-size: 15px; }.step-card h3 { margin: 21px 0 7px; font-size: 17px; text-transform: uppercase; }.step-card p { max-width: 310px; margin: 0; color: #444; font-size: 12px; line-height: 1.7; }
	.builders { padding-block: 84px; border-bottom: 2px solid #000; background: #fff; }.builder-grid { display: grid; grid-template-columns: .8fr 1.2fr; align-items: center; gap: 55px; }.mint { background: #b8ff9f; }.builder-grid h2 { margin: 22px 0 12px; font-size: clamp(38px, 5vw, 56px); line-height: 1; letter-spacing: -.045em; text-transform: uppercase; }.builder-grid > div:first-child > p { max-width: 430px; margin: 0; color: #444; font-size: 14px; line-height: 1.7; }.text-link { display: inline-block; margin-top: 21px; color: #000; font-size: 10px; font-weight: 700; text-underline-offset: 4px; }
	.code-window { overflow: hidden; border: 2px solid #000; background: #111; box-shadow: 6px 6px 0 #000; color: #f5f2e9; }.code-top { display: flex; align-items: center; justify-content: space-between; padding: 12px 15px; border-bottom: 1px solid #777; background: #222; font-size: 9px; }.code-top > span { display: flex; gap: 5px; }.code-top i { width: 8px; height: 8px; border: 1px solid #000; border-radius: 50%; background: #ff90e8; }.code-top i:nth-child(2) { background: #ffc900; }.code-top i:nth-child(3) { background: #23a094; }.code-top b { font-weight: 500; }.code-window pre { overflow-x: auto; margin: 0; padding: 24px; font-size: 12px; line-height: 1.9; }.kw { color: #ff90e8; }.str { color: #b8ff9f; }.code-foot { display: flex; justify-content: space-between; gap: 12px; padding: 10px 15px; border-top: 1px solid #777; color: #d3d3d3; font-size: 8px; }
	@media (max-width: 900px) { .feature-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }.builder-grid { grid-template-columns: 1fr; gap: 28px; }.builder-grid > div:first-child > p { max-width: 560px; } }
	@media (max-width: 600px) { .features, .builders { padding-block: 58px; }.feature-grid, .step-grid { grid-template-columns: 1fr; }.feature-card { min-height: 0; }.feature-card h3 { margin-top: 18px; }.workflow { padding-block: 58px; }.step-card { min-height: 0; }.code-window pre { padding: 17px; font-size: 10px; }.code-foot { flex-direction: column; }.center-heading h2 { font-size: 37px; } }
</style>
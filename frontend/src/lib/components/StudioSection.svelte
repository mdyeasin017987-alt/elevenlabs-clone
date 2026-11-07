<script lang="ts">
	import { onMount } from 'svelte';

	const limit = 5000;
	const samples = {
		english: 'Every great idea begins with a voice. Give yours the room to travel, the feeling to linger, and the clarity to be heard.',
		bangla: 'প্রতিটি গল্পের নিজস্ব একটি কণ্ঠ আছে। সেই কণ্ঠকে ছড়িয়ে দিন, অনুভূতিকে বাঁচিয়ে রাখুন, আর আপনার কথাকে পৌঁছে দিন সবার কাছে।'
	};
	let script = $state(samples.english);
	let rate = $state(1);
	let browserVoices: SpeechSynthesisVoice[] = $state([]);
	let selectedVoice = $state('');
	let speaking = $state(false);
	let notice = $state('Preview uses a voice installed in your browser.');

	const characterCount = $derived(script.length);

	onMount(() => {
		if (!('speechSynthesis' in window)) {
			notice = 'Speech preview is not supported in this browser.';
			return;
		}
		const updateVoices = () => {
			browserVoices = window.speechSynthesis.getVoices();
			if (!selectedVoice) selectedVoice = browserVoices[0]?.voiceURI ?? '';
		};
		updateVoices();
		window.speechSynthesis.addEventListener('voiceschanged', updateVoices);
		return () => {
			window.speechSynthesis.removeEventListener('voiceschanged', updateVoices);
			window.speechSynthesis.cancel();
		};
	});

	function playPreview() {
		if (!script.trim()) {
			notice = 'Add a script before starting your preview.';
			return;
		}
		if (!('speechSynthesis' in window)) {
			notice = 'Speech preview is not supported in this browser.';
			return;
		}
		window.speechSynthesis.cancel();
		const utterance = new SpeechSynthesisUtterance(script);
		utterance.rate = rate;
		utterance.voice = browserVoices.find((voice) => voice.voiceURI === selectedVoice) ?? null;
		utterance.onstart = () => { speaking = true; notice = 'Playing a local browser voice preview.'; };
		utterance.onend = () => { speaking = false; notice = 'Preview uses a voice installed in your browser.'; };
		utterance.onerror = () => { speaking = false; notice = 'The browser could not play this preview.'; };
		window.speechSynthesis.speak(utterance);
	}

	function stopPreview() {
		if ('speechSynthesis' in window) window.speechSynthesis.cancel();
		speaking = false;
		notice = 'Preview stopped.';
	}
</script>

<section class="studio-section" id="studio">
	<div class="container">
		<div class="section-heading"><div><span class="kicker yellow mono">THE PLAYGROUND</span><h2 class="display">Test the voice engine</h2><p>Write a line, choose a voice available on this device, and hear a local browser preview.</p></div><div class="engine mono"><i></i> LOCAL PREVIEW</div></div>
		<div class="studio">
			<div class="toolbar"><label class="field"><span class="mono">BROWSER VOICE</span><select bind:value={selectedVoice} disabled={!browserVoices.length}><option value="">Default system voice</option>{#each browserVoices as voice}<option value={voice.voiceURI}>{voice.name} · {voice.lang}</option>{/each}</select></label><div class="language-note mono">YOUR DEVICE'S INSTALLED VOICES</div><div class="sample-actions"><button class="small-button" onclick={() => (script = samples.english)}>English sample</button><button class="small-button pink" onclick={() => (script = samples.bangla)}>Bangla sample</button></div></div>
			<div class="studio-grid">
				<div class="script-panel"><label class="mono script-label" for="script">YOUR SCRIPT</label><textarea id="script" bind:value={script} maxlength={limit} rows="9" placeholder="Type or paste a line to preview..."></textarea><div class="count mono"><span>{characterCount.toLocaleString()} / {limit.toLocaleString()} characters</span><span>PREVIEW ONLY</span></div><div class="player"><button class="play-button" aria-label={speaking ? 'Stop preview' : 'Play preview'} onclick={speaking ? stopPreview : playPreview}>{speaking ? '■' : '▶'}</button><div class="player-info"><div class="waveform" aria-hidden="true">{#each [12, 20, 10, 25, 16, 29, 19, 24, 12, 28, 17, 22, 9, 25, 14, 30, 18, 26, 12, 21, 14, 29, 10, 20] as height, i}<i class:active={speaking && i % 3 !== 0} style={`--h:${height}px`}></i>{/each}</div><span class="mono">{notice}</span></div></div></div>
				<div class="controls"><div class="controls-title"><h3 class="display">Delivery</h3><span class="mono">BROWSER SUPPORTED</span></div><label class="range-label" for="rate"><span class="mono">SPEAKING RATE</span><b class="mono">{rate.toFixed(1)}×</b></label><input id="rate" type="range" min="0.5" max="2" step="0.1" bind:value={rate} /><div class="range-hints mono"><span>0.5× slower</span><span>2× faster</span></div><div class="api-note"><span class="mono">VOCALIS STUDIO CONTROLS</span><p>Voice cloning, emotion, stability, and high-fidelity downloads become available when connected to your speech API.</p></div><button class="generate" onclick={speaking ? stopPreview : playPreview}>{speaking ? 'Stop preview' : 'Play local preview'} <span aria-hidden="true">↗</span></button></div>
			</div>
		</div>
	</div>
</section>

<style>
	.studio-section { padding-block: 84px; border-bottom: 2px solid #000; background: #f4f4f0; }
	.section-heading { display: flex; align-items: end; justify-content: space-between; gap: 20px; margin-bottom: 32px; }
	.kicker { display: inline-block; padding: 6px 9px; border: 2px solid #000; box-shadow: 3px 3px 0 #000; font-size: 9px; font-weight: 700; transform: rotate(-2deg); }.yellow { background: #ffc900; }
	h2 { margin: 18px 0 7px; font-size: clamp(32px, 5vw, 52px); line-height: 1.02; letter-spacing: -.04em; text-transform: uppercase; }
	.section-heading p { max-width: 610px; margin: 0; color: #424242; font-size: 14px; line-height: 1.7; }
	.engine { display: flex; align-items: center; gap: 8px; padding: 10px 12px; border: 2px solid #000; background: #fff; box-shadow: 3px 3px 0 #000; white-space: nowrap; font-size: 9px; font-weight: 700; }.engine i { width: 9px; height: 9px; border: 1px solid #000; border-radius: 50%; background: #23a094; }
	.studio { border: 2px solid #000; background: #fff; box-shadow: 7px 7px 0 #000; }
	.toolbar { display: flex; align-items: end; flex-wrap: wrap; gap: 15px; padding: 16px; border-bottom: 2px solid #000; background: #fffdf9; }
	.field { display: grid; min-width: min(100%, 300px); gap: 7px; }.field > span, .script-label, .range-label span, .controls-title span, .api-note > span { font-size: 9px; font-weight: 700; }
	select { width: 100%; min-width: 0; min-height: 39px; padding: 0 34px 0 10px; border: 2px solid #000; background: #fff; font-size: 12px; }
	.language-note { margin: 0 auto 10px 0; color: #555; font-size: 9px; }
	.sample-actions { display: flex; flex-wrap: wrap; gap: 8px; }
	.small-button { min-height: 37px; padding: 0 10px; border: 2px solid #000; background: #fff; box-shadow: 2px 2px 0 #000; font: 700 9px 'JetBrains Mono', monospace; cursor: pointer; }.pink { background: #ff90e8; }
	.studio-grid { display: grid; grid-template-columns: 1.15fr .85fr; }
	.script-panel { padding: clamp(19px, 3vw, 34px); border-right: 2px solid #000; }
	.script-label { display: block; margin-bottom: 11px; }
	textarea { display: block; width: 100%; min-height: 190px; resize: vertical; padding: 15px; border: 2px solid #000; background: #fff; box-shadow: inset 2px 2px 0 #e1ded5; font-size: 14px; line-height: 1.7; }
	textarea:focus { background: #fffde6; }
	.count { display: flex; justify-content: space-between; gap: 8px; margin-top: 8px; color: #555; font-size: 9px; }
	.player { display: flex; align-items: center; gap: 14px; margin-top: 23px; padding: 12px; border: 2px solid #000; background: #f4f4f0; box-shadow: 3px 3px 0 #000; }
	.play-button { width: 43px; height: 43px; flex: 0 0 auto; border: 2px solid #000; background: #000; color: #fff; font-size: 15px; cursor: pointer; }
	.player-info { min-width: 0; flex: 1; }.waveform { display: flex; height: 31px; align-items: center; justify-content: space-between; gap: 3px; margin-bottom: 5px; }.waveform i { width: 4px; height: var(--h); background: #111; }.waveform i:nth-child(n+14) { background: #b7b7b0; }.waveform i.active { background: #23a094; }.player-info > span { display: block; overflow: hidden; color: #555; font-size: 8px; text-overflow: ellipsis; white-space: nowrap; }
	.controls { display: flex; flex-direction: column; padding: clamp(19px, 3vw, 34px); background: #fffdf9; }
	.controls-title { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding-bottom: 14px; border-bottom: 2px solid #000; }.controls-title h3 { margin: 0; font-size: 19px; text-transform: uppercase; }.controls-title span { padding: 5px; border: 1px solid #000; background: #ffc900; font-size: 8px; }
	.range-label { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 23px; }.range-label b { padding: 4px 7px; border: 1px solid #000; background: #fff; font-size: 10px; }
	input[type='range'] { width: 100%; height: 10px; margin: 15px 0 0; border: 2px solid #000; accent-color: #000; cursor: pointer; }
	.range-hints { display: flex; justify-content: space-between; margin-top: 5px; color: #555; font-size: 8px; }
	.api-note { margin-top: auto; padding: 14px; border: 2px solid #000; background: #b8c0ff; }.api-note > span { font-size: 8px; }.api-note p { margin: 7px 0 0; font-size: 11px; line-height: 1.6; }
	.generate { display: flex; min-height: 48px; align-items: center; justify-content: center; gap: 9px; margin-top: 15px; border: 2px solid #000; background: #ff90e8; box-shadow: 3px 3px 0 #000; font: 700 10px 'JetBrains Mono', monospace; text-transform: uppercase; cursor: pointer; }.generate:hover { background: #ffc900; }
	@media (max-width: 760px) { .studio-section { padding-block: 60px; }.section-heading { align-items: start; flex-direction: column; }.studio-grid { grid-template-columns: 1fr; }.script-panel { border-right: 0; border-bottom: 2px solid #000; }.api-note { margin-top: 24px; } }
	@media (max-width: 480px) { .studio-section { padding-block: 48px; }.toolbar { align-items: stretch; }.field { min-width: 100%; }.language-note { margin: 0; }.sample-actions { display: grid; grid-template-columns: 1fr 1fr; }.player { padding: 8px; gap: 9px; }.controls-title { align-items: start; flex-direction: column; } }
</style>
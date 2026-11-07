<script lang="ts">
	import { onMount } from 'svelte';
	type VoiceSample = { name: string; locale: string; mood: string; category: string; initials: string; color: string; description: string; sample: string; tag?: string };
	const voices: VoiceSample[] = [
		{ name: 'Animesh', locale: 'Bangla · Bangladesh', mood: 'Warm storyteller', category: 'Bangla', initials: 'AN', color: '#b8c0ff', tag: 'FLAGSHIP', description: 'A grounded, expressive voice for intimate stories and thoughtful narration.', sample: 'প্রতিটি গল্পের নিজস্ব একটি কণ্ঠ আছে।' },
		{ name: 'Adam', locale: 'English · US', mood: 'Deep narrative', category: 'English', initials: 'AD', color: '#ff90e8', tag: 'POPULAR', description: 'A rich, cinematic tone built for long-form narration and dramatic trailers.', sample: 'Somewhere, a new story is waiting to be told.' },
		{ name: 'Sarah', locale: 'English · UK', mood: 'Bright & friendly', category: 'English', initials: 'SA', color: '#ffc900', description: 'An easygoing, clear delivery for explainers, learning, and guided audio.', sample: 'Let’s take a closer look at how it all works.' },
		{ name: 'Ayesha', locale: 'Bangla · Kolkata', mood: 'Gentle & poetic', category: 'Bangla', initials: 'AY', color: '#b8ff9f', description: 'A melodic voice for poetry, audio drama, and stories shared across generations.', sample: 'শব্দেরা মিলে তৈরি করে নতুন এক পৃথিবী।' },
		{ name: 'Maya', locale: 'Spanish · LATAM', mood: 'Clear & confident', category: 'Commercial', initials: 'MA', color: '#ffb5a7', description: 'A polished, natural cadence for presentations and everyday product stories.', sample: 'Tu próxima gran idea merece ser escuchada.' },
		{ name: 'Daniel', locale: 'German · Germany', mood: 'Energetic & crisp', category: 'Commercial', initials: 'DA', color: '#b8c0ff', description: 'A punchy, upbeat delivery for launches, short-form video, and announcements.', sample: 'Deine Geschichte beginnt genau hier.' }
	];
	const filters = ['All', 'Bangla', 'English', 'Commercial'];
	let activeFilter = $state('All');
	let activeVoice = $state('');
	let localVoices: SpeechSynthesisVoice[] = $state([]);
	const visibleVoices = $derived(activeFilter === 'All' ? voices : voices.filter((voice) => voice.category === activeFilter));

	onMount(() => {
		if (!('speechSynthesis' in window)) return;
		const update = () => { localVoices = window.speechSynthesis.getVoices(); };
		update();
		window.speechSynthesis.addEventListener('voiceschanged', update);
		return () => { window.speechSynthesis.removeEventListener('voiceschanged', update); window.speechSynthesis.cancel(); };
	});

	function preview(voice: VoiceSample) {
		if (!('speechSynthesis' in window)) return;
		if (activeVoice === voice.name) {
			window.speechSynthesis.cancel();
			activeVoice = '';
			return;
		}
		window.speechSynthesis.cancel();
		const utterance = new SpeechSynthesisUtterance(voice.sample);
		const requestedLocale = voice.locale.includes('Bangla') ? 'bn' : voice.locale.includes('Spanish') ? 'es' : voice.locale.includes('German') ? 'de' : voice.locale.includes('UK') ? 'en-GB' : 'en';
		utterance.voice = localVoices.find((installed) => installed.lang.toLowerCase().startsWith(requestedLocale.toLowerCase())) ?? null;
		utterance.onstart = () => { activeVoice = voice.name; };
		utterance.onend = () => { activeVoice = ''; };
		utterance.onerror = () => { activeVoice = ''; };
		window.speechSynthesis.speak(utterance);
	}
</script>

<section class="voices-section" id="voices">
	<div class="container">
		<div class="section-head"><div><span class="kicker lavender mono">THE VOCALIS LIBRARY</span><h2 class="display">Find your voice match</h2><p>Meet a few starting points for the voice in your head. The previews use matching system voices where available.</p></div><div class="filters" role="group" aria-label="Filter voices">{#each filters as filter}<button class:chosen={activeFilter === filter} aria-pressed={activeFilter === filter} onclick={() => (activeFilter = filter)}>{filter}</button>{/each}</div></div>
		<div class="voice-grid">{#each visibleVoices as voice (voice.name)}<article class="voice-card">{#if voice.tag}<span class="tag mono" style={`--tag:${voice.color}`}>{voice.tag}</span>{/if}<div class="voice-identity"><div class="portrait display" style={`--portrait:${voice.color}`}>{voice.initials}</div><div><h3 class="display">{voice.name}</h3><p class="mono">{voice.locale}</p></div></div><span class="mood mono">{voice.mood}</span><p class="description">{voice.description}</p><div class="sample-line"><button class="mini-play" aria-label={`${activeVoice === voice.name ? 'Stop' : 'Play'} ${voice.name} sample`} onclick={() => preview(voice)}>{activeVoice === voice.name ? '■' : '▶'}</button><div class="mini-wave" aria-hidden="true">{#each [13, 23, 16, 28, 18, 25, 12, 22, 15, 27, 19, 11, 24, 16, 20, 13] as height, i}<i class:playing={activeVoice === voice.name && i % 2 === 0} style={`--h:${height}px`}></i>{/each}</div><span class="mono">0:0{voice.name.length % 8 + 4}</span></div></article>{/each}</div>
		<p class="catalog-note mono">SAMPLE BUTTONS USE YOUR DEVICE'S TEXT-TO-SPEECH VOICES · FULL LIBRARY REQUIRES API CONNECTION</p>
	</div>
</section>

<style>
	.voices-section { padding-block: 84px; border-bottom: 2px solid #000; background: #fffdf9; }
	.section-head { display: flex; align-items: end; justify-content: space-between; gap: 26px; margin-bottom: 32px; }
	.kicker { display: inline-block; padding: 6px 9px; border: 2px solid #000; background: #b8c0ff; box-shadow: 3px 3px 0 #000; font-size: 9px; font-weight: 700; transform: rotate(-2deg); }
	h2 { margin: 18px 0 7px; font-size: clamp(32px, 5vw, 52px); line-height: 1.02; letter-spacing: -.04em; text-transform: uppercase; }
	.section-head p { max-width: 590px; margin: 0; color: #424242; font-size: 14px; line-height: 1.7; }
	.filters { display: flex; flex-wrap: wrap; gap: 7px; }.filters button { min-height: 36px; padding: 0 11px; border: 2px solid #000; background: #fff; box-shadow: 2px 2px 0 #000; font: 700 9px 'JetBrains Mono', monospace; cursor: pointer; }.filters button.chosen { background: #000; color: #fff; }
	.voice-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; }
	.voice-card { position: relative; display: flex; flex-direction: column; min-width: 0; padding: 22px; border: 2px solid #000; background: #fff; box-shadow: 4px 4px 0 #000; transition: transform .15s, box-shadow .15s; }.voice-card:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #000; }
	.tag { position: absolute; top: -11px; right: 12px; padding: 4px 7px; border: 1.5px solid #000; background: var(--tag); box-shadow: 2px 2px 0 #000; font-size: 8px; font-weight: 700; transform: rotate(2deg); }
	.voice-identity { display: flex; align-items: center; gap: 12px; }.portrait { display: grid; width: 47px; height: 47px; flex: 0 0 auto; place-items: center; border: 2px solid #000; background: var(--portrait); box-shadow: 3px 3px 0 #000; font-size: 15px; }
	.voice-identity h3 { margin: 0; font-size: 19px; text-transform: uppercase; }.voice-identity p { margin: 4px 0 0; color: #555; font-size: 8px; font-weight: 600; }
	.mood { align-self: flex-start; margin-top: 15px; padding: 5px 7px; border: 1px solid #000; background: #f4f4f0; font-size: 8px; font-weight: 600; }.description { min-height: 57px; margin: 12px 0 17px; color: #444; font-size: 12px; line-height: 1.6; }
	.sample-line { display: flex; align-items: center; gap: 10px; margin-top: auto; padding: 9px; border: 2px solid #000; background: #f4f4f0; }.mini-play { display: grid; width: 34px; height: 34px; flex: 0 0 auto; place-items: center; border: 2px solid #000; background: #000; color: #fff; cursor: pointer; }.mini-wave { display: flex; height: 30px; flex: 1; align-items: center; justify-content: center; gap: 3px; }.mini-wave i { width: 3px; height: var(--h); background: #111; }.mini-wave i:nth-child(n+9) { background: #aaa; }.mini-wave i.playing { background: #23a094; }.sample-line > span { font-size: 8px; }
	.catalog-note { margin: 19px 0 0; color: #555; text-align: center; font-size: 8px; line-height: 1.6; }
	@media (max-width: 900px) { .section-head { align-items: start; flex-direction: column; }.voice-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
	@media (max-width: 560px) { .voices-section { padding-block: 56px; }.voice-grid { grid-template-columns: 1fr; gap: 17px; }.voice-card { padding: 19px; }.description { min-height: 0; }.filters { gap: 6px; }.filters button { padding-inline: 8px; } }
</style>
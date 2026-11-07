<script lang="ts">
	const promises = ['No card required', 'Free studio preview', 'Made for storytellers'];
</script>

<section class="hero" id="top">
	<div class="container hero-grid">
		<div class="copy">
			<div class="eyebrows"><span class="sticker lavender mono">VOICE, WITHOUT BORDERS</span><span class="sticker mint mono">MADE FOR HUMANS</span></div>
			<h1 class="display">Give your words a <span>living,<br class="wide" /> breathing</span> human voice.</h1>
			<p class="intro">Tell the story the way you heard it in your head. Shape expressive voiceovers for the whole world, from your first line to your final cut.</p>
			<div class="actions"><a class="button dark" href="#studio"><span aria-hidden="true">▶</span> Try the voice studio</a><a class="button light" href="#voices"><span aria-hidden="true">⌕</span> Find your voice</a></div>
			<div class="promises">{#each promises as promise}<span><b aria-hidden="true">✓</b>{promise}</span>{/each}</div>
		</div>
		<div class="demo-wrap" aria-label="Voice preview illustration">
			<span class="sticker yellow demo-tag mono">A LITTLE PREVIEW</span>
			<div class="demo-card">
				<div class="demo-head"><div class="avatar">AR</div><div><strong class="display">Animesh Roy</strong><small class="mono">BANGLA · STORYTELLER</small></div><span class="live mono"><i></i> READY</span></div>
				<div class="quote"><small class="mono">A SAMPLE LINE</small><p>“A good story can take you anywhere.”</p></div>
				<div class="wave"><button aria-label="Jump to voice studio" onclick={() => document.getElementById('studio')?.scrollIntoView({ behavior: 'smooth' })}>▶</button><div class="bars" aria-hidden="true">{#each [15, 24, 11, 29, 19, 34, 20, 28, 12, 31, 18, 26, 13, 30, 20, 11, 25, 16, 29, 13, 22, 32, 17, 26, 12, 28] as height, i}<i class:hot={i > 12} style={`--h:${height}px`}></i>{/each}</div><span class="mono">0:08</span></div>
				<div class="specs"><span><small class="mono">DELIVERY</small><b>Expressive</b></span><span><small class="mono">LANGUAGE</small><b>70+ choices</b></span><span><small class="mono">BUILT FOR</small><b>Your next idea</b></span></div>
			</div>
			<span class="sticker pink seal mono">VOICE<br />ON!</span>
		</div>
	</div>
</section>

<style>
	.hero { overflow: hidden; border-bottom: 2px solid #000; background: #fffdf9; }
	.hero-grid { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(330px, .92fr); align-items: center; gap: clamp(42px, 7vw, 92px); padding-block: 92px 100px; }
	.copy { position: relative; z-index: 1; }
	.eyebrows { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 25px; }
	.sticker { display: inline-block; padding: 7px 10px; border: 2px solid #000; box-shadow: 3px 3px 0 #000; font-size: 9px; font-weight: 700; transform: rotate(-2deg); }
	.lavender { background: #b8c0ff; }.mint { background: #b8ff9f; transform: rotate(2deg); }.yellow { background: #ffc900; }.pink { background: #ff90e8; }
	h1 { max-width: 690px; margin: 0; font-size: clamp(48px, 6.4vw, 78px); line-height: .99; letter-spacing: -.055em; font-weight: 700; }
	h1 span { display: inline; padding: 0 8px 3px; border: 2px solid #000; background: #ffc900; box-shadow: 4px 4px 0 #000; box-decoration-break: clone; -webkit-box-decoration-break: clone; }
	.intro { max-width: 580px; margin: 25px 0 28px; color: #343434; font-size: 16px; line-height: 1.75; }
	.actions { display: flex; flex-wrap: wrap; gap: 14px; }
	.button { min-height: 49px; display: inline-flex; align-items: center; justify-content: center; gap: 11px; padding: 0 17px; border: 2px solid #000; box-shadow: 4px 4px 0 #000; color: #000; text-decoration: none; font: 700 11px 'JetBrains Mono', monospace; transition: transform .12s, box-shadow .12s; }
	.button:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #000; }.dark { background: #000; color: #fff; }.dark:hover { background: #ffc900; color: #000; }.light { background: #fff; }
	.promises { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 37px; padding-top: 21px; border-top: 2px solid #d6d2c9; }
	.promises span { display: inline-flex; align-items: center; gap: 8px; padding: 7px 9px; border: 1.5px solid #000; background: #fff; box-shadow: 2px 2px 0 #000; font-size: 10px; font-weight: 600; }
	.promises b { display: grid; width: 17px; height: 17px; place-items: center; border: 1px solid #000; background: #23a094; font-size: 11px; }
	.demo-wrap { position: relative; padding: 22px 10px 20px 4px; }
	.demo-card { padding: 22px; border: 2px solid #000; background: #fff; box-shadow: 8px 8px 0 #000; transform: rotate(1deg); }
	.demo-tag { position: absolute; z-index: 1; top: 4px; left: -12px; transform: rotate(-5deg); }
	.seal { position: absolute; right: -17px; bottom: 1px; padding: 10px; text-align: center; line-height: 1.2; transform: rotate(8deg); }
	.demo-head { display: flex; align-items: center; gap: 12px; padding-bottom: 16px; border-bottom: 2px solid #000; }
	.avatar { display: grid; width: 43px; aspect-ratio: 1; place-items: center; border: 2px solid #000; background: #b8c0ff; box-shadow: 3px 3px 0 #000; font: 700 14px 'Space Grotesk', sans-serif; }
	.demo-head strong { display: block; font-size: 17px; }.demo-head small, .quote small { display: block; margin-top: 4px; color: #555; font-size: 9px; }
	.live { margin-left: auto; padding: 5px 7px; border: 1.5px solid #000; background: #ffc900; font-size: 8px; font-weight: 700; }.live i { display: inline-block; width: 6px; height: 6px; margin-right: 4px; border-radius: 50%; background: #23a094; }
	.quote { margin: 17px 0; padding: 15px; border: 2px solid #000; background: #f4f4f0; }.quote p { margin: 9px 0 0; font-size: 17px; line-height: 1.5; }
	.wave { display: flex; align-items: center; gap: 12px; min-height: 59px; padding: 8px 11px; border: 2px solid #000; box-shadow: 3px 3px 0 #000; }.wave button { width: 35px; height: 35px; border: 2px solid #000; background: #000; color: #fff; cursor: pointer; }.bars { display: flex; height: 36px; flex: 1; align-items: center; justify-content: center; gap: 3px; }.bars i { width: 4px; height: var(--h); background: #000; }.bars i.hot { background: #ff90e8; }.wave > span { font-size: 9px; font-weight: 700; }
	.specs { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 17px; }.specs span { padding: 9px; border: 1.5px solid #000; background: #fffdf9; }.specs small, .specs b { display: block; }.specs small { color: #666; font-size: 8px; }.specs b { margin-top: 5px; font-size: 10px; }
	@media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr; gap: 45px; padding-block: 64px 75px; }.copy { max-width: 720px; }.demo-wrap { width: min(100%, 560px); margin-inline: auto; } }
	@media (max-width: 480px) { .hero-grid { padding-block: 47px 56px; }.eyebrows { gap: 8px; margin-bottom: 19px; }.sticker { font-size: 8px; } h1 { font-size: clamp(43px, 13vw, 58px); }.intro { margin-block: 20px 24px; font-size: 14px; }.actions { display: grid; }.button { width: 100%; }.promises { gap: 8px; margin-top: 28px; }.promises span { font-size: 9px; }.demo-card { padding: 16px; }.specs { gap: 5px; }.specs span { padding: 7px 5px; }.specs b { font-size: 9px; } }
</style>
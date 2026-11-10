<script lang="ts">
	const useCases = [
		{ title: 'Content Creation', copy: 'Narrate videos, podcasts and more.', paths: ['M8 5v14l11-7z'] },
		{ title: 'Business & Marketing', copy: 'Create ads, voiceovers and brand content.', paths: ['m3 11 18-5v12L3 14v-3z', 'M11.6 16.8a3 3 0 1 1-5.8-1.6'] },
		{ title: 'Developers', copy: 'Integrate voice into your apps and products.', paths: ['m16 18 6-6-6-6', 'M8 6l-6 6 6 6'] },
		{ title: 'Education', copy: 'Make learning more interactive.', paths: ['M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z', 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'] }
	];
</script>

<section class="use-cases" id="use-cases"><div class="container use-cases-inner"><span class="mini-heading center">Use Cases</span><h2>Built for every creator</h2><p>Whether you're a content creator, developer, or business owner — Vocalis helps you bring ideas to life.</p><div class="use-case-grid">
	{#each useCases as item}<a class="use-case-card" href="#voices"><div class="use-case-icon" aria-hidden="true"><svg viewBox="0 0 24 24">{#each item.paths as d}<path {d} />{/each}</svg></div><h3>{item.title}</h3><p>{item.copy}</p><div class="arrow-bubble" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7" /></svg></div></a>{/each}
</div></div></section>

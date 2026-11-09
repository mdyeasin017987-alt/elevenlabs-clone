<script lang="ts">
	const useCases = [
		{ title: 'Content Creation', copy: 'Narrate videos, podcasts and more.', icon: '▶' },
		{ title: 'Business & Marketing', copy: 'Create ads, voiceovers and brand content.', icon: '✳' },
		{ title: 'Developers', copy: 'Integrate voice into your apps and products.', icon: '</>' },
		{ title: 'Education', copy: 'Make learning more interactive.', icon: '▤' }
	];
</script>

<section class="use-cases"><div class="container use-cases-inner"><span class="mini-heading center">Use Cases</span><h2>Built for every creator</h2><p>Whether you're a content creator, developer, or business owner — Vocalis helps you bring ideas to life.</p><div class="use-case-grid">
	{#each useCases as item}<article class="use-case-card"><div class="use-case-icon" aria-hidden="true">{item.icon}</div><h3>{item.title}</h3><p>{item.copy}</p><div class="arrow-bubble" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7" /></svg></div></article>{/each}
</div></div></section>
<script lang="ts">
	import { ArrowRight, FolderClosed } from '@lucide/svelte';
</script>

<section class="projects-section" id="projects" aria-labelledby="projects-title">
	<div class="section-heading">
		<h2 id="projects-title"><FolderClosed size={16} /> Recent Projects</h2>
		<a class="view-all" href="#projects">View all <ArrowRight size={13} /></a>
	</div>
</section>

<style>
	.projects-section { padding: 8px 0 24px; }
	.section-heading { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
	.section-heading h2 { display: flex; align-items: center; gap: 8px; margin: 0; color: #0f172a; font-size: 14px; font-weight: 700; }
	.section-heading h2 :global(svg) { color: #1e293b; }
	.view-all { display: inline-flex; align-items: center; gap: 6px; color: #475569; font-size: 10px; text-decoration: none; }
	.view-all:hover { color: #0f172a; }
</style>

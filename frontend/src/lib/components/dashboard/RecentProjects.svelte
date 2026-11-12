<script lang="ts">
	import { FolderClosed, MoreHorizontal } from '@lucide/svelte';
	import { SectionHeading } from '#lib/components/ui';
	import { dashboardProjects } from '#lib/data/dashboard';
</script>

<!--
	Project cards are deliberately data-driven. When the Projects API exists,
	replace dashboardProjects with a load function and preserve this markup.
	Keep actions as real links/buttons; do not wire fake download or edit actions.
-->
<section class="projects-section" id="projects" aria-labelledby="projects-title">
	<SectionHeading id="projects-title" title="Recent Projects" href="#projects" />
	<div class="project-grid">
		{#each dashboardProjects as project}
			<article class="project-card">
				<div class="project-art" class:blue={project.tone === 'blue'} class:green={project.tone === 'green'}>
					<FolderClosed size={21} strokeWidth={1.6} />
					<span>{project.duration}</span>
				</div>
				<div class="project-details">
					<div class="project-title-row">
						<h3>{project.title}</h3>
						<span class="project-more" aria-hidden="true"><MoreHorizontal size={17} /></span>
					</div>
					<p>{project.description}</p>
					<div class="project-meta"><span>{project.updated}</span></div>
				</div>
			</article>
		{/each}
	</div>
</section>

<style>
	.projects-section { display: grid; gap: 14px; padding: 8px 0 24px; }
	.project-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
	.project-card { min-width: 0; overflow: hidden; border: 1px solid #e5e7eb; border-radius: 16px; background: #fff; transition: border-color .16s ease, box-shadow .16s ease; }
	.project-card:hover { border-color: #cbd5e1; box-shadow: 0 5px 18px rgb(15 23 42 / 4%); }
	.project-art { display: flex; min-height: 82px; align-items: center; justify-content: space-between; background: #f1f5f9; padding: 18px; color: #334155; }
	.project-art.blue { background: #eff6ff; color: #315b8f; }
	.project-art.green { background: #eff6f2; color: #38634c; }
	.project-art span { border: 1px solid currentColor; border-radius: 999px; padding: 3px 7px; font-size: 9px; opacity: .8; }
	.project-details { padding: 13px 14px 12px; }
	.project-title-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
	.project-title-row h3 { overflow: hidden; margin: 0; color: #0f172a; font-size: 11px; font-weight: 700; text-overflow: ellipsis; white-space: nowrap; }
	.project-more { display: grid; width: 26px; height: 26px; flex: 0 0 auto; place-items: center; border: 0; border-radius: 50%; background: transparent; color: #64748b; }
	
	.project-details p { margin: 4px 0 12px; color: #64748b; font-size: 9px; }
	.project-meta { display: flex; align-items: center; justify-content: space-between; gap: 8px; border-top: 1px solid #f1f5f9; padding-top: 8px; color: #94a3b8; font-size: 9px; }
	@media (max-width: 900px) { .project-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
	@media (max-width: 560px) { .project-grid { grid-template-columns: 1fr; } }
</style>

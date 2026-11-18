<script lang="ts">
	import { FolderClosed } from '@lucide/svelte';
	import { SectionHeading } from '#lib/components/ui';
	import { projects } from '#lib/data/dashboard';
	import ProjectCard from './ProjectCard.svelte';
</script>

<section class="space-y-4" aria-labelledby="projects-title">
	<SectionHeading id="projects-title" title="Projects" icon={FolderClosed} />
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

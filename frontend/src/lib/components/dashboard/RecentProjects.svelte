<script lang="ts">
	import { FolderClosed, MoreHorizontal, Play, Pause } from '@lucide/svelte';
	import { Badge, Button, SectionHeading } from '#lib/components/ui';
	import { dashboardProjects } from '#lib/data/dashboard';
	import { player, toggleSpeech } from '#lib/speech.svelte';
</script>

<section class="space-y-3.5 pt-2 pb-6" id="projects" aria-labelledby="projects-title">
	<SectionHeading id="projects-title" title="Recent Projects" href="#projects" />

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each dashboardProjects as project, index}
			{@const isPlaying = player.active === `project-${index}`}
			<article
				class="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-200 hover:border-slate-300 hover:shadow-sm"
			>
				<div
					class="flex h-24 items-center justify-between px-5 transition-colors {project.tone === 'blue'
						? 'bg-blue-50/70 text-blue-700'
						: project.tone === 'green'
							? 'bg-emerald-50/70 text-emerald-700'
							: 'bg-slate-100 text-slate-700'}"
				>
					<div class="flex items-center gap-2.5">
						<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 shadow-2xs backdrop-blur-xs">
							<FolderClosed class="size-5" />
						</div>
						<Button
							variant="ghost"
							size="icon-xs"
							class="h-8 w-8 rounded-full bg-white/80 text-slate-800 shadow-2xs hover:bg-white transition-all"
							aria-label={`${isPlaying ? 'Stop' : 'Play'} project audio`}
							aria-pressed={isPlaying}
							onclick={() =>
								toggleSpeech(
									`project-${index}`,
									project.title + '. ' + project.description,
									{ lang: project.description.startsWith('Bangla') ? 'bn-BD' : 'en-US' }
								)}
						>
							{#if isPlaying}
								<Pause class="size-3 fill-current" />
							{:else}
								<Play class="size-3 fill-current ml-0.5" />
							{/if}
						</Button>
					</div>

					<Badge variant="outline" class="rounded-full bg-white/80 font-mono text-[10px] font-semibold border-current/20">
						{project.duration}
					</Badge>
				</div>

				<div class="flex flex-col justify-between p-4 flex-1">
					<div class="space-y-1">
						<div class="flex items-center justify-between gap-2">
							<h3 class="truncate text-xs font-bold text-slate-900">{project.title}</h3>
							<button
								type="button"
								class="text-slate-400 hover:text-slate-600 p-0.5 rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
								aria-label={`Options for ${project.title}`}
							>
								<MoreHorizontal class="size-3.5" />
							</button>
						</div>
						<p class="text-[11px] text-slate-500 font-medium">{project.description}</p>
					</div>

					<div class="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-[10px] text-slate-400">
						<span>{project.updated}</span>
						<span class="text-slate-400 group-hover:text-slate-700 transition-colors">Open →</span>
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>

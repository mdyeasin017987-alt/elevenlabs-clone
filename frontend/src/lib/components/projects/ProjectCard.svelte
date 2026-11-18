<script lang="ts">
	import { FolderClosed } from '@lucide/svelte';
	import { Badge, Card } from '#lib/components/ui';
	import PlayButton from '#lib/components/shared/PlayButton.svelte';
	import { projects, voiceByName } from '#lib/data/dashboard';

	type Project = (typeof projects)[number];
	let { project }: { project: Project } = $props();

	const voice = $derived(voiceByName(project.voice));
	const tones = {
		'tone-1': 'bg-tone-1/10 text-tone-1',
		'tone-2': 'bg-tone-2/10 text-tone-2',
		'tone-3': 'bg-tone-3/10 text-tone-3',
		'tone-4': 'bg-tone-4/10 text-tone-4'
	} as const;
</script>

<Card class="gap-0 overflow-hidden py-0 transition-shadow hover:shadow-md">
	<div class="flex h-24 items-center justify-between px-5 {tones[project.tone]}">
		<div class="flex items-center gap-3">
			<span class="flex size-10 items-center justify-center rounded-xl bg-background/80">
				<FolderClosed class="size-5" />
			</span>
			<PlayButton
				id={`project-${project.title}`}
				text={project.text}
				label={project.title}
				variant="outline"
				class="bg-background/80"
				options={{ lang: project.lang, pitch: voice.pitch, rate: voice.rate }}
			/>
		</div>
		<Badge variant="outline" class="bg-background/80 font-mono text-[10px] text-foreground">{project.duration}</Badge>
	</div>
	<div class="space-y-1 p-4">
		<h3 class="truncate text-sm font-semibold">{project.title}</h3>
		<p class="text-xs text-muted-foreground">{project.description}</p>
		<p class="pt-2 text-[11px] text-muted-foreground">{project.updated}</p>
	</div>
</Card>

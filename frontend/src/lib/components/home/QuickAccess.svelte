<script lang="ts">
	import { ArrowRight, AudioLines, FolderOpen, Library, Mic, Zap } from '@lucide/svelte';
	import { Card, SectionHeading } from '#lib/components/ui';

	const items = [
		{ title: 'Text to Speech', text: 'Turn text into speech', href: '/studio', icon: AudioLines, tone: 'bg-tone-1/10 text-tone-1' },
		{ title: 'Voice Cloning', text: 'Clone your voice', href: '/cloning', icon: Mic, tone: 'bg-tone-2/10 text-tone-2' },
		{ title: 'Voice Library', text: 'Explore your voices', href: '/voices', icon: Library, tone: 'bg-tone-3/10 text-tone-3' },
		{ title: 'My Projects', text: 'Manage your projects', href: '/projects', icon: FolderOpen, tone: 'bg-tone-4/10 text-tone-4' }
	];
</script>

<section class="space-y-4" aria-labelledby="quick-title">
	<SectionHeading id="quick-title" title="Quick Access" icon={Zap} />

	<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
		{#each items as item}
			<a href={item.href} class="group block rounded-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none">
				<Card class="flex-row items-center gap-4 border-0 px-5 py-5 ring-0 transition-shadow group-hover:shadow-md {item.tone}">
					<item.icon class="size-8 shrink-0" />
					<div class="min-w-0 flex-1">
						<h3 class="truncate text-sm font-semibold text-foreground">{item.title}</h3>
						<p class="truncate text-xs text-muted-foreground">{item.text}</p>
					</div>
					<span class="flex size-8 shrink-0 items-center justify-center rounded-full bg-background text-foreground">
						<ArrowRight class="size-4" />
					</span>
				</Card>
			</a>
		{/each}
	</div>
</section>

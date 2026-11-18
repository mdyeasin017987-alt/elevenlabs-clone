<script lang="ts">
	import { ArrowRight, AudioLines, ChevronLeft, ChevronRight, Mic } from '@lucide/svelte';
	import { Button, Card } from '#lib/components/ui';

	const slides = [
		{
			title: 'Instant Voice Cloning',
			accent: 'in Seconds',
			text: 'Clone any voice with just a few seconds of audio.',
			cta: { label: 'Try Now', href: '/cloning' },
			more: { label: 'Learn More', href: '/voices' }
		},
		{
			title: 'Natural Text to Speech',
			accent: 'in Any Language',
			text: 'Type anything, pick a voice and listen instantly.',
			cta: { label: 'Try Now', href: '/studio' },
			more: { label: 'Browse Voices', href: '/voices' }
		},
		{
			title: 'Organise Your Work',
			accent: 'in Projects',
			text: 'Keep every voice-over together and replay it anytime.',
			cta: { label: 'Open Projects', href: '/projects' },
			more: { label: 'Browse Voices', href: '/voices' }
		}
	];

	const bars = [28, 52, 78, 110, 74, 50, 30];
	let index = $state(0);
	const slide = $derived(slides[index]);

	function go(delta: number) {
		index = (index + delta + slides.length) % slides.length;
	}
</script>

<Card
	class="relative gap-0 overflow-hidden border-0 bg-linear-to-br from-brand/5 via-brand/10 to-brand/25 px-5 pt-8 pb-12 shadow-sm sm:px-16 sm:pt-12 sm:pb-14"
	aria-roledescription="carousel"
	aria-label="Featured"
>
	<Button
		variant="outline"
		size="icon"
		class="absolute top-1/2 left-3 z-10 hidden -translate-y-1/2 rounded-full bg-background/80 sm:inline-flex"
		aria-label="Previous slide"
		onclick={() => go(-1)}
	>
		<ChevronLeft />
	</Button>

	<div class="grid w-full items-center gap-8 md:grid-cols-2">
		<div class="space-y-4" aria-live="polite">
			<h2 class="text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
				{slide.title}<br />
				<span class="text-brand">{slide.accent}</span>
			</h2>
			<p class="text-muted-foreground sm:text-lg">{slide.text}</p>
			<div class="flex flex-wrap gap-3 pt-2">
				<Button href={slide.cta.href} size="lg" class="h-11 gap-2 rounded-full px-6">
					{slide.cta.label}
					<ArrowRight />
				</Button>
				<Button href={slide.more.href} variant="outline" size="lg" class="h-11 rounded-full bg-background/70 px-6">
					{slide.more.label}
				</Button>
			</div>
		</div>

		<div class="relative hidden h-52 items-center justify-center md:flex" aria-hidden="true">
			<div class="absolute top-2 left-8 flex size-14 items-center justify-center rounded-2xl bg-background shadow-md">
				<Mic class="size-6 text-brand" />
			</div>
			<div class="flex size-44 items-center justify-center gap-2 rounded-3xl bg-background shadow-xl">
				{#each bars as height}
					<span class="w-2 rounded-full bg-foreground" style="height: {height}px"></span>
				{/each}
			</div>
			<div class="absolute right-8 bottom-2 flex size-14 items-center justify-center rounded-2xl bg-background shadow-md">
				<AudioLines class="size-6 text-brand" />
			</div>
		</div>
	</div>

	<Button
		variant="outline"
		size="icon"
		class="absolute top-1/2 right-3 z-10 hidden -translate-y-1/2 rounded-full bg-background/80 sm:inline-flex"
		aria-label="Next slide"
		onclick={() => go(1)}
	>
		<ChevronRight />
	</Button>

	<div class="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1">
		{#each slides as _, i}
			<Button
				variant="ghost"
				size="icon-xs"
				class="size-5 rounded-full p-0 hover:bg-transparent"
				aria-label={`Go to slide ${i + 1}`}
				aria-current={i === index}
				onclick={() => (index = i)}
			>
				<span class="h-1.5 rounded-full transition-all {i === index ? 'w-5 bg-foreground' : 'w-1.5 bg-foreground/25'}"></span>
			</Button>
		{/each}
	</div>
</Card>

<script lang="ts">
	import Sparkles from '@lucide/svelte/icons/sparkles';
</script>

<div class="flex flex-col justify-center gap-6 text-white">
	<!-- Badge -->
	<div class="flex">
		<span
			class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-sm"
		>
			<Sparkles class="size-3.5" />
			The next generation of AI voice
		</span>
	</div>

	<!-- Headline -->
	<h1 class="max-w-lg text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] md:text-6xl lg:text-7xl">
		Turn your text<br />into lifelike speech
	</h1>

	<!-- Subtitle -->
	<p class="max-w-md text-base leading-relaxed text-white/70 md:text-lg">
		Powerful, natural and realistic AI voice
		for everyone, everywhere.
	</p>

	<!-- Stats -->
	<div class="mt-4 flex items-center gap-6 text-sm">
		<div>
			<span class="text-2xl font-bold">10M+</span>
			<p class="text-xs text-white/60">Voices Generated</p>
		</div>
		<div class="h-10 w-px bg-white/20"></div>
		<div>
			<span class="text-2xl font-bold">99.9%</span>
			<p class="text-xs text-white/60">Uptime</p>
		</div>
		<div class="h-10 w-px bg-white/20"></div>
		<div>
			<span class="text-2xl font-bold">150+</span>
			<p class="text-xs text-white/60">Languages</p>
		</div>
	</div>
</div>

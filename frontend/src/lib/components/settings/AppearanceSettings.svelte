<script lang="ts">
	import { Check, Monitor, Moon, Sun } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { setMode } from 'mode-watcher';
	import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '#lib/components/ui';
	import { loadPalette, palettes, setPalette, theme } from '#lib/theme.svelte';

	const modes = [
		{ value: 'light', label: 'Light', icon: Sun },
		{ value: 'dark', label: 'Dark', icon: Moon },
		{ value: 'system', label: 'System', icon: Monitor }
	] as const;

	onMount(loadPalette);
</script>

<Card>
	<CardHeader>
		<CardTitle>Appearance</CardTitle>
		<CardDescription>
			Colours come from CSS variables in <code class="rounded bg-muted px-1 py-0.5 text-xs">src/app.css</code>,
			so one change updates the whole app.
		</CardDescription>
	</CardHeader>
	<CardContent class="space-y-6">
		<div class="space-y-2">
			<h3 class="text-sm font-semibold">Mode</h3>
			<div class="flex flex-wrap gap-2">
				{#each modes as item}
					<Button variant="outline" class="gap-2" onclick={() => setMode(item.value)}>
						<item.icon />
						{item.label}
					</Button>
				{/each}
			</div>
		</div>

		<div class="space-y-2">
			<h3 class="text-sm font-semibold">Accent colour</h3>
			<div class="flex flex-wrap gap-3" role="radiogroup" aria-label="Accent colour">
				{#each palettes as item}
					{@const selected = theme.palette === item.id}
					<button
						type="button"
						role="radio"
						aria-checked={selected}
						aria-label={item.label}
						class="flex flex-col items-center gap-1.5 rounded-lg p-1 text-xs focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
						onclick={() => setPalette(item.id)}
					>
						<span
							class="flex size-10 items-center justify-center rounded-full text-white ring-offset-2 ring-offset-background {selected ? 'ring-2 ring-foreground' : ''}"
							style="background: var(--palette-{item.id})"
						>
							{#if selected}<Check class="size-4" />{/if}
						</span>
						{item.label}
					</button>
				{/each}
			</div>
		</div>
	</CardContent>
</Card>

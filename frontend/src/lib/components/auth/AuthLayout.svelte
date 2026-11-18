<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Card, CardContent } from '#lib/components/ui';
	import AuthPanel from './AuthPanel.svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="flex min-h-svh flex-col items-center justify-center bg-muted p-4 sm:p-6 md:p-10">
	<div class="w-full max-w-sm md:max-w-4xl">
		<Card class="overflow-hidden p-0">
			<CardContent class="grid p-0 md:grid-cols-2">
				<div class="p-6 sm:p-8 md:p-10">
					{@render children()}
				</div>
				<AuthPanel />
			</CardContent>
		</Card>
	</div>
</div>

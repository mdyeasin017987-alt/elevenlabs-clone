<script lang="ts">
	import { Mic } from '@lucide/svelte';
	import { Button, Card, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '#lib/components/ui';
</script>

<svelte:head>
	<title>Voice Cloning - Vocalis</title>
</svelte:head>

<Card class="px-4 py-10">
	<Empty>
		<EmptyHeader>
			<EmptyMedia variant="icon"><Mic /></EmptyMedia>
			<EmptyTitle>Voice cloning is coming soon</EmptyTitle>
			<EmptyDescription>
				Cloning needs a speech backend that is not connected yet. In the meantime you can try the voices you already have.
			</EmptyDescription>
		</EmptyHeader>
		<EmptyContent>
			<Button href="/voices">Browse voices</Button>
		</EmptyContent>
	</Empty>
</Card>

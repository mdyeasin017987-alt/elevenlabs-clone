<script lang="ts">
	import * as Card from '#lib/components/ui/card';
	import * as Tabs from '#lib/components/ui/tabs';
	import SignInForm from './SignInForm.svelte';
	import SignUpForm from './SignUpForm.svelte';

	let { defaultTab = 'signin' }: { defaultTab?: string } = $props();
</script>

<Card.Root class="w-full max-w-md border-0 bg-white/95 shadow-2xl backdrop-blur-md ring-0 md:rounded-2xl">
	<Card.Header class="items-center gap-1 pb-2 pt-8">
		<Card.Title class="text-2xl font-bold tracking-tight md:text-3xl">Welcome back</Card.Title>
		<Card.Description class="text-sm text-muted-foreground">
			Sign in to your Vocalis account
		</Card.Description>
	</Card.Header>
	<Card.Content class="px-8 pb-8">
		<Tabs.Root value={defaultTab} class="w-full">
			<Tabs.List variant="line" class="mb-6 w-full justify-center">
				<Tabs.Trigger value="signin" class="flex-1 text-sm font-semibold">Sign in</Tabs.Trigger>
				<Tabs.Trigger value="signup" class="flex-1 text-sm font-semibold">Sign up</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="signin">
				<SignInForm />
			</Tabs.Content>
			<Tabs.Content value="signup">
				<SignUpForm />
			</Tabs.Content>
		</Tabs.Root>
	</Card.Content>
</Card.Root>

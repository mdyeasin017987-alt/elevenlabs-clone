<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button, Input } from '#lib/components/ui';
	import * as Field from '#lib/components/ui/field';

	let password = $state('');
	let confirm = $state('');
	let submitted = $state(false);

	const tooShort = $derived(password.length > 0 && password.length < 8);
	const mismatch = $derived(confirm.length > 0 && password !== confirm);

	// Demo only: there is no auth backend yet, so a valid form just opens the dashboard.
	function submit(event: SubmitEvent) {
		event.preventDefault();
		submitted = true;
		if (password.length < 8 || password !== confirm) return;
		goto('/home');
	}
</script>

<form onsubmit={submit}>
	<Field.Group>
		<div class="flex flex-col gap-1">
			<h1 class="text-2xl font-bold tracking-tight">Create your account</h1>
			<p class="text-sm text-balance text-muted-foreground">Start creating realistic voices with Vocalis</p>
		</div>
		<Field.Field>
			<Field.Label for="signup-name">Full name</Field.Label>
			<Input id="signup-name" name="name" type="text" required autocomplete="name" placeholder="Your name" />
		</Field.Field>
		<Field.Field>
			<Field.Label for="signup-email">Email</Field.Label>
			<Input id="signup-email" name="email" type="email" required autocomplete="email" placeholder="you@example.com" />
		</Field.Field>
		<Field.Field>
			<Field.Label for="signup-password">Password</Field.Label>
			<Input id="signup-password" name="password" type="password" required autocomplete="new-password" bind:value={password} aria-invalid={tooShort || (submitted && password.length < 8)} />
			<Field.Description>Must be at least 8 characters long.</Field.Description>
			{#if tooShort}
				<Field.Error>Password must be at least 8 characters.</Field.Error>
			{/if}
		</Field.Field>
		<Field.Field>
			<Field.Label for="signup-confirm">Confirm password</Field.Label>
			<Input id="signup-confirm" name="confirm" type="password" required autocomplete="new-password" bind:value={confirm} aria-invalid={mismatch} />
			{#if mismatch}
				<Field.Error>Passwords do not match.</Field.Error>
			{/if}
		</Field.Field>
		<Field.Field>
			<Button type="submit" class="w-full">Create account</Button>
		</Field.Field>
		<p class="text-center text-sm text-muted-foreground">
			Already have an account?
			<a href="/sign-in" class="font-semibold text-foreground underline-offset-4 hover:underline">Sign in</a>
		</p>
	</Field.Group>
</form>

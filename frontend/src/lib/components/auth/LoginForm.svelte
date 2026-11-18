<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button, Input } from '#lib/components/ui';
	import * as Field from '#lib/components/ui/field';

	// Demo only: there is no auth backend yet, so a valid form just opens the dashboard.
	function submit(event: SubmitEvent) {
		event.preventDefault();
		goto('/home');
	}
</script>

<form onsubmit={submit}>
	<Field.Group>
		<div class="flex flex-col gap-1">
			<h1 class="text-2xl font-bold tracking-tight">Welcome back</h1>
			<p class="text-sm text-balance text-muted-foreground">Sign in to your Vocalis account</p>
		</div>
		<Field.Field>
			<Field.Label for="login-email">Email</Field.Label>
			<Input id="login-email" name="email" type="email" required autocomplete="email" placeholder="you@example.com" />
		</Field.Field>
		<Field.Field>
			<Field.Label for="login-password">Password</Field.Label>
			<Input id="login-password" name="password" type="password" required autocomplete="current-password" />
		</Field.Field>
		<Field.Field>
			<Button type="submit" class="w-full">Sign in</Button>
		</Field.Field>
		<p class="text-center text-sm text-muted-foreground">
			Don't have an account?
			<a href="/sign-up" class="font-semibold text-foreground underline-offset-4 hover:underline">Sign up</a>
		</p>
	</Field.Group>
</form>

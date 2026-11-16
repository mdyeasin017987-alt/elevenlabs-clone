<script lang="ts">
	import { Button } from '#lib/components/ui/button';
	import { Input } from '#lib/components/ui/input';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-col gap-2">
		<label for="signup-name" class="text-sm font-medium text-foreground">Full Name</label>
		<Input id="signup-name" type="text" placeholder="Enter your full name" class="h-12 rounded-xl" />
	</div>
	<div class="flex flex-col gap-2">
		<label for="signup-email" class="text-sm font-medium text-foreground">Email</label>
		<Input id="signup-email" type="email" placeholder="Enter your email" class="h-12 rounded-xl" />
	</div>
	<div class="flex flex-col gap-2">
		<label for="signup-password" class="text-sm font-medium text-foreground">Password</label>
		<Input id="signup-password" type="password" placeholder="Create a password" class="h-12 rounded-xl" />
	</div>
</div>

<Button
	class="mt-2 h-12 w-full justify-center gap-2 rounded-xl bg-foreground text-sm font-semibold text-background hover:bg-foreground/90"
>
	Create account
	<ArrowRight class="size-4" />
</Button>

<p class="text-center text-sm text-muted-foreground">
	Already have an account?
	<a href="/sign-in" class="font-semibold text-foreground hover:underline">Sign in</a>
</p>

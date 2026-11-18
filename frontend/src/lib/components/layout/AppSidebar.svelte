<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { LogOut, Moon, Sun } from '@lucide/svelte';
	import { toggleMode } from 'mode-watcher';
	import { BrandMark } from '#lib/components/ui';
	import * as Sidebar from '#lib/components/ui/sidebar/index.js';
	import { currentUser } from '#lib/data/dashboard';
	import { isActivePath, navGroups, settingsNavItem } from '#lib/data/navigation';

	const sidebar = Sidebar.useSidebar();

	// On phones the sidebar is a sheet: close it after every navigation.
	afterNavigate(() => sidebar.setOpenMobile(false));
</script>

<Sidebar.Root>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="lg">
					{#snippet child({ props })}
						<a href="/" aria-label="Vocalis landing page" {...props}>
							<BrandMark compact />
							<span class="text-lg font-bold tracking-tight">Vocalis</span>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>

	<Sidebar.Content>
		{#each navGroups as group}
			<Sidebar.Group>
				<Sidebar.GroupLabel>{group.label}</Sidebar.GroupLabel>
				<Sidebar.GroupContent>
					<Sidebar.Menu>
						{#each group.items as item}
							{@const active = isActivePath(page.url.pathname, item.href)}
							<Sidebar.MenuItem>
								<Sidebar.MenuButton isActive={active}>
									{#snippet child({ props })}
										<a href={item.href} aria-current={active ? 'page' : undefined} {...props}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
						{/each}
					</Sidebar.Menu>
				</Sidebar.GroupContent>
			</Sidebar.Group>
		{/each}
	</Sidebar.Content>

	<Sidebar.Footer>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton isActive={isActivePath(page.url.pathname, settingsNavItem.href)}>
					{#snippet child({ props })}
						<a href={settingsNavItem.href} {...props}>
							<settingsNavItem.icon />
							<span>{settingsNavItem.title}</span>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>

			<!-- Light / dark toggle (mode-watcher adds/removes the `dark` class on <html>). -->
			<Sidebar.MenuItem>
				<Sidebar.MenuButton onclick={() => toggleMode()}>
					<Sun class="dark:hidden" />
					<Moon class="hidden dark:block" />
					<span class="dark:hidden">Light mode</span>
					<span class="hidden dark:inline">Dark mode</span>
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>

		<Sidebar.Separator />

		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="lg">
					{#snippet child({ props })}
						<a href="/sign-in" aria-label="Sign out" {...props}>
							<span
								class="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand/15 text-xs font-bold text-brand"
								aria-hidden="true"
							>
								{currentUser.name[0]}
							</span>
							<span class="grid flex-1 text-left leading-tight">
								<span class="truncate text-sm font-semibold">{currentUser.name}</span>
								<span class="truncate text-xs text-muted-foreground">{currentUser.workspace}</span>
							</span>
							<LogOut class="size-4 text-muted-foreground" />
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Footer>
</Sidebar.Root>

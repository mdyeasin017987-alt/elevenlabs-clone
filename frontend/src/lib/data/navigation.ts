/**
 * Single source of truth for dashboard navigation.
 * Add a page here (and create its route folder under `src/routes/(app)/`)
 * and it appears in the sidebar, header title and quick links automatically.
 */
import { AudioLines, Box, FolderClosed, History, House, Library, Mic, Settings } from '@lucide/svelte';

export const navGroups = [
	{
		label: 'Create',
		items: [
			{ title: 'Home', href: '/home', icon: House },
			{ title: 'Text to Speech', href: '/studio', icon: AudioLines },
			{ title: 'Voice Cloning', href: '/cloning', icon: Mic }
		]
	},
	{
		label: 'Library',
		items: [
			{ title: 'Voice Library', href: '/voices', icon: Library },
			{ title: 'Projects', href: '/projects', icon: FolderClosed },
			{ title: 'Models', href: '/models', icon: Box },
			{ title: 'History', href: '/history', icon: History }
		]
	}
] as const;

export const settingsNavItem = { title: 'Settings', href: '/settings', icon: Settings } as const;

const allItems = [...navGroups.flatMap((group) => group.items), settingsNavItem];

export function isActivePath(pathname: string, href: string): boolean {
	return pathname === href || pathname.startsWith(`${href}/`);
}

export function titleForPath(pathname: string): string {
	return allItems.find((item) => isActivePath(pathname, item.href))?.title ?? 'Vocalis';
}

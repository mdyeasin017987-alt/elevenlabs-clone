// Shared UI entry point. Import product-wide primitives from `#lib/components/ui`.
export { default as BrandMark } from './BrandMark.svelte';
export { default as SectionHeading } from './SectionHeading.svelte';
export { default as SurfaceCard } from './SurfaceCard.svelte';
export { Button, buttonVariants } from './button/index.js';
export type { ButtonProps, ButtonSize, ButtonVariant } from './button/index.js';
export {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
	CardAction
} from './card/index.js';
export { Badge, badgeVariants, type BadgeVariant } from './badge/index.js';
export { Input } from './input/index.js';
export { Progress } from './progress/index.js';
export { Separator } from './separator/index.js';
export { Textarea } from './textarea/index.js';

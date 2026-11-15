<script lang="ts">
	import { BarChart3, Clock, Crown, MoreHorizontal, Pause, Play, Sparkles } from '@lucide/svelte';
	import { Badge, Button, Card, CardContent, CardHeader, CardTitle, Progress } from '#lib/components/ui';
	import { dashboardActivities } from '#lib/data/dashboard';
	import { player, toggleSpeech } from '#lib/speech.svelte';
</script>

<aside class="space-y-4" aria-label="Account overview">
	<!-- Usage Card -->
	<Card class="rounded-2xl border-slate-200/80 bg-white p-5 shadow-none" id="usage">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-2 text-xs font-semibold text-slate-800">
				<BarChart3 class="size-4 text-slate-700" />
				<span>Usage</span>
			</div>
			<a href="#usage" class="inline-flex items-center gap-1 text-xs font-medium text-slate-700 hover:text-slate-900 transition-colors">
				<span>View Usage</span>
				<span aria-hidden="true">→</span>
			</a>
		</div>

		<div class="mt-4">
			<div class="text-2xl font-black text-slate-900 tracking-tight">2,500</div>
			<div class="mt-0.5 text-xs font-medium text-slate-500">characters remaining this month</div>
		</div>

		<!-- Progress Bar -->
		<div class="mt-3.5">
			<Progress value={70} class="h-2 w-full rounded-full bg-slate-100" />
		</div>

		<!-- Pro Plan Badge -->
		<div class="mt-3.5 flex items-center justify-between pt-1 border-t border-slate-100">
			<div class="flex items-center gap-1.5 text-xs font-bold text-slate-900">
				<Crown class="size-3.5 text-amber-500" />
				<span>Pro Plan</span>
			</div>
			<Badge variant="outline" class="border-emerald-200/60 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 rounded-full">
				Active
			</Badge>
		</div>
	</Card>

	<!-- Recent Activity Card -->
	<Card class="rounded-2xl border-slate-200/80 bg-white p-5 shadow-none" id="activity">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-2 text-xs font-semibold text-slate-800">
				<Clock class="size-4 text-slate-700" />
				<span>Recent Activity</span>
			</div>
			<a href="#activity" class="inline-flex items-center gap-1 text-xs font-medium text-slate-700 hover:text-slate-900 transition-colors">
				<span>View all</span>
				<span aria-hidden="true">→</span>
			</a>
		</div>

		<!-- Activity List -->
		<div class="mt-4 divide-y divide-slate-100">
			{#each dashboardActivities as activity, index}
				{@const isPlaying = player.active === `activity-${index}`}
				<div class="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
					<div class="flex items-center gap-3 min-w-0">
						<Button
							variant="secondary"
							size="icon-xs"
							class="h-7 w-7 shrink-0 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
							aria-label={`${isPlaying ? 'Stop' : 'Play'} ${activity.title}`}
							aria-pressed={isPlaying}
							onclick={() => toggleSpeech(`activity-${index}`, activity.text, { lang: activity.lang })}
						>
							{#if isPlaying}
								<Pause class="size-2.5 fill-current" />
							{:else}
								<Play class="size-2.5 fill-current ml-0.5" />
							{/if}
						</Button>
						<div class="min-w-0">
							<h4 class="truncate text-xs font-semibold text-slate-900 leading-none">{activity.title}</h4>
							<span class="mt-1 block text-[10px] text-slate-400">{activity.age}</span>
						</div>
					</div>
					<button
						type="button"
						class="text-slate-400 hover:text-slate-600 transition-colors p-1"
						aria-label={`Options for ${activity.title}`}
					>
						<MoreHorizontal class="size-3.5" />
					</button>
				</div>
			{/each}
		</div>
	</Card>

	<!-- Promo Dark Card -->
	<div class="relative overflow-hidden rounded-2xl bg-[#0D0F12] p-5 text-white shadow-md">
		<!-- Decorative wave element -->
		<div class="pointer-events-none absolute -right-6 -bottom-6 h-36 w-36 opacity-30">
			<svg class="h-full w-full text-slate-400" fill="none" viewBox="0 0 200 200">
				<path d="M0,100 C40,160 80,40 120,100 C160,160 200,40 240,100" stroke="currentColor" stroke-width="2"></path>
				<path d="M0,120 C40,180 80,60 120,120 C160,180 200,60 240,120" stroke="currentColor" stroke-width="1.5"></path>
				<path d="M0,80 C40,140 80,20 120,80 C160,140 200,20 240,80" stroke="currentColor" stroke-width="1.5"></path>
			</svg>
		</div>
		<div class="relative z-10 space-y-2">
			<h3 class="text-sm font-bold leading-snug tracking-tight text-white">
				Unlock the full power<br />of Vocalis
			</h3>
			<p class="text-[11px] leading-relaxed text-slate-400 font-normal">
				Get more credits, access premium voices and advanced features.
			</p>
			<div class="pt-1">
				<Button
					href="#usage"
					variant="outline"
					size="sm"
					class="rounded-full bg-white text-slate-900 hover:bg-slate-100 font-semibold text-xs border-transparent shadow-sm gap-1.5"
				>
					<span>Upgrade to Pro</span>
					<span aria-hidden="true">→</span>
				</Button>
			</div>
		</div>
	</div>
</aside>

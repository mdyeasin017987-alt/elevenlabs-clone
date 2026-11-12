<script lang="ts">
	import { Activity, BarChart3, Crown, Pause, Play } from '@lucide/svelte';
	import { Button, SurfaceCard } from '#lib/components/ui';
	import { player, toggleSpeech } from '#lib/speech.svelte';
	import { dashboardActivities } from '#lib/data/dashboard';
</script>

<aside class="overview-column" aria-label="Account overview">
	<SurfaceCard class="panel usage-panel" id="usage" aria-labelledby="usage-title">
		<div class="panel-heading">
			<h2 id="usage-title"><BarChart3 size={16} /> Usage</h2>
			<a href="#usage" class="text-link">View Usage <span aria-hidden="true">→</span></a>
		</div>
		<div class="usage-number">2,500</div>
		<p class="muted-copy">characters remaining this month</p>
		<div class="usage-track" role="progressbar" aria-label="Monthly character usage" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
			<span></span>
		</div>
		<div class="plan-row"><span class="plan-label"><Crown size={15} /> Pro Plan</span><span class="status-pill">Active</span></div>
	</SurfaceCard>

	<SurfaceCard class="panel activity-panel" id="activity" aria-labelledby="activity-title">
		<div class="panel-heading">
			<h2 id="activity-title"><Activity size={16} /> Recent Activity</h2>
			<a href="#activity" class="text-link">View all <span aria-hidden="true">→</span></a>
		</div>
		<div class="activity-list">
			{#each dashboardActivities as activity, index}
				<div class="activity-item">
					<Button variant="secondary" size="icon-sm" class="play-control" aria-label={`${player.active === `activity-${index}` ? 'Stop' : 'Play'} ${activity.title}`} aria-pressed={player.active === `activity-${index}`} onclick={() => toggleSpeech(`activity-${index}`, activity.text, { lang: activity.lang })}>
						{#if player.active === `activity-${index}`}<Pause size={13} />{:else}<Play size={13} />{/if}
					</Button>
					<div class="activity-copy"><strong>{activity.title}</strong><span>{activity.age}</span></div>
				</div>
			{/each}
		</div>
	</SurfaceCard>

	<section class="upgrade-panel" aria-labelledby="upgrade-title">
		<div class="upgrade-decoration" aria-hidden="true">
			<svg viewBox="0 0 200 200" fill="none">
				<path d="M0 100C40 160 80 40 120 100S200 40 240 100" />
				<path d="M0 120C40 180 80 60 120 120S200 60 240 120" />
				<path d="M0 80C40 140 80 20 120 80S200 20 240 80" />
			</svg>
		</div>
		<div class="upgrade-content">
			<h2 id="upgrade-title">Unlock the full power<br />of Vocalis</h2>
			<p>Get more credits, access premium voices and advanced features.</p>
			<Button href="#usage" variant="outline" class="upgrade-cta">Upgrade to Pro <span aria-hidden="true">→</span></Button>
		</div>
	</section>
</aside>

<style>
	.overview-column { display: grid; align-content: start; gap: 14px; }
	.panel { border: 1px solid #e5e7eb; border-radius: 20px; background: #fff; padding: 20px; }
	.panel-heading { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
	.panel-heading h2 { display: flex; align-items: center; gap: 8px; margin: 0; color: #1e293b; font-size: 12px; font-weight: 700; }
	.panel-heading h2 :global(svg) { color: #475569; }
	.text-link { display: inline-flex; align-items: center; gap: 5px; color: #475569; font-size: 10px; text-decoration: none; }
	.text-link:hover { color: #0f172a; }
	.usage-number { margin-top: 21px; color: #0f172a; font-size: 29px; font-weight: 700; line-height: 1; }
	.muted-copy { margin: 6px 0 15px; color: #64748b; font-size: 10px; }
	.usage-track { overflow: hidden; height: 6px; border-radius: 8px; background: #f1f5f9; }
	.usage-track span { display: block; width: 70%; height: 100%; border-radius: inherit; background: #111827; }
	.plan-row { display: flex; align-items: center; justify-content: space-between; margin-top: 14px; }
	.plan-label { display: inline-flex; align-items: center; gap: 6px; color: #0f172a; font-size: 10px; font-weight: 650; }
	.plan-label :global(svg) { color: #f59e0b; }
	.status-pill { border: 1px solid #d5e7d8; border-radius: 20px; background: #f0f8f1; padding: 3px 8px; color: #50815b; font-size: 9px; font-weight: 650; }
	.activity-panel { padding-bottom: 5px; }
	.activity-list { display: grid; margin-top: 13px; }
	.activity-item { display: flex; min-width: 0; align-items: center; gap: 9px; border-top: 1px solid #f1f5f9; padding: 10px 0; }
	.activity-item:first-child { border-top: 0; }
	:global(.play-control) { width: 28px; height: 28px; border-radius: 50%; }
	.activity-copy { display: grid; min-width: 0; flex: 1; gap: 4px; }
	.activity-copy strong { overflow: hidden; color: #0f172a; font-size: 10px; font-weight: 650; text-overflow: ellipsis; white-space: nowrap; }
	.activity-copy span { color: #94a3b8; font-size: 9px; }
	.upgrade-panel { position: relative; overflow: hidden; min-height: 176px; border-radius: 16px; background: #0d0f12; color: #fff; padding: 19px; }
	.upgrade-content { position: relative; z-index: 1; }
	.upgrade-panel h2 { margin: 0; font-size: 18px; font-weight: 650; line-height: 1.25; }
	.upgrade-panel p:not(.upgrade-kicker) { max-width: 225px; margin: 8px 0 12px; color: #94a3b8; font-size: 10px; line-height: 1.5; }
	:global(.upgrade-cta) { min-height: 29px; border-color: transparent; border-radius: 999px; background: #fff; color: #111827; font-size: 9px; }
	.upgrade-decoration { position: absolute; right: -24px; bottom: -24px; width: 144px; height: 144px; color: #94a3b8; opacity: .3; transform: rotate(-15deg); }
	.upgrade-decoration svg { width: 100%; height: 100%; }
	.upgrade-decoration path { stroke: currentColor; stroke-width: 1.5; }
	@media (max-width: 980px) { .overview-column { grid-template-columns: repeat(2, minmax(0, 1fr)); } .upgrade-panel { grid-column: 1 / -1; } }
	@media (max-width: 570px) { .overview-column { grid-template-columns: 1fr; } .upgrade-panel { grid-column: auto; } }
</style>

<script lang="ts">
	import { BrandMark } from '#lib/components/ui';

	const sections = [
		{
			heading: 'Products',
			links: [
				{ label: 'Text to Speech', href: '/studio' },
				{ label: 'Voice Cloning', href: '/cloning' },
				{ label: 'Voice Library', href: '/voices' },
				{ label: 'Projects', href: '/projects' }
			]
		}
	];
	let email = $state('');
	let subscribed = $state(false);

	function subscribe(event: SubmitEvent) {
		event.preventDefault();
		if (!email.trim()) return;
		// Demo only: no backend is connected yet.
		subscribed = true;
		email = '';
	}
</script>

<footer class="site-footer" id="footer"><div class="container footer-inner"><div class="footer-top"><div class="brand-block"><a class="brand" href="/" aria-label="Vocalis home"><BrandMark /><span class="brand-name">Vocalis</span></a><p>The next generation AI voice platform.</p></div>
	{#each sections as section}<div class="footer-column"><h3>{section.heading}</h3><ul>{#each section.links as link}<li><a href={link.href}>{link.label}</a></li>{/each}</ul></div>{/each}
	<div class="newsletter-block"><h3>Subscribe to our newsletter</h3><p>Get the latest updates and product news.</p><form onsubmit={subscribe}><input type="email" required placeholder="Enter your email" aria-label="Email address" autocomplete="email" bind:value={email} /><button type="submit" aria-label="Subscribe"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg></button></form>{#if subscribed}<p class="newsletter-status" role="status">Thanks! (Demo form — nothing was submitted.)</p>{/if}</div></div>
	<div class="footer-bottom"><p>© 2026 Vocalis. All rights reserved.</p><div class="bottom-links"><div class="language-switcher"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg><span>English</span></div></div></div></div></footer>

<script lang="ts">
	const sections = [
		{ heading: 'Products', links: ['Text to Speech', 'Voice Cloning', 'Voice Library', 'Languages'] },
		{ heading: 'Resources', links: ['Documentation', 'Guides', 'Blog', 'Community'] },
		{ heading: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] }
	];
</script>

<footer class="site-footer" id="footer"><div class="container footer-inner"><div class="footer-top"><div class="brand-block"><a class="brand" href="/" aria-label="Vocalis home"><div class="brand-mark"><span class="bar short"></span><span class="bar tall"></span><span class="bar mid"></span><span class="bar short"></span></div><span class="brand-name">Vocalis</span></a><p>The next generation AI voice platform.</p><div class="social-links"><a href="/" aria-label="YouTube">▶</a><a href="/" aria-label="Discord">◉</a><a href="/" aria-label="X">𝕏</a><a href="/" aria-label="LinkedIn">in</a></div></div>
	{#each sections as section}<div class="footer-column"><h4>{section.heading}</h4><ul>{#each section.links as link}<li><a href="/">{link}</a></li>{/each}</ul></div>{/each}
	<div class="newsletter-block"><h4>Subscribe to our newsletter</h4><p>Get the latest updates and product news.</p><form onsubmit={(event) => event.preventDefault()}><input type="email" placeholder="Enter your email" aria-label="Email address" /><button type="submit" aria-label="Subscribe"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg></button></form></div></div>
	<div class="footer-bottom"><p>© 2026 Vocalis. All rights reserved.</p><div class="bottom-links"><a href="/">Privacy Policy</a><a href="/">Terms of Service</a><a href="/">Cookie Settings</a><div class="language-switcher"><span>◎</span><span>English</span><span>⌄</span></div></div></div></div></footer>
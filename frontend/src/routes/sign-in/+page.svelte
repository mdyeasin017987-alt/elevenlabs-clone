<script lang="ts">
	import AuthHeader from '#lib/components/auth/AuthHeader.svelte';
	import AuthHero from '#lib/components/auth/AuthHero.svelte';
	import AuthCard from '#lib/components/auth/AuthCard.svelte';

	// Random background photo from Unsplash (dark/moody tech/audio themed)
	const bgPhotos = [
		'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1920&q=80', // microphone studio
		'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920&q=80', // sound studio
		'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1920&q=80', // music studio
		'https://images.unsplash.com/photo-1519874179391-3ebc752241dd?w=1920&q=80', // neon waves
		'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1920&q=80', // DJ console
		'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=80', // concert stage
	];
	const bgUrl = bgPhotos[Math.floor(Math.random() * bgPhotos.length)];
</script>

<svelte:head>
	<title>Sign in - Vocalis</title>
	<meta name="description" content="Sign in to your Vocalis account" />
</svelte:head>

<div class="relative flex min-h-screen w-full">
	<!-- Background image -->
	<div
		class="absolute inset-0 bg-cover bg-center bg-no-repeat"
		style="background-image: url('{bgUrl}');"
	>
		<div class="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
	</div>

	<!-- Top navigation -->
	<AuthHeader />

	<!-- Content wrapper -->
	<div class="relative z-10 flex w-full flex-col lg:flex-row">
		<!-- Left hero section -->
		<div class="flex flex-1 items-end px-6 pb-10 pt-28 md:items-center md:px-12 lg:px-16">
			<AuthHero />
		</div>

		<!-- Right form section -->
		<div class="flex items-center justify-center px-4 py-10 lg:w-[480px] lg:px-0 xl:w-[520px]">
			<AuthCard defaultTab="signin" />
		</div>
	</div>
</div>

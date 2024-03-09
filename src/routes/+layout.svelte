<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	main {
		background-attachment: fixed;
		background-color: var(--color-bg-1);
		background-size: 100vw 100vh;
		background-image: radial-gradient(
				50% 50% at 50% 50%,
				rgba(255, 255, 255, 0.1) 0%,
				rgba(255, 255, 255, 0) 100%
			),
			linear-gradient(180deg, var(--color-bg-0) 0%, var(--color-bg-1) 15%, var(--color-bg-2) 50%);
	}
</style>

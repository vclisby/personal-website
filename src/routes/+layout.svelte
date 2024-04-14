<script>
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles.css';
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
</div>

<style>
	main {
		background-color: var(--color-bg);
		background-size: 100vw 100vh;
	}
</style>

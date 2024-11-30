<script>
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles.css';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<div class="app">
	<Header />
	<main>
		{@render children?.()}
	</main>
</div>

<style>
	main {
		background-color: var(--color-bg);
		background-size: 100vw 100vh;
	}
</style>

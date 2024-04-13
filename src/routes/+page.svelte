<script>
	import logo from '$lib/assets/victor-clisby-cropped.jpg';
</script>

<svelte:head>
	<title>Home - Victor Clisby</title>
</svelte:head>

<section>
	<img alt="Victor Clisby" src={logo} width="1200" />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 10px;
	}

	img {
		max-width: 100%;
		height: auto;
		border-radius: 20px;
	}
</style>

<script>
	import logo from '$lib/assets/victor-clisby-cropped.jpg';
</script>

<svelte:head>
	<title>Home - Victor Clisby</title>
</svelte:head>

<section>
	<img alt="Victor Clisby @ Huka Falls" src={logo} width="1200" />
	<p>
		Introduction here... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas sed tempus
		urna et pharetra. Velit dignissim sodales ut eu. Sit amet nisl suscipit adipiscing bibendum est
		ultricies.
	</p>
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

	p {
		max-width: 1200px;
	}
</style>

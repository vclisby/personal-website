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
	<div class="button-container"><button>Work</button><button>Blog</button></div>
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

	.button-container {
		display: flex;
		gap: 10px;
	}

	button {
		padding: 6px 12px;
		background-color: #7fb8bb;
		border: 1px solid #7fb8bb;
		border-radius: 5px;

		&:hover {
			background-color: white;
		}
	}
</style>

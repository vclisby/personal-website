<script>
	import logo from '$lib/assets/victor-clisby-cropped.jpg';
	import LocationPinIcon from '$lib/components/LocationPinIcon.svelte';

	const startDate = new Date(2018, 0, 22);
	const today = new Date();
</script>

<svelte:head>
	<title>Home - Victor Clisby</title>
</svelte:head>

<section>
	<img alt="Victor Clisby @ Huka Falls" src={logo} width="1200" />
	<p>
		<LocationPinIcon width={15} height={15} />
		Adelaide, South Australia
	</p>
	<p>
		Front-end developer with 6+ years of experience building web applications for local government
		and healthcare.
	</p>
	<p>
		Loves solving problems by creating modern, reliable and maintainable software while continually
		striving to expand and hone his technical skill set.
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
		margin-block-start: 0.5em;
		margin-block-end: 0.5em;
	}
</style>

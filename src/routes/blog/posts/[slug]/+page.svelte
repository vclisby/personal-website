<script>
	let { data } = $props();
	const { title, date, Content } = data;
</script>

<svelte:head>
	<title>{title} - Victor Clisby</title>
</svelte:head>

<article>
	<h1>{title}</h1>
	<p>Published: {date}</p>
	<Content />
</article>

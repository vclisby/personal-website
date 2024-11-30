<script>
	import { base } from '$app/paths';
	let { data } = $props();
</script>

<svelte:head>
	<title>Blog - Victor Clisby</title>
</svelte:head>

<section><h1>Victor Clisby Blog</h1></section>

<ul>
	{#each data.posts as post}
		<li>
			<h2>
				<a href="{base}{post.path}">
					{post.metadata.title}
				</a>
			</h2>
			Published {post.metadata.date}
		</li>
	{/each}
</ul>

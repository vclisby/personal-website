<script>
	import { base } from '$app/paths';
	let { data } = $props();
</script>

<svelte:head>
	<title>Blog - Victor Clisby</title>
</svelte:head>

<section>
	<ul>
		{#each data.posts as post}
			<li>
				<h2>
					<a href="{base}{post.path}">
						{post.metadata.title}
					</a>
				</h2>
				<span class="date">{post.metadata.date} | </span>
				<span class="categories">{post.metadata.categories}</span>
				<p>Blog post preview to go here...</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 10px;

		ul {
			max-width: 1200px;
			padding: 0;
			width: 100%;
			list-style-type: none;

			li {
				border: 1px solid #666;
				border-radius: 20px;
				margin-bottom: 20px;
				padding: 15px;

				h2 {
					font-size: 18px;
					font-weight: normal;
					margin: 0;

					a {
						text-decoration: none;
						color: var(--color-header-link);
					}
				}

				.date,
				.categories {
					font-size: 12px;
					color: #7a7a7a;
				}

				p {
					border-top: 1px solid #666;
					padding-top: 10px;
				}
			}
		}
	}
</style>

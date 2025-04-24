<script>
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import GitHubIcon from '$lib/components/GitHubIcon.svelte';
	import LinkedInIcon from '$lib/components/LinkedInIcon.svelte';
</script>

<header>
	<h1 class="title">VICTOR CLISBY</h1>
	<div class="nav-container">
		<nav>
			<ul>
				<li class="home-item" aria-current={page.url.pathname.endsWith('/') ? 'page' : undefined}>
					<a href="{base}/">Home</a>
				</li>
				<li
					class="blog-item"
					aria-current={page.url.pathname.includes('/blog') ? 'page' : undefined}
				>
					<a href="{base}/blog">Blog</a>
				</li>
			</ul>
		</nav>
		<div class="vertical-separator"></div>
		<a class="icon-link" href="https://github.com/vclisby" target="_blank"
			><GitHubIcon width={30} height={30} /></a
		>
		<a class="icon-link" href="https://www.linkedin.com/in/victorclisby/" target="_blank"
			><LinkedInIcon width={30} height={30} /></a
		>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 10px;
		height: 50px;
		color: var(--color-header-text);
		background-color: var(--color-header-background);
		box-shadow: 0 0 2px rgba(102, 102, 102, 0.3);
		z-index: 1;

		.title {
			font-size: 28px;
			font-weight: normal;
			font-family: 'Plus Jakarta Sans', sans-serif;
		}

		.nav-container {
			display: flex;
			align-items: center;
			height: 100%;

			nav {
				display: flex;
				flex-direction: column;
				justify-content: center;
				height: 100%;

				ul {
					display: flex;
					list-style: none;
					margin: 0;
					padding: 0;
					height: 100%;
					align-items: center;

					li {
						display: flex;
						flex-direction: column;
						justify-content: center;
						height: 100%;

						a {
							text-decoration: none;
							padding: 0 10px;
							color: var(--color-header-link);
						}

						a {
							transition: 0.2s;
						}

						a:hover {
							color: #000;
						}
					}

					li[aria-current='page'] {
						border-bottom: 1px solid black;

						a {
							color: #000;
						}
					}
				}
			}

			.vertical-separator {
				border: 1px solid rgba(102, 102, 102, 0.1);
				height: 25px;
				margin: 0 10px;
			}

			.icon-link {
				height: 30px;
			}
		}
	}

	@media screen and (max-width: 600px) {
		.title {
			font-size: 18px;
		}
	}
</style>

<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import GitHubIcon from '$lib/components/GitHubIcon.svelte';
	import LinkedInIcon from '$lib/components/LinkedInIcon.svelte';
</script>

<header>
	<div class="title">VICTOR CLISBY</div>
	<input type="checkbox" class="theme-switch" />
	<div class="nav-and-theme">
		<nav>
			<ul>
				<li class="home-item" aria-current={$page.url.pathname.endsWith('/') ? 'page' : undefined}>
					<a href="{base}/">Home</a>
					<div class="active-dot"></div>
				</li>
				<li
					class="work-item"
					aria-current={$page.url.pathname.endsWith('/work') ? 'page' : undefined}
				>
					<a href="{base}/work">Work</a>
					<div class="active-dot"></div>
				</li>
				<li
					class="blog-item"
					aria-current={$page.url.pathname.endsWith('/blog') ? 'page' : undefined}
				>
					<a href="{base}/blog">Blog</a>
					<div class="active-dot"></div>
				</li>
			</ul>
		</nav>
		<div class="vertical-separator" />
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
	}

	.theme-switch {
		/* TODO (Victor): Undo this when it's time to implement the theming properly... */
		display: none;
	}

	.vertical-separator {
		border: 1px solid rgba(102, 102, 102, 0.1);
		height: 20px;
		margin: 0 10px;
	}

	.title {
		font-size: 28px;
		font-family: 'Plus Jakarta Sans', sans-serif;
	}

	.nav-and-theme {
		display: flex;
		align-items: center;
	}

	nav {
		display: flex;
		flex-direction: column;
	}

	nav a {
		text-decoration: none;
		padding: 0 10px;
		color: var(--color-header-link);
	}

	ul {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	a,
	svg {
		transition: 0.2s;
	}

	.icon-link {
		height: 30px;
	}

	a:hover {
		color: #000;

		& svg {
			fill: #000;
		}
	}

	li[aria-current='page'] .active-dot {
		position: absolute;
		width: 5px;
		height: 5px;
		background-color: rgba(102, 102, 102, 0.5);
		border-radius: 5px;
		margin-top: 3px;
	}

	[aria-current='page'].home-item .active-dot {
		margin-left: 28px;
	}

	[aria-current='page'].work-item .active-dot {
		margin-left: 28px;
	}

	[aria-current='page'].blog-item .active-dot {
		margin-left: 24px;
	}

	img {
		padding-left: 5px;
	}

	@media screen and (max-width: 600px) {
		.title {
			font-size: 18px;
		}
	}
</style>

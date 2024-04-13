<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<header>
	<div class="title">Victor Clisby</div>
	<div class="nav-and-theme">
		<nav>
			<ul>
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="{base}/">Home</a>
				</li>
				<li aria-current={$page.url.pathname === '/work' ? 'page' : undefined}>
					<a href="{base}/work">Work</a>
				</li>
				<li aria-current={$page.url.pathname === '/blog' ? 'page' : undefined}>
					<a href="{base}/blog">Blog</a>
				</li>
			</ul>
		</nav>
		<input type="checkbox" class="theme-switch" />
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 50px;
		color: var(--color-header-text);
		background-color: var(--color-header-background);
		z-index: 1;
	}

	.title {
		font-size: 22px;
	}

	.nav-and-theme {
		display: flex;
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

	li[aria-current='page'] a {
		outline-width: 1px;
		/* TODO: Come up with some better active link styling... */
		outline-style: dashed;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>

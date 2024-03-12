<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<header>
	<div>Victor Clisby</div>
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
		height: 50px;
		background-color: var(--color-header-background);
		box-shadow: 0 0 5px #666666;
		z-index: 1;
	}

	.nav-and-theme {
		display: flex;
	}

	nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	nav a {
		text-decoration: none;
		padding: 0 10px;
		color: var(--color-link);
	}

	ul {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li[aria-current='page'] a {
		color: var(--color-active-link);
		outline-width: 1px;
		/* TODO: Come up with some better active link styling... */
		outline-color: var(--color-active-link);
		outline-style: dashed;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>

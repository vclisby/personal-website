<script>
	import { page } from '$app/stores';
</script>

<header>
	<div>LOGO</div>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/work' ? 'page' : undefined}>
				<a href="/work">Work</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/blog') ? 'page' : undefined}>
				<a href="/blog">Blog</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		height: 50px;
		background-color: #f2f2f2;
		box-shadow: 0 0 5px #666;
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

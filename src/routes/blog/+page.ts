import { isArrayOfType } from '$lib/guards';
import { isBlogPostMetaDataAndPath } from '$lib/guards/blog';
import type { BlogPostMetaDataAndPath } from '$lib/types/blog';
import { base } from '$app/paths';

type PageLoadResult = {
	posts: ReadonlyArray<BlogPostMetaDataAndPath>;
};

export async function load({ fetch }): Promise<PageLoadResult> {
	const response = await fetch(`${base}/api/posts`);
	const posts = await response.json();

	if (isArrayOfType<BlogPostMetaDataAndPath>(posts, isBlogPostMetaDataAndPath)) {
		const md1 = await Promise.all(
			posts.map((p) => {
				console.log(p.path);
				return import(`./posts/${p.path.slice(p.path.length - 1)}.md`);
			})
		);
		const newPosts = posts.map((p, i) => ({ ...p, default: md1[i].default }));
		console.log(newPosts);
		// TODO (Victor): Need to pass md1 into posts...
		return {
			posts: newPosts
		};
	}

	return {
		posts: []
	};
}

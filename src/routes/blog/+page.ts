import { isArrayOfType } from '$lib/guards';
import { isBlogPostMetaDataAndPath } from '$lib/guards/blog.js';
import type { BlogPostMetaDataAndPath } from '$lib/types/blog';

type PageLoadResult = {
	posts: ReadonlyArray<BlogPostMetaDataAndPath>;
};

export async function load({ fetch }): Promise<PageLoadResult> {
	const response = await fetch(`/api/posts`);
	const posts = await response.json();

	if (isArrayOfType<BlogPostMetaDataAndPath>(posts, isBlogPostMetaDataAndPath)) {
		return {
			posts
		};
	}

	return {
		posts: []
	};
}

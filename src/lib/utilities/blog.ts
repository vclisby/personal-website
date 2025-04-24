import { isNotNull } from '$lib/guards';
import { isBlogPost } from '$lib/guards/blog';
import type { BlogPostMetaDataAndPath } from '$lib/types/blog';

export async function fetchBlogPostsMetaData(): Promise<ReadonlyArray<BlogPostMetaDataAndPath>> {
	const allPostFiles = import.meta.glob('/src/routes/blog/posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const blogPost = await resolver();

			if (isBlogPost(blogPost)) {
				const postPath = path.slice(11, -3);

				return {
					metadata: blogPost.metadata,
					path: postPath
				};
			}

			return undefined;
		})
	);

	return allPosts.filter(isNotNull);
}

import { fetchBlogPostsMetaData } from '$lib/utilities/blog';
import { json } from '@sveltejs/kit';

export const GET = async (): Promise<Response> => {
	const allPosts = await fetchBlogPostsMetaData();

	const sortedPosts = allPosts
		.slice()
		.sort((a, b) => new Date(b.metadata.date).valueOf() - new Date(a.metadata.date).valueOf());

	return json(sortedPosts);
};

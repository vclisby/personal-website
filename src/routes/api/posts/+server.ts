import { fetchBlogPostsMetaData } from '$lib/utilities/blog';
import { json } from '@sveltejs/kit';

export const GET = async (): Promise<Response> => {
	let allPosts = [];
	try {
		allPosts = await fetchBlogPostsMetaData();
	} catch (e) {
		console.error('here');
		console.error(e);
	}

	const sortedPosts = allPosts
		.slice()
		.sort((a, b) => new Date(b.metadata.date).valueOf() - new Date(a.metadata.date).valueOf());

	return json(sortedPosts);
};

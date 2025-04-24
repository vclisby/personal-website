import type { ComponentType } from 'svelte';

type PageLoadResult = { title: string; date: string; Content: ComponentType };

export async function load({ params }): Promise<PageLoadResult> {
	const post = await import(`../${params.slug}.md`);
	const { title, date } = post.metadata;
	const Content = post.default;

	return {
		Content,
		title,
		date
	};
}

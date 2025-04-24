import type { BlogPost, BlogPostMetaData, BlogPostMetaDataAndPath } from '$lib/types/blog';
import { isString, isObject, isArrayOfType } from '.';

export function isBlogPost(x: unknown): x is BlogPost {
	// TODO (Victor): Metadata property is actually a getter. Is there a better way to guard this in ts?
	return x != null && isObject(x) && Object.hasOwn(x, 'metadata');
}

function isBlogPostMetaData(x: unknown): x is BlogPostMetaData {
	return (
		x != null &&
		isObject(x) &&
		isString((x as BlogPostMetaData).title) &&
		isString((x as BlogPostMetaData).date) &&
		isArrayOfType<string>((x as BlogPostMetaData).categories, isString)
	);
}

export function isBlogPostMetaDataAndPath(x: unknown): x is BlogPostMetaDataAndPath {
	return (
		x != null &&
		isObject(x) &&
		isBlogPostMetaData((x as BlogPostMetaDataAndPath).metadata) &&
		isString((x as BlogPostMetaDataAndPath).path)
	);
}

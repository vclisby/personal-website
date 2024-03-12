import type { BlogPost, BlogPostMetaData, BlogPostMetaDataAndPath } from '$lib/types/blog';
import { isString, isObject } from '.';

export function isBlogPost(x: unknown): x is BlogPost {
	return (
		x != null &&
		isObject(x) &&
		isObject((x as BlogPost).metadata) &&
		isBlogPostMetaData((x as BlogPost).metadata) &&
		isObject((x as BlogPost).default)
		// TODO (Victor): Make the guard for x.default stricter?
	);
}

function isBlogPostMetaData(x: unknown): x is BlogPostMetaData {
	return (
		x != null &&
		isObject(x) &&
		isString((x as BlogPostMetaData).title) &&
		isString((x as BlogPostMetaData).date)
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

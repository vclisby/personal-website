import type { ComponentType } from 'svelte';

export type BlogPost = {
	metadata: BlogPostMetaData;
	default: ComponentType;
};

export type BlogPostMetaData = {
	title: string;
	date: string;
};

export type BlogPostMetaDataAndPath = {
	metadata: BlogPostMetaData;
	path: string;
};

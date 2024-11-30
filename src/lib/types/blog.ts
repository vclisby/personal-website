export type BlogPost = {
	metadata: BlogPostMetaData;
};

export type BlogPostMetaData = {
	title: string;
	date: string;
};

export type BlogPostMetaDataAndPath = {
	metadata: BlogPostMetaData;
	path: string;
};

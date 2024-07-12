export type ImageResponse = {
	id: number;
	backdrops: Image[];
};

export type Image = {
	aspect_ratio: number;
	width: number;
	height: number;
	file_path: string;
};

import type { Movie, MovieDetails } from './movie';
import type { Video } from './video';

export type Data = {
	results: Movie[];
	page: number;
};

export type VideoData = {
	id: number;
	results: Video[];
};

export type ApiResponse = {
	status: number;
	message: string;
	data: Data;
};

export type ApiDetailedResponse = {
	status: number;
	message: string;
	data: MovieDetails;
};

export type ApiVideoResponse = {
	status: number;
	message: string;
	data: VideoData;
};

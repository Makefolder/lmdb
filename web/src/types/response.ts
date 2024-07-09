import type { Movie } from './movie';

export type Data = {
	results: Movie[];
	page: number;
};

export type ApiResponse = {
	status: number;
	message: string;
	data: Data;
};

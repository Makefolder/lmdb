// here is the request body for watchlist

export type CardInfo = {
	id: number;
	adult: boolean;
	poster_path: string;
	vote_average: number;
	release_date: string;
	title: string;
	genre_ids: number[];
	genre_strings: string[];
};

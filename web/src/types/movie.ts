export type Movie = {
	id: number;
	adult: boolean;
	poster_path: string;
	title: string;
	overview: string;
	genre_ids: number[];
	genre_strings: string[];
	release_date: string;
	original_title: string;
	original_language: string;
	popularity: number;
	vote_average: number;
	vote_count: number;
};

export type MovieDetails = {
	saved: boolean;
	adult: boolean;
	backdrop_path: string;
	budget: number;
	belongs_to_collection: {
		id: number;
		name: string;
		poster_path: string;
		backdrop_path: string;
	};
	genres: Array<{
		id: number;
		name: string;
	}>;
	homepage: string;
	id: number;
	imdb_id: string;
	origin_country: string[];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: Array<{
		id: number;
		logo_path: string;
		name: string;
		origin_country: string;
	}>;
	production_countries: Array<{
		iso_3166_1: string;
		name: string;
	}>;
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: Array<{
		english_name: string;
		iso_639_1: string;
		name: string;
	}>;
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	credits: {
		cast: Array<{
			id: number;
			adult: boolean;
			known_for_department: string;
			name: string;
			original_name: string;
			popularity: number;
			profile_path: string;
			cast_id: number;
			character: string;
			credit_id: string;
			order: number;
		}>;
		crew: Array<{
			id: number;
			adult: boolean;
			known_for_department: string;
			name: string;
			original_name: string;
			popularity: number;
			profile_path: string;
			credit_id: string;
			department: string;
			job: string;
		}>;
	};
};

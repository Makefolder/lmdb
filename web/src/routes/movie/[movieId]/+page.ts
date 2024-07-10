import type { ApiVideoResponse } from '../../../types/response';

export const load = async ({ params }) => {
	const response = await fetch(
		'http://192.168.68.111:3001/api/v1/movie/i/' + params.movieId + '/videos'
	);
	const data: ApiVideoResponse = await response.json();
	const results = data.data.results;
	return {
		post: {
			videos: results
		}
	};
};

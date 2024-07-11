import type { ApiResponse } from '../../types/request';

export const load = async () => {
	const response = await fetch('http://192.168.68.111:3001/api/v1/g/watchlist');
	const data: ApiResponse = await response.json();
	return {
		post: {
			data: data
		}
	};
};

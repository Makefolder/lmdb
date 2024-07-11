import type { ApiVideoResponse, ApiResponse } from '../../../types/response';

const convertMonth = (month: string): string => {
	const num: number = +month;
	const months = [
		'Січеня',
		'Лютого',
		'Березня',
		'Квітня',
		'Травня',
		'Червня',
		'Липня',
		'Серпня',
		'Вересня',
		'Жовтня',
		'Листопада',
		'Грудня'
	];
	return months[num - 1];
};

const convertCountry = (code: string): string => {
	const name = new Intl.DisplayNames(['en'], { type: 'region' });
	return '' + name.of(code);
};

export const load = async ({ params }) => {
	const responseVideos = await fetch(
		'http://192.168.68.111:3001/api/v1/movie/i/' + params.movieId + '/videos'
	);
	const dataVideos: ApiVideoResponse = await responseVideos.json();
	const resultsVideos = dataVideos.data.results;

	const responseSimilar = await fetch(
		'http://192.168.68.111:3001/api/v1/movie/i/' + params.movieId + '/similar'
	);
	const dataSimilar: ApiResponse = await responseSimilar.json();
	const resultsSimilar = dataSimilar.data.results;
	return {
		post: {
			videos: resultsVideos,
			similar: resultsSimilar,
			convMonth: convertMonth,
			convertCountry: convertCountry
		}
	};
};

import type { ApiDetailedResponse, ApiVideoResponse, ApiResponse } from '../../../types/response';
import type { ImageResponse } from '../../../types/image';

const addr = import.meta.env.VITE_LOCAL_ADDR;

const convertMonth = (month: string): string => {
	const num: number = +month;
	const months = [
		'Січня',
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

const fetchData = async (id: string) => {
	const response = await fetch(`${addr}/movie/i/${id}`);
	const data: ApiDetailedResponse = await response.json();
	return data.data;
};

const fetchVideos = async (id: string) => {
	const response = await fetch(`${addr}/movie/i/${id}/videos`);
	const data: ApiVideoResponse = await response.json();
	return data.data;
};

const fetchImages = async (id: string) => {
	const response = await fetch(`${addr}/movie/i/${id}/images`);
	const data: ImageResponse = await response.json();
	return data.backdrops;
};

const fetchSimilars = async (id: string) => {
	const response = await fetch(`${addr}/movie/i/${id}/similar`);
	const data: ApiResponse = await response.json();
	return data.data.results;
};

export const load = async ({ params }) => {
	const info = await fetchData(params.movieId);

	const dateArr: string[] = info.release_date.split('-');
	let day: string = dateArr[2];
	if (dateArr[2].charAt(0) === '0') {
		day = dateArr[2].charAt(1);
	}
	const date = `${day} ${convertMonth(dateArr[1])} ${dateArr[0]}`;

	return {
		post: {
			date: date,
			page: info,
			images: fetchImages(params.movieId),
			videos: fetchVideos(params.movieId),
			similar: fetchSimilars(params.movieId),
			convMonth: convertMonth,
			convertCountry: convertCountry
		}
	};
};

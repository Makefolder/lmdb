// @ts-nocheck
import type { ApiResponse } from '../../types/response';
import type { Load } from '@sveltejs/kit';

const addr = import.meta.env.VITE_LOCAL_ADDR;

const randomNum = (max: number) => {
	return Math.floor(Math.random() * max);
};

export const load = async () => {
	const response = await fetch(`${addr}/g/watchlist`);
	const data: ApiResponse = await response.json();
	return {
		post: {
			get_rand: randomNum
		},
		props: {
			data
		}
	};
};
;null as any as Load;
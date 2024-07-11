<script lang="ts">
	import Studio from '../../../components/movie/Studio.svelte';
	import PageInfo from '../../../components/movie/PageInfo.svelte';
	import Overview from '../../../components/movie/Overview.svelte';
	import Videos from '../../../components/movie/Videos.svelte';
	import type { MovieDetails } from '../../../types/movie';
	import type { ApiDetailedResponse } from '../../../types/response';
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';

	export let data;
	let movie: MovieDetails = {
		primary_key: 0,
		adult: false,
		backdrop_path: '',
		budget: 0,
		belongs_to_collection: {
			id: 0,
			name: '',
			poster_path: '',
			backdrop_path: ''
		},
		genres: [
			{
				id: 0,
				name: ''
			}
		],
		homepage: '',
		id: 0,
		imdb_id: '',
		origin_country: [''],
		original_language: '',
		original_title: '',
		overview: '',
		popularity: 0,
		poster_path: '',
		production_companies: [
			{
				id: 0,
				logo_path: '',
				name: '',
				origin_country: ''
			}
		],
		production_countries: [
			{
				iso_3166_1: '',
				name: ''
			}
		],
		release_date: '',
		revenue: 0,
		runtime: 0,
		spoken_languages: [
			{
				english_name: '',
				iso_639_1: '',
				name: ''
			}
		],
		status: '',
		tagline: '',
		title: '',
		video: false,
		vote_average: 0,
		vote_count: 0
	};

	const id: string = $page.params.movieId;
	let error: string | null = null;
	let loading: boolean = false;
	let interval: NodeJS.Timeout;

	const fetchData = async () => {
		if (loading) return;
		loading = true;
		try {
			const response = await fetch('http://192.168.68.111:3001/api/v1/movie/i/' + id);
			const data: ApiDetailedResponse = await response.json();
			if (data.message === 'success') {
				movie = data.data;
			} else {
				error = 'Failed to fetch movies.';
			}
		} catch (err) {
			console.log(err);
			error = 'Internal error occured';
		} finally {
			loading = false;
		}
	};

	const characters: string[] = ['', '.', '..', '...'];
	let index: number = 0;
	let date: string = '';
	let currentChar: string = characters[index];
	const updateCharacter = () => {
		index = (index + 1) % characters.length;
		currentChar = characters[index];
	};

	onMount(() => {
		interval = setInterval(updateCharacter, 500);
		fetchData().then(() => {
			const dateArr: string[] = movie.release_date.split('-');
			let day: string = dateArr[2];
			if (dateArr[2].charAt(0) === '0') {
				day = dateArr[2].charAt(1);
			}
			date = `${day} ${data.post.convMonth(dateArr[1])} ${dateArr[0]}`;
		});

		const body = document.body;
		body.style.backgroundImage = `radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
			radial-gradient(at 98% 100%, rgba(var(--color-success-500) / 0.28) 0px, transparent 60%)`;

		return () => {
			body.style.backgroundImage = '';
		};
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<svelte:head>
	<title>LMDB - {movie.title}</title>
</svelte:head>

<div>
	{#if error !== null}
		<div class="w-full text-center font-bold text-[3rem] py-[6rem]">Сталася помилка (500)</div>
	{:else}
		<div class="flex mt-9">
			<PageInfo adult={movie.adult} poster_path={movie.poster_path} saved={false} />

			<div class="right__side ml-5 pt-3 pl-3 rounded-2xl flex-grow-0 overflow-hidden w-full">
				<div class="flex flex-wrap justify-between gap-[1.3rem] leading-7">
					<div class="h-full text-[1.2em]">
						<div class="h2 font-semibold mb-2">{movie.title}</div>
						<div class="h3 text-surface-400/80 mb-3">{movie.original_title}</div>
						{#if movie.tagline.length !== 0}
							<div>Гасло: <i>{movie.tagline}</i></div>
						{/if}
						<div>Рейтинґ: {movie.vote_average.toFixed(1)}</div>
						<div>Дата виходу: {date}</div>
						{#if movie.origin_country.length !== 0}
							<div class="flex flex-wrap">
								{#if movie.origin_country.length === 1}
									<div class="mr-2">Країна:</div>
								{:else}
									<div class="mr-2">Країни:</div>
								{/if}
								{#each movie.origin_country as country}
									<div class="mr-2">
										<a class="hover:text-primary-500 transition" href="/genre/{country}"
											>{country}</a
										>
									</div>
								{/each}
							</div>
						{/if}
						<div class="flex flex-wrap">
							<div class="mr-2">Жанри:</div>
							{#each movie.genres as genre}
								<div class="mr-2">
									<a class="hover:text-primary-500 transition" href="/genre/{genre.id}"
										>{genre.name}</a
									>
								</div>
							{/each}
						</div>
					</div>
					<div class="h-full">
						<div class="h2 font-semibold mb-5 text-right mr-4">Кіностудії</div>
						{#each movie.production_companies as company}
							<Studio
								icon={company.logo_path}
								name={company.name}
								country={company.origin_country}
							/>
						{/each}
					</div>
				</div>
				<hr class="my-5" />
				{#if movie.overview != ''}
					<div class="mt-6 mb-12">
						<Overview overview={movie.overview} />
					</div>
				{/if}
				{#if data.post.videos.length !== 0}
					<Videos videos={data.post.videos} />
				{/if}
			</div>
		</div>
	{/if}
	{#if loading}
		<div class="w-full text-center font-bold text-[3rem] py-[6rem]">Завантаження{currentChar}</div>
	{/if}
</div>

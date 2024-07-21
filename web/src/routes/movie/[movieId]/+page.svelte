<script lang="ts">
	import Similar from '../../../components/movie/Similar.svelte';
	import Studio from '../../../components/movie/Studio.svelte';
	import PageInfo from '../../../components/movie/PageInfo.svelte';
	import Images from '../../../components/movie/Images.svelte';
	import Videos from '../../../components/movie/Videos.svelte';
	import type { Movie, MovieDetails } from '../../../types/movie';
	import type { Image } from '../../../types/image';
	import type { Video } from '../../../types/video';
	import { onMount } from 'svelte';

	export let data;
	let movie: MovieDetails = data.post.page;

	let similars: Movie[] = [];
	let images: Image[] = [];
	let videos: Video[] = [];
	let date: string = data.post.date;

	onMount(() => {
		data.post.similar.then((data) => {
			similars = data;
		});

		data.post.images.then((data) => {
			images = data;
		});

		data.post.videos.then((data) => {
			videos = data.results;
		});

		const body = document.body;
		body.style.backgroundImage = `radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
			radial-gradient(at 98% 100%, rgba(var(--color-success-500) / 0.28) 0px, transparent 60%)`;

		return () => {
			body.style.backgroundImage = '';
		};
	});
</script>

<svelte:head>
	<title>LMDB - {movie.title}</title>
</svelte:head>

<div>
	<div class="flex mt-9">
		<PageInfo
			id={movie.id}
			saved={movie.saved}
			adult={movie.adult}
			poster_path={movie.poster_path}
			overview={movie.overview}
		/>

		<div class="right__side ml-5 pt-3 pl-3 rounded-2xl flex-grow-0 overflow-hidden w-full">
			<div class="flex flex-wrap justify-between gap-[1.3rem] leading-7">
				<div class="h-full text-[1.2em] max-w-[40rem]">
					<div class="h2 font-semibold mb-2">{movie.title}</div>
					<div class="h3 text-surface-400/80 mb-3">{movie.original_title}</div>
					<div>Рейтинґ: {movie.vote_average.toFixed(1)}</div>
					{#if movie.tagline.length !== 0}
						<div>Гасло: <i>{movie.tagline}</i></div>
					{/if}
					<div>Дата виходу: {date}</div>
					{#if movie.homepage !== ''}
						<div class="flex flex-wrap">
							<div class="mr-2">Вебсайт:</div>
							<div>
								<a class="text-secondary-500" href={movie.homepage} target="_blank">лінк</a>
							</div>
						</div>
					{/if}

					<!-- <div class="my-3 flex flew-wrap">
							<div class="mr-2">Продюсер(и):</div>
							{#if movie.credits.crew.length > 0}
								{#each movie.credits.crew as fella}
									{#if fella.job == 'Producer'}
										<div class="mr-4 relative">
											<a class="hover:text-primary-500 transition" href="/{fella.id}"
												>{fella.original_name}</a
											>
										</div>
									{/if}
								{/each}
							{/if}
						</div> -->

					<!-- <div class="mb-3 mr-2 flex flex-wrap relative">
							<span class="mr-2">Актори:</span>
							{#each movie.credits.cast.slice(0, 7) as fella}
								<a
									class="mr-4 hover:text-primary-500 transition"
									on:mouseover={printPoster(fella.profile_path)}
									on:mouseout={printPoster(null)}
									href="/{fella.id}">{fella.original_name}</a
								>
							{/each}
							<div id="actorPoster" class="absolute top-[130%] left-0 z-10 h-[18rem]">
								<img class="w-full h-full object-contain" src="../../../poster.jpg" alt="" />
							</div>
						</div> -->

					<div>Статус: {movie.status}</div>
					{#if movie.origin_country.length !== 0}
						<div class="flex flex-wrap">
							{#if movie.origin_country.length === 1}
								<div class="mr-2">Країна:</div>
							{:else}
								<div class="mr-2">Країни:</div>
							{/if}
							{#each movie.production_countries as country}
								<div class="mr-2">
									<a class="hover:text-primary-500 transition" href="/genre/{country.iso_3166_1}"
										>{country.name}</a
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
						<Studio icon={company.logo_path} name={company.name} country={company.origin_country} />
					{/each}
				</div>
			</div>
			{#if images.length !== 0}
				<Images {images} />
			{/if}
			{#if videos.length !== 0}
				<hr class="my-5" />
				<Videos {videos} />
			{/if}
		</div>
	</div>
	<Similar movies={similars} />
</div>

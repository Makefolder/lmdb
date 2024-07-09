<script lang="ts">
	import Card from '../components/Card.svelte';
	import type { Movie } from '../types/movie';
	import type { ApiResponse } from '../types/response';
	import { onMount } from 'svelte';

	let movies: Movie[] = [];
	let error: string | null = null;
	let page: number = 2;
	let loading: boolean = true;

	onMount(async () => {
		try {
			const response = await fetch('http://127.0.0.1:3001/api/v1/movie/' + page);
			const data: ApiResponse = await response.json();
			if (data.message === 'success') {
				movies = data.data.results;
			} else {
				error = 'Failed to fetch movies.';
			}
		} catch (err) {
			console.log(err);
			error = 'Internal error occured';
		} finally {
			loading = false;
		}
	});
</script>

<svelte:head>
	<title>LMDB - Головна</title>
</svelte:head>

<div class="mt-[3rem] w-full flex justify-between cursor-default">
	<div class="mt-[3.5rem] space-y-5 max-w-[37rem]">
		<h1 class="h1">Bad Times at the El Royale</h1>
		<p>Дата виходу: 2018 <br /> Тривалість: 2год. 21хв.</p>
		<div>
			1969. Four strangers check in at the El Royale Hotel. The hotel is deserted, staffed by a
			single desk clerk. Some of the new guests' reasons for being there are less than innocent and
			some are not who they appear to be.
		</div>
	</div>
	<div class="max-h-[50rem] max-w-[42rem] overflow-hidden">
		<img
			class="latest__movie w-full h-full object-cover"
			src="../../el-royale-edit.png"
			alt="latest movie frame"
		/>
	</div>
</div>

<div class="mt-[2rem] card__container flex flex-wrap gap-[0.7rem] justify-start mx-auto max-w-full">
	{#if loading}
		<div class="w-full text-center font-bold text-[3rem] py-[6rem]">Loading...</div>
	{:else if error !== null}
		<div>Internal error</div>
	{:else}
		{#each movies as movie}
			<Card {movie} />
		{/each}
	{/if}
</div>

<style>
	@media (max-width: 1460px) {
		.card__container {
			gap: 1rem;
			justify-content: space-around;
		}
	}
</style>

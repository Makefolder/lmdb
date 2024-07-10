<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Card from '../../components/Card.svelte';
	import type { Movie } from '../../types/movie';
	import type { ApiResponse } from '../../types/response';

	let movies: Movie[] = [];
	let error: string | null = null;
	let page: number = 1;
	let loading: boolean = false;

	const characters: string[] = ['', '.', '..', '...'];
	let index: number = 0;
	let currentChar: string = characters[index];
	const updateCharacter = () => {
		index = (index + 1) % characters.length;
		currentChar = characters[index];
	};
	let interval: NodeJS.Timeout;

	onMount(async () => {
		const body = document.body.style;
		body.backgroundImage = `radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
			radial-gradient(at 98% 100%, rgba(var(--color-warning-500) / 0.28) 0px, transparent 50%)`;

		interval = setInterval(updateCharacter, 500);
		if (loading) return;
		loading = true;
		try {
			const response = await fetch('http://192.168.68.111:3001/api/v1/movie/discover/' + page);
			const data: ApiResponse = await response.json();
			if (data.message === 'success') {
				movies = [...movies, ...data.data.results];
			} else {
				error = 'Failed to fetch movies.';
			}
		} catch (err) {
			console.log(err);
			error = 'Internal error occured';
		} finally {
			page++;
			loading = false;
		}
		return () => {
			body.backgroundImage = '';
		};
	});
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<svelte:head>
	<title>LMDB - Пошук</title>
</svelte:head>

<div class="mt-[3rem] w-full">
	<div class="space-y-5">
		<h1 class="h1">Пошук контенту</h1>
		<div class="search__input relative">
			<input class="w-full" type="text" placeholder="Ну давай, погнали!" />
			<button
				class="absolute top-0 right-0 z-10 h-full bg-surface-500/30 rounded-r-[0.9rem] px-3
			hover:bg-warning-500 transition">Пошук</button
			>
		</div>
	</div>
</div>

<div class="mt-[2rem] card__container flex flex-wrap gap-[0.7rem] justify-start mx-auto max-w-full">
	{#if error !== null}
		<div class="w-full text-center font-bold text-[3rem] py-[6rem]">Сталася помилка (500)</div>
	{:else}
		{#each movies as movie}
			<Card {movie} />
		{/each}
		{#if !loading}
			<div class="w-full flex justify-center">
				<a class="btn variant-filled-surface" href="/">Хочу ще!</a>
			</div>
		{/if}
	{/if}
	{#if loading}
		<div class="w-full text-center font-bold text-[3rem] py-[6rem]">Завантаження{currentChar}</div>
	{/if}
</div>

<style>
	.search__input {
		width: 100%;
		border: 1px solid rgba(var(--color-surface-400) / 0.4);
		border-radius: 1rem;
	}
	input {
		background: rgba(var(--color-surface-500) / 0.3);
		outline: none;
		border-radius: 0.9rem;
		border: none;
		outline: none;
	}
</style>

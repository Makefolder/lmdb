<script lang="ts">
	import { onMount } from 'svelte';
	import Card from '../../components/Card.svelte';
	import type { Movie } from '../../types/movie';

	onMount(() => {
		const body = document.body.style;
		body.backgroundImage = `radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
		radial-gradient(at 98% 100%, rgba(var(--color-warning-500) / 0.28) 0px, transparent 50%)`;

		return () => {
			body.backgroundImage = '';
		};
	});

	let movies: Movie[] = [
		{
			url: '/2001-a-space-odyssey',
			header: '../../poster.jpg',
			title: '2001: A space odyssey',
			rating: 8.3,
			genres: ['Adventure', 'Sci-Fi', 'Thriller', 'Detective', 'Action']
		},
		{
			url: '/bad-times-at-el-royale',
			header: '../../el-royale.jpg',
			title: 'Bad Times at the El Royale',
			rating: 8.3,
			genres: ['Adventure', 'Thriller', 'Detective', 'Action']
		}
	];
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
	{#each movies as movie}
		<Card {movie} />
	{/each}
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

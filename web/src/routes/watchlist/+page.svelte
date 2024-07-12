<script lang="ts">
	import Card from '../../components/Card.svelte';
	import type { Movie } from '../../types/movie';
	import { onMount } from 'svelte';

	export let data;
	let movies: Movie[] = [];
	let saved = true;

	onMount(() => {
		movies = [...movies, ...data.post.data.data];
		console.log(data.post.data.data);
		const body = document.body.style;
		body.backgroundImage = `radial-gradient(at 98% 1%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
		radial-gradient(at 0% 0%, rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%)`;

		return () => {
			body.backgroundImage = '';
		};
	});
</script>

<svelte:head>
	<title>LMDB - Плейлист</title>
</svelte:head>

<div class="mt-[3rem] w-full flex justify-between">
	<div class="space-y-5 max-w-[40%]">
		<h1 class="h1">Збережене</h1>
	</div>
</div>

<div class="mt-[2rem] card__container flex flex-wrap gap-[0.7rem] justify-start mx-auto max-w-full">
	{#each movies as movie}
		<Card {saved} {movie} />
	{/each}
</div>

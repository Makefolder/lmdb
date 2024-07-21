<script lang="ts">
	import Card from '../Card.svelte';
	import type { Movie } from '../../types/movie';

	export let movies: Movie[] = [];
</script>

{#if movies.length !== 0}
	<div class="h2 font-semibold mt-9">Схожі фільми</div>
	<div class="w-full flex flex-wrap gap-4 justify-stretch">
		{#each movies as movie}
			<Card {movie} width="w-[21.58rem]" />
		{/each}
	</div>
{/if}

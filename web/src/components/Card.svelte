<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Movie } from '../types/movie';
	export let movie: Movie = {
		id: 0,
		adult: false,
		poster_path: 'https://fakeimg.pl/300x500/323232/ffffff?text=No+poster&font=bebas',
		title: 'Назва',
		overview: 'overview',
		genre_ids: [1, 1, 1],
		genre_strings: ['none', 'none', 'none'],
		release_date: 'never',
		original_title: 'title',
		original_language: 'en',
		popularity: 1,
		vote_average: 1.1,
		vote_count: 1
	};

	export let saved = false;
	export let width: string = 'w-[22.1rem]';
	const dateArr: string[] = movie.release_date.split('-');
	const date: string = `${dateArr[0]}`;

	async function remove() {
		const url = 'http://192.168.68.111:3001/api/v1/r/watchlist/' + movie.id;
		const response = await fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (response.ok) {
			const data = await response.json();
			console.log(data);
			saved = false;
		}
	}
	async function add() {
		const url = 'http://192.168.68.111:3001/api/v1/s/watchlist/' + movie.id;
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (response.ok) {
			const data = await response.json();
			console.log(data);
			saved = true;
		}
	}
</script>

<div
	id="myCard"
	class="my-4 card {width} card-hover overflow-hidden"
	transition:fade={{ duration: 200 }}
>
	<div class="h-full overflow-hidden flex flex-col justify-between">
		<div>
			<a data-sveltekit-reload href="/movie/{movie.id}">
				<div
					id="cardPoster"
					class="relative overflow-hidden h-[32rem] flex justify-center items-center"
				>
					{#if movie.poster_path !== ''}
						<img
							class="object-cover w-full h-full"
							src="https://image.tmdb.org/t/p/w400{movie.poster_path}"
							alt="poster"
						/>
					{:else}
						<img
							class="object-cover w-full h-full"
							src="https://fakeimg.pl/300x500/323232/ffffff?text=No+poster&font=bebas"
							alt="poster"
						/>
					{/if}
					{#if movie.adult}
						<div
							class="cursor-default absolute top-5 right-5 z-10 badge variant-filled text-[1em] !text-white !bg-rose-500"
						>
							+18
						</div>
					{/if}
				</div>
				<div class="p-4">
					<div class="w-full flex items-center font-medium">
						<div class="w-4 h-4 mr-1">
							<img src="../../sparkle.png" alt="" />
						</div>
						<div class="flex justify-between w-full">
							<div class="w-fit hover:text-primary-500 transition">
								{movie.vote_average.toFixed(1)}
							</div>
							<div class="w-fit hover:text-primary-500 transition">{date}</div>
						</div>
					</div>
					<h3 class="w-fit hover:text-primary-500 transition">{movie.title}</h3>
					<div class="flex flex-wrap">
						{#if movie.genre_strings !== null}
							{#if movie.genre_strings.length !== 0}
								{#each movie.genre_strings as genre}
									<div class="pr-2 truncate w-fit">
										<a class="hover:text-primary-500 transition" href="/{genre}">{genre}</a>
									</div>
								{/each}
							{/if}
						{/if}
					</div>
				</div>
			</a>
		</div>

		<div class="overflow-hidden">
			<hr class="opacity-50 mt-auto" />
			<div class="my__card card-footer">
				{#if saved}
					<button on:click={remove} class="saved__card normal-case">Видалити</button>
				{:else}
					<button on:click={add} class="normal-case">Додати до плейлісту</button>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	#myCard {
		background: rgba(var(--color-surface-500) / 0.35);
		backdrop-filter: blur(10px);
	}

	.card-footer {
		padding: 1rem;
	}
	@media (max-width: 1460px) {
		#myCard {
			width: 28.8rem;
		}
		#cardPoster {
			height: 38rem;
		}
	}
	.my__card button {
		border-radius: 0.4rem;
		padding: 0.2rem 0;
		width: 100%;
		transition: 0.1s ease;
	}
	.my__card button:hover {
		background: rgb(var(--color-primary-500));
	}
	.saved__card:hover {
		background: rgb(var(--color-error-500)) !important;
	}
</style>

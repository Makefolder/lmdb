<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Movie } from '../types/movie';
	let movie: Movie = {
		id: 0,
		poster_path: '../../poster.jpg',
		title: 'Тайтл',
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

	let saved = false;
	export { movie, saved };
</script>

<div
	id="myCard"
	class="my-4 card w-[22.1rem] card-hover overflow-hidden"
	transition:fade={{ duration: 200 }}
>
	<a href="/movie/{movie.id}">
		<div class="h-full overflow-hidden flex flex-col justify-between">
			<div>
				<div id="cardPoster" class="overflow-hidden h-[32rem] flex justify-center items-center">
					<img
						class="object-cover w-full h-full"
						src="https://image.tmdb.org/t/p/w400{movie.poster_path}"
						alt="favicon"
					/>
				</div>
				<div class="p-4">
					<div class="w-fit flex items-center font-medium hover:text-primary-500 transition">
						<div class="w-4 h-4 mr-1">
							<img src="../../sparkle.png" alt="" />
						</div>
						<div>{movie.vote_average.toFixed(1)}</div>
					</div>
					<h3 class="w-fit hover:text-primary-500 transition">{movie.title}</h3>
					<div class="flex flex-wrap">
						{#each movie.genre_strings as genre}
							<div class="pr-2 truncate w-fit">
								<a class="hover:text-primary-500 transition" href="/{genre}">{genre}</a>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<div class="overflow-hidden">
				<hr class="opacity-50 mt-auto" />
				<div class="my__card card-footer">
					{#if saved}
						<button class="saved__card normal-case">Видалити</button>
					{:else}
						<button class="normal-case">Додати до плейлісту</button>
					{/if}
				</div>
			</div>
		</div>
	</a>
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

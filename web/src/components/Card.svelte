<script lang="ts">
	type movie = {
		url: string;
		header: string;
		title: string;
		rating: number;
		genres: string[];
	};
	export let movie: movie;
</script>

<div id="myCard" class="my-4 card card-hover overflow-hidden">
	<a href={movie.url}>
		<div id="cardPoster" class="overflow-hidden h-[32rem] flex justify-center items-center">
			<img class="object-cover w-full h-full" src={movie.header} alt="favicon" />
		</div>
		<div class="p-4">
			<div class="font-medium hover:text-primary-500 transition">{movie.rating}</div>
			<h3 class="hover:text-primary-500 transition">{movie.title}</h3>
			<div class="flex">
				{#each movie.genres as genre}
					<div class="pr-2 truncate">
						<a class="hover:text-primary-500 transition" href="/{genre}">{genre}</a>
					</div>
				{/each}
			</div>
		</div>
		<hr class="opacity-50" />
		<div class="my__card card-footer">
			<button>+ Додати до плейлісту +</button>
		</div>
	</a>
</div>

<style>
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
</style>

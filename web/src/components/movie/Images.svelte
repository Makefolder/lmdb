<script lang="ts">
	import Carousel from './Carousel.svelte';
	import type { Image } from '../../types/image';
	export let images: Image[] = [];
</script>

<div class="overflow-hidden mt-8">
	<div class="h2 font-semibold mb-5">Зображення:</div>
	<Carousel {images} />
	<!-- <div class="flex justify-between gap-4 flex-wrap overflow-hidden">
		{#each images as image}
			<div transition:fade>
				<img src="https://image.tmdb.org/t/p/w500{image.file_path}" alt="" />
			</div>
		{/each}
	</div> -->
</div>

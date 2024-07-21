<script lang="ts">
	import Carousel from './Carousel.svelte';
	import type { Image } from '../../types/image';
	export let images: Image[] = [];
</script>

<div class="overflow-hidden mt-8">
	<div class="h2 font-semibold mb-5">Зображення:</div>
	<Carousel {images} />
</div>

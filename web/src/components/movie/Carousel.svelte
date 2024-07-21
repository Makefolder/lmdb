<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Image } from '../../types/image';

	export let images: Image[];
	let currentIndex: number = 0;
	let imageContainer: HTMLUListElement;

	const scrollToImage = (index: number) => {
		currentIndex = index;
		const imageElement = imageContainer.querySelector('li');
		const imageWidth = imageElement
			? imageElement.clientWidth + parseFloat(getComputedStyle(imageElement).marginRight)
			: 0;
		imageContainer.scrollTo({
			left: index * imageWidth,
			behavior: 'smooth'
		});
	};

	const nextImage = () => {
		console.log(currentIndex);
		scrollToImage((currentIndex + 1) % images.length);
	};

	const prevImage = () => {
		console.log(currentIndex);
		scrollToImage((currentIndex - 1 + images.length) % images.length);
	};

	const handleScroll = () => {
		const imageElement = imageContainer.querySelector('li');
		const imageWidth = imageElement
			? imageElement.clientWidth + parseFloat(getComputedStyle(imageElement).marginRight)
			: 0;
		currentIndex = Math.round(imageContainer.scrollLeft / imageWidth);
	};
</script>

<div class="relative bg-surface-900/70 overflow-hidden rounded-xl">
	<ul
		bind:this={imageContainer}
		on:scroll={handleScroll}
		class="flex overflow-x-auto gap-6 snap-x snap-mandatory before:shrink-0 before:w-[30vw] after:shrink-0 after:w-[30vw]"
	>
		{#each images as image}
			<li class="shrink-0 snap-center max-w-[48rem]" transition:fade>
				<img
					class="w-full h-full object-contain"
					src={`https://image.tmdb.org/t/p/original${image.file_path}`}
					alt=""
				/>
			</li>
		{/each}
	</ul>
	{#if images.length > 1}
		<button class="btn variant-filled absolute top-[44%] left-[1rem] z-10" on:click={prevImage}>
			&#9664;
		</button>
		<button class="btn variant-filled absolute top-[44%] right-[1rem] z-10" on:click={nextImage}>
			&#9654;
		</button>
	{/if}
</div>

<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Video } from '../../types/video';
	export let videos: Video[] = [];
</script>

<div class="overflow-hidden mt-8">
	<div class="h2 font-semibold mb-5">Відео:</div>
	<div class="flex justify-between gap-4 overflow-hidden">
		{#each videos as video}
			{#if video.official}
				{#if video.site === 'YouTube'}
					<div class="w-fit flex-shrink-0 flex-grow-0" transition:fade>
						<iframe
							width="500"
							height="315"
							src="https://www.youtube.com/embed/{video.key}"
							title={video.name}
							frameborder="0"
							allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							referrerpolicy="no-referrer"
							allowfullscreen
						></iframe>
					</div>
				{/if}
			{/if}
		{/each}
	</div>
</div>

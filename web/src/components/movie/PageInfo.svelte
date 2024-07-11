<script lang="ts">
	export let adult: boolean;
	export let poster_path: string;
	export let saved: boolean = true;
</script>

<div class="flex-shrink-0 w-[25rem] items-center rounded-2xl">
	<div class="w-full relative">
		<a href="https://image.tmdb.org/t/p/w500{poster_path}" target="_blank">
			<img
				class="w-fill h-full rounded-lg object-cover"
				src="https://image.tmdb.org/t/p/w500{poster_path}"
				alt="poster"
			/>
		</a>
		{#if adult}
			<div
				class="cursor-default absolute top-5 right-5 z-10 badge variant-filled text-[1em] !text-white !bg-rose-500"
			>
				+18
			</div>
		{/if}
	</div>
	<div class="mt-3">
		{#if !saved}
			<button class="btn w-full bg-surface-500/40 rounded-lg hover:bg-primary-500/80">Додати</button
			>
		{:else}
			<button class="btn w-full bg-surface-500/40 rounded-lg hover:bg-error-500/80">Видалити</button
			>
		{/if}
	</div>
	<hr class="my-3" />
</div>

<script lang="ts">
	import Overview from './Overview.svelte';
	export let id: number = 0;
	export let adult: boolean = false;
	export let saved: boolean;
	export let poster_path: string = '';
	export let overview: string = '';

	const addr = import.meta.env.VITE_LOCAL_ADDR;

	async function remove() {
		const url = `${addr}/r/watchlist/${id}`;
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
		const url = `${addr}/s/watchlist/${id}`;
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

<div class="flex-shrink-0 w-[22rem] items-center rounded-2xl">
	<div class="w-full relative">
		<a href="https://image.tmdb.org/t/p/original{poster_path}" target="_blank">
			{#if poster_path != ''}
				<img
					class="w-fill h-full rounded-lg object-cover"
					src="https://image.tmdb.org/t/p/w500{poster_path}"
					alt="poster"
				/>
			{:else}
				<img
					class="w-fill h-full rounded-lg object-cover"
					src="https://fakeimg.pl/300x500/323232/ffffff?text=No+poster&font=bebas"
					alt="poster"
				/>
			{/if}
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
		{#if saved}
			<button
				on:click={remove}
				class="btn w-full bg-surface-500/40 rounded-lg hover:bg-error-500/80">Видалити</button
			>
		{:else}
			<button on:click={add} class="btn w-full bg-surface-500/40 rounded-lg hover:bg-primary-500/80"
				>Додати до плейлісту</button
			>
		{/if}
	</div>
	{#if overview != ''}
		<hr class="my-3" />
		<div class="mt-6 mb-12">
			<Overview {overview} />
		</div>
	{/if}
</div>

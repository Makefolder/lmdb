<script lang="ts">
	import { fade } from 'svelte/transition';
	export let icon: string = '/1TjvGVDMYsj6JBxOAkUHpPEwLf7.png';
	export let name: string = 'Pixar';
	export let country: string = 'US';
</script>

<div
	class="card p-3 mr-1 mb-2 card-hover !bg-surface-500/10 w-[24rem] max-h-[8rem] overflow-hidden text-right"
	transition:fade
>
	<a href="/">
		<div>
			{#if icon !== ''}
				<div class="flex justify-between items-center">
					<div class="w-[7rem] h-[4rem]">
						<img
							class="w-full h-full object-contain"
							src="https://tmdb.org/t/p/w200{icon}"
							alt={name}
						/>
					</div>
					<div class="mt-4">
						<div class="h4 font-semibold">{name}</div>
						<div>{country}</div>
					</div>
				</div>
			{:else}
				<div>
					<div class="h4 font-semibold">{name}</div>
					<div>{country}</div>
				</div>
			{/if}
		</div>
	</a>
</div>

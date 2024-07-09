<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	export let sign: string = 'нагору';

	let visible: boolean = false;

	function scrollFunction(): void {
		if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
			visible = true;
			console.log('visible = true');
		} else {
			console.log('visible = false');
			visible = false;
		}
	}

	function topFunction() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	onMount(() => {
		window.onscroll = function () {
			scrollFunction();
		};
	});
</script>

{#if visible}
	<div class="fixed right-20 bottom-20 border-surface-400 z-10" transition:fade={{ duration: 140 }}>
		<button class="bg-surface-500/50 backdrop-blur-sm btn" on:click={topFunction}>{sign}</button>
	</div>
{/if}

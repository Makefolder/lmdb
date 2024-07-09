<script lang="ts">
	type link = {
		url: string;
		title: string;
	};
	export let title: string;
	export let span: string;
	export let logo: string;
	export let links: link[];
</script>

<div class="flex justify-between">
	<div class="max-w-fit">
		<a href="/">
			<div class="flex items-center">
				{#if logo !== undefined}
					<div class="max-w-8 max-h-8 mr-2 overflow-hidden">
						<img class="object-cover" src={logo} alt="{title}{span}" />
					</div>
				{/if}
				<div class="nav__logo text-[1.75rem] mr-3 font-bold">
					{title}<span class="text-primary-500">{span}</span>
				</div>
			</div>
		</a>
	</div>
	<div class="opacity-80 hover:opacity-100 transition cursor-default">
		Все скінченно, далі лише відчай...
	</div>
	<div class="flex">
		{#if links !== undefined}
			{#each links as link}
				<div class="ml-1">
					<a
						class="hover:bg-primary-500 transition py-[0.35rem] px-[0.65rem] rounded-xl"
						href="/{link.url}">{link.title}</a
					>
				</div>
			{/each}
		{/if}
	</div>
</div>

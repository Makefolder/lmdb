<script lang="ts">
	type link = {
		url: string;
		title: string;
	};
	export let title: string;
	export let repo: link;
	export let span: string;
	export let links: link[];
</script>

<nav class="px-3">
	<!-- left -->
	<div class="flex">
		<div class="nav__logo text-[1.75rem] mr-3 font-bold">{title}<span>{span}</span></div>
		<div>
			<a class="logo__link hover:bg-primary-500" href={repo.url} target="_blank">{repo.title}</a>
		</div>
	</div>

	<!-- right -->
	<div class="flex">
		{#each links as link}
			<div>
				<!-- py-2 px-3 hover:bg-red-100 rounded-full -->
				<a class="nav__button hover:bg-primary-500" href={link.url}>{link.title}</a>
			</div>
		{/each}
	</div>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.75rem 1rem;
		border-radius: 1rem;
		border: 1px solid rgba(255, 255, 255, 0.15);
		background: rgba(var(--color-surface-500) / 0.25);
	}
	.nav__logo span {
		color: rgb(var(--color-primary-500));
	}
	.nav__button,
	.logo__link {
		padding: 0.45rem 0.75rem;
		border-radius: 0.75rem;
		transition: 0.05s ease;
	}
</style>

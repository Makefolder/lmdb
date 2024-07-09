<script lang="ts">
	import type { Link } from '../types/link';
	export let title: string;
	export let span: string;
	export let repo: Link;
	export let logo: string;
	export let links: Link[];
</script>

<nav class="px-3">
	<div class="flex items-center">
		<a href="/">
			<div class="flex items-center">
				{#if logo !== undefined}
					<div class="max-w-8 max-h-8 mr-2 overflow-hidden">
						<img class="object-cover" src={logo} alt="{title}{span}" />
					</div>
				{/if}
				<div class="nav__logo text-[1.75rem] mr-1 font-bold">{title}<span>{span}</span></div>
			</div>
		</a>
		<div>
			<a class="logo__link {repo.colour}" href={repo.url} target="_blank">{repo.title}</a>
		</div>
	</div>

	<div class="flex items-center">
		{#each links as link}
			<div>
				<a class="nav__button {link.colour}" href={link.url}>{link.title}</a>
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
		backdrop-filter: blur(10px);
	}
	.nav__logo span {
		color: rgb(var(--color-primary-500));
	}
	.nav__button,
	.logo__link {
		margin-left: 0.25rem;
		padding: 0.35rem 0.65rem;
		border-radius: 0.75rem;
		transition: 0.1s ease;
	}
</style>

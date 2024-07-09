<script lang="ts">
	import '../app.postcss';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import type { Link } from '../types/link';

	let title: string = 'LM';
	let span: string = '.DB';
	let logo: string = '../../favicon.png';

	let repo: Link = {
		url: 'https://github.com/aegislash525',
		title: '/оупен сурс'
	};

	let links: Link[] = [
		{
			url: '/search',
			title: 'Пошук'
		},
		{
			url: '/series',
			title: 'Серіали'
		},
		{
			url: '/genres',
			title: 'Жанри'
		},
		{
			url: '/watchlist',
			title: 'Плейлист'
		}
	];
</script>

<div class="container px-1 h-full mx-auto max-w-[1460px]">
	<div class="my-4">
		<Navbar {logo} {repo} {title} {span} {links} />
	</div>
	<slot />
</div>

<footer class="bg-surface-800/40 backdrop-blur-md mt-[6rem] border-t-[1px] border-surface-500">
	<div class="container px-1 py-[1.25rem] mx-auto max-w-[1460px]">
		<Footer {logo} {title} {span} {links} />
	</div>
</footer>

<script lang="ts">
	import '../app.postcss';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import GetUpBtn from '../components/GetUpBtn.svelte';
	import type { Link } from '../types/link';
	import { Colour } from '../types/link';

	let title: string = 'LM';
	let span: string = '.DB';
	let logo: string = '../../favicon.png';

	let repo: Link = {
		url: 'https://github.com/aegislash525',
		title: '/оупен сурс',
		colour: Colour.Grey
	};

	let links: Link[] = [
		{
			url: '/search',
			title: 'Пошук',
			colour: Colour.Yellow
		},
		{
			// url: '/movies',
			url: '/',
			title: 'Фільми',
			colour: Colour.Lime
		},
		{
			url: '/series',
			title: 'Серіали',
			colour: Colour.Pinky
		},
		{
			url: '/genres',
			title: 'Жанри',
			colour: Colour.Purple
		},
		{
			url: '/watchlist',
			title: 'Плейлист',
			colour: Colour.Green
		}
	];

	const pkg = {
		logo: logo,
		repo: repo,
		title: title,
		span: span,
		links: links
	};
</script>

<GetUpBtn />

<div class="flex flex-col min-h-screen">
	<div class="container px-1 mx-auto max-w-[1460px] my-4">
		<Navbar {...pkg} />
	</div>

	<main class="flex-grow container px-1 h-full mx-auto max-w-[1460px]">
		<slot />
	</main>

	<div class="container px-1 mx-auto max-w-[1460px]">
		<Footer {logo} {title} {span} {links} />
	</div>
</div>

<style>
	main {
		@apply flex-1;
	}
</style>

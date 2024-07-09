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
</script>

<GetUpBtn />

<div class="container px-1 h-full mx-auto max-w-[1460px]">
	<div class="my-4">
		<Navbar {logo} {repo} {title} {span} {links} />
	</div>
	<slot />
</div>

<footer class="bg-surface-800/40 backdrop-blur-md mt-[6rem] border-t-[1px] border-surface-500/50">
	<div class="container px-1 py-[1.25rem] mx-auto max-w-[1460px]">
		<Footer {logo} {title} {span} {links} />
	</div>
</footer>

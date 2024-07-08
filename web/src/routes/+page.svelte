<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import Card from '../components/Card.svelte';

	let title: string = 'LM';
	let span: string = '.DB';
	let logo: string = '../../favicon.png';

	type link = {
		url: string;
		title: string;
	};

	let repo: link = {
		url: 'https://github.com/aegislash525',
		title: '/оупен сурс'
	};

	let links: link[] = [
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
			title: 'Плейліст'
		}
	];

	type movie = {
		url: string;
		header: string;
		title: string;
		rating: number;
		genres: string[];
	};

	let movie: movie = {
		url: '/2001-a-space-odyssey',
		header: '../../poster.jpg',
		title: '2001: A space odyssey',
		rating: 8.3,
		genres: ['Adventure', 'Sci-Fi', 'Thriller', 'Detective', 'Action']
	};
</script>

<div class="container px-1 h-full mx-auto max-w-[1460px]">
	<div class="my-4">
		<Navbar {logo} {repo} {title} {span} {links} />
	</div>

	<div class="mt-[3rem]">
		<div class="space-y-5">
			<h1 class="h1">Фільми</h1>
			<p>Start by exploring:</p>
			<ul>
				<li><code class="code">/src/routes/+layout.svelte</code> - barebones layout</li>
				<li><code class="code">/src/app.postcss</code> - app wide css</li>
				<li>
					<code class="code">/src/routes/+page.svelte</code> - this page, you can replace the contents
				</li>
			</ul>
		</div>
	</div>

	<div
		class="mt-[2rem] card__container flex flex-wrap gap-[0.7rem] justify-start mx-auto max-w-full"
	>
		<Card {movie} />
		<Card {movie} />
		<Card {movie} />
		<Card {movie} />
		<Card {movie} />
		<Card {movie} />
		<Card {movie} />
	</div>
</div>

<style>
	@media (max-width: 1460px) {
		.card__container {
			gap: 1rem;
			justify-content: space-around;
		}
	}
</style>

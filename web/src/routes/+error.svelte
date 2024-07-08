<script lang="ts">
	import Navbar from '../components/Navbar.svelte';

	let title: string = 'LM';
	let span: string = '.DB';
	let logo: string = '../../favicon.png';

	type link = {
		url: string;
		title: string;
	};

	let repo: link = {
		url: 'https://github.com/aegislash525',
		title: '/open source'
	};
	let links: link[] = [
		{
			url: 'https://github.com',
			title: 'Серіали'
		},
		{
			url: 'https://github.com',
			title: 'Жанри'
		},
		{
			url: 'https://github.com',
			title: 'Плейлісти'
		}
	];
</script>

<div class="container h-full mx-auto max-w-[1460px]">
	<div class="my-4">
		<Navbar {logo} {repo} {title} {span} {links} />
	</div>

	<div class="space-y-5 my-5">
		<h1 class="h1">Щось пішло не так...</h1>
		<p>Сторінку не знайдено (404).</p>
		<div>
			<a href="/" class="text-tertiary-500 hover:text-error-500 transition ease-linear"
				>Ніколи не пізно почати з початку.</a
			>
		</div>
	</div>
</div>

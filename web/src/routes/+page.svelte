<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	let title: string = 'LM';
	let span: string = '.DB';

	type link = {
		url: string;
		title: string;
	};

	let repo: link = {
		url: 'https://github.com/aegislash525',
		title: '/repository'
	};

	let links: link[] = [
		{
			url: 'https://github.com',
			title: 'Home'
		},
		{
			url: 'https://github.com',
			title: 'Movies'
		},
		{
			url: 'https://github.com',
			title: 'Watchlists'
		}
	];
</script>

<div class="container h-full mx-auto max-w-[1400px]">
	<div class="my-4">
		<Navbar {repo} {title} {span} {links} />
	</div>
	<div class="space-y-5">
		<h1 class="h1">Let's get cracking bones!</h1>
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

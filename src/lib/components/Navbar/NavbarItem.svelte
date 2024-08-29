<script lang="ts">
	import type { GameProps } from '$lib/types/home';
	import { page } from '$app/stores';

	let { alt, name, game }: GameProps = $props();
</script>

<a class={game == $page.url.pathname ? 'container active' : 'container'} href={game}>
	<div class="wrapper">
		<img src={`images/${game}/${game}-icon.webp`} {alt} width="30px" height="30px" />
		<p class="name">{name}</p>
	</div>
</a>

<style>
	.container {
		min-width: 145px;
		text-decoration: none;
		margin-top: auto;
	}

	.container:hover {
		background-color: rgba(237, 233, 240, 15%);
		border-top: 1px solid var(--primary);
	}

	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 46px;
		gap: var(--margin-sm);
		padding: var(--padding-sm);
	}

	.name {
		font-size: var(--text-md);
	}

	.active {
		background-color: rgba(237, 233, 240, 15%);
		border-top: 1px solid var(--primary);
	}
</style>

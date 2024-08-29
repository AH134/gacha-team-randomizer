<script lang="ts">
	import NavbarItem from './NavbarItem.svelte';
	import { games } from '$lib/data/home';
</script>

<div id="navbar-container">
	<nav id="navbar">
		<a id="home-container" href="/">
			<div class="wrapper">
				<p class="home">GT<span id="randomizer" class="home">Randomizer</span></p>
			</div>
		</a>

		{#each games as game (game.id)}
			<NavbarItem alt={game.alt} name={game.name} game={game.gameType}></NavbarItem>
		{/each}
	</nav>
</div>

<style>
	#randomizer {
		color: var(--primary);
	}

	.home {
		font-size: var(--text-lg);
		font-weight: bold;
	}

	#home-container {
		text-decoration: none;
		margin-top: auto;
	}

	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 46px;
		gap: var(--margin-sm);
	}

	#navbar-container {
		position: sticky;
		top: 0;
		height: 55px;
		border-bottom: 1px solid var(--text-800);
		background-color: var(--background);
		z-index: 1000;
	}

	#navbar {
		display: flex;
		gap: var(--margin-sm);
		width: min(1072px, 90%);
		height: 55px;
		margin: 0 auto;
	}

	@media only screen and (max-width: 768px) {
		#navbar-container {
			display: none;
		}
	}
</style>

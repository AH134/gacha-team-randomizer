<script>
	import Card from './Card.svelte';
	import { games } from '$lib/data/home';
</script>

<div>
	<h1 id="game">Games</h1>

	<div id="card-container">
		{#each games as game (game.id)}
			<Card alt={game.alt} name={game.name} game={game.gameType}></Card>
		{/each}
	</div>
</div>

<style>
	#card-container {
		display: flex;
		flex-wrap: wrap;
		gap: var(--margin-2xl);
	}

	@media only screen and (max-width: 768px) {
		#card-container {
			margin-bottom: var(--margin-xl);
		}
	}
</style>

<script>
	import Card from './Card.svelte';
	import { gamesList } from '$lib/data/home';
</script>

<div>
	<h1 id="game">Games</h1>

	<div id="card-container">
		{#each gamesList as item (item.id)}
			<Card src={item.srcCard} alt={item.alt} href={item.href} name={item.name}></Card>
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

<script lang="ts">
	import { emotesList } from '$lib/data/home';
</script>

<footer id="footer" class="cont">
	<div id="right-container" class="cont">
		<p id="r1">Made with △ by @woc_1</p>
		<p id="r2">
			© All rights reserved by HoYoverse. Other properties belong to their respective owners.
		</p>
	</div>
	<hr id="breaker" />
	<div id="emotes-container" class="cont">
		{#each emotesList as emote (emote.id)}
			<img src={emote.src} alt={emote.alt} width="80px" height="80px" />
		{/each}
	</div>
</footer>

<style>
	.cont {
		display: flex;
		justify-content: center;
	}

	#footer {
		height: 90px;
		width: min(1072px, 90%);
		align-items: center;
		justify-content: space-between;
		margin: auto;
		margin-bottom: var(--margin-xl);
		padding: var(--padding-md);
		border-radius: 5px;
		background-color: rgba(237, 233, 240, 5%);
	}

	#right-container {
		flex-direction: column;
	}

	#r1 {
		font-size: var(--text-md);
		margin-bottom: var(--margin-sm);
	}

	#r2 {
		font-size: var(--text-sm);
		color: var(--text-200);
	}

	#breaker {
		height: 4.25rem;
		margin: 0 var(--margin-sm) 0 var(--margin-sm);
		color: var(--text-700);
	}

	#emotes-container {
		justify-content: center;
		flex-direction: row;
		gap: var(--margin-xl);
	}

	@media only screen and (max-width: 768px) {
		#breaker {
			display: none;
		}

		#emotes-container {
			display: none;
		}
	}
</style>

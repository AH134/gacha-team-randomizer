<script>
	import CardContainer from '$lib/components/CardContainer.svelte';
</script>

<div id="container">
	<div id="title-container">
		<h1 id="title">Gacha Team <span id="randomizer">Randomizer</span></h1>
		<a id="github-button" href="https://github.com/AH134/gacha-team-randomizer" target="_blank">
			<div id="button-container">
				<img src="/images/github-icon.svg" alt="github-icon" width="20px" height="20px" />
				<p>View on Github</p>
			</div>
		</a>
	</div>
	<CardContainer></CardContainer>
</div>

<style>
	:global(body) {
		font-family: 'Inter', sans-serif;
	}

	#container {
		position: relative;
		width: min(1072px, 90%);
		margin: 0 auto;
	}
	#title-container {
		display: flex;
		flex-direction: column;
		gap: var(--margin-md);
		margin-top: var(--margin-2xl);
		margin-bottom: var(--margin-4xl);
	}

	#title {
		font-size: 5.375rem;
		font-weight: 500;
		max-width: 50%;
	}

	#randomizer {
		font-size: 6rem;
		font-weight: 600;
		background: var(--linearPrimaryAccentLeft);
		background-clip: text;
		color: transparent;
	}

	#github-button {
		width: 175px;
		height: 45px;
		border-radius: 5px;
		text-decoration: none;
		background-color: var(--primary);
		transition: all 50ms ease-in-out;
	}

	#github-button:hover {
		background-color: var(--primary-400);
	}

	#button-container {
		height: 100%;
		display: flex;
		justify-content: center;
		gap: var(--margin-xsm);
		align-items: center;
	}

	#button-container p {
		color: var(--text-900);
	}

	@media only screen and (max-width: 768px) {
		#title-container {
			margin-top: 0;
		}

		#title {
			font-size: var(--text-4xl);
			max-width: 80%;
		}

		#randomizer {
			font-size: var(--text-6xl);
		}
	}
</style>

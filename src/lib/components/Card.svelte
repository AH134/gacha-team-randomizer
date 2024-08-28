<script lang="ts">
	import type { GameProps } from '$lib/data/home';

	let { src, alt, name, href }: GameProps = $props();
</script>

<a {href} class="container">
	<div class="wrapper">
		<img {src} {alt} class="card-img" width="177px" height="236px" />
		<p class="name">{name}</p>
	</div>
</a>

<style>
	.container {
		margin-top: var(--margin-lg);
		flex-shrink: 1;
		text-decoration: none;
		transition: all 150ms ease-in-out;
	}

	.container:hover {
		transform: translateY(-10px);
	}

	.card-img {
		border-radius: 5px;
		transition: all 150ms ease-in-out;
	}

	.card-img:hover {
		filter: drop-shadow(0 4px var(--primary));
	}

	.name {
		font-weight: 500;
		margin-top: var(--margin-xsm);
	}

	@media only screen and (max-width: 768px) {
		.card-img {
			width: 120px;
			height: 160px;
		}

		.name {
			font-size: var(--text-sm);
		}
	}
</style>

<script lang="ts">
	import { PauseIcon, PlayIcon } from 'phosphor-svelte';

	let {
		src,
		alt,
		width,
		height,
		video = false,
		caption = ''
	}: {
		src: string;
		alt: string;
		width: number;
		height: number;
		video?: boolean;
		caption?: string;
	} = $props();

	let paused = $state(false);
</script>

<figure class="media-frame" class:is-video={video} class:is-paused={paused}>
	<img {src} {alt} {width} {height} />
	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}
	{#if video}
		<button
			type="button"
			class="media-frame__toggle"
			aria-pressed={paused}
			aria-label={paused ? 'Play hero loop' : 'Pause hero loop'}
			onclick={() => (paused = !paused)}
		>
			{#if paused}
				<PlayIcon weight="fill" />
			{:else}
				<PauseIcon weight="fill" />
			{/if}
		</button>
	{/if}
</figure>

<style>
	.media-frame {
		position: relative;
		margin: 0;
		overflow: hidden;
		border-radius: 1.75rem;
		background: var(--cogon-inverse);
		box-shadow: 0 24px 60px rgb(22 51 0 / 16%);
	}

	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transform: scale(1.04);
	}

	.is-video img {
		animation: media-drift 18s var(--cogon-ease) infinite alternate;
	}

	.is-paused img {
		animation-play-state: paused;
	}

	figcaption {
		position: absolute;
		left: 1.25rem;
		bottom: 1.25rem;
		margin: 0;
		border-radius: 999px;
		background: rgb(22 51 0 / 78%);
		color: var(--cogon-lime);
		padding: 0.4rem 0.75rem;
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.media-frame__toggle {
		position: absolute;
		top: 1rem;
		right: 1rem;
		display: grid;
		width: 2.75rem;
		height: 2.75rem;
		place-items: center;
		border: 0;
		border-radius: 999px;
		background: #fff;
		color: var(--cogon-inverse);
		cursor: pointer;
	}

	.media-frame__toggle :global(svg) {
		width: 1rem;
		height: 1rem;
	}

	@keyframes media-drift {
		from {
			transform: scale(1.04) translate3d(0, 0, 0);
		}
		to {
			transform: scale(1.12) translate3d(-1.5%, -1%, 0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.is-video img {
			animation: none;
			transform: none;
		}
	}
</style>

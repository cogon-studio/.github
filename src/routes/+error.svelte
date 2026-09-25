<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import { Button } from '$lib/components/ui/button/index.js';
	import { ArrowLeftIcon } from 'phosphor-svelte';

	const isNotFound = $derived(page.status === 404);
</script>

<svelte:head>
	<title>{isNotFound ? 'Page not found' : 'Something went wrong'} · cogon.studio</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="error-page" aria-labelledby="error-title">
	<div class="error-wash" aria-hidden="true"></div>
	<div class="error-layout mx-auto grid w-[min(92%,68rem)] items-center gap-10 lg:grid-cols-2 lg:gap-16">
		<div class="error-copy">
			<h1
				id="error-title"
				class="font-display max-w-[13ch] text-[clamp(2.75rem,6vw,5rem)] leading-[0.98] font-bold tracking-[-0.035em] text-balance"
			>
				{isNotFound ? 'This page is not on the map.' : 'This page did not load.'}
			</h1>
			<p class="text-muted-foreground mt-6 max-w-[42ch] text-lg leading-relaxed">
				{isNotFound
					? 'The address may have changed, or the page may no longer exist. Head home and we’ll get you back on solid ground.'
					: 'We couldn’t load what you asked for. Return home and try another path.'}
			</p>
			<Button
				href="{base}/"
				size="lg"
				class="mt-8 rounded-full bg-[var(--cogon-lime)] px-6 text-[var(--cogon-lime-ink)] hover:brightness-95"
			>
				<ArrowLeftIcon class="size-4" aria-hidden="true" />
				Back to home
			</Button>
		</div>

		<div class="error-illustration" aria-hidden="true">
			<p class="error-code">{page.status}</p>
			<img
				src="{base}/illustrations/cta-idea.svg"
				alt=""
				width="877"
				height="797"
				class="error-illustration__image"
			/>
		</div>
	</div>
</section>

<style>
	.error-page {
		position: relative;
		display: grid;
		min-height: calc(100svh - 2rem);
		align-items: center;
		overflow: hidden;
		padding-block: max(7rem, calc(5rem + env(safe-area-inset-top))) 4rem;
	}

	.error-wash {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(ellipse 45% 45% at 18% 40%, color-mix(in srgb, var(--cogon-lime) 18%, transparent), transparent 72%);
		pointer-events: none;
	}

	.error-layout {
		position: relative;
		z-index: 1;
	}

	.error-illustration {
		position: relative;
		display: grid;
		place-items: center;
		min-height: 24rem;
	}

	.error-code {
		position: absolute;
		inset: 50% auto auto 50%;
		margin: 0;
		transform: translate(-50%, -52%);
		font-family: var(--font-display);
		font-size: clamp(9rem, 25vw, 18rem);
		font-weight: 800;
		line-height: 0.8;
		letter-spacing: -0.04em;
		color: color-mix(in srgb, var(--cogon-lime) 28%, transparent);
		user-select: none;
	}

	.error-illustration__image {
		position: relative;
		z-index: 1;
		width: min(100%, 27rem);
		max-height: 30rem;
		object-fit: contain;
		filter: drop-shadow(0 18px 38px rgb(11 74 59 / 10%));
	}

	@media (max-width: 63.99rem) {
		.error-page {
			padding-bottom: 2rem;
		}

		.error-copy {
			text-align: center;
		}

		.error-copy > :global(*) {
			margin-inline: auto;
		}

		.error-illustration {
			min-height: 18rem;
		}

		.error-illustration__image {
			width: min(78vw, 22rem);
			max-height: 22rem;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.error-illustration__image {
			animation: settle 700ms var(--cogon-ease) both;
		}

		@keyframes settle {
			from {
				transform: translateY(0.75rem);
				filter: drop-shadow(0 8px 20px rgb(11 74 59 / 4%));
			}
			to {
				transform: translateY(0);
				filter: drop-shadow(0 18px 38px rgb(11 74 59 / 10%));
			}
		}
	}
</style>

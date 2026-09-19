<script lang="ts">
	import { base } from '$app/paths';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';

	const signals = ['innovative', 'reliable', 'youthful', 'warm'] as const;

	const pillars = [
		{
			title: 'Purpose',
			body: 'Help ambitious teams turn useful ideas into software people trust and enjoy using.'
		},
		{
			title: 'Positioning',
			body: 'For startups and growing teams, cogon.studio blends fresh product thinking with disciplined engineering.'
		},
		{
			title: 'Promise',
			body: 'Momentum without chaos: clear decisions, dependable delivery, and software designed to keep growing.'
		}
	] as const;

	const values = [
		{ title: 'Curious by design', body: 'Ask better questions before writing code.' },
		{ title: 'Reliable by default', body: 'Make quality, security, and follow-through visible.' },
		{ title: 'Human in every detail', body: 'Communicate plainly; design for real people.' },
		{ title: 'Grow together', body: 'Share context, teach openly, improve continuously.' }
	] as const;
</script>

<section class="hero relative overflow-hidden text-[var(--cogon-cream)]" aria-labelledby="brand-title">
	<div
		class="pointer-events-none absolute -right-40 -bottom-72 size-160 rounded-full bg-[color-mix(in_srgb,#5ccb91_10%,transparent)]"
		aria-hidden="true"
	></div>

	<div
		class="relative z-1 mx-auto grid min-h-[min(48rem,calc(100svh-4.25rem))] w-[min(92%,90rem)] items-center gap-10 py-16 md:grid-cols-[minmax(15rem,0.8fr)_minmax(22rem,1.2fr)] md:gap-16 lg:gap-24 lg:py-24"
	>
		<img
			class="hero-mark w-full max-w-md justify-self-center rounded-[1.75rem] shadow-[0_2.5rem_6rem_rgb(0_0_0_/_24%)] md:justify-self-start"
			src="{base}/brand/cogon-studio-square-dark.png"
			alt="cogon.studio four-blade symbol in green and gold"
			width="448"
			height="448"
		/>

		<div class="hero-copy">
			<p class="font-mono text-[clamp(0.75rem,1.2vw,0.9rem)] tracking-[0.06em] text-[var(--cogon-sprout)]">
				SOFTWARE DEVELOPMENT STUDIO
			</p>
			<h1
				id="brand-title"
				class="font-display mt-4 max-w-[11ch] text-[clamp(3.5rem,8vw,7rem)] leading-[0.94] font-bold tracking-[-0.04em] text-balance"
			>
				cogon.studio
			</h1>
			<p
				class="mt-8 max-w-xl text-[clamp(1.05rem,1.6vw,1.35rem)] leading-relaxed text-[var(--cogon-mist)]"
			>
				Build boldly. Grow reliably. Innovative enough to move ideas forward. Reliable enough to
				build on. Human enough to enjoy working with.
			</p>

			<div class="mt-9 flex flex-wrap gap-3">
				<Button
					href="mailto:hello@cogon.studio"
					size="lg"
					class="rounded-full bg-[var(--cogon-gold)] px-5 text-[var(--cogon-night)] hover:bg-[var(--cogon-gold)]/90"
				>
					Start a project
				</Button>
				<Button
					href="{base}/brand/cogon-studio-brand-identity-guide.html"
					variant="outline"
					size="lg"
					class="rounded-full border-[color-mix(in_srgb,#fff8dc_24%,transparent)] bg-[var(--cogon-grove)] text-[var(--cogon-cream)] hover:bg-[var(--cogon-grove)]/80 hover:text-[var(--cogon-cream)]"
				>
					Brand system
				</Button>
			</div>

			<ul class="mt-9 flex list-none flex-wrap gap-2.5 p-0" aria-label="Brand characteristics">
				{#each signals as signal, i}
					<li
						class="font-mono rounded-full px-3 py-2 text-[0.72rem] {i === 2
							? 'bg-[var(--cogon-gold)] text-[var(--cogon-night)]'
							: 'bg-[var(--cogon-grove)] text-[var(--cogon-cream)]'}"
					>
						{signal}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section class="mx-auto w-[min(92%,72rem)] py-20 md:py-28" aria-labelledby="promise-title">
	<h2
		id="promise-title"
		class="font-display max-w-[18ch] text-[clamp(2.5rem,5.5vw,5.25rem)] leading-[0.98] font-bold tracking-[-0.035em] text-balance"
	>
		A studio built for forward motion
	</h2>
	<p class="text-muted-foreground mt-6 max-w-[66ch] text-[clamp(1.05rem,1.5vw,1.25rem)]">
		cogon.studio gives ambitious teams the momentum to turn useful ideas into dependable software.
	</p>
	<p
		class="font-display border-border mt-10 max-w-[28ch] border-y py-8 text-[clamp(1.8rem,3.5vw,3.5rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-balance md:max-w-none"
	>
		Fresh product thinking, <strong class="text-primary">disciplined engineering</strong>, and a
		working relationship that stays clear from first decision to final delivery.
	</p>

	<div class="border-border mt-16 grid gap-px border-y bg-[var(--border)] md:grid-cols-3">
		{#each pillars as pillar}
			<article class="bg-background px-0 py-8 md:px-8">
				<h3 class="font-display text-xl leading-tight">{pillar.title}</h3>
				<p class="text-muted-foreground mt-3">{pillar.body}</p>
			</article>
		{/each}
	</div>
</section>

<section class="bg-[var(--cogon-night)] text-[var(--cogon-cream)]" aria-labelledby="values-title">
	<div class="mx-auto w-[min(92%,72rem)] py-20 md:py-28">
		<h2
			id="values-title"
			class="font-display max-w-[16ch] text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.98] font-bold tracking-[-0.035em] text-balance"
		>
			Clear, warm, capable
		</h2>
		<p class="mt-6 max-w-[66ch] text-[clamp(1.05rem,1.5vw,1.25rem)] text-[var(--cogon-mist)]">
			The voice stays consistent while the work stays grounded. Friendly does not mean vague, and
			technical does not mean cold.
		</p>

		<dl class="mt-14 grid gap-10 sm:grid-cols-2 sm:gap-x-16">
			{#each values as value}
				<div class="relative pl-8">
					<span
						class="absolute top-1.5 left-0 size-3 rounded-full bg-[var(--cogon-gold)]"
						aria-hidden="true"
					></span>
					<dt class="font-display text-xl">{value.title}</dt>
					<dd class="mt-2 text-[var(--cogon-mist)]">{value.body}</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>

<section class="mx-auto w-[min(92%,72rem)] py-20 md:py-28" aria-labelledby="close-title">
	<p class="font-mono text-muted-foreground text-xs tracking-[0.08em] uppercase">Next step</p>
	<h2
		id="close-title"
		class="font-display mt-4 max-w-[14ch] text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98] font-bold tracking-[-0.035em] text-balance"
	>
		Engineering with momentum
	</h2>
	<p class="text-muted-foreground mt-6 max-w-[48ch] text-lg">
		Modern product thinking with reliable systems underneath. Tell us what you are building.
	</p>

	<div class="mt-10 flex flex-wrap gap-3">
		<Button href="mailto:hello@cogon.studio" size="lg" class="rounded-full px-5">
			Email the studio
		</Button>
		<Button
			href="https://github.com/cogon-studio"
			target="_blank"
			rel="noopener noreferrer"
			variant="outline"
			size="lg"
			class="rounded-full"
		>
			See our GitHub
		</Button>
	</div>

	<Separator class="my-14" />

	<p class="text-muted-foreground max-w-[55ch] text-sm leading-relaxed">
		Identity, tokens, and usage live in the
		<a
			class="text-primary font-medium underline-offset-4 hover:underline"
			href="{base}/brand/cogon-studio-brand-identity-guide.html"
		>
			brand identity guide
		</a>
		— including Soft Sun / Night Grove themes, Bricolage · Inter · JetBrains Mono, and CSS tokens.
	</p>
</section>

<style>
	.hero {
		background: var(--cogon-night);
	}

	.hero-mark {
		aspect-ratio: 1;
		object-fit: cover;
		clip-path: inset(0 0 0 0 round 1.75rem);
		animation: mark-reveal 900ms var(--cogon-ease) both;
	}

	.hero-copy {
		animation: copy-rise 700ms var(--cogon-ease) 120ms both;
	}

	@keyframes mark-reveal {
		from {
			clip-path: inset(18% 18% 18% 18% round 50%);
			transform: scale(0.96);
			opacity: 0.7;
		}
		to {
			clip-path: inset(0 0 0 0 round 1.75rem);
			transform: scale(1);
			opacity: 1;
		}
	}

	@keyframes copy-rise {
		from {
			opacity: 0;
			transform: translateY(1.25rem);
			filter: blur(4px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
			filter: blur(0);
		}
	}

	@media (max-width: 52rem) {
		.hero-mark {
			width: min(66vw, 19rem);
		}
	}
</style>

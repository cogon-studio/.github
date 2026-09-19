<script lang="ts">
	import { base } from '$app/paths';
	import { Button } from '$lib/components/ui/button/index.js';
	import { brandGuidelines } from '$lib/brand/guidelines.js';

	const siteUrl = 'https://cogon-studio.github.io/.github/';
	const title = 'cogon.studio — Software Studio for Growing Teams';
	const description =
		'Software development studio for startups. Momentum without chaos—clear decisions, dependable delivery, and software designed to keep growing.';

	const values = brandGuidelines.values;

	const jsonLd = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				'@id': `${siteUrl}#organization`,
				name: brandGuidelines.brand,
				url: siteUrl,
				email: brandGuidelines.contact.email,
				sameAs: [brandGuidelines.contact.github],
				description,
				slogan: brandGuidelines.tagline,
				logo: `${siteUrl}brand/cogon-studio-square-dark.png`
			},
			{
				'@type': 'WebSite',
				'@id': `${siteUrl}#website`,
				url: siteUrl,
				name: brandGuidelines.brand,
				publisher: { '@id': `${siteUrl}#organization` },
				description
			}
		]
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="software development studio, startup product engineering, MVP to production, dependable software delivery, product-minded engineering partner, growing team engineering partner, custom software for startups"
	/>
	<meta name="robots" content="index,follow" />
	<link rel="canonical" href={siteUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:site_name" content="cogon.studio" />
	<meta property="og:image" content="{siteUrl}brand/cogon-studio-square-dark.png" />
	<meta property="og:image:alt" content="cogon.studio mark" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{siteUrl}brand/cogon-studio-square-dark.png" />
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<!--
THESIS: Public studio landing that sells dependable product momentum; keeps the brand manual off-stage.
OWN-WORLD: Night Grove hero, Soft Sun body, Bricolage display, Harvest Gold CTA, official four-blade mark.
STORY: Founder/eng lead recognizes a calm product-minded partner and emails to start.
FIRST VIEWPORT: Full-bleed night; dominant mark; brand as hero text; one headline; one support; Start + GitHub.
FORM: Brand-led studio landing · persuade · seed key seo-brief-2026-09
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->

<section
	class="relative overflow-hidden bg-[var(--cogon-night)] text-[var(--cogon-cream)]"
	aria-labelledby="home-brand"
>
	<div
		class="pointer-events-none absolute -right-40 -bottom-72 size-160 rounded-full bg-[color-mix(in_srgb,#5ccb91_10%,transparent)]"
		aria-hidden="true"
	></div>

	<div
		class="relative z-1 mx-auto grid min-h-[min(48rem,calc(100svh-4.25rem))] w-[min(92%,90rem)] items-center gap-10 py-16 md:grid-cols-[minmax(15rem,0.85fr)_minmax(22rem,1.15fr)] md:gap-16 lg:gap-24 lg:py-24"
	>
		<img
			class="home-mark w-full max-w-md justify-self-center rounded-[1.75rem] shadow-[0_2.5rem_6rem_rgb(0_0_0_/_24%)] md:justify-self-start"
			src="{base}/brand/cogon-studio-square-dark.png"
			alt=""
			width="448"
			height="448"
			fetchpriority="high"
		/>

		<div class="home-copy">
			<h1
				id="home-brand"
				class="font-display max-w-[11ch] text-[clamp(3.5rem,8vw,7rem)] leading-[0.94] font-bold tracking-[-0.04em] text-balance"
			>
				cogon.studio
			</h1>
			<p
				class="font-display mt-6 max-w-[14ch] text-[clamp(1.85rem,4vw,3.25rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-balance"
			>
				Momentum without chaos.
			</p>
			<p
				class="mt-6 max-w-xl text-[clamp(1.05rem,1.6vw,1.3rem)] leading-relaxed text-[var(--cogon-mist)]"
			>
				Fresh product thinking and disciplined engineering for startups that need to ship—and keep
				growing. {brandGuidelines.tagline}
			</p>

			<div class="mt-9 flex flex-wrap gap-3">
				<Button
					href="mailto:{brandGuidelines.contact.email}?subject=Project%20inquiry"
					size="lg"
					class="rounded-full bg-[var(--cogon-gold)] px-5 text-[var(--cogon-night)] hover:bg-[var(--cogon-gold)]/90"
				>
					Start a project
				</Button>
				<Button
					href={brandGuidelines.contact.github}
					target="_blank"
					rel="noopener noreferrer"
					variant="outline"
					size="lg"
					class="rounded-full border-[color-mix(in_srgb,#fff8dc_24%,transparent)] bg-[var(--cogon-grove)] text-[var(--cogon-cream)] hover:bg-[var(--cogon-grove)]/80 hover:text-[var(--cogon-cream)]"
				>
					View on GitHub
				</Button>
			</div>
		</div>
	</div>
</section>

<section class="mx-auto w-[min(92%,72rem)] py-20 md:py-28" aria-labelledby="for-title">
	<h2
		id="for-title"
		class="font-display max-w-[16ch] text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98] font-bold tracking-[-0.035em] text-balance"
	>
		Built for startups and growing teams
	</h2>
	<p class="text-muted-foreground mt-6 max-w-[62ch] text-[clamp(1.05rem,1.5vw,1.25rem)]">
		Founders and eng leads who need a product-minded studio partner—not freelancers who disappear,
		not agencies that drown you in process. We help you move from a fuzzy idea or fragile MVP to
		software that ships on schedule and stays maintainable.
	</p>
</section>

<section class="bg-[var(--cogon-night)] text-[var(--cogon-cream)]" aria-labelledby="how-title">
	<div class="mx-auto w-[min(92%,72rem)] py-20 md:py-28">
		<h2
			id="how-title"
			class="font-display max-w-[16ch] text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98] font-bold tracking-[-0.035em] text-balance"
		>
			Clear decisions. Dependable delivery.
		</h2>
		<p class="mt-6 max-w-[60ch] text-[clamp(1.05rem,1.5vw,1.2rem)] text-[var(--cogon-mist)]">
			We start with better questions, then build with quality and follow-through you can see. The
			handoff is growth-ready code and shared context—so the product can keep moving after launch.
		</p>
		<blockquote
			class="font-display mt-12 max-w-[30ch] text-[clamp(1.45rem,2.8vw,2.35rem)] leading-[1.2] font-semibold tracking-[-0.02em]"
		>
			“Here is what we know, what is uncertain, and the next useful step.”
		</blockquote>
	</div>
</section>

<section class="mx-auto w-[min(92%,72rem)] py-20 md:py-28" aria-labelledby="values-title">
	<h2
		id="values-title"
		class="font-display max-w-[12ch] text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98] font-bold tracking-[-0.035em] text-balance"
	>
		How we show up
	</h2>
	<ul class="mt-12 max-w-[58ch] list-none space-y-8 p-0">
		{#each values as value}
			<li class="border-border border-b pb-8">
				<p class="font-display text-xl">{value.name}</p>
				<p class="text-muted-foreground mt-2">{value.detail}</p>
			</li>
		{/each}
	</ul>
</section>

<section class="bg-[var(--cogon-night)] text-[var(--cogon-cream)]" aria-labelledby="open-title">
	<div class="mx-auto w-[min(92%,72rem)] py-20 md:py-28">
		<h2
			id="open-title"
			class="font-display max-w-[12ch] text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98] font-bold tracking-[-0.035em] text-balance"
		>
			See how we build
		</h2>
		<p class="mt-6 max-w-[56ch] text-[clamp(1.05rem,1.5vw,1.2rem)] text-[var(--cogon-mist)]">
			We’re an early studio. Proof lives in public work and how we talk about tradeoffs—not invented
			logos or vanity metrics. Browse the org, then tell us what you’re building.
		</p>
		<div class="mt-10">
			<Button
				href={brandGuidelines.contact.github}
				target="_blank"
				rel="noopener noreferrer"
				size="lg"
				class="rounded-full bg-[var(--cogon-gold)] px-5 text-[var(--cogon-night)] hover:bg-[var(--cogon-gold)]/90"
			>
				View on GitHub
			</Button>
		</div>
	</div>
</section>

<section class="mx-auto w-[min(92%,72rem)] py-20 md:py-28" aria-labelledby="contact-title">
	<h2
		id="contact-title"
		class="font-display max-w-[14ch] text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98] font-bold tracking-[-0.035em] text-balance"
	>
		Start a conversation
	</h2>
	<p class="text-muted-foreground mt-6 max-w-[52ch] text-lg">
		Email with the problem, stage, and timeline. We’ll reply with what we know, what’s uncertain, and
		a useful next step.
	</p>
	<div class="mt-10 flex flex-wrap gap-3">
		<Button
			href="mailto:{brandGuidelines.contact.email}?subject=Project%20inquiry"
			size="lg"
			class="rounded-full px-5"
		>
			Start a project
		</Button>
		<Button
			href={brandGuidelines.contact.github}
			target="_blank"
			rel="noopener noreferrer"
			variant="outline"
			size="lg"
			class="rounded-full"
		>
			View on GitHub
		</Button>
	</div>
</section>

<style>
	.home-mark {
		aspect-ratio: 1;
		object-fit: cover;
		clip-path: inset(0 0 0 0 round 1.75rem);
		animation: mark-reveal 900ms var(--cogon-ease, cubic-bezier(0.22, 1, 0.36, 1)) both;
	}

	.home-copy {
		animation: copy-rise 700ms var(--cogon-ease, cubic-bezier(0.22, 1, 0.36, 1)) 120ms both;
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
		.home-mark {
			width: min(66vw, 19rem);
		}
	}
</style>

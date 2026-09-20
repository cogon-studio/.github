<script lang="ts">
	import { base } from '$app/paths';
	import { Button } from '$lib/components/ui/button/index.js';
	import { brandGuidelines } from '$lib/brand/guidelines.js';
	import {
		CaretDownIcon,
		ChatCircleTextIcon,
		CheckIcon,
		PlantIcon,
		ShieldCheckIcon,
		UsersIcon
	} from 'phosphor-svelte';

	const siteUrl = 'https://cogon.studio/';
	const title = 'cogon.studio — Software Studio for Growing Teams';
	const description =
		'Software development studio for startups. Momentum without chaos—clear decisions, dependable delivery, and software designed to keep growing.';

	const values = brandGuidelines.values;

	const pillars = [
		{
			title: 'Ask before you build',
			detail: 'Better questions first—so the first sprint ships the right thing.',
			image: `${base}/illustrations/feature-decide.svg`,
			alt: 'Illustration of thoughtful decision-making'
		},
		{
			title: 'Ship with a partner',
			detail: 'Pair on product and code. Visible quality, security, and follow-through.',
			image: `${base}/illustrations/feature-pair.svg`,
			alt: 'Illustration of pair programming'
		},
		{
			title: 'Leave it growable',
			detail: 'Handoff with shared context—so the product keeps moving after launch.',
			image: `${base}/illustrations/feature-ship.svg`,
			alt: 'Illustration of shipping a product'
		}
	] as const;

	const capabilities = [
		{
			icon: ChatCircleTextIcon,
			title: 'Clear decisions',
			detail: 'Tradeoffs named early. You always know what we know, what’s uncertain, and the next useful step.',
			image: `${base}/illustrations/feature-ideas.svg`,
			alt: 'Illustration of ideas flowing'
		},
		{
			icon: ShieldCheckIcon,
			title: 'Dependable delivery',
			detail: 'Quality and security aren’t a late phase—they’re visible in how we work every week.',
			image: `${base}/illustrations/feature-quality.svg`,
			alt: 'Illustration of a code review'
		},
		{
			icon: PlantIcon,
			title: 'Growth-ready code',
			detail: 'Software designed to keep growing—maintainable structure, not a disposable MVP shell.',
			image: `${base}/illustrations/feature-build.svg`,
			alt: 'Illustration of building a website'
		},
		{
			icon: UsersIcon,
			title: 'Shared context',
			detail: 'We teach as we build. Your team inherits clarity, not a black box.',
			image: `${base}/illustrations/feature-collab.svg`,
			alt: 'Illustration of real-time collaboration'
		}
	] as const;

	const faqs = [
		{
			q: 'Who is cogon.studio for?',
			a: 'Founders and eng leads at startups and growing teams who need a product-minded studio partner—not freelancers who disappear, not agencies that drown you in process.'
		},
		{
			q: 'What kinds of work do you take on?',
			a: 'From fuzzy idea or fragile MVP to production software that ships on schedule and stays maintainable. We blend product thinking with disciplined engineering.'
		},
		{
			q: 'How do we start?',
			a: 'Email hello@cogon.studio with the problem, stage, and timeline. We’ll reply with what we know, what’s uncertain, and a useful next step.'
		},
		{
			q: 'Where can I see your work?',
			a: 'We’re an early studio. Proof lives in public GitHub work and how we talk about tradeoffs—browse the org, then tell us what you’re building.'
		}
	] as const;

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
			},
			{
				'@type': 'FAQPage',
				mainEntity: faqs.map((item) => ({
					'@type': 'Question',
					name: item.q,
					acceptedAnswer: { '@type': 'Answer', text: item.a }
				}))
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
THESIS: Breezy illustrated studio landing that proves momentum-without-chaos; refuses text-only slabs and purple SaaS clones.
OWN-WORLD: Soft white fields, Night Grove accents, floating UI chips, unDraw scenes recolored to sprout/forest, soft depth shadows, pill CTAs.
STORY: Founder sees a warm visual partner, believes delivery can feel fresh, emails to start.
FIRST VIEWPORT: Centered brand + promise; accent word; CTA pair; floating UI cards + hero illustration collage.
FORM: Lyara-style breezy SaaS layout · persuade · seed key pinned-lyara-breezy-2026-09
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->

<section class="hero relative overflow-hidden" aria-labelledby="home-brand">
	<div class="hero-wash" aria-hidden="true"></div>
	{#each ['left', 'right'] as side}
		<div class="cogon-grass cogon-grass--{side}" aria-hidden="true">
			<img
				class="cogon-grass__image"
				src="{base}/illustrations/cogon-grass-corner.webp"
				alt=""
				width="1024"
				height="1536"
			/>
		</div>
	{/each}
	<svg class="hero-doodle hero-doodle--arrow" viewBox="0 0 80 40" aria-hidden="true">
		<path
			d="M4 28 C28 4, 52 4, 76 22"
			fill="none"
			stroke="currentColor"
			stroke-width="2.5"
			stroke-linecap="round"
		/>
		<path
			d="M62 14 L76 22 L64 30"
			fill="none"
			stroke="currentColor"
			stroke-width="2.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
	<svg class="hero-doodle hero-doodle--swoosh" viewBox="0 0 60 24" aria-hidden="true">
		<path
			d="M2 18 C18 2, 42 2, 58 14"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
		/>
	</svg>

	<div class="hero-stage relative z-1 mx-auto w-[min(94%,68rem)] pt-10 pb-16 md:pt-14 md:pb-24">
		<div class="hero-copy relative z-2 mx-auto max-w-2xl px-[min(4%,1.5rem)] text-center">
			<img
				class="mx-auto mb-5 size-12 rounded-2xl shadow-[0_12px_40px_rgb(11_74_59_/_18%)] md:size-14"
				src="{base}/brand/cogon-studio-square-light.png"
				alt=""
				width="56"
				height="56"
				fetchpriority="high"
			/>
			<h1
				id="home-brand"
				class="font-display text-foreground mx-auto max-w-[16ch] text-[clamp(2.5rem,5.8vw,4.35rem)] leading-[1.02] font-bold tracking-[-0.035em] text-balance"
			>
				Momentum without <span class="text-[var(--cogon-sprout)]">chaos</span>.
			</h1>
			<p
				class="text-muted-foreground mx-auto mt-4 max-w-[40ch] text-[clamp(1rem,1.5vw,1.2rem)] leading-relaxed"
			>
				Fresh product thinking and disciplined engineering for startups that need to ship—and keep
				growing. {brandGuidelines.tagline}
			</p>
			<div class="hero-actions mt-7 flex flex-wrap items-center justify-center gap-3">
				<Button
					href="mailto:{brandGuidelines.contact.email}?subject=Project%20inquiry"
					size="lg"
					class="hero-action rounded-full bg-[var(--cogon-gold)] px-6 text-[var(--cogon-night)] shadow-[0_10px_30px_rgb(228_181_68_/_35%)] hover:bg-[var(--cogon-gold)]/90"
				>
					Start a project
				</Button>
				<Button
					href={brandGuidelines.contact.github}
					target="_blank"
					rel="noopener noreferrer"
					variant="outline"
					size="lg"
					class="hero-action rounded-full px-6"
				>
					View on GitHub
				</Button>
			</div>
		</div>

		<div class="float-card float-card--checklist" aria-hidden="true">
			<div class="float-card__dots">
				<span></span><span></span><span></span>
			</div>
			<ul class="float-card__list">
				<li><CheckIcon class="size-3.5" /> Clarify the problem</li>
				<li><CheckIcon class="size-3.5" /> Name the tradeoffs</li>
				<li class="is-active"><CheckIcon class="size-3.5" /> Ship the next step</li>
			</ul>
		</div>

		<div class="float-card float-card--status" aria-hidden="true">
			<p class="float-card__label">Delivery</p>
			<p class="float-card__title">On schedule</p>
			<div class="float-card__bar"><span></span></div>
		</div>

		<div class="float-card float-card--note" aria-hidden="true">
			<p class="float-card__label">Decision log</p>
			<p class="float-card__body">
				“Here is what we know, what is uncertain, and the next useful step.”
			</p>
		</div>
	</div>
</section>

<section class="mx-auto w-[min(92%,72rem)] py-16 md:py-24" aria-labelledby="for-title">
	<div class="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
		<div>
			<h2
				id="for-title"
				class="font-display max-w-[16ch] text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.02] font-bold tracking-[-0.03em] text-balance"
			>
				Fast, simple, and seamlessly <span class="text-[var(--cogon-sprout)]">integrated</span>.
			</h2>
			<p class="text-muted-foreground mt-5 max-w-[52ch] text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed">
				Built for startups and growing teams who need a product-minded studio partner. We help you
				move from a fuzzy idea or fragile MVP to software that ships on schedule and stays
				maintainable.
			</p>
		</div>
		<img
			class="illust-panel mx-auto w-full max-w-md lg:max-w-none"
			src="{base}/illustrations/feature-ideas.svg"
			alt="Open-source illustration of ideas and product thinking"
			width="800"
			height="546"
			loading="lazy"
		/>
	</div>

	<ul class="mt-14 grid list-none gap-5 p-0 md:grid-cols-3 md:gap-6">
		{#each pillars as pillar}
			<li class="feature-tile">
				<img
					src={pillar.image}
					alt={pillar.alt}
					width="640"
					height="400"
					loading="lazy"
					class="feature-tile__img"
				/>
				<h3 class="font-display mt-5 text-xl font-semibold tracking-tight">{pillar.title}</h3>
				<p class="text-muted-foreground mt-2 text-[0.98rem] leading-relaxed">{pillar.detail}</p>
			</li>
		{/each}
	</ul>
</section>

<section class="band-soft" aria-labelledby="how-title">
	<div class="mx-auto w-[min(92%,72rem)] py-16 md:py-24">
		<div class="mx-auto max-w-2xl text-center">
			<h2
				id="how-title"
				class="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.02] font-bold tracking-[-0.03em] text-balance"
			>
				Your studio that <span class="text-[var(--cogon-sprout)]">builds with you</span>
			</h2>
			<p class="text-muted-foreground mt-5 text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed">
				Clear decisions. Dependable delivery. The handoff is growth-ready code and shared
				context—so the product can keep moving after launch.
			</p>
		</div>

		<ul class="mt-14 grid list-none gap-5 p-0 sm:grid-cols-2">
			{#each capabilities as item}
				<li class="cap-card">
					<div
						class="flex size-11 items-center justify-center rounded-full bg-[var(--cogon-night)] text-[var(--cogon-cream)]"
					>
						<item.icon class="size-5" aria-hidden="true" />
					</div>
					<h3 class="font-display mt-4 text-xl font-semibold tracking-tight">{item.title}</h3>
					<img
						src={item.image}
						alt={item.alt}
						width="640"
						height="400"
						loading="lazy"
						class="cap-card__img"
					/>
					<p class="text-muted-foreground mt-4 text-[0.98rem] leading-relaxed">{item.detail}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="mx-auto w-[min(92%,72rem)] py-16 md:py-24" aria-labelledby="values-title">
	<div class="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
		<img
			class="illust-panel order-2 mx-auto w-full max-w-lg lg:order-1 lg:max-w-none"
			src="{base}/illustrations/values-team.svg"
			alt="Open-source illustration of a founding team"
			width="1300"
			height="522"
			loading="lazy"
		/>
		<div class="order-1 lg:order-2">
			<h2
				id="values-title"
				class="font-display max-w-[12ch] text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.02] font-bold tracking-[-0.03em] text-balance"
			>
				How we <span class="text-[var(--cogon-sprout)]">show up</span>
			</h2>
			<ul class="mt-8 list-none space-y-0 p-0">
				{#each values as value}
					<li class="value-row">
						<p class="font-display text-lg font-semibold">{value.name}</p>
						<p class="text-muted-foreground mt-1">{value.detail}</p>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section class="band-soft" aria-labelledby="faq-title">
	<div class="mx-auto w-[min(92%,40rem)] py-16 md:py-24">
		<div class="text-center">
			<svg class="faq-bubble mx-auto mb-3" viewBox="0 0 48 40" aria-hidden="true">
				<path
					d="M8 6h28a6 6 0 0 1 6 6v12a6 6 0 0 1-6 6H22l-8 8v-8H8a6 6 0 0 1-6-6V12a6 6 0 0 1 6-6z"
					fill="none"
					stroke="currentColor"
					stroke-width="2.25"
					stroke-linejoin="round"
				/>
			</svg>
			<h2
				id="faq-title"
				class="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-bold tracking-[-0.03em]"
			>
				Frequently asked questions
			</h2>
		</div>
		<div class="mt-10">
			{#each faqs as faq}
				<details class="faq-item group">
					<summary class="faq-summary">
						<span>{faq.q}</span>
						<CaretDownIcon class="size-5 shrink-0" aria-hidden="true" />
					</summary>
					<p class="text-muted-foreground pb-5 pr-8 leading-relaxed">{faq.a}</p>
				</details>
			{/each}
		</div>
	</div>
</section>

<section class="mx-auto w-[min(92%,72rem)] py-16 md:py-28" aria-labelledby="contact-title">
	<div
		class="cta-panel grid items-center gap-8 overflow-hidden lg:grid-cols-[1.1fr_0.9fr] lg:gap-4"
	>
		<div class="relative z-1 px-8 py-10 md:px-12 md:py-14">
			<h2
				id="contact-title"
				class="font-display max-w-[14ch] text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.05] font-bold tracking-[-0.03em] text-balance"
			>
				Start a <span class="text-[var(--cogon-sprout)]">conversation</span>
			</h2>
			<p class="text-muted-foreground mt-5 max-w-[40ch] text-lg leading-relaxed">
				Email with the problem, stage, and timeline. We’ll reply with what we know, what’s
				uncertain, and a useful next step.
			</p>
			<div class="mt-8 flex flex-wrap gap-3">
				<Button
					href="mailto:{brandGuidelines.contact.email}?subject=Project%20inquiry"
					size="lg"
					class="rounded-full bg-[var(--cogon-gold)] px-6 text-[var(--cogon-night)] hover:bg-[var(--cogon-gold)]/90"
				>
					Start a project
				</Button>
				<Button
					href={brandGuidelines.contact.github}
					target="_blank"
					rel="noopener noreferrer"
					variant="outline"
					size="lg"
					class="rounded-full px-6"
				>
					View on GitHub
				</Button>
			</div>
		</div>
		<img
			class="cta-illust justify-self-center px-6 pb-8 lg:pb-0 lg:pr-10"
			src="{base}/illustrations/cta-idea.svg"
			alt="Open-source illustration of getting an idea"
			width="800"
			height="600"
			loading="lazy"
		/>
	</div>
</section>

<style>
	.hero {
		min-height: 100svh;
		display: grid;
		align-items: center;
	}

	.hero-wash {
		position: absolute;
		inset: -10% -5% auto;
		height: 70%;
		background:
			radial-gradient(ellipse 55% 45% at 18% 30%, color-mix(in srgb, var(--cogon-sprout) 18%, transparent), transparent 70%),
			radial-gradient(ellipse 50% 40% at 82% 20%, color-mix(in srgb, var(--cogon-gold) 16%, transparent), transparent 70%),
			radial-gradient(ellipse 70% 50% at 50% 0%, color-mix(in srgb, var(--muted) 70%, transparent), transparent 75%);
		pointer-events: none;
	}

	.cogon-grass {
		position: absolute;
		z-index: 0;
		bottom: -2.5rem;
		width: clamp(11rem, 22vw, 20rem);
		opacity: 0.38;
		pointer-events: none;
	}

	.cogon-grass--left {
		left: -3rem;
	}

	.cogon-grass--right {
		right: -3rem;
		transform: scaleX(-1);
	}

	.cogon-grass__image {
		display: block;
		width: 100%;
		height: auto;
		transform-origin: 48% 100%;
		animation: cogon-wind-left 7.2s ease-in-out infinite;
	}

	.cogon-grass--right .cogon-grass__image {
		animation-name: cogon-wind-right;
		animation-duration: 8.1s;
		animation-delay: -3.4s;
	}

	.hero-doodle {
		position: absolute;
		z-index: 2;
		width: 3.5rem;
		color: var(--cogon-sprout);
		opacity: 0.85;
		pointer-events: none;
	}

	.hero-doodle--arrow {
		top: 7.5rem;
		right: max(6%, calc(50% - 18rem));
		animation: doodle-bob 4.5s var(--cogon-ease) infinite;
	}

	.hero-doodle--swoosh {
		top: 11rem;
		left: max(8%, calc(50% - 20rem));
		width: 2.75rem;
		color: var(--cogon-gold);
		animation: doodle-bob 5.2s var(--cogon-ease) 0.6s infinite;
	}

	.hero-stage {
		min-height: 100svh;
		display: grid;
		align-items: center;
		padding-top: max(5.5rem, calc(4rem + env(safe-area-inset-top)));
		padding-bottom: max(11rem, calc(9.5rem + env(safe-area-inset-bottom)));
	}

	.float-card {
		position: absolute;
		z-index: 2;
		border-radius: 1.1rem;
		background: var(--card);
		border: 1px solid color-mix(in srgb, var(--foreground) 8%, transparent);
		box-shadow:
			0 18px 50px rgb(11 74 59 / 12%),
			0 4px 12px rgb(11 74 59 / 6%);
		padding: 0.9rem 1rem;
		text-align: left;
		animation: float-y 6.5s var(--cogon-ease) infinite;
	}

	.float-card--checklist {
		left: max(0%, 0.5%);
		top: 38%;
		width: min(13.5rem, 42vw);
		animation-delay: 0.4s;
	}

	.float-card--status {
		right: max(0%, 0.5%);
		top: 28%;
		width: min(11rem, 36vw);
		animation-delay: 1.1s;
	}

	.float-card--note {
		right: max(4%, 10%);
		bottom: 2%;
		width: min(15rem, 48vw);
		animation-delay: 0.2s;
	}

	.float-card__dots {
		display: flex;
		gap: 0.3rem;
		margin-bottom: 0.65rem;
	}

	.float-card__dots span {
		width: 0.45rem;
		height: 0.45rem;
		border-radius: 999px;
		background: color-mix(in srgb, var(--foreground) 18%, transparent);
	}

	.float-card__dots span:first-child {
		background: #ff6b6b;
	}

	.float-card__list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.45rem;
		font-size: 0.78rem;
		font-weight: 550;
		color: var(--foreground);
	}

	.float-card__list li {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		opacity: 0.55;
	}

	.float-card__list li.is-active {
		opacity: 1;
		color: var(--cogon-night);
	}

	:global(.dark) .float-card__list li.is-active {
		color: var(--cogon-sprout);
	}

	.float-card__list :global(svg) {
		color: var(--cogon-sprout);
	}

	.float-card__label {
		margin: 0;
		font-size: 0.68rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--muted-foreground);
	}

	.float-card__title {
		margin: 0.2rem 0 0.65rem;
		font-family: var(--font-display);
		font-size: 1.05rem;
		font-weight: 700;
	}

	.float-card__bar {
		height: 0.4rem;
		border-radius: 999px;
		background: color-mix(in srgb, var(--foreground) 8%, transparent);
		overflow: hidden;
	}

	.float-card__bar span {
		display: block;
		width: 78%;
		height: 100%;
		border-radius: inherit;
		background: linear-gradient(90deg, var(--cogon-sprout), var(--cogon-gold));
	}

	.float-card__body {
		margin: 0.35rem 0 0;
		font-size: 0.8rem;
		line-height: 1.45;
		font-weight: 550;
	}

	.illust-panel {
		width: 100%;
		max-height: 18rem;
		object-fit: contain;
		filter: drop-shadow(0 16px 36px rgb(11 74 59 / 8%));
	}

	.feature-tile__img,
	.cap-card__img,
	.cta-illust {
		filter: drop-shadow(0 16px 36px rgb(11 74 59 / 8%));
	}

	.feature-tile {
		border-radius: 1.25rem;
		background: var(--card);
		border: 1px solid color-mix(in srgb, var(--foreground) 7%, transparent);
		box-shadow: 0 16px 40px rgb(11 74 59 / 6%);
		padding: 1.15rem 1.15rem 1.4rem;
	}

	.feature-tile__img {
		width: 100%;
		height: 11.5rem;
		object-fit: contain;
		border-radius: 0.9rem;
		background: color-mix(in srgb, var(--muted) 55%, transparent);
		padding: 0.75rem;
	}

	.band-soft {
		background: color-mix(in srgb, var(--muted) 55%, var(--background));
	}

	.cap-card {
		border-radius: 1.25rem;
		background: var(--card);
		border: 1px solid color-mix(in srgb, var(--foreground) 7%, transparent);
		box-shadow: 0 18px 44px rgb(11 74 59 / 7%);
		padding: 1.35rem 1.35rem 1.5rem;
	}

	.cap-card__img {
		margin-top: 1rem;
		width: 100%;
		height: 10.5rem;
		object-fit: contain;
		border-radius: 0.9rem;
		background: color-mix(in srgb, var(--muted) 45%, transparent);
		padding: 0.65rem;
	}

	.value-row {
		border-bottom: 1px solid color-mix(in srgb, var(--foreground) 10%, transparent);
		padding: 1.15rem 0;
	}

	.value-row:first-child {
		border-top: 1px solid color-mix(in srgb, var(--foreground) 10%, transparent);
	}

	.faq-bubble {
		width: 2.5rem;
		color: var(--cogon-sprout);
	}

	.faq-item {
		border-bottom: 1px solid color-mix(in srgb, var(--foreground) 12%, transparent);
	}

	.faq-summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1.15rem 0;
		cursor: pointer;
		list-style: none;
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 1.05rem;
	}

	.faq-summary::-webkit-details-marker {
		display: none;
	}

	.faq-summary :global(svg) {
		transition: transform 220ms var(--cogon-ease);
		color: var(--muted-foreground);
	}

	.faq-item[open] .faq-summary :global(svg) {
		transform: rotate(180deg);
		color: var(--cogon-sprout);
	}

	.cta-panel {
		border-radius: 1.75rem;
		background: var(--card);
		border: 1px solid color-mix(in srgb, var(--foreground) 8%, transparent);
		box-shadow: 0 24px 60px rgb(11 74 59 / 8%);
		position: relative;
	}

	.cta-panel::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		background:
			radial-gradient(ellipse 50% 60% at 90% 80%, color-mix(in srgb, var(--cogon-sprout) 14%, transparent), transparent 70%),
			radial-gradient(ellipse 40% 50% at 10% 20%, color-mix(in srgb, var(--cogon-gold) 12%, transparent), transparent 70%);
		pointer-events: none;
	}

	.cta-illust {
		width: min(100%, 20rem);
		max-height: 16rem;
		object-fit: contain;
		position: relative;
		z-index: 1;
	}

	@keyframes float-y {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-0.65rem);
		}
	}

	@keyframes doodle-bob {
		0%,
		100% {
			transform: translateY(0) rotate(-4deg);
		}
		50% {
			transform: translateY(-0.35rem) rotate(2deg);
		}
	}

	@keyframes cogon-wind-left {
		0%,
		100% {
			transform: rotate(-1.2deg) skewX(-0.5deg);
		}
		32% {
			transform: rotate(2.6deg) skewX(1.2deg) translateX(0.15rem);
		}
		46% {
			transform: rotate(3.5deg) skewX(1.8deg) translateX(0.25rem);
		}
		72% {
			transform: rotate(-1.8deg) skewX(-0.9deg);
		}
	}

	@keyframes cogon-wind-right {
		0%,
		100% {
			transform: rotate(1deg) skewX(0.4deg);
		}
		38% {
			transform: rotate(-2.8deg) skewX(-1.4deg) translateX(-0.2rem);
		}
		55% {
			transform: rotate(-3.4deg) skewX(-1.8deg) translateX(-0.3rem);
		}
		78% {
			transform: rotate(1.6deg) skewX(0.8deg);
		}
	}

	@media (max-width: 52rem) {
		.cogon-grass {
			bottom: -1.75rem;
			width: clamp(10rem, 52vw, 15rem);
			opacity: 0.27;
		}

		.cogon-grass--left {
			left: -4.5rem;
		}

		.cogon-grass--right {
			right: -4.5rem;
		}

		.hero-actions {
			margin-inline: auto;
			width: min(100%, 19rem);
		}

		.hero-actions :global(.hero-action) {
			min-height: 2.75rem;
		}

		.float-card--note {
			display: none;
		}

		.float-card--checklist {
			top: auto;
			bottom: max(1.25rem, env(safe-area-inset-bottom));
			left: 1%;
			width: min(12rem, 49vw);
		}

		.float-card--status {
			top: auto;
			bottom: max(1.25rem, env(safe-area-inset-bottom));
			right: 1%;
			width: min(9.5rem, 37vw);
		}

		.hero-doodle--arrow {
			right: 8%;
			top: 6.5rem;
		}

		.hero-doodle--swoosh {
			left: 6%;
			top: 9.5rem;
		}
	}

	@media (max-width: 40rem) {
		.hero-actions {
			display: grid;
			grid-template-columns: 1fr;
		}

		.hero-actions :global(.hero-action) {
			width: 100%;
		}

		.hero-doodle {
			display: none;
		}
	}

	@media (min-width: 52.01rem) {
		.hero {
			min-height: 100vh;
		}

		.hero-stage {
			min-height: 100vh;
			padding-top: 6rem;
			padding-bottom: 4rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.cogon-grass__image,
		.float-card,
		.hero-doodle {
			animation: none;
		}
	}
</style>

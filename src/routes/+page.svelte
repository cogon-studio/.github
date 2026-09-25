<script lang="ts">
	import { base } from '$app/paths';
	import { Button } from '$lib/components/ui/button/index.js';
	import MediaFrame from '$lib/components/media-frame.svelte';
	import { brandGuidelines } from '$lib/brand/guidelines.js';

	const siteUrl = 'https://cogon.studio/';
	const title = 'cogon.studio — Infrastructure for software that has to hold';
	const description =
		'Product engineering infrastructure for founders and engineering leads. Named decisions, visible quality, and a system your team can inherit.';

	const hold = [
		'Decisions',
		'Delivery',
		'Security',
		'Handoff',
		'Context',
		'Follow-through'
	];

	const proofs = [
		{
			index: '01',
			title: 'Decisions named',
			detail: 'The tradeoff is written down before the first sprint spends it.'
		},
		{
			index: '02',
			title: 'Quality in the week',
			detail: 'Review and follow-through are part of the build, not a closing phase.'
		},
		{
			index: '03',
			title: 'Security in the build',
			detail: 'Threats and access are discussed while the system is still cheap to change.'
		},
		{
			index: '04',
			title: 'Context that transfers',
			detail: 'Your team leaves with the map, not a dependency on us.'
		}
	] as const;

	const founderPoints = [
		{
			title: 'A product that can take weight',
			detail: 'We turn a fragile idea or a shaky MVP into software with a structure you can extend.'
		},
		{
			title: 'One path from brief to launch',
			detail: 'Scope, sequence, and the thing we will not build are agreed before the calendar fills.'
		},
		{
			title: 'A record your next hire can read',
			detail: 'Decisions stay attached to the code, so the company is not trapped in a private chat.'
		}
	] as const;

	const leadPoints = [
		{
			title: 'A pair inside the team',
			detail: 'We work in your repo and your rituals. The work is visible to the people who will own it.'
		},
		{
			title: 'Standards you can keep',
			detail: 'Quality bars, review habits, and release checks stay after the engagement ends.'
		},
		{
			title: 'Plain status',
			detail: 'You hear what shipped, what slipped, and what the next useful step is.'
		}
	] as const;

	const products = [
		{
			id: 'decide',
			label: 'Decide',
			title: 'Name the system before you staff it',
			detail:
				'We write the constraints, the users, and the cut line. The first build spends effort on the part that has to hold.',
			points: ['Problem and non-goals in writing', 'A sequence, not a wishlist', 'Risks called before they are expensive'],
			image: `${base}/placeholders/product-decide.svg`,
			alt: 'Editorial illustration of a forest-green decision board in a bright studio: three columns labeled Decide, Cut, and Hold, lime tickets pinned to a white panel, a founder and an engineer standing at the board, no company logos, strong and precise, 16:9.'
		},
		{
			id: 'build',
			label: 'Build',
			title: 'Ship in the open, with the team watching',
			detail:
				'Product and engineering sit in the same week. Interfaces, data, and the unhappy paths land together.',
			points: ['Weekly increments you can run', 'Review that is about the product', 'Security notes beside the change'],
			image: `${base}/placeholders/product-build.svg`,
			alt: 'Cinematic illustration of an engineering bench: dual monitors with a clean product UI in forest and lime, a pair of people reviewing a pull request on a large screen, natural light, no fake metrics, reliable infrastructure mood, 16:9.'
		},
		{
			id: 'steady',
			label: 'Steady',
			title: 'Keep the release from becoming a surprise',
			detail:
				'The system gets a pace: what is healthy, what is degrading, and who acts when it slips.',
			points: ['Release checks that fit the team', 'Ownership written next to each surface', 'Incidents that leave a shorter path next time'],
			image: `${base}/placeholders/product-steady.svg`,
			alt: 'Wide illustration of a calm operations wall: a large status surface with four healthy rows and one lime warning, a person standing back to read it, deep forest room, white light, no brand logos, trustworthy and solid, 16:9.'
		},
		{
			id: 'handoff',
			label: 'Hand off',
			title: 'Leave a system the team can run',
			detail:
				'The last mile is the map: how it is built, how it fails, and how to change it without us in the room.',
			points: ['Architecture the next hire can follow', 'A walkthrough, not a dump of docs', 'The open questions still labeled open'],
			image: `${base}/placeholders/product-handoff.svg`,
			alt: 'Illustration of a handoff table: printed system map, a laptop showing a simple architecture diagram in forest ink and lime, two people closing a notebook, bright sage room, no logos, precise and human, 16:9.'
		}
	] as const;

	let productId = $state<(typeof products)[number]['id']>('decide');
	const product = $derived(products.find((item) => item.id === productId) ?? products[0]);

	const partners = [
		{
			title: 'A structured path',
			detail: 'Initiation, build, and launch have a written sequence. Dates are negotiated, not implied.',
			image: `${base}/placeholders/partner-path.svg`,
			alt: 'Small illustration of a three-step path drawn as heavy forest blocks with a lime arrow, on a sage field, no text other than abstract marks, square crop.'
		},
		{
			title: 'A dedicated pair',
			detail: 'You get people who stay on the work, not a rotating cast introduced by a slide.',
			image: `${base}/placeholders/partner-pair.svg`,
			alt: 'Small illustration of two figures at one desk, forest silhouettes, lime screen glow, simple and strong, no faces in photographic detail, square crop.'
		},
		{
			title: 'Sessions that leave a record',
			detail: 'Working sessions cover product, engineering, and the risks. Notes stay with the repo.',
			image: `${base}/placeholders/partner-session.svg`,
			alt: 'Small illustration of a workshop table from above: notebooks, a lime marker, a forest-green laptop, sage background, orderly and serious, square crop.'
		}
	] as const;

	const notes = [
		{
			title: 'Public work',
			detail: 'Proof is the code and the way tradeoffs are discussed. Browse the org, then tell us what you are holding.',
			href: brandGuidelines.contact.github,
			label: 'Open GitHub',
			image: `${base}/placeholders/note-github.svg`,
			alt: 'Photograph-style placeholder of a dark forest code review on a large monitor, lime cursor, quiet office, no readable secrets, 16:10.'
		},
		{
			title: 'The standard',
			detail: 'Type, color, voice, and the rules for proof. The page is the source agents and people should follow.',
			href: `${base}/brand-identity`,
			label: 'Read the standard',
			image: `${base}/placeholders/note-standard.svg`,
			alt: 'Still life of a brand specimen: huge Plus Jakarta letters spelling HOLD in forest green on white paper, a lime chip beside them, overhead light, 16:10.'
		},
		{
			title: 'How to start',
			detail: 'Email the problem, the stage, and the timeline. The reply names what we know, what is open, and the next step.',
			href: 'mailto:hello@cogon.studio?subject=Project%20inquiry',
			label: 'Email the studio',
			image: `${base}/placeholders/note-start.svg`,
			alt: 'Close photograph of a short handwritten brief on white paper next to a lime pencil, forest shadow, no logos, calm and exact, 16:10.'
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
				slogan: brandGuidelines.tagline
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
	<meta name="robots" content="index,follow" />
	<link rel="canonical" href={siteUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:site_name" content="cogon.studio" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<section class="hero" aria-labelledby="home-title">
	<p class="eyebrow">Product engineering infrastructure</p>
	<h1 id="home-title">Infrastructure to hold the software you ship</h1>
	<p class="lede">
		Founders and engineering leads plug cogon.studio in when a product has to keep shipping.
		Decisions, delivery, and the system your team inherits — from inside your own practice.
	</p>
	<div class="hero-actions">
		<Button href="mailto:hello@cogon.studio?subject=Project%20inquiry" class="lime-cta">
			Get in touch
		</Button>
		<a class="text-link" href="#delivery">See how delivery works</a>
	</div>
	<div class="hero-media">
		<MediaFrame
			video
			src="{base}/placeholders/hero-operations.svg"
			width={1600}
			height={900}
			caption="Hero loop"
			alt="Looping hero film, 16:9: a late-afternoon city of glass towers color-graded deep forest green, camera slowly pushing in. A large translucent product panel floats in front, showing a release board with columns Decide, Build, and Steady, calm rows, and one lime status mark. No real company logos. Photoreal, strong, trustworthy infrastructure advertising."
		/>
	</div>
</section>

<section class="marquee" aria-label="What the practice holds">
	<div class="marquee-track">
		{#each [0, 1] as copy}
			<ul aria-hidden={copy === 1}>
				{#each hold as item}
					<li>{item}</li>
				{/each}
			</ul>
		{/each}
	</div>
</section>

<section class="proof" id="proof" aria-labelledby="proof-title">
	<div class="proof-copy">
		<h2 id="proof-title">The work stays standing after launch.</h2>
		<p>
			We do not publish invented volumes. The proof is how the work is held: a named decision,
			a visible week, and a system someone else can run.
		</p>
		<a href="{base}/brand-identity">Read the standard</a>
	</div>
	<ul class="proof-grid">
		{#each proofs as item}
			<li>
				<span>{item.index}</span>
				<h3>{item.title}</h3>
				<p>{item.detail}</p>
			</li>
		{/each}
	</ul>
</section>

<section class="tracks" id="practice" aria-labelledby="founders-title">
	<article class="track">
		<div class="track-copy">
			<p class="eyebrow">For founders</p>
			<h2 id="founders-title">A desk for products that cannot wobble</h2>
			<ul>
				{#each founderPoints as point}
					<li>
						<h3>{point.title}</h3>
						<p>{point.detail}</p>
					</li>
				{/each}
			</ul>
		</div>
		<MediaFrame
			src="{base}/placeholders/track-founders.svg"
			width={1200}
			height={1400}
			alt="Tall illustration of a founder at a white desk in a forest-green room, a large lime-edged product sketch on the wall, architectural and calm, no logos, portrait crop, strong reliable studio, not playful."
		/>
	</article>

	<article class="track track-flip">
		<div class="track-copy">
			<p class="eyebrow">For engineering leads</p>
			<h2>Capacity that stays inside the team</h2>
			<ul>
				{#each leadPoints as point}
					<li>
						<h3>{point.title}</h3>
						<p>{point.detail}</p>
					</li>
				{/each}
			</ul>
		</div>
		<MediaFrame
			src="{base}/placeholders/track-engineering.svg"
			width={1200}
			height={1400}
			alt="Tall illustration of an engineering floor: long table, two people at one screen showing a clean interface in forest and lime, concrete and sage light, no logos, serious and precise, portrait crop."
		/>
	</article>
</section>

<section class="products" id="products" aria-labelledby="products-title">
	<div class="section-intro">
		<h2 id="products-title">Plug in the work the product actually needs</h2>
		<p>Four modes. One practice. The picture changes with the work.</p>
	</div>
	<div class="product-tabs" role="tablist" aria-label="Practice modes">
		{#each products as item}
			<button
				type="button"
				role="tab"
				id="tab-{item.id}"
				aria-selected={productId === item.id}
				aria-controls="panel-{item.id}"
				onclick={() => (productId = item.id)}
			>
				{item.label}
			</button>
		{/each}
	</div>
	<div
		class="product-panel"
		role="tabpanel"
		id="panel-{product.id}"
		aria-labelledby="tab-{product.id}"
	>
		<MediaFrame src={product.image} width={1400} height={900} alt={product.alt} />
		<div>
			<h3>{product.title}</h3>
			<p>{product.detail}</p>
			<ul>
				{#each product.points as point}
					<li>{point}</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section class="deliver" id="delivery" aria-labelledby="deliver-title">
	<MediaFrame
		src="{base}/placeholders/deliver-floor.svg"
		width={1400}
		height={1100}
		alt="Wide illustration of a delivery floor seen from a mezzanine: people moving between a planning wall and a build table, forest architecture, lime floor marks, daylight, no logos, monumental and calm."
	/>
	<div>
		<h2 id="deliver-title">Deliver software that keeps shipping</h2>
		<p>
			One practice, from the first cut to the release your team owns. The point is a product
			that still moves when we are no longer in the room.
		</p>
		<ul>
			<li>Decisions written before the sprint spends them</li>
			<li>Quality and security visible in the week, not the postmortem</li>
			<li>A handoff your next hire can follow without a tour from us</li>
		</ul>
	</div>
</section>

<section class="partner" aria-labelledby="partner-title">
	<div class="section-intro">
		<h2 id="partner-title">Partnering with us</h2>
		<p>We stay in the work from the first brief to the release your team owns.</p>
	</div>
	<ul class="partner-grid">
		{#each partners as item}
			<li>
				<MediaFrame src={item.image} width={800} height={560} alt={item.alt} />
				<h3>{item.title}</h3>
				<p>{item.detail}</p>
			</li>
		{/each}
	</ul>
</section>

<section class="standards" id="standards" aria-labelledby="standards-title">
	<div>
		<p class="eyebrow">How the work stays reliable</p>
		<h2 id="standards-title">Standards you can inspect</h2>
		<p>
			We do not borrow licences or customer logos. Reliability here means the bar is written:
			what good looks like, how security is handled, and how status is told.
		</p>
		<a class="lime-text" href="{base}/brand-identity">View the standard</a>
	</div>
	<MediaFrame
		src="{base}/placeholders/standards-map.svg"
		width={1400}
		height={900}
		alt="Illustrated map of a practice, not a world map of licences: four regions labeled Decide, Build, Steady, and Hand off, connected by lime routes on a deep forest field, precise infographic, no country names, no fake seals."
	/>
</section>

<section class="close" aria-labelledby="close-title">
	<h2 id="close-title">Start with what the system has to hold</h2>
	<p>
		Email the problem, the stage, and the timeline. You get back what we know, what is uncertain,
		and a useful next step.
	</p>
	<Button href="mailto:hello@cogon.studio?subject=Project%20inquiry" class="lime-cta">
		Get in touch
	</Button>
</section>

<section class="notes" aria-labelledby="notes-title">
	<h2 id="notes-title" class="sr-only">Ways in</h2>
	<ul>
		{#each notes as note}
			<li>
				<MediaFrame src={note.image} width={1200} height={750} alt={note.alt} />
				<h3>{note.title}</h3>
				<p>{note.detail}</p>
				<a href={note.href}>{note.label}</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.hero,
	.proof,
	.tracks,
	.products,
	.deliver,
	.partner,
	.standards,
	.close,
	.notes {
		width: min(94%, 88rem);
		margin-inline: auto;
	}

	.eyebrow {
		margin: 0 0 1rem;
		font-family: var(--font-mono);
		font-size: 0.75rem;
		font-weight: 500;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--cogon-muted);
	}

	.hero {
		padding: 4.5rem 0 1rem;
		text-align: center;
	}

	h1,
	h2,
	.product-panel h3,
	.close h2 {
		font-family: var(--font-display);
		font-weight: 800;
		letter-spacing: -0.045em;
		line-height: 0.92;
		text-wrap: balance;
	}

	h1 {
		max-width: 16ch;
		margin: 0 auto;
		font-size: clamp(3.1rem, 7.4vw, 6.5rem);
		text-transform: uppercase;
	}

	.lede,
	.proof-copy p,
	.section-intro p,
	.deliver p,
	.standards p,
	.close p,
	.notes p,
	.track-copy p,
	.product-panel p {
		color: var(--muted-foreground);
		font-size: 1.05rem;
		line-height: 1.55;
	}

	.lede {
		max-width: 42rem;
		margin: 1.5rem auto 0;
		color: var(--foreground);
		font-size: 1.15rem;
		font-weight: 560;
	}

	.hero-actions,
	.close {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.hero-actions {
		margin-top: 1.75rem;
	}

	:global(.lime-cta) {
		height: 3.25rem !important;
		border-radius: 999px !important;
		background: var(--cogon-lime) !important;
		color: var(--cogon-lime-ink) !important;
		padding-inline: 1.4rem !important;
		font-size: 1rem !important;
		font-weight: 800 !important;
	}

	.text-link,
	.proof-copy a,
	.lime-text,
	.notes a {
		color: var(--foreground);
		font-weight: 750;
		text-underline-offset: 0.2em;
	}

	.hero-media {
		margin-top: 2.75rem;
		text-align: left;
	}

	.hero-media :global(.media-frame) {
		aspect-ratio: 16 / 9;
		min-height: 18rem;
	}

	.marquee {
		margin-top: 3rem;
		overflow: hidden;
		border-block: 1px solid var(--border);
		background: var(--cogon-canvas);
	}

	.marquee-track {
		display: flex;
		width: max-content;
		animation: march 28s linear infinite;
	}

	.marquee ul {
		display: flex;
		gap: 2.5rem;
		margin: 0;
		padding: 1rem 1.25rem;
		list-style: none;
	}

	.marquee li {
		font-family: var(--font-display);
		font-size: 1.35rem;
		font-weight: 800;
		letter-spacing: -0.04em;
		text-transform: uppercase;
	}

	.marquee li::before {
		content: '';
		display: inline-block;
		width: 0.55rem;
		height: 0.55rem;
		margin-right: 2.5rem;
		border-radius: 999px;
		background: var(--cogon-lime);
		transform: translateY(-0.15rem);
	}

	.proof {
		display: grid;
		gap: 2.5rem;
		padding: 5rem 0;
	}

	.proof h2,
	.section-intro h2,
	.track-copy h2,
	.deliver h2,
	.standards h2 {
		margin: 0;
		font-size: clamp(2.4rem, 5vw, 4.4rem);
		text-transform: uppercase;
	}

	.proof-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 0.8rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.proof-grid li {
		min-height: 16rem;
		padding: 1.25rem;
		border-radius: 1.5rem;
		background: var(--cogon-canvas);
	}

	.proof-grid span {
		font-family: var(--font-mono);
		font-weight: 600;
		color: var(--cogon-inverse);
		background: var(--cogon-lime);
		border-radius: 999px;
		padding: 0.2rem 0.55rem;
	}

	.proof-grid h3,
	.track-copy h3,
	.partner-grid h3,
	.notes h3 {
		margin: 1rem 0 0.4rem;
		font-size: 1.25rem;
		font-weight: 800;
		letter-spacing: -0.03em;
	}

	.track {
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		gap: 3rem;
		align-items: center;
		padding: 3rem 0 4rem;
	}

	.track-flip {
		grid-template-columns: 0.9fr 1.1fr;
	}

	.track-flip .track-copy {
		order: 2;
	}

	.track-copy ul,
	.product-panel ul,
	.deliver ul,
	.partner-grid,
	.notes ul {
		margin: 1.5rem 0 0;
		padding: 0;
		list-style: none;
	}

	.track-copy li + li,
	.product-panel li + li,
	.deliver li + li {
		margin-top: 1.1rem;
		padding-top: 1.1rem;
		border-top: 1px solid var(--border);
	}

	.track :global(.media-frame) {
		aspect-ratio: 4 / 5;
	}

	.products {
		padding: 2rem 0 4rem;
	}

	.section-intro {
		max-width: 40rem;
	}

	.section-intro p,
	.partner .section-intro {
		max-width: 36rem;
	}

	.partner .section-intro {
		max-width: none;
	}

	.product-tabs {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin: 1.75rem 0;
	}

	.product-tabs button {
		border: 1px solid var(--border);
		border-radius: 999px;
		background: transparent;
		color: var(--foreground);
		padding: 0.7rem 1.1rem;
		font-weight: 750;
		cursor: pointer;
	}

	.product-tabs button[aria-selected='true'] {
		border-color: var(--cogon-inverse);
		background: var(--cogon-inverse);
		color: var(--cogon-on-inverse);
	}

	:global(.dark) .product-tabs button[aria-selected='true'] {
		background: var(--cogon-lime);
		color: var(--cogon-lime-ink);
		border-color: var(--cogon-lime);
	}

	.product-panel {
		display: grid;
		grid-template-columns: 1.3fr 0.7fr;
		gap: 2rem;
		align-items: center;
	}

	.product-panel :global(.media-frame) {
		aspect-ratio: 16 / 10;
	}

	.product-panel h3 {
		margin: 0 0 0.8rem;
		font-size: clamp(2rem, 3vw, 3rem);
		text-transform: uppercase;
	}

	.deliver {
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		gap: 2.5rem;
		align-items: center;
		padding: 2rem 0 4rem;
	}

	.deliver :global(.media-frame) {
		aspect-ratio: 5 / 4;
	}

	.partner {
		padding-bottom: 4rem;
	}

	.partner-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1.25rem;
	}

	.partner-grid :global(.media-frame) {
		aspect-ratio: 16 / 11;
		box-shadow: none;
	}

	.standards {
		display: grid;
		grid-template-columns: 0.8fr 1.2fr;
		gap: 2rem;
		align-items: center;
		margin-bottom: 4rem;
		padding: 2.5rem;
		border-radius: 2rem;
		background: var(--cogon-inverse);
		color: var(--cogon-on-inverse);
	}

	.standards .eyebrow,
	.standards p {
		color: rgb(242 245 240 / 78%);
	}

	.standards h2 {
		color: var(--cogon-lime);
	}

	.standards .lime-text {
		color: #fff;
	}

	.close {
		padding: 2rem 0 4.5rem;
		text-align: center;
	}

	.close h2 {
		max-width: 14ch;
		margin: 0;
		font-size: clamp(2.8rem, 6vw, 5.4rem);
		text-transform: uppercase;
	}

	.close p {
		max-width: 36rem;
	}

	.notes {
		padding-bottom: 5rem;
	}

	.notes ul {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1.25rem;
	}

	.notes :global(.media-frame) {
		aspect-ratio: 16 / 10;
		margin-bottom: 1rem;
		box-shadow: none;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
	}

	@keyframes march {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	@media (max-width: 60rem) {
		.proof-grid,
		.track,
		.track-flip,
		.product-panel,
		.deliver,
		.partner-grid,
		.standards,
		.notes ul {
			grid-template-columns: 1fr;
		}

		.track-flip .track-copy {
			order: 0;
		}

		.section-intro {
			max-width: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.marquee-track {
			animation: none;
			width: auto;
			flex-wrap: wrap;
		}

		.marquee ul[aria-hidden='true'] {
			display: none;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		h1 {
			animation: rise 700ms var(--cogon-ease) both;
		}
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(1rem);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}
</style>

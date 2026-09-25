<script lang="ts">
	import { tick } from 'svelte';
	import { base } from '$app/paths';
	import { Button } from '$lib/components/ui/button/index.js';
	import MediaFrame from '$lib/components/media-frame.svelte';
	import { brandGuidelines } from '$lib/brand/guidelines.js';

	const siteUrl = 'https://cogon.studio/';
	const title = 'cogon.studio — In-house software';
	const description = 'cogon.studio designs, builds, and runs its own software.';

	const reel = ['Decisions', 'Delivery', 'Security', 'Handoff', 'Context', 'Follow-through'] as const;

	const products = [
		{
			name: 'Lean Photos',
			platform: 'iOS',
			features: [
				'Personal media stays on the device',
				'Camera Roll is Keep or Clear',
				'Screenshots and recordings stay separate',
				'Clear can be undone until commit',
				'Commit sends items to Recently Deleted',
				'Groups, scoring, Top 3, and lean-vision'
			],
			tags: ['iOS 26 glass', 'Photos permission', 'Keep / Clear', 'On This Day', 'lean-vision'],
			image: `${base}/placeholders/lean-photos.svg`,
			alt: 'iPhone frame in forest green showing Lean Photos: a camera-roll grid, Keep and Clear controls, a lime glass bar, and a pending Clear row. On-device only, no cloud icons, iOS 26, 16:10.',
			href: 'https://leanphotos.cogon.studio',
			more: 'Photos permission can be authorized, limited, or denied. Camera Roll is Keep or Clear. Screenshots and recordings stay separate. A Clear can be undone until you commit it. After commit, Apple moves those items to Recently Deleted, and Lean Photos cannot restore them.'
		},
		{
			name: 'Local Git',
			platform: 'iOS 26',
			features: [
				'Links an On My iPhone folder',
				'Syncs a repository you can push to',
				'Commits, integrates, and pushes',
				'No force-push or rebase',
				'Conflicts wait for your choice',
				'Same sync from Apple Shortcuts'
			],
			tags: ['On My iPhone', 'GitHub', 'Shortcuts', 'Stable capture', 'Recovery'],
			image: `${base}/placeholders/local-git.svg`,
			alt: 'iPhone frame showing Local Git: a linked folder name, a calm sync status, and two recovery choices labeled iPhone and GitHub. Forest and lime, no credentials on screen, 16:10.',
			href: 'https://localgit.cogon.studio',
			more: 'Pick a folder under On My iPhone, not iCloud Drive, and a repository you can push to. Sync takes a stable capture, then commits, integrates, and pushes. No force-push and no rebase. If both sides changed, you choose the iPhone or GitHub version for each path. The same sync is available from Apple Shortcuts.'
		},
		{
			name: 'Podspace',
			platform: 'Desktop',
			features: [
				'Websites become separate windows',
				'Apps live in Spaces',
				'Profiles keep accounts apart',
				'A catalog of web apps is included',
				'Any URL can be added'
			],
			tags: ['Spaces', 'Profiles', 'Catalog', 'Custom URL', 'Multi-account'],
			image: `${base}/placeholders/podspace.svg`,
			alt: 'Desktop window of Podspace: several website apps as isolated windows grouped into a Space, with a profile switcher in lime on a forest frame. No real company logos, 16:10.',
			href: 'https://podspace.cogon.studio',
			more: 'Each site runs in its own window. Spaces group those windows. A Profile is one account, so two logins for the same site stay apart. A catalog of common web apps is included, and any URL can be added.'
		}
	] as const;

	const points = [
		{
			index: '01',
			title: 'In-house',
			detail: 'The same team designs, builds, and ships.'
		},
		{
			index: '02',
			title: 'Our products',
			detail: 'We build the studio’s own software.'
		},
		{
			index: '03',
			title: 'After launch',
			detail: 'We keep running what we ship.'
		}
	] as const;

	let dialog = $state<HTMLDialogElement>();
	let selected = $state<(typeof products)[number] | null>(null);

	async function openProduct(product: (typeof products)[number]) {
		selected = product;
		await tick();
		dialog?.showModal();
	}

	const jsonLd = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				'@id': `${siteUrl}#organization`,
				name: brandGuidelines.brand,
				url: siteUrl,
				email: brandGuidelines.contact.email,
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
	<p class="eyebrow">In-house software</p>
	<h1 id="home-title">We build our own software</h1>
	<p class="lede">Design, build, and run. The work stays inside the studio.</p>
	<div class="hero-actions">
		<Button href="mailto:hello@cogon.studio?subject=Hello" class="lime-cta">Get in touch</Button>
		<a class="text-link" href="#products">See what we built</a>
	</div>
	<div class="hero-media">
		<MediaFrame
			video
			src="{base}/placeholders/hero-operations.svg"
			width={1600}
			height={900}
			caption="Hero loop"
			alt="Looping hero film, 16:9: an in-house engineering room in deep forest green, a team at one long desk, a product on the main screen with a lime status mark. No client logos. Photoreal, strong, quiet."
		/>
	</div>
</section>

<section class="marquee" aria-label="What the studio holds">
	<div class="marquee-track">
		{#each [0, 1] as copy}
			<ul aria-hidden={copy === 1}>
				{#each reel as item}
					<li>{item}</li>
				{/each}
			</ul>
		{/each}
	</div>
</section>

<section class="pride" id="proud" aria-labelledby="proud-title">
	<div class="pride-card">
		<div>
			<p class="eyebrow">What we're proud of</p>
			<h2 id="proud-title">The work stays here</h2>
			<p>One team designs, builds, and keeps the software. Nothing is handed out.</p>
			<ul>
				{#each points as item}
					<li>
						<strong>{item.title}.</strong>
						{item.detail}
					</li>
				{/each}
			</ul>
			<a href="#products">See what we built</a>
		</div>
		<MediaFrame
			src="{base}/placeholders/standards-map.svg"
			width={1400}
			height={900}
			caption="In the studio"
			alt="Forest-green panel with a pale product card and a lime circle, the same quiet illustration language as the studio site. No logos."
		/>
	</div>
</section>

<section class="products" id="products" aria-labelledby="products-title">
	<h2 id="products-title">What we built</h2>
	<ul>
		{#each products as product}
			<li>
				<MediaFrame src={product.image} width={1200} height={750} alt={product.alt} />
				<p class="badge">{product.platform}</p>
				<h3>{product.name}</h3>
				<ul class="features">
					{#each product.features as feature}
						<li>{feature}</li>
					{/each}
				</ul>
				<ul class="tags">
					{#each product.tags as tag}
						<li>{tag}</li>
					{/each}
				</ul>
				<button type="button" onclick={() => openProduct(product)}>Details</button>
			</li>
		{/each}
	</ul>
</section>

<dialog bind:this={dialog} class="product-dialog" aria-labelledby="product-dialog-title" onclose={() => (selected = null)}>
	{#if selected}
		<p class="badge">{selected.platform}</p>
		<h2 id="product-dialog-title">{selected.name}</h2>
		<ul class="features">
			{#each selected.features as feature}
				<li>{feature}</li>
			{/each}
		</ul>
		<p>{selected.more}</p>
		<div class="product-dialog__actions">
			<Button href={selected.href} class="lime-cta">Open {selected.href.replace('https://', '')}</Button>
			<button type="button" class="dialog-close" onclick={() => dialog?.close()}>Close</button>
		</div>
	{/if}
</dialog>

<section class="contact" id="contact" aria-labelledby="contact-title">
	<div class="contact-card">
		<p class="eyebrow">Collaboration</p>
		<h2 id="contact-title">Contact for collaboration</h2>
		<p>Email hello@cogon.studio.</p>
		<Button href="mailto:hello@cogon.studio?subject=Collaboration" class="lime-cta">Get in touch</Button>
	</div>
</section>

<style>
	.hero,
	.products {
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
	h2 {
		font-family: var(--font-display);
		font-weight: 800;
		letter-spacing: -0.045em;
		line-height: 0.92;
		text-wrap: balance;
	}

	h1 {
		max-width: 14ch;
		margin: 0 auto;
		font-size: clamp(3.1rem, 7.4vw, 6.5rem);
		text-transform: uppercase;
	}

	.lede,
	.products > ul > li > p {
		color: var(--foreground);
		font-size: 1.15rem;
		font-weight: 560;
		line-height: 1.5;
	}

	.lede {
		max-width: 28rem;
		margin: 1.5rem auto 0;
	}

	.hero-actions {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
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

	.text-link {
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

	.pride,
	.contact {
		width: min(94%, 88rem);
		margin: 3rem auto 0;
		scroll-margin-top: 7.5rem;
	}

	.pride-card,
	.contact-card {
		display: grid;
		grid-template-columns: 0.85fr 1.15fr;
		gap: 2rem;
		align-items: center;
		padding: clamp(1.5rem, 3vw, 2.75rem);
		border-radius: 2rem;
		background: var(--cogon-inverse);
		color: var(--cogon-on-inverse);
	}

	.contact-card {
		grid-template-columns: 1fr;
		justify-items: start;
		margin-bottom: 4rem;
	}

	.pride-card .eyebrow,
	.contact-card .eyebrow {
		color: rgb(242 245 240 / 62%);
	}

	.pride-card h2,
	.contact-card h2,
	.products h2 {
		margin: 0.35rem 0 0.8rem;
		color: var(--cogon-lime);
		font-size: clamp(2.6rem, 5.4vw, 4.6rem);
		text-transform: uppercase;
	}

	.products h2 {
		color: var(--foreground);
	}

	.pride-card p,
	.contact-card p,
	.pride-card li {
		max-width: 36rem;
		margin: 0;
		color: rgb(242 245 240 / 82%);
		line-height: 1.5;
	}

	.pride-card ul {
		margin: 1.1rem 0 0;
		padding: 0;
		list-style: none;
	}

	.pride-card li + li {
		margin-top: 0.45rem;
	}

	.pride-card a {
		display: inline-block;
		margin-top: 1.25rem;
		color: #fff;
		font-weight: 750;
		text-underline-offset: 0.2em;
	}

	.pride-card :global(.media-frame) {
		aspect-ratio: 16 / 10;
		box-shadow: none;
	}

	.contact-card :global(.lime-cta) {
		margin-top: 1.25rem;
	}

	.products {
		padding: 3.5rem 0 0;
		scroll-margin-top: 7.5rem;
	}

	.products > ul {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1rem;
		margin: 1.5rem 0 0;
		padding: 0;
		list-style: none;
	}

	.products h3 {
		margin: 0.35rem 0 0.45rem;
		font-size: 1.6rem;
		font-weight: 800;
		letter-spacing: -0.03em;
	}

	.products > ul > li > p {
		margin: 0;
		color: var(--muted-foreground);
		font-size: 1rem;
		font-weight: 500;
		line-height: 1.45;
	}

	.products .badge,
	.product-dialog .badge {
		display: inline-flex;
		margin: 0.9rem 0 0;
		border-radius: 999px;
		background: var(--cogon-lime);
		color: var(--cogon-lime-ink);
		padding: 0.22rem 0.6rem;
		font-family: var(--font-mono);
		font-size: 0.68rem;
		font-weight: 650;
		letter-spacing: 0.08em;
		line-height: 1.2;
		text-transform: uppercase;
	}

	.products :global(.media-frame) {
		aspect-ratio: 16 / 10;
		box-shadow: none;
	}

	.features {
		margin: 0.7rem 0 0;
		padding-left: 1.15rem;
		color: var(--muted-foreground);
		font-size: 0.95rem;
		line-height: 1.45;
		list-style: disc;
	}

	.features li + li {
		margin-top: 0.25rem;
	}

	.features li::marker {
		color: var(--cogon-ink);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin: 0.9rem 0 0;
		padding: 0;
		list-style: none;
	}

	.tags li {
		border-radius: 999px;
		background: var(--cogon-sage);
		padding: 0.28rem 0.55rem;
		font-size: 0.78rem;
		font-weight: 650;
	}

	.products > ul > li > button {
		margin-top: 1rem;
		border: 0;
		border-radius: 999px;
		background: var(--cogon-inverse);
		color: var(--cogon-on-inverse);
		padding: 0.55rem 0.9rem;
		font-weight: 750;
		cursor: pointer;
	}

	.product-dialog {
		width: min(36rem, calc(100% - 2rem));
		margin: auto;
		border: 0;
		border-radius: 1.75rem;
		background: var(--cogon-inverse);
		color: var(--cogon-on-inverse);
		padding: 1.75rem;
	}

	.product-dialog::backdrop {
		background: rgb(15 22 12 / 62%);
	}

	.product-dialog h2 {
		margin: 0.2rem 0 0.8rem;
		color: var(--cogon-lime);
		font-size: clamp(2rem, 4vw, 3rem);
		text-transform: uppercase;
	}

	.product-dialog p {
		margin: 0 0 0.8rem;
		color: rgb(242 245 240 / 84%);
		line-height: 1.5;
	}

	.product-dialog .features {
		margin-bottom: 0.9rem;
		color: rgb(242 245 240 / 84%);
	}

	.product-dialog .features li::marker {
		color: var(--cogon-lime);
	}

	.product-dialog .badge {
		margin-top: 0;
	}

	.product-dialog__actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		align-items: center;
		margin-top: 0.6rem;
	}

	.dialog-close {
		border: 0;
		background: transparent;
		color: #fff;
		font-weight: 700;
		text-decoration: underline;
		text-underline-offset: 0.2em;
		cursor: pointer;
	}

	@media (max-width: 60rem) {
		.products > ul,
		.pride-card {
			grid-template-columns: 1fr;
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

	@keyframes march {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
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

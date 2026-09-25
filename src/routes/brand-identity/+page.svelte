<script lang="ts">
	import { base } from '$app/paths';
	import { brandGuidelines } from '$lib/brand/guidelines.js';

	const typeScale = [
		{
			name: 'Display',
			usage: 'Campaign headline',
			metrics: 'ExtraBold · uppercase · -0.045em',
			className: 'type-display',
			sample: 'Infrastructure to hold the software you ship'
		},
		{
			name: 'Section',
			usage: 'Band title',
			metrics: 'ExtraBold · uppercase · -0.045em',
			className: 'type-section',
			sample: 'The work stays standing after launch.'
		},
		{
			name: 'Title',
			usage: 'Feature title',
			metrics: 'ExtraBold · -0.03em',
			className: 'type-title',
			sample: 'Decisions named before the sprint.'
		},
		{
			name: 'Body',
			usage: 'Reading text',
			metrics: '16 / 24 · Plus Jakarta Sans',
			className: 'type-body',
			sample: brandGuidelines.promise
		},
		{
			name: 'Mono',
			usage: 'Indices, proof, labels',
			metrics: '13 / 20 · IBM Plex Mono',
			className: 'type-mono',
			sample: '--cogon-lime: #9FE870;'
		}
	] as const;

	const colors = [
		{ name: 'Ink', token: '--cogon-ink', value: brandGuidelines.colors.ink, dark: false },
		{ name: 'Lime', token: '--cogon-lime', value: brandGuidelines.colors.lime, dark: true },
		{ name: 'Canvas', token: '--cogon-canvas', value: brandGuidelines.colors.canvas, dark: true },
		{ name: 'Panel', token: '--cogon-panel', value: brandGuidelines.colors.panel, dark: true },
		{ name: 'Sage', token: '--cogon-sage', value: brandGuidelines.colors.sage, dark: true },
		{ name: 'Muted', token: '--cogon-muted', value: brandGuidelines.colors.muted, dark: false },
		{ name: 'Line', token: '--cogon-line', value: brandGuidelines.colors.line, dark: true },
		{ name: 'Wash', token: '--cogon-wash', value: brandGuidelines.colors.wash, dark: true },
		{ name: 'Night', token: '--cogon-night', value: brandGuidelines.colors.night, dark: false },
		{ name: 'Grove', token: '--cogon-grove', value: brandGuidelines.colors.grove, dark: false }
	] as const;
</script>

<svelte:head>
	<title>Brand standard · cogon.studio</title>
	<meta
		name="description"
		content="The cogon.studio brand standard: forest ink, lime action, Plus Jakarta Sans, and a voice that holds weight."
	/>
	<meta name="robots" content="noindex,nofollow" />
</svelte:head>

<div class="standard">
	<section class="hero">
		<p class="index">01 · Standard</p>
		<h1>A system with weight.</h1>
		<p class="intro">
			cogon.studio is product engineering infrastructure. The visual language is forest ink and
			lime, set in Plus Jakarta Sans. Marketing type is heavy on purpose. The quiet product-desk
			version of this palette was too flat to carry a promise.
		</p>
	</section>

	<section aria-labelledby="logo-title">
		<header>
			<p class="index">02 · Mark</p>
			<h2 id="logo-title">Mark</h2>
			<p>The grass mark sits on a lime tile. The wordmark is lowercase, extra bold, stacked.</p>
		</header>
		<div class="logo-grid">
			<article class="specimen light">
				<p>Lockup · light</p>
				<div class="lockup">
					<img src="{base}/brand/cogon-studio-mark-transparent.png" alt="" width="72" height="72" />
					<div>
						<strong>cogon</strong>
						<span>studio</span>
					</div>
				</div>
			</article>
			<article class="specimen forest">
				<p>Lockup · forest</p>
				<div class="lockup">
					<img src="{base}/brand/cogon-studio-mark-transparent.png" alt="" width="72" height="72" />
					<div>
						<strong>cogon</strong>
						<span>studio</span>
					</div>
				</div>
			</article>
			<article class="specimen sage">
				<p>Mark · sage</p>
				<img class="mark" src="{base}/brand/cogon-studio-mark-transparent.png" alt="cogon.studio grass mark on sage" width="120" height="120" />
			</article>
			<article class="specimen lime">
				<p>Mark · lime</p>
				<img class="mark" src="{base}/brand/cogon-studio-mark-transparent.png" alt="cogon.studio grass mark on lime" width="120" height="120" />
			</article>
		</div>
		<ul class="rules">
			<li>Keep the mark on lime, forest, or a solid field. Do not drop it on a photograph.</li>
			<li>Do not recolor it gold, purple, or pure black.</li>
			<li>Wordmark stays lowercase. Display headlines may be uppercase.</li>
		</ul>
	</section>

	<section aria-labelledby="type-title">
		<header>
			<p class="index">03 · Type</p>
			<h2 id="type-title">Type</h2>
			<p>Plus Jakarta Sans for words. IBM Plex Mono for indices, rates of progress, and tokens. No second display face.</p>
		</header>
		<div class="type-list">
			{#each typeScale as item}
				<article>
					<div>
						<strong>{item.name}</strong>
						<span>{item.usage}</span>
						<small>{item.metrics}</small>
					</div>
					<p class={item.className}>{item.sample}</p>
				</article>
			{/each}
		</div>
	</section>

	<section aria-labelledby="color-title">
		<header>
			<p class="index">04 · Color</p>
			<h2 id="color-title">Color</h2>
			<p>One ink. One action. Lime is the button and the proof chip. Forest carries headlines and inverse bands. Do not add a second accent.</p>
		</header>
		<ul class="swatches">
			{#each colors as color}
				<li class:on-dark={color.dark} style={`background:${color.value}`}>
					<strong>{color.name}</strong>
					<span>{color.value}</span>
					<code>{color.token}</code>
				</li>
			{/each}
		</ul>
		<div class="themes">
			<article>
				<p>Light</p>
				<h3>White field. Forest type. Lime action.</h3>
				<div><span class="btn forest">Forest</span><span class="btn lime">Lime</span></div>
			</article>
			<article class="night">
				<p>Dark</p>
				<h3>Night field. Lime stays the action.</h3>
				<div><span class="btn lime">Lime</span><span class="btn ghost">Ink</span></div>
			</article>
		</div>
	</section>

	<section aria-labelledby="motion-title">
		<header>
			<p class="index">05 · Shape and motion</p>
			<h2 id="motion-title">Shape and motion</h2>
			<p>Pills for actions. 24px frames for pictures and film. Motion explains a loop, a tab, or a line of type. It does not float decorations.</p>
		</header>
		<div class="shape-row">
			<span class="pill">Get in touch</span>
			<span class="frame">Media frame · 24px</span>
			<span class="chip">01</span>
		</div>
	</section>

	<section aria-labelledby="voice-title">
		<header>
			<p class="index">06 · Voice</p>
			<h2 id="voice-title">Voice</h2>
			<p>{brandGuidelines.positioning}</p>
		</header>
		<dl>
			{#each brandGuidelines.voice.principles as principle, i}
				<div>
					<dt>{principle}</dt>
					<dd>{brandGuidelines.voice.rules[i]}</dd>
				</div>
			{/each}
		</dl>
		<div class="quotes">
			<blockquote class="say">
				<p>Say this</p>
				“{brandGuidelines.voice.say}”
			</blockquote>
			<blockquote class="avoid">
				<p>Avoid this</p>
				“{brandGuidelines.voice.avoid}”
			</blockquote>
		</div>
	</section>

	<footer>
		<p>cogon.studio · brand standard {brandGuidelines.version}</p>
		<p>
			<a href="{base}/brand-identity-json">JSON</a>
			<a href="{base}/brand/cogon-brand-tokens.css">CSS tokens</a>
		</p>
	</footer>
</div>

<style>
	.standard {
		width: min(92%, 76rem);
		margin-inline: auto;
		padding: 4rem 0 5rem;
	}

	.hero {
		padding-bottom: 3rem;
		border-bottom: 1px solid var(--border);
	}

	.index {
		margin: 0;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--cogon-muted);
	}

	h1,
	h2,
	.themes h3,
	.quotes {
		font-family: var(--font-display);
		font-weight: 800;
		letter-spacing: -0.045em;
		line-height: 0.95;
	}

	h1 {
		max-width: 10ch;
		margin: 1.5rem 0;
		font-size: clamp(3.4rem, 8vw, 6.2rem);
		text-transform: uppercase;
	}

	.intro,
	header > p:last-child {
		max-width: 46rem;
		color: var(--muted-foreground);
		font-size: 1.05rem;
		line-height: 1.55;
	}

	section + section {
		padding-top: 4.5rem;
	}

	h2 {
		margin: 0.8rem 0 0.8rem;
		font-size: clamp(2.4rem, 5vw, 4rem);
		text-transform: uppercase;
	}

	.logo-grid,
	.themes,
	.quotes {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.logo-grid {
		margin-top: 1.5rem;
	}

	.specimen {
		display: flex;
		min-height: 16rem;
		flex-direction: column;
		justify-content: space-between;
		padding: 1.25rem;
		border-radius: 1.5rem;
	}

	.specimen p,
	.themes p,
	.quotes p {
		margin: 0;
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.light { background: var(--cogon-canvas); color: var(--cogon-inverse); }
	.forest { background: var(--cogon-inverse); color: var(--cogon-on-inverse); }
	.sage { background: var(--cogon-sage); color: var(--cogon-inverse); }
	.lime { background: var(--cogon-lime); color: var(--cogon-lime-ink); }

	.lockup {
		display: flex;
		align-items: center;
		gap: 0.8rem;
	}

	.lockup img,
	.mark {
		width: 4.5rem;
		height: 4.5rem;
		border-radius: 1rem;
		background: var(--cogon-lime);
		object-fit: contain;
		padding: 0.35rem;
	}

	.forest .lockup img { background: var(--cogon-lime); }
	.lime .mark { background: var(--cogon-inverse); }

	.lockup strong,
	.lockup span {
		display: block;
		font-weight: 800;
		letter-spacing: -0.04em;
		line-height: 1;
	}

	.lockup strong { font-size: 1.8rem; }
	.lockup span { font-size: 1rem; }

	.rules {
		margin: 1rem 0 0;
		padding: 0;
		list-style: none;
	}

	.rules li {
		padding: 0.8rem 0;
		border-bottom: 1px solid var(--border);
	}

	.type-list article {
		display: grid;
		grid-template-columns: 14rem 1fr;
		gap: 1.5rem;
		align-items: center;
		padding: 1.5rem 0;
		border-bottom: 1px solid var(--border);
	}

	.type-list strong,
	.type-list span,
	.type-list small {
		display: block;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--muted-foreground);
	}

	.type-list strong { color: var(--foreground); }

	.type-display,
	.type-section,
	.type-title {
		margin: 0;
		font-weight: 800;
		letter-spacing: -0.045em;
		line-height: 0.95;
		text-transform: uppercase;
	}

	.type-display { font-size: clamp(2.2rem, 4vw, 3.4rem); }
	.type-section { font-size: clamp(1.8rem, 3vw, 2.6rem); }
	.type-title { font-size: 1.5rem; text-transform: none; letter-spacing: -0.03em; }
	.type-body { margin: 0; max-width: 46ch; line-height: 1.5; }
	.type-mono { margin: 0; font-family: var(--font-mono); color: var(--cogon-inverse); background: var(--cogon-lime); display: inline-block; padding: 0.35rem 0.6rem; border-radius: 0.5rem; }

	.swatches {
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: 0.7rem;
		margin: 1.5rem 0 0;
		padding: 0;
		list-style: none;
	}

	.swatches li {
		display: flex;
		min-height: 9.5rem;
		flex-direction: column;
		justify-content: flex-end;
		padding: 0.8rem;
		border-radius: 1rem;
		color: #f2f5f0;
		font-family: var(--font-mono);
		font-size: 0.68rem;
	}

	.swatches .on-dark { color: #163300; border: 1px solid var(--border); }
	.swatches strong { margin-bottom: auto; font-size: 0.85rem; }

	.themes { margin-top: 1rem; }
	.themes article {
		min-height: 16rem;
		padding: 1.25rem;
		border-radius: 1.5rem;
		background: var(--cogon-canvas);
		color: var(--cogon-inverse);
	}

	.themes h3 {
		max-width: 12ch;
		margin: 1.5rem 0;
		font-size: clamp(1.8rem, 3vw, 2.6rem);
		text-transform: uppercase;
	}

	.night {
		background: var(--cogon-night) !important;
		color: #f2f5f0 !important;
	}

	.btn {
		display: inline-flex;
		margin-right: 0.4rem;
		border-radius: 999px;
		padding: 0.55rem 0.9rem;
		font-weight: 800;
	}

	.btn.forest { background: #163300; color: #f2f5f0; }
	.btn.lime { background: #9fe870; color: #163300; }
	.btn.ghost { border: 1px solid rgb(242 245 240 / 40%); }

	.shape-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
		align-items: center;
		margin-top: 1rem;
	}

	.pill, .chip {
		border-radius: 999px;
		background: var(--cogon-lime);
		color: #163300;
		font-weight: 800;
	}

	.pill { padding: 0.9rem 1.3rem; }
	.chip { padding: 0.45rem 0.7rem; font-family: var(--font-mono); }
	.frame {
		border: 1.5px solid var(--cogon-inverse);
		border-radius: 1.5rem;
		padding: 1.4rem 1.6rem;
		font-weight: 750;
	}

	dl {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin: 0;
	}

	dl div {
		padding: 1.25rem 1.25rem 1.25rem 0;
		border-bottom: 1px solid var(--border);
	}

	dl div:nth-child(odd) { border-right: 1px solid var(--border); padding-right: 1.25rem; }
	dl div:nth-child(even) { padding-left: 1.25rem; }
	dt { font-size: 1.4rem; font-weight: 800; text-transform: capitalize; }
	dd { margin: 0.45rem 0 0; color: var(--muted-foreground); }

	.quotes { margin-top: 1.25rem; font-size: clamp(1.4rem, 2.5vw, 2rem); line-height: 1.15; }
	.say, .avoid { margin: 0; padding: 1.4rem; border-radius: 1.5rem; }
	.say { background: var(--cogon-lime); color: #163300; }
	.avoid { background: var(--cogon-inverse); color: #f2f5f0; }

	footer {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		margin-top: 4rem;
		padding-top: 1.25rem;
		border-top: 1px solid var(--border);
		font-family: var(--font-mono);
		font-size: 0.75rem;
	}

	footer a { margin-left: 1rem; color: var(--foreground); }

	@media (max-width: 52rem) {
		.logo-grid, .themes, .quotes, dl, .type-list article, .swatches {
			grid-template-columns: 1fr 1fr;
		}

		.type-list article, dl { grid-template-columns: 1fr; }
		dl div, dl div:nth-child(even) { padding-left: 0; border-right: 0; }
		.swatches { grid-template-columns: 1fr 1fr; }
	}
</style>

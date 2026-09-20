<script lang="ts">
	import { base } from '$app/paths';
	import { brandGuidelines } from '$lib/brand/guidelines.js';

	const typeScale = [
		{ name: 'Display XL', usage: 'Primary campaign statement', metrics: '76 / 76 · Bricolage Grotesque Bold', className: 'type-display-xl', sample: 'Build boldly. Grow reliably.' },
		{ name: 'Display L', usage: 'Large page hero', metrics: '61 / 64 · Bricolage Grotesque Bold', className: 'type-display-l', sample: 'Momentum without chaos.' },
		{ name: 'Display M', usage: 'Section statement', metrics: '49 / 52 · Bricolage Grotesque Semibold', className: 'type-display-m', sample: 'Software designed to keep growing.' },
		{ name: 'Heading L', usage: 'Section heading', metrics: '39 / 44 · Bricolage Grotesque Semibold', className: 'type-heading-l', sample: 'Clear decisions, dependable delivery.' },
		{ name: 'Heading M', usage: 'Subheading and feature title', metrics: '25 / 32 · Bricolage Grotesque Semibold', className: 'type-heading-m', sample: 'Ask before you build.' },
		{ name: 'Body M', usage: 'Default reading text', metrics: '16 / 24 · Inter Regular', className: 'type-body-m', sample: 'We name tradeoffs early, share context openly, and leave the product ready for its next stage.' },
		{ name: 'Mono S', usage: 'Metadata, code, and token names', metrics: '13 / 20 · JetBrains Mono Regular', className: 'type-mono-s', sample: '--cogon-sprout: #5CCB91;' }
	] as const;

	const colors = [
		{ name: 'Night', token: '--cogon-night', value: brandGuidelines.colors.night, darkInk: false },
		{ name: 'Grove', token: '--cogon-grove', value: brandGuidelines.colors.grove, darkInk: false },
		{ name: 'Forest', token: '--cogon-forest', value: brandGuidelines.colors.forest, darkInk: false },
		{ name: 'Ink', token: '--cogon-ink', value: brandGuidelines.colors.ink, darkInk: false },
		{ name: 'Sprout', token: '--cogon-sprout', value: brandGuidelines.colors.sprout, darkInk: true },
		{ name: 'Harvest gold', token: '--cogon-gold', value: brandGuidelines.colors.gold, darkInk: true },
		{ name: 'Mist', token: '--cogon-mist', value: brandGuidelines.colors.mist, darkInk: true },
		{ name: 'Soft sun', token: '--cogon-soft-sun', value: brandGuidelines.colors.softSun, darkInk: true },
		{ name: 'Cream', token: '--cogon-cream', value: brandGuidelines.colors.cream, darkInk: true },
		{ name: 'Ivory', token: '--cogon-ivory', value: brandGuidelines.colors.ivory, darkInk: true }
	] as const;

	const voicePrinciples = [
		{ name: 'Clear', detail: 'Lead with the outcome. Prefer plain words and short sentences.' },
		{ name: 'Grounded', detail: 'Use evidence and specifics. Avoid inflated claims and empty hype.' },
		{ name: 'Warm', detail: 'Sound like a thoughtful teammate: direct, respectful, and encouraging.' },
		{ name: 'Curious', detail: 'Invite possibilities and explain tradeoffs without making anyone feel behind.' }
	] as const;
</script>

<svelte:head>
	<title>Brand system · cogon.studio</title>
	<meta name="description" content="The cogon.studio brand system: logo usage, typography, color tokens, and voice." />
	<meta name="robots" content="noindex,nofollow" />
</svelte:head>

<div class="brand-system">
	<section class="system-hero" aria-labelledby="brand-system-title">
		<div class="system-shell system-hero__inner">
			<p class="system-label">COGON.STUDIO · BRAND SYSTEM</p>
			<h1 id="brand-system-title">The system behind a studio built to grow.</h1>
			<p class="system-hero__intro">
				A living reference for the cogon.studio identity—mark usage, typography, color,
				and voice. Every value maps back to the shared brand guidelines and CSS tokens.
			</p>
		</div>
	</section>

	<section class="system-section" aria-labelledby="logo-title">
		<div class="system-shell">
			<header class="section-heading">
				<p class="section-index">01 · LOGO</p>
				<h2 id="logo-title">Logo</h2>
				<p>The four-blade cogon mark represents resilient growth. Pair it with the studio name for key brand moments; use the mark alone when space is compact.</p>
			</header>

			<div class="logo-grid">
				<article class="logo-specimen logo-specimen--light">
					<p class="specimen-label">FULL LOCKUP · LIGHT</p>
					<div class="logo-lockup">
						<img src="{base}/brand/cogon-studio-mark-transparent.png" alt="" width="84" height="84" />
						<div><strong>cogon.studio</strong><span>SOFTWARE DEVELOPMENT STUDIO</span></div>
					</div>
				</article>

				<article class="logo-specimen logo-specimen--dark">
					<p class="specimen-label">FULL LOCKUP · DARK</p>
					<div class="logo-lockup">
						<img src="{base}/brand/cogon-studio-mark-transparent.png" alt="" width="84" height="84" />
						<div><strong>cogon.studio</strong><span>SOFTWARE DEVELOPMENT STUDIO</span></div>
					</div>
				</article>

				<article class="logo-specimen logo-specimen--surface">
					<p class="specimen-label">MARK · ON SURFACE</p>
					<img class="mark-only" src="{base}/brand/cogon-studio-mark-transparent.png" alt="cogon.studio four-blade mark" width="112" height="112" />
				</article>

				<article class="logo-specimen logo-specimen--brand">
					<p class="specimen-label">MARK · ON BRAND</p>
					<img class="mark-only" src="{base}/brand/cogon-studio-mark-transparent.png" alt="cogon.studio four-blade mark on Forest green" width="112" height="112" />
				</article>
			</div>
		</div>
	</section>

	<section class="system-section" aria-labelledby="type-title">
		<div class="system-shell">
			<header class="section-heading">
				<p class="section-index">02 · TYPOGRAPHY</p>
				<h2 id="type-title">Typography</h2>
				<p>Bricolage Grotesque carries expressive display moments. Inter keeps reading clear. JetBrains Mono is reserved for code, data, metadata, and tokens.</p>
			</header>

			<div class="type-family-label">DISPLAY + BODY · BRICOLAGE GROTESQUE / INTER</div>
			<div class="type-specimens">
				{#each typeScale as item}
					<article class="type-row">
						<div class="type-meta"><strong>{item.name}</strong><span>{item.usage}</span><small>{item.metrics}</small></div>
						<p class={item.className}>{item.sample}</p>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section class="system-section" aria-labelledby="color-title">
		<div class="system-shell">
			<header class="section-heading">
				<p class="section-index">03 · COLOR</p>
				<h2 id="color-title">Color</h2>
				<p>Night Grove establishes trust and depth. Sprout signals momentum. Harvest gold marks emphasis, while warm neutrals keep the system human.</p>
			</header>

			<div class="token-group-heading"><strong>CORE PALETTE</strong><span>Canonical values from the shared brand guidelines.</span></div>
			<ul class="color-grid" aria-label="Core brand color tokens">
				{#each colors as color}
					<li class:color-token--dark-ink={color.darkInk} class="color-token" style={`background: ${color.value}`}>
						<strong>{color.name}</strong><span>{color.value}</span><code>{color.token}</code>
					</li>
				{/each}
			</ul>

			<div class="token-group-heading theme-heading"><strong>THEMES</strong><span>Semantic roles stay stable as the surface changes.</span></div>
			<div class="theme-grid">
				<article class="theme-specimen theme-specimen--light">
					<p>LIGHT</p><h3>Fresh thinking, grounded delivery.</h3>
					<div class="theme-actions"><span>Primary</span><span>Accent</span></div><code>bg · surface · text · primary · accent</code>
				</article>
				<article class="theme-specimen theme-specimen--dark">
					<p>DARK</p><h3>Fresh thinking, grounded delivery.</h3>
					<div class="theme-actions"><span>Primary</span><span>Accent</span></div><code>bg · surface · text · primary · accent</code>
				</article>
			</div>
		</div>
	</section>

	<section class="system-section" aria-labelledby="voice-title">
		<div class="system-shell">
			<header class="section-heading">
				<p class="section-index">04 · VOICE</p>
				<h2 id="voice-title">Voice</h2>
				<p>Clear, grounded, warm, and curious. The studio speaks like a thoughtful teammate: direct about tradeoffs, generous with context, and free of empty tech hype.</p>
			</header>

			<dl class="voice-grid">
				{#each voicePrinciples as principle}
					<div><dt>{principle.name}</dt><dd>{principle.detail}</dd></div>
				{/each}
			</dl>

			<div class="voice-examples">
				<article class="voice-example voice-example--say"><p>SAY THIS</p><blockquote>“{brandGuidelines.voice.say}”</blockquote></article>
				<article class="voice-example voice-example--avoid"><p>AVOID THIS</p><blockquote>“{brandGuidelines.voice.avoid}”</blockquote></article>
			</div>
		</div>
	</section>

	<footer class="system-footer">
		<div class="system-shell">
			<p class="system-label">COGON.STUDIO · BRAND SYSTEM</p>
			<p>Source of truth: <a href="{base}/brand-identity-json">brand-identity-json</a> <span aria-hidden="true">·</span> <a href="{base}/brand/cogon-brand-tokens.css">CSS tokens</a></p>
		</div>
	</footer>
</div>

<style>
	.brand-system {
		--system-line: color-mix(in srgb, var(--cogon-mist) 28%, transparent);
		--system-muted: color-mix(in srgb, var(--cogon-mist) 76%, transparent);
		min-height: 100svh;
		background: var(--cogon-night);
		color: var(--cogon-cream);
	}

	.system-shell { width: min(90%, 72rem); margin-inline: auto; }
	.system-hero { border-bottom: 1px solid var(--system-line); }
	.system-hero__inner { display: flex; min-height: min(52rem, 92svh); flex-direction: column; justify-content: space-between; padding-block: max(8rem, calc(6rem + env(safe-area-inset-top))) 5rem; }

	.system-label,
	.section-index,
	.specimen-label,
	.type-family-label,
	.token-group-heading,
	.type-meta,
	.color-token,
	.theme-specimen > p,
	.theme-specimen code,
	.voice-example > p { font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.12em; }

	.system-label, .section-index { margin: 0; font-size: 0.72rem; color: var(--cogon-sprout); }
	.system-hero h1 { max-width: 11ch; margin: auto 0; padding-block: 4rem; font-family: var(--font-display); font-size: clamp(3.6rem, 8vw, 6rem); font-weight: 700; line-height: 0.96; letter-spacing: -0.04em; text-wrap: balance; }
	.system-hero__intro { max-width: 46rem; margin: 0; font-size: clamp(1rem, 1.4vw, 1.15rem); line-height: 1.6; color: var(--system-muted); }
	.system-section { border-bottom: 1px solid var(--system-line); padding-block: 6rem; }
	.section-heading { margin-bottom: 4rem; }
	.section-heading h2 { margin: 2.5rem 0 1.25rem; font-family: var(--font-display); font-size: clamp(2.75rem, 5vw, 4.5rem); font-weight: 650; line-height: 1; letter-spacing: -0.035em; }
	.section-heading > p:last-child { max-width: 44rem; margin: 0; font-size: 1rem; line-height: 1.65; color: var(--system-muted); }

	.logo-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; }
	.logo-specimen { display: flex; min-height: 20rem; flex-direction: column; justify-content: space-between; padding: 2rem; border-radius: 1.375rem; }
	.logo-specimen--light { background: var(--cogon-cream); color: var(--cogon-night); }
	.logo-specimen--dark { background: var(--cogon-grove); color: var(--cogon-cream); }
	.logo-specimen--surface { background: var(--cogon-soft-sun); color: var(--cogon-night); }
	.logo-specimen--brand { background: var(--cogon-forest); color: var(--cogon-cream); }
	.specimen-label { margin: 0; font-size: 0.68rem; font-weight: 500; opacity: 0.64; }
	.logo-lockup { display: flex; align-items: center; gap: 1.15rem; margin-top: 4rem; }
	.logo-lockup img { width: 4.5rem; height: 4.5rem; object-fit: contain; }
	.logo-lockup strong { display: block; font-family: var(--font-display); font-size: clamp(1.55rem, 3vw, 2.35rem); line-height: 1; letter-spacing: -0.03em; }
	.logo-lockup span { display: block; max-width: 18ch; margin-top: 0.55rem; font-family: var(--font-mono); font-size: 0.58rem; line-height: 1.4; letter-spacing: 0.14em; }
	.mark-only { width: 7rem; height: 7rem; margin-top: 4rem; object-fit: contain; }

	.type-family-label, .token-group-heading { margin-bottom: 1.5rem; font-size: 0.7rem; color: var(--cogon-sprout); }
	.type-specimens { border-top: 1px solid var(--system-line); }
	.type-row { display: grid; grid-template-columns: minmax(10rem, 0.34fr) minmax(0, 1fr); gap: 2rem; align-items: center; min-height: 15rem; border-bottom: 1px solid var(--system-line); padding-block: 2rem; overflow: hidden; }
	.type-meta { display: grid; gap: 0.3rem; font-size: 0.66rem; line-height: 1.5; color: var(--system-muted); }
	.type-meta strong { color: var(--cogon-sprout); }
	.type-meta small { font: inherit; letter-spacing: 0; text-transform: none; }
	.type-row > p { min-width: 0; margin: 0; overflow-wrap: anywhere; }
	.type-display-xl, .type-display-l, .type-display-m, .type-heading-l, .type-heading-m { font-family: var(--font-display); font-weight: 650; letter-spacing: -0.035em; }
	.type-display-xl { font-size: clamp(3.25rem, 6.5vw, 4.75rem); line-height: 1; }
	.type-display-l { font-size: clamp(2.9rem, 5.5vw, 3.8125rem); line-height: 1.05; }
	.type-display-m { font-size: clamp(2.5rem, 4.5vw, 3.0625rem); line-height: 1.06; }
	.type-heading-l { font-size: clamp(2.15rem, 4vw, 2.4375rem); line-height: 1.12; }
	.type-heading-m { font-size: 1.5625rem; line-height: 1.28; }
	.type-body-m { max-width: 62ch; font-size: 1rem; line-height: 1.5; color: var(--system-muted); }
	.type-mono-s { font-family: var(--font-mono); font-size: 0.8125rem; line-height: 1.55; color: var(--cogon-gold); }

	.token-group-heading { display: flex; flex-wrap: wrap; gap: 0.75rem 1.5rem; align-items: baseline; }
	.token-group-heading span { letter-spacing: 0; text-transform: none; color: var(--system-muted); }
	.color-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 0.75rem; margin: 0; padding: 0; list-style: none; }
	.color-token { display: flex; min-height: 13rem; min-width: 0; flex-direction: column; justify-content: flex-end; padding: 1rem; border: 1px solid color-mix(in srgb, var(--cogon-cream) 22%, transparent); border-radius: 0.875rem; color: var(--cogon-cream); font-size: 0.64rem; line-height: 1.45; overflow: hidden; }
	.color-token strong { margin-bottom: auto; font-size: 0.68rem; }
	.color-token span { margin-bottom: 0.4rem; font-size: 0.78rem; letter-spacing: 0; }
	.color-token code { font: inherit; letter-spacing: 0; text-transform: none; overflow-wrap: anywhere; }
	.color-token--dark-ink { border-color: color-mix(in srgb, var(--cogon-night) 16%, transparent); color: var(--cogon-night); }

	.theme-heading { margin-top: 4rem; }
	.theme-grid, .voice-examples { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; }
	.theme-specimen { display: flex; min-height: 22rem; flex-direction: column; justify-content: space-between; padding: 2rem; border-radius: 1.375rem; }
	.theme-specimen > p, .theme-specimen code { margin: 0; font-size: 0.65rem; }
	.theme-specimen h3 { max-width: 12ch; margin: 3rem 0; font-family: var(--font-display); font-size: clamp(2rem, 4vw, 3rem); line-height: 1; letter-spacing: -0.03em; }
	.theme-specimen--light { background: var(--cogon-soft-sun); color: var(--cogon-ink); }
	.theme-specimen--dark { background: var(--cogon-grove); color: var(--cogon-cream); }
	.theme-actions { display: flex; gap: 0.6rem; margin-bottom: 2rem; }
	.theme-actions span { border-radius: 999px; padding: 0.55rem 0.9rem; font-size: 0.72rem; font-weight: 650; }
	.theme-specimen--light .theme-actions span:first-child { background: var(--cogon-forest); color: var(--cogon-cream); }
	.theme-specimen--light .theme-actions span:last-child { background: var(--cogon-gold); color: var(--cogon-night); }
	.theme-specimen--dark .theme-actions span:first-child { background: var(--cogon-sprout); color: var(--cogon-night); }
	.theme-specimen--dark .theme-actions span:last-child { background: var(--cogon-gold); color: var(--cogon-night); }

	.voice-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--system-line); }
	.voice-grid > div { min-height: 12rem; padding: 2rem 2rem 2rem 0; border-bottom: 1px solid var(--system-line); }
	.voice-grid > div:nth-child(odd) { border-right: 1px solid var(--system-line); }
	.voice-grid > div:nth-child(even) { padding-left: 2rem; }
	.voice-grid dt { font-family: var(--font-display); font-size: 1.6rem; font-weight: 650; }
	.voice-grid dd { max-width: 34ch; margin: 1rem 0 0; line-height: 1.55; color: var(--system-muted); }
	.voice-examples { margin-top: 4rem; }
	.voice-example { min-height: 19rem; padding: 2rem; border-radius: 1.375rem; }
	.voice-example > p { margin: 0; font-size: 0.68rem; }
	.voice-example blockquote { margin: 5rem 0 0; font-family: var(--font-display); font-size: clamp(1.6rem, 3vw, 2.25rem); font-weight: 600; line-height: 1.15; letter-spacing: -0.025em; }
	.voice-example--say { background: var(--cogon-sprout); color: var(--cogon-night); }
	.voice-example--avoid { background: var(--cogon-grove); color: var(--cogon-mist); }

	.system-footer { padding-block: 3rem; }
	.system-footer .system-shell { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 1rem 2rem; align-items: center; }
	.system-footer p:last-child { margin: 0; font-family: var(--font-mono); font-size: 0.72rem; color: var(--system-muted); }
	.system-footer a { color: var(--cogon-gold); text-underline-offset: 0.22em; }

	:global(body:has(.brand-system) header) { border-color: color-mix(in srgb, var(--cogon-mist) 20%, transparent) !important; background: color-mix(in srgb, var(--cogon-night) 88%, transparent) !important; backdrop-filter: blur(12px); }
	:global(body:has(.brand-system) header a), :global(body:has(.brand-system) header button) { color: var(--cogon-cream) !important; }
	:global(body:has(.brand-system) header nav > button:first-child) { display: none; }
	:global(body:has(.brand-system) footer) { margin-top: 0; border-color: color-mix(in srgb, var(--cogon-mist) 20%, transparent); background: var(--cogon-night); color: var(--cogon-mist); }
	:global(body:has(.brand-system) footer > div) { color: var(--cogon-mist) !important; }

	@media (max-width: 52rem) {
		.system-hero__inner { min-height: 46rem; padding-bottom: 4rem; }
		.system-section { padding-block: 4.5rem; }
		.section-heading { margin-bottom: 3rem; }
		.logo-grid, .theme-grid, .voice-examples { grid-template-columns: 1fr; }
		.logo-specimen { min-height: 17rem; }
		.type-row { grid-template-columns: 1fr; gap: 2rem; min-height: 0; padding-block: 2.5rem; }
		.color-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
		.color-token { min-height: 11rem; }
	}

	@media (max-width: 36rem) {
		.logo-lockup { align-items: flex-start; flex-direction: column; }
		.voice-grid { grid-template-columns: 1fr; }
		.voice-grid > div, .voice-grid > div:nth-child(even) { min-height: 0; padding: 1.75rem 0; border-right: 0; }
	}

	@media (prefers-reduced-motion: no-preference) {
		.system-hero h1 { animation: title-enter 800ms var(--cogon-ease) both; }
		@keyframes title-enter {
			from { clip-path: inset(0 0 100%); transform: translateY(1.25rem); }
			to { clip-path: inset(0); transform: translateY(0); }
		}
	}
</style>

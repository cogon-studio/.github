<script lang="ts">
	import './layout.css';
	import { base } from '$app/paths';
	import { ModeWatcher, toggleMode, mode } from 'mode-watcher';
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { brandGuidelines } from '$lib/brand/guidelines.js';
	import { MoonIcon, SunIcon } from 'phosphor-svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	let hasScrolled = $state(false);

	function updateHeader() {
		hasScrolled = window.scrollY > 8;
	}

	onMount(() => {
		window.__cogonReleaseSplash?.();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
	<meta name="theme-color" content="#0f160c" media="(prefers-color-scheme: dark)" />
	<meta property="og:type" content="website" />
</svelte:head>

<ModeWatcher defaultMode="system" disableHeadScriptInjection />
<svelte:window onscroll={updateHeader} />

<a
	href="#main"
	class="bg-primary text-primary-foreground fixed top-3 left-3 z-100 -translate-y-[180%] rounded-full px-3 py-2 font-medium transition-transform focus:translate-y-0"
>
	Skip to content
</a>

<div class={`chrome ${hasScrolled ? 'is-scrolled' : ''}`}>
	<div class="announce">
		<p>In-house software.</p>
	</div>
	<header>
		<div class="chrome-bar">
			<a href="{base}/" class="wordmark" aria-label="cogon.studio home">
				<img
					src="{base}/brand/cogon-studio-mark-transparent.png"
					alt=""
					width="36"
					height="36"
				/>
				<span>
					<strong>cogon</strong>
					<small>studio</small>
				</span>
			</a>

			<nav class="primary-nav" aria-label="Primary">
				<a href="{base}/#proud">Proud of</a>
				<a href="{base}/#products">Built</a>
				<a href="{base}/#contact">Contact</a>
			</nav>

			<div class="chrome-actions">
				<Button
					variant="ghost"
					size="icon"
					class="rounded-full"
					onclick={toggleMode}
					aria-label={mode.current === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
				>
					{#if mode.current === 'dark'}
						<SunIcon class="size-5" aria-hidden="true" />
					{:else}
						<MoonIcon class="size-5" aria-hidden="true" />
					{/if}
				</Button>
				<Button href="mailto:hello@cogon.studio?subject=Project%20inquiry" class="touch">
					Get in touch
				</Button>
			</div>
		</div>
	</header>
</div>

<main id="main">
	{@render children()}
</main>

<footer class="site-footer">
	<div class="footer-grid">
		<div>
			<p class="footer-mark">cogon.studio</p>
			<p>In-house software development.</p>
		</div>
		<nav aria-label="Studio">
			<h2>Studio</h2>
			<a href="{base}/#proud">Proud of</a>
			<a href="{base}/#products">Built</a>
			<a href="{base}/#contact">Contact</a>
			<a href="{base}/brand-identity">Brand</a>
			<a href={brandGuidelines.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
			<a href="mailto:{brandGuidelines.contact.email}">{brandGuidelines.contact.email}</a>
		</nav>
	</div>
	<p class="footer-legal">© {new Date().getFullYear()} cogon.studio</p>
</footer>

<style>
	.chrome {
		position: sticky;
		top: 0;
		z-index: 50;
	}

	.announce {
		background: var(--cogon-inverse);
		color: var(--cogon-on-inverse);
		text-align: center;
	}

	.announce p {
		margin: 0;
		padding: 0.55rem 1rem;
		font-size: 0.82rem;
		font-weight: 600;
	}

	.announce a {
		margin-left: 0.35rem;
		color: var(--cogon-lime);
		font-weight: 700;
	}

	header {
		background: color-mix(in srgb, var(--background) 92%, transparent);
		backdrop-filter: blur(16px);
		border-bottom: 1px solid transparent;
	}

	.is-scrolled header {
		border-bottom-color: var(--border);
	}

	.chrome-bar {
		display: flex;
		width: min(94%, 88rem);
		min-height: 4.5rem;
		margin-inline: auto;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.wordmark {
		display: inline-flex;
		align-items: center;
		gap: 0.7rem;
		color: var(--foreground);
		text-decoration: none;
	}

	.wordmark img {
		width: 2.25rem;
		height: 2.25rem;
		border-radius: 0.7rem;
		background: var(--cogon-lime);
		object-fit: contain;
		padding: 0.15rem;
	}

	.wordmark strong,
	.wordmark small {
		display: block;
		font-family: var(--font-display);
		line-height: 1;
	}

	.wordmark strong {
		font-size: 1.05rem;
		font-weight: 800;
		letter-spacing: -0.04em;
	}

	.wordmark small {
		margin-top: 0.12rem;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.01em;
	}

	.primary-nav {
		display: flex;
		gap: 1.5rem;
	}

	.primary-nav a {
		color: var(--foreground);
		font-size: 0.95rem;
		font-weight: 650;
		text-decoration: none;
	}

	.primary-nav a:hover {
		text-decoration: underline;
		text-underline-offset: 0.25em;
	}

	.chrome-actions {
		display: flex;
		align-items: center;
		gap: 0.35rem;
	}

	.chrome-actions :global(.touch) {
		height: 2.5rem;
		border-radius: 999px;
		background: var(--cogon-inverse);
		color: var(--cogon-on-inverse);
		padding-inline: 1rem;
		font-weight: 700;
	}

	:global(.dark) .chrome-actions :global(.touch) {
		background: var(--cogon-lime);
		color: var(--cogon-lime-ink);
	}

	.site-footer {
		background: var(--cogon-inverse);
		color: var(--cogon-on-inverse);
		padding: 4rem 0 2rem;
	}

	.footer-grid {
		display: grid;
		width: min(94%, 88rem);
		margin-inline: auto;
		gap: 2rem;
		grid-template-columns: 1.4fr 1fr;
	}

	.footer-mark {
		margin: 0 0 0.6rem;
		font-family: var(--font-display);
		font-size: 1.6rem;
		font-weight: 800;
		letter-spacing: -0.04em;
	}

	.site-footer h2 {
		margin: 0 0 0.8rem;
		font-size: 0.75rem;
		font-family: var(--font-mono);
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--cogon-lime);
	}

	.site-footer nav {
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
	}

	.site-footer a {
		color: inherit;
		text-decoration: none;
	}

	.site-footer a:hover {
		color: var(--cogon-lime);
	}

	.footer-legal {
		width: min(94%, 88rem);
		margin: 2.5rem auto 0;
		padding-top: 1.25rem;
		border-top: 1px solid rgb(242 245 240 / 16%);
		color: rgb(242 245 240 / 72%);
		font-size: 0.8rem;
	}

	@media (max-width: 52rem) {
		.primary-nav {
			display: none;
		}

		.footer-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

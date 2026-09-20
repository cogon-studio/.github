<script lang="ts">
	import './layout.css';
	import { base } from '$app/paths';
	import { ModeWatcher, toggleMode, mode } from 'mode-watcher';
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { brandGuidelines } from '$lib/brand/guidelines.js';
	import { GithubLogoIcon, MoonIcon, SunIcon } from 'phosphor-svelte';
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
	<meta name="theme-color" content="#fffdf8" media="(prefers-color-scheme: light)" />
	<meta name="theme-color" content="#071c16" media="(prefers-color-scheme: dark)" />
	<meta property="og:type" content="website" />
</svelte:head>

<ModeWatcher defaultMode="system" disableHeadScriptInjection />
<svelte:window onscroll={updateHeader} />

<a
	href="#main"
	class="bg-primary text-primary-foreground fixed top-3 left-3 z-100 -translate-y-[180%] rounded-md px-3 py-2 font-medium transition-transform focus:translate-y-0"
>
	Skip to content
</a>

<header
	class={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${hasScrolled ? 'border-border/40 bg-background/80 backdrop-blur-md' : 'border-transparent bg-transparent'}`}
>
	<div
		class="mx-auto flex min-h-16 w-[min(92%,90rem)] items-center justify-between gap-4"
	>
		<a
			href="{base}/"
			class="font-display text-foreground inline-flex items-center gap-2.5 text-lg font-bold tracking-tight no-underline"
			aria-label="cogon.studio home"
		>
			<img
				src="{base}/brand/cogon-studio-mark-transparent.png"
				alt=""
				width="32"
				height="32"
				class="size-8 object-contain"
			/>
			<span>cogon.studio</span>
		</a>

		<nav class="flex items-center gap-2" aria-label="Primary">
			<Button
				variant="ghost"
				size="icon"
				class="rounded-full"
				onclick={toggleMode}
				aria-label={mode.current === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
				title={mode.current === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
			>
				{#if mode.current === 'dark'}
					<SunIcon class="size-5" aria-hidden="true" />
				{:else}
					<MoonIcon class="size-5" aria-hidden="true" />
				{/if}
			</Button>
			<Button
				href="https://github.com/cogon-studio"
				target="_blank"
				rel="noopener noreferrer"
				variant="ghost"
				size="icon"
				class="rounded-full"
				aria-label="cogon.studio on GitHub"
				title="cogon.studio on GitHub"
			>
				<GithubLogoIcon class="size-5" aria-hidden="true" />
			</Button>
			<Button
				href="mailto:hello@cogon.studio?subject=Project%20inquiry"
				size="sm"
				class="rounded-full bg-[linear-gradient(135deg,var(--cogon-gold),color-mix(in_srgb,var(--cogon-gold)_72%,#a96d14))] text-[var(--cogon-night)] hover:brightness-105 dark:bg-[linear-gradient(135deg,var(--cogon-gold),color-mix(in_srgb,var(--cogon-gold)_82%,white))]"
			>
				<span class="hidden sm:inline">Start a project</span>
				<span class="sm:hidden">Start</span>
			</Button>
		</nav>
	</div>
</header>

<main id="main">
	{@render children()}
</main>

<footer class="border-border mt-8 border-t">
	<div
		class="text-muted-foreground mx-auto flex w-[min(92%,90rem)] flex-col justify-between gap-3 py-8 text-sm sm:grid sm:grid-cols-3 sm:items-center"
	>
		<span class="inline-flex items-center gap-2">
			<img
				src="{base}/brand/cogon-studio-mark-transparent.png"
				alt=""
				width="24"
				height="24"
				class="size-6 object-contain"
			/>
			<span>cogon.studio · software development studio</span>
		</span>
		<span class="font-mono text-center text-xs tracking-wide">Build boldly. Grow reliably.</span>
		<nav class="flex flex-wrap items-center gap-x-4 gap-y-2 sm:justify-end" aria-label="Footer">
			<a class="text-foreground underline-offset-4 hover:underline" href="{base}/brand-identity">
				Brand Identity
			</a>
			<a
				class="text-foreground underline-offset-4 hover:underline"
				href="mailto:{brandGuidelines.contact.email}"
			>
				{brandGuidelines.contact.email}
			</a>
		</nav>
	</div>
</footer>

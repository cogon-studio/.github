<script lang="ts">
	import './layout.css';
	import { base } from '$app/paths';
	import { ModeWatcher, resetMode, toggleMode, mode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content="#fffdf8" media="(prefers-color-scheme: light)" />
	<meta name="theme-color" content="#071c16" media="(prefers-color-scheme: dark)" />
	<meta property="og:type" content="website" />
</svelte:head>

<ModeWatcher defaultMode="light" />

<a
	href="#main"
	class="bg-primary text-primary-foreground fixed top-3 left-3 z-100 -translate-y-[180%] rounded-md px-3 py-2 font-medium transition-transform focus:translate-y-0"
>
	Skip to content
</a>

<header
	class="border-border/40 bg-background/80 sticky top-0 z-50 border-b backdrop-blur-md"
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
				src="{base}/brand/cogon-studio-square-light.png"
				alt=""
				width="28"
				height="28"
				class="size-7 rounded-xl"
			/>
			<span>cogon.studio</span>
		</a>

		<nav class="flex items-center gap-2" aria-label="Primary">
			<Button
				variant="ghost"
				size="sm"
				class="rounded-full"
				onclick={toggleMode}
				aria-label={mode.current === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
			>
				<span
					class="bg-accent size-2 rounded-full shadow-[0_0_0_4px_color-mix(in_srgb,var(--accent)_22%,transparent)]"
					aria-hidden="true"
				></span>
				<span class="hidden sm:inline"
					>{mode.current === 'dark' ? 'Light' : 'Dark'}</span
				>
			</Button>
			<Button
				href="https://github.com/cogon-studio"
				target="_blank"
				rel="noopener noreferrer"
				variant="outline"
				size="sm"
				class="rounded-full"
			>
				GitHub
			</Button>
			<Button
				href="mailto:hello@cogon.studio?subject=Project%20inquiry"
				size="sm"
				class="rounded-full bg-[var(--cogon-gold)] text-[var(--cogon-night)] hover:bg-[var(--cogon-gold)]/90"
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
		class="text-muted-foreground mx-auto flex w-[min(92%,90rem)] flex-col justify-between gap-3 py-8 text-sm sm:flex-row sm:items-center"
	>
		<span>cogon.studio · software development studio</span>
		<span class="font-mono text-xs tracking-wide">Build boldly. Grow reliably.</span>
		<button
			type="button"
			class="text-muted-foreground hover:text-foreground text-left text-xs underline-offset-4 hover:underline"
			onclick={() => resetMode()}
		>
			System theme
		</button>
	</div>
</footer>

<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { verifyBrandPassword } from '$lib/brand/auth.js';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	let allowed = $state(false);
	let password = $state('');
	let error = $state('');
	let submitting = $state(false);

	async function onSubmit(event: Event) {
		event.preventDefault();
		error = '';
		submitting = true;
		try {
			const ok = await verifyBrandPassword(password);
			if (!ok) {
				error = 'That password does not match.';
				return;
			}
			allowed = true;
			password = '';
		} finally {
			submitting = false;
		}
	}
</script>

{#if allowed}
	{@render children()}
{:else}
	<section
		class="mx-auto flex min-h-[min(40rem,calc(100svh-8rem))] w-[min(92%,28rem)] flex-col justify-center py-16"
		aria-labelledby="brand-lock-title"
	>
		<p class="font-mono text-muted-foreground text-xs tracking-[0.08em] uppercase">Restricted</p>
		<h1
			id="brand-lock-title"
			class="font-display mt-3 text-4xl leading-none font-bold tracking-[-0.03em]"
		>
			Brand design
		</h1>
		<p class="text-muted-foreground mt-4 text-base leading-relaxed">
			Enter the studio password to view this page.
		</p>

		<form class="mt-8 space-y-4" onsubmit={onSubmit}>
			<label class="block space-y-2">
				<span class="text-sm font-medium">Password</span>
				<input
					class="border-border bg-card text-foreground focus-visible:ring-ring w-full rounded-xl border px-3 py-2.5 text-base outline-none focus-visible:ring-3"
					type="password"
					name="password"
					autocomplete="current-password"
					bind:value={password}
					required
				/>
			</label>
			{#if error}
				<p class="text-destructive text-sm" role="alert">{error}</p>
			{/if}
			<Button type="submit" class="rounded-full px-5" disabled={submitting || !password}>
				{submitting ? 'Checking…' : 'Continue'}
			</Button>
		</form>
	</section>
{/if}

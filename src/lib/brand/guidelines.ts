/**
 * Brand guidelines for cogon.studio.
 * Visual system adapted from a trust-first forest + lime language,
 * pushed harder for marketing: load-bearing type, solid lime action, forest mass.
 */
export const brandGuidelines = {
	version: '2.0',
	brand: 'cogon.studio',
	organizationType: 'Product engineering infrastructure',
	tagline: 'Infrastructure for software that has to hold.',
	url: 'https://cogon.studio/',
	contact: {
		email: 'hello@cogon.studio',
		github: 'https://github.com/cogon-studio'
	},
	audience:
		'Founders and engineering leads who need a product to keep shipping after the first launch.',
	positioning:
		'A studio you plug into. We hold the decisions, the delivery, and the system your team inherits.',
	promise:
		'Named tradeoffs, visible quality, and software that still stands after we step back.',
	personality: ['direct', 'reliable', 'precise', 'steady'] as const,
	values: [
		{ name: 'Decisions first', detail: 'Name the tradeoff before the first sprint spends it.' },
		{ name: 'Visible quality', detail: 'Security, review, and follow-through show up every week.' },
		{ name: 'Context that transfers', detail: 'The team inherits the system, not a black box.' },
		{ name: 'A useful next step', detail: 'Every conversation ends with what is known and what is open.' }
	],
	voice: {
		principles: ['clear', 'grounded', 'strong', 'specific'] as const,
		say: 'Here is what the system has to hold, what is still open, and the next build.',
		avoid: 'We leverage cutting-edge solutions to revolutionize your digital transformation.',
		rules: [
			'Lead with the outcome. Short sentences. Plain words.',
			'Use specifics. Do not invent volumes, logos, or guarantees.',
			'Sound like a desk that holds weight: direct, calm, and exact.',
			'State the tradeoff. Do not soften a hard constraint into a slogan.'
		]
	},
	fonts: {
		display: 'Plus Jakarta Sans',
		body: 'Plus Jakarta Sans',
		mono: 'IBM Plex Mono'
	},
	colors: {
		ink: '#163300',
		muted: '#5C6B57',
		line: '#D9E0D6',
		canvas: '#F2F5F0',
		panel: '#FFFFFF',
		sage: '#E8EBE6',
		lime: '#9FE870',
		wash: '#E4F7D4',
		inverse: '#163300',
		night: '#0F160C',
		grove: '#162014'
	},
	themes: {
		light: {
			bg: '#FFFFFF',
			surface: '#F2F5F0',
			text: '#163300',
			primary: '#9FE870',
			accent: '#163300'
		},
		dark: {
			bg: '#0F160C',
			surface: '#162014',
			text: '#E7F0E2',
			primary: '#9FE870',
			accent: '#E7F0E2'
		}
	},
	radii: { sm: 8, md: 16, lg: 24, pill: 9999 },
	motion: {
		fastMs: 200,
		baseMs: 280,
		ease: 'cubic-bezier(0.22, 1, 0.36, 1)'
	},
	expression: {
		shape: 'Pill actions. 24px media frames. Forest slabs for weight. Hairline rules only where they separate real groups.',
		interface: 'One lime action. Forest carries the headline. Mono carries indices and proof.',
		imagery:
			'Photographic infrastructure and precise product UI, blended with bold type. Placeholders describe the shot; they are not the final art.',
		doNot: [
			'Recolor the mark outside forest and lime',
			'Use purple SaaS gradients, neon glows, or glass stacks for their own sake',
			'Invent customer logos, volumes, or testimonials',
			'Soften the page into a breezy illustration collage'
		]
	},
	assets: {
		markLight: '/brand/cogon-studio-square-light.png',
		markDark: '/brand/cogon-studio-square-dark.png',
		markRounded: '/brand/cogon-studio-logo-rounded.png',
		tokensCss: '/brand/cogon-brand-tokens.css',
		identityGuide: '/brand-identity'
	},
	agentUsage: {
		summary:
			'Apply forest ink, lime action, Plus Jakarta Sans, and IBM Plex Mono. Marketing type is heavy and structural. Do not invent proof.',
		preferSemanticTokens: true,
		primaryActionColorRole: 'lime fill with forest text',
		emphasisColorRole: 'forest inverse slabs',
		endpoint: '/brand-identity-json'
	}
} as const;

export type BrandGuidelines = typeof brandGuidelines;

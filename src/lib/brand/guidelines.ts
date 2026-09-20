/**
 * Brief core brand guidelines for AI agents across cogon.studio projects.
 * Keep this file the single source of truth for agent consumption.
 */
export const brandGuidelines = {
	version: '1.1',
	brand: 'cogon.studio',
	organizationType: 'Software development studio',
	tagline: 'Build boldly. Grow reliably.',
	url: 'https://cogon.studio/',
	contact: {
		email: 'hello@cogon.studio',
		github: 'https://github.com/cogon-studio'
	},
	audience: 'Startups and growing teams who need product momentum without chaotic delivery.',
	positioning:
		'Blends fresh product thinking with disciplined engineering — momentum without chaos.',
	promise:
		'Clear decisions, dependable delivery, and software designed to keep growing.',
	personality: ['innovative', 'reliable', 'youthful', 'warm'] as const,
	values: [
		{ name: 'Curious by design', detail: 'Ask better questions before writing code.' },
		{ name: 'Reliable by default', detail: 'Make quality, security, and follow-through visible.' },
		{ name: 'Human in every detail', detail: 'Communicate plainly; design for real people.' },
		{ name: 'Grow together', detail: 'Share context, teach openly, improve continuously.' }
	],
	voice: {
		principles: ['clear', 'grounded', 'warm', 'curious'] as const,
		say: 'Here is what we know, what is uncertain, and the next useful step.',
		avoid: 'We leverage cutting-edge solutions to revolutionize your digital transformation.',
		rules: [
			'Lead with the outcome. Prefer plain words and short sentences.',
			'Use evidence and specifics. Avoid inflated claims and empty tech hype.',
			'Sound like a thoughtful teammate: direct, respectful, and encouraging.',
			'Invite possibilities. Explain tradeoffs without making the audience feel behind.'
		]
	},
	fonts: {
		display: 'Bricolage Grotesque',
		body: 'Inter',
		mono: 'JetBrains Mono'
	},
	colors: {
		forest: '#0B4A3B',
		night: '#071C16',
		sprout: '#5CCB91',
		gold: '#E4B544',
		softSun: '#FFF7D6',
		ivory: '#FFFDF4',
		ink: '#12352C',
		grove: '#0E2A22',
		mist: '#B7C8BE',
		cream: '#FFF8DC'
	},
	themes: {
		light: {
			bg: '#FFF7D6',
			surface: '#FFFDF4',
			text: '#12352C',
			primary: '#0B4A3B',
			accent: '#E4B544'
		},
		dark: {
			bg: '#071C16',
			surface: '#0E2A22',
			text: '#FFF8DC',
			primary: '#5CCB91',
			accent: '#F0C85A'
		}
	},
	radii: { sm: 8, md: 14, lg: 22 },
	motion: {
		fastMs: 160,
		baseMs: 220,
		ease: 'cubic-bezier(0.22, 1, 0.36, 1)'
	},
	expression: {
		shape: 'Rounded rectangles, soft arcs, generous whitespace.',
		interface: 'One clear primary action per view. Green carries trust; yellow signals emphasis.',
		imagery: 'Real collaboration, product details, prototypes, outcomes. Natural light.',
		doNot: [
			'Stretch, rotate, or recolor the mark outside the palette',
			'Use purple-on-white SaaS defaults or cream+terracotta editorial clichés',
			'Lead with fake metrics, hype adjectives, or stacked card grids in the hero'
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
			'Apply these tokens, voice rules, and composition constraints when generating UI, copy, or docs for cogon.studio products.',
		preferSemanticTokens: true,
		primaryActionColorRole: 'primary (forest / sprout by theme)',
		emphasisColorRole: 'accent (harvest gold)',
		endpoint: '/brand-identity-json'
	}
} as const;

export type BrandGuidelines = typeof brandGuidelines;

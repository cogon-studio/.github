import process from 'node:process';
import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const isDev = process.argv.includes('dev') || process.env.NODE_ENV === 'development';
const basePath = (process.env.BASE_PATH ?? '/.github') as '' | `/${string}`;

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter({
				fallback: '404.html',
				pages: 'build',
				assets: 'build',
				strict: true
			}),
			paths: {
				// GitHub project pages for this repo serve under /.github
				// Override with BASE_PATH="" when using a custom domain at the site root.
				base: isDev ? '' : basePath
			},
			prerender: {
				handleMissingId: 'warn'
			}
		})
	]
});

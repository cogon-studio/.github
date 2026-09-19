import { json } from '@sveltejs/kit';
import { brandGuidelines } from '$lib/brand/guidelines.js';
import type { RequestHandler } from './$types.js';

export const prerender = true;

/** Core brand guidelines for AI agents. Not linked from the public marketing site. */
export const GET: RequestHandler = () => {
	return json(brandGuidelines, {
		headers: {
			'cache-control': 'public, max-age=3600',
			'x-cogon-brand-version': brandGuidelines.version
		}
	});
};

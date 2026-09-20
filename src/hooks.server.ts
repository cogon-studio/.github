import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

function isHttps(request: Request): boolean {
	const url = new URL(request.url);
	if (url.protocol === 'https:') return true;

	const forwarded = request.headers.get('x-forwarded-proto');
	if (forwarded?.split(',')[0]?.trim().toLowerCase() === 'https') return true;

	const cfVisitor = request.headers.get('cf-visitor');
	if (cfVisitor) {
		try {
			const parsed = JSON.parse(cfVisitor) as { scheme?: string };
			if (parsed.scheme === 'https') return true;
		} catch {
			/* ignore malformed cf-visitor */
		}
	}

	return false;
}

export const handle: Handle = async ({ event, resolve }) => {
	if (!isHttps(event.request) && event.url.hostname !== 'localhost') {
		const httpsUrl = new URL(event.url);
		httpsUrl.protocol = 'https:';
		redirect(301, httpsUrl.toString());
	}

	return resolve(event);
};

/** SHA-256 hex of the brand passphrase. Plaintext is never stored in the client. */
export const BRAND_PASSWORD_HASH =
	'966fe8f3dc47fa525aa3e4a17d5bd5a7ccf3d249d0987db3ca5f467783b30464';

export async function sha256Hex(value: string): Promise<string> {
	const data = new TextEncoder().encode(value);
	const digest = await crypto.subtle.digest('SHA-256', data);
	return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function verifyBrandPassword(password: string): Promise<boolean> {
	const hash = await sha256Hex(password);
	return hash === BRAND_PASSWORD_HASH;
}

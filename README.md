# cogon.studio

Public home for the **cogon.studio** GitHub organization.

This repository powers:

- The organization [profile README](./profile/README.md) shown on [github.com/cogon-studio](https://github.com/cogon-studio)
- The studio website (SvelteKit + shadcn-svelte), published on Cloudflare Workers
- The brand identity guide and CSS tokens

## Site

| | |
|---|---|
| Stack | SvelteKit, Tailwind CSS 4, shadcn-svelte (vega) |
| Hosting | Cloudflare Workers (`adapter-cloudflare`) |
| Brand | Soft Sun / Night Grove · Bricolage · Inter · JetBrains Mono |
| Domain | [cogon.studio](https://cogon.studio) |

### Develop

```bash
pnpm install
pnpm dev
```

### Build & deploy

```bash
pnpm build
pnpm deploy
```

Push to `main`. The [deploy workflow](./.github/workflows/deploy.yml) builds and publishes with Wrangler.

Repo secrets required for CI:

- `CLOUDFLARE_API_TOKEN` — Workers deploy permission

Email: Cloudflare Email Routing is enabled for `cogon.studio`. After verifying the destination address in Gmail, forward `hello@cogon.studio` with Wrangler.


## Brand system

- `/brand-identity` — public brand identity page
- `/brand-identity-json` — core brand guidelines JSON for AI agents
- Assets under [`static/brand/`](./static/brand/)

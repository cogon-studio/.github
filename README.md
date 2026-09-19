# cogon.studio

Public home for the **cogon.studio** GitHub organization.

This repository powers:

- The organization [profile README](./profile/README.md) shown on [github.com/cogon-studio](https://github.com/cogon-studio)
- The studio website (SvelteKit + shadcn-svelte), published with GitHub Pages
- The [brand identity guide](./static/brand/cogon-studio-brand-identity-guide.html) and CSS tokens

## Site

| | |
|---|---|
| Stack | SvelteKit, Tailwind CSS 4, shadcn-svelte (vega) |
| Hosting | GitHub Pages (`adapter-static`) |
| Brand | Soft Sun / Night Grove · Bricolage · Inter · JetBrains Mono |

### Develop

```bash
pnpm install
pnpm dev
```

### Build

```bash
# Project Pages URL: https://cogon-studio.github.io/.github/
pnpm build

# Custom domain at the site root:
BASE_PATH= pnpm build
```

## Brand system (private)

- `/brand-design` — identity landing + guide links (password form; SHA-256 hash compared client-side; no session persistence)
- `/brand-design-json` and `/brand-design-json.json` — brief core guidelines JSON for AI agents (not linked from the public site)
- Assets under [`static/brand/`](./static/brand/)

## Deploy

Push to `main`. The [Pages workflow](./.github/workflows/deploy-pages.yml) builds and publishes `build/`.

Enable **Settings → Pages → Source: GitHub Actions** on this repository if it is not already set.

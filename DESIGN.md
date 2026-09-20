# Design System

<!-- impeccable:design-schema 1 -->

## World

Breezy illustrated studio landing. Soft ivory fields, Night Grove accents (forest, sprout, harvest gold), floating UI chips with soft depth shadows, unDraw scenes recolored to brand greens, pill CTAs. Refuses text-only slabs and purple-on-white SaaS clones.

## Surfaces

### Marketing home (`src/routes/+page.svelte`)

- **Mode:** Persuade
- **First viewport:** Centered promise with sprout accent word; gold primary CTA; floating checklist/status/decision cards; hero unDraw teamwork scene
- **Sections:** Integrated pillars (3 illustrated tiles) → capability grid (2×2) → values with illustration → FAQ accordion → illustrated CTA panel
- **Motion:** Soft float on hero illustration and chips; doodle bob; reduced-motion respected

### Brand system (`src/routes/brand-identity/+page.svelte`)

- **Mode:** Read
- **World:** Night Grove documentation canvas with numbered sections, fine rules, large type specimens, and dense token swatches
- **First viewport:** Full-height brand-system statement followed by a concise source-of-truth description
- **Sections:** Logo specimens → typography scale → core palette and themes → voice principles and examples
- **Constraint:** This route remains intentionally dark so light and dark brand specimens can be compared on one stable canvas

## Tokens

Inherited from `layout.css` / brand guidelines, with light marketing ground cooled toward ivory (`#fffdf8`) and white cards. Dark theme remains Night Grove.

| Role | Light | Notes |
|------|-------|-------|
| Background | `#fffdf8` | Cooler than Soft Sun cream for breezy feel |
| Card | `#ffffff` | Soft shadow elevation |
| Accent word | `--cogon-sprout` | Headline highlights |
| Primary CTA | `--cogon-gold` | Pill buttons |
| Ink | `#12352c` | Body/headings |

## Type

- Display: Bricolage Grotesque Variable
- Body: Inter Variable
- Mono: JetBrains Mono (data/code only)

## Imagery

Open-source unDraw illustrations (Katerina Limpitsouni) under `static/illustrations/`, recolored toward forest/sprout. License note in `static/illustrations/LICENSE.txt`. Synthetic floating UI cards illustrate delivery rituals—not fake customer metrics.

## Components

- Pill buttons (shadcn Button + `rounded-full`)
- Feature tiles and capability cards: ~1.25rem radius, soft shadow, muted illustration wells
- FAQ: native `<details>` / `<summary>` accordion
- Header: light sticky bar with Start CTA

## Do / Don’t

- Do keep brand greens/gold; do ship real illustrations
- Don’t use purple SaaS defaults; don’t invent testimonials or vanity metrics

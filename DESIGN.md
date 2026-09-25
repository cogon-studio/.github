# Design System

## World

Load-bearing product engineering page. White field, forest ink `#163300`, lime action `#9FE870`, Plus Jakarta Sans extra-bold uppercase headlines, IBM Plex Mono for indices. Pictures and a hero loop sit in 24px frames. Refuses breezy illustration collages, gold gradients, and purple SaaS clones.

The palette comes from a calm cash-desk system. Marketing uses the same tokens with more mass: huge type, a forest inverse band, and lime only as the action.

## Surfaces

### Marketing home (`src/routes/+page.svelte`)

Section order follows a platform landing, not a feature grid:

1. Centered uppercase promise and a lime pill
2. Wide hero loop with a pause control
3. Three short in-house points
4. Three in-house products: Lean Photos, Local Git, Podspace
5. Closing line

### Brand standard (`src/routes/brand-identity/+page.svelte`)

Light specimen page: mark, type, color, shape, voice. Source of truth is `src/lib/brand/guidelines.ts`.

## Imagery

`static/placeholders/` holds stand-in frames. Each `<img>` alt is the brief for a later generated replacement. Do not invent customer logos or metrics inside those frames.

## Do / Don’t

- Do use lime for the primary action and forest for headlines and inverse bands
- Do keep motion on the hero loop, the marquee, and the headline
- Don’t invent proof, and don’t soften the page back into floating chips

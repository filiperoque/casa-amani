# Design system: tokens, scale, and usage rules

## Why

The site had grown inconsistent: modules with different content widths,
ad-hoc type sizes, mixed CTA casings, faded text failing WCAG AA, and spacing
values with no shared rhythm. Filipe requested a registered token system
(2026-07-08): 8pt baseline grid, a proper modular type scale, and explicit
usage rules, mirrored in openspec so future changes respect it.

## What changes

- One token source: `src/app/globals.css` `@theme`; documented in
  `.stitch/DESIGN.md` (the human-readable contract).
- Containers: content 1280 / copy 768 / narrow 672 / hero-copy 600, gutters
  24/120, with the rule that gutters live outside containers.
- Spacing scale 8/12/16/24/32/48/64/96/128 (40 and 80 retired from layout).
- Type scale: Perfect Fourth anchored at 16px (16/21/28/38/50/72/88), named
  classes text-body/intro/title-sm/title/title-lg/display/wordmark with
  baseline-aligned line-heights.
- CTA system, casing rules, contrast rules, radius 0, no elevation, motion
  token rules (see spec deltas).

## Impact

- Affected specs: typography-and-tokens (extended, colors unchanged),
  site-layout (container widths), house-gallery (strip alignment: first card
  flush with the content column instead of viewport-edge peek).
- Affected code: globals.css, all components and pages (token class sweep).

## Resolved (Filipe, 2026-07-08)

1. Static export: spec updated to reality (Vercel server build; sitemap
   route and subscribe API require it).
2. Fonts: spec updated to reality (@font-face in globals.css).
3. Editorial refinements approved: pacing up one tier (page tops 160),
   prose body 18/32 on editorial pages, kickers and pull quotes on
   editorial pages only (never landing or house).

## Open questions

1. Cream-on-tan text cannot pass WCAG AA on `#b8956e`; `--color-warm-deep`
   `#7f5f3e` is provisioned. Adopt for text-bearing tan sections?

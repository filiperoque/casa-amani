## Context

New greenfield project — a single-page marketing site for Casa Amani, a vacation villa in Madeira. The Figma design (frame `2032:222`) defines the visual spec: warm earth tones, serif/sans-serif font pairing, large property photography, and a horizontal-scrolling gallery. The Next.js project has been scaffolded with Tailwind CSS v4.

## Goals / Non-Goals

**Goals:**
- Pixel-faithful implementation of the Figma design
- Fast static site that scores 90+ on Lighthouse performance
- Clean, maintainable component structure
- Responsive layout (desktop-first, scales to mobile)
- Static export for simple hosting on casa-amani.com

**Non-Goals:**
- Booking/reservation system (link out to external platform)
- CMS or content management — content is hardcoded for now
- i18n framework — PT/EN toggle is UI-only placeholder for v1
- Server-side features (API routes, SSR, ISR)
- SEO optimization beyond basic meta tags

## Decisions

### 1. Static export with `output: 'export'`
The site is purely presentational with no dynamic data. Static export removes the need for a Node.js server and allows deployment to any CDN/static host.
**Alternative**: SSR/ISR — unnecessary complexity for a brochure site.

### 2. Single page component with section components
One `page.tsx` that composes section components (`Header`, `Hero`, `Tagline`, `HouseGallery`, `Location`). Each section is a server component — no client-side JS needed except for the horizontal scroll.
**Alternative**: Separate routes per section — doesn't match the single-page scroll design.

### 3. Horizontal scroll for house gallery via CSS `overflow-x: auto`
The Figma design shows 9 room cards in a horizontal strip that overflows the viewport. CSS-only horizontal scroll (`overflow-x: auto`, `flex-nowrap`) is the simplest approach with no JS dependency.
**Alternative**: JS carousel library (Embla, Swiper) — adds bundle size for a UX that CSS handles natively.

### 4. `next/font/local` for custom fonts
GT Sectra Display, GT Sectra Fine, and GT Walsheim are commercial fonts. Using `next/font/local` with font files in `src/fonts/` provides automatic optimization, preloading, and `font-display: swap`.
**Alternative**: Google Fonts — these fonts aren't available on Google Fonts.

### 5. Tailwind CSS v4 with custom theme tokens
Define design tokens as CSS custom properties in `globals.css` and reference them in Tailwind classes. Colors: `--color-warm` (#b8956e), `--color-cream` (#f2ece2), `--color-brown` (#7a5f40).
**Alternative**: Inline hex values everywhere — harder to maintain, no single source of truth.

### 6. Next.js Image component with static imports
Use `next/image` for all property photos with `sizes` prop for responsive loading. Images stored in `public/images/` and served statically.
**Alternative**: External image CDN — unnecessary for ~11 images on a static site.

## Risks / Trade-offs

- **[Font licensing]** GT Sectra and GT Walsheim are commercial typefaces. The owner must provide licensed font files (`.woff2`). → Mitigation: Provide fallback font stack (`Georgia` for serif, `system-ui` for sans) and document where to drop in font files.
- **[Image weight]** 11 high-res photos will dominate page weight. → Mitigation: Use `next/image` for automatic WebP/AVIF conversion and lazy loading. Only the hero and first visible gallery cards load eagerly.
- **[Horizontal scroll discoverability]** Users may not realize the gallery scrolls. → Mitigation: Allow cards to peek from the right edge, signaling more content. Consider a subtle scroll indicator.
- **[No CMS]** Content changes require code deploys. → Acceptable for v1; owner can request CMS integration later.

## ADDED Requirements

### Requirement: Custom fonts load via @font-face
The site SHALL load GT Sectra Display (Regular) and GT Walsheim (Regular, Medium) via `@font-face` declarations in `globals.css` with `font-display: swap`, woff2 sources in `public/fonts/`, preload hints in the locale layout, and Georgia/system-ui fallback stacks. (Amended 2026-07-08 per Filipe: spec updated to match production; next/font/local not used.)

#### Scenario: Fonts load correctly
- **WHEN** the page loads
- **THEN** headings render in GT Sectra Display/Fine and body text in GT Walsheim, with Georgia and system-ui fallbacks during font loading

### Requirement: Design tokens defined as CSS custom properties
The site SHALL define color, spacing, and font tokens as CSS custom properties in `globals.css`: `--color-warm: #b8956e`, `--color-cream: #f2ece2`, `--color-brown: #7a5f40`, with corresponding Tailwind theme extensions.

#### Scenario: Tokens are consistent across all sections
- **WHEN** any section renders
- **THEN** warm sections use `var(--color-warm)` for backgrounds and `var(--color-cream)` for text; the house section uses `var(--color-cream)` for background and `var(--color-brown)` for text

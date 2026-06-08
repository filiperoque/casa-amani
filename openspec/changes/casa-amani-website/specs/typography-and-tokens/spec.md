## ADDED Requirements

### Requirement: Custom fonts load via next/font/local
The site SHALL load GT Sectra Display Trial (Regular), GT Sectra Fine Trial (Regular), and GT Walsheim Trial (Light, Regular, Medium) using `next/font/local` with `font-display: swap` and appropriate fallback stacks.

#### Scenario: Fonts load correctly
- **WHEN** the page loads
- **THEN** headings render in GT Sectra Display/Fine and body text in GT Walsheim, with Georgia and system-ui fallbacks during font loading

### Requirement: Design tokens defined as CSS custom properties
The site SHALL define color, spacing, and font tokens as CSS custom properties in `globals.css`: `--color-warm: #b8956e`, `--color-cream: #f2ece2`, `--color-brown: #7a5f40`, with corresponding Tailwind theme extensions.

#### Scenario: Tokens are consistent across all sections
- **WHEN** any section renders
- **THEN** warm sections use `var(--color-warm)` for backgrounds and `var(--color-cream)` for text; the house section uses `var(--color-cream)` for background and `var(--color-brown)` for text

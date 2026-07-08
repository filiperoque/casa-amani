---
name: Casa Amani Madeira
colors:
  warm: "#b8956e"
  cream: "#f2ece2"
  brown: "#7a5f40"
  ink: "#55432e"
  warm-deep: "#7f5f3e"
---

# Design System: Casa Amani Madeira

## 1. Visual Theme & Atmosphere

Quiet, warm, unhurried. A single sun-washed palette of cream, tan, and umber drawn from the house itself: plaster, wood, afternoon light. Pages are built from full-bleed photography and short, lowercase declarative text with generous air around everything. Nothing shouts; hierarchy comes from the serif display face and whitespace, never from color volume or decoration. The landing page is a single hero scene (wordmark, place line, poem, one action); all facts and depth live on interior pages.

Motion follows a "breath/tide/drift/settle" token system: slow ease-out entrances, ambient Ken Burns on heroes, everything collapsed under `prefers-reduced-motion`.

## 2. Color Palette & Roles

### Primary Foundation
- **Sun Cream** `#f2ece2` (`--color-cream`): default page background for content pages; text color on dark surfaces.
- **Sand Tan** `#b8956e` (`--color-warm`): brand surface for heroes, footer, and image-adjacent bands.
- **Umber** `#7a5f40` (`--color-brown`): primary text on cream; darkest brand tone.

### Accent & Interactive
There is no separate accent color. Interactive elements use the text color of their surface (umber on cream, cream on tan) with a 1px border. Restraint is the accent.

### Typography & Text Hierarchy (contrast rules, binding)
- On **cream**: body and UI text is full `--color-brown` (5.0:1, AA pass). **Never set text in `text-brown/40..70` alphas**: 70% blends to ~2.9:1 and fails AA. Secondary hierarchy is expressed with size and the body/display font switch, not opacity. Fine print may use `text-brown` at `text-sm`, never faded.
- On **tan (`warm`)**: text is full `--color-cream`, minimum 16px. KNOWN LIMIT: cream on `#b8956e` is ~2.4:1 and cannot pass AA at any opacity. Sections that carry running text on tan should either migrate to `--color-warm-deep` `#7f5f3e` (cream on it ≈ 4.6:1, AA pass) or keep text minimal (wordmark, short labels). This is an open brand decision; `--color-warm-deep` is provisioned for it.
- Hover states may dim to 80% opacity (transient states are exempt from static contrast rules).

### Functional States
Form errors and confirmations reuse the surface text color at full opacity with plain wording; no red/green states exist in the brand.

## 3. Typography Rules

### Families
- **GT Sectra Display** (serif, `--font-display`): wordmark, h1/h2/h3, CTA labels. Lowercase for editorial headings ("the house, briefly."), uppercase + tracked for CTAs and room labels.
- **GT Walsheim** (`--font-body`): everything else. Regular 400; Medium 500 only for FAQ questions and emphasized UI.

### Hierarchy (type scale)
- Display h1: `text-5xl` mobile to `text-[88px]` desktop (wordmark only).
- Page h1: `text-3xl` to `text-5xl` display.
- Section h2: `text-2xl` to `text-3xl` display, lowercase, with trailing period.
- Card h3: `text-sm` uppercase `tracking-[4px]` display.
- Body: **16px minimum everywhere** (`text-base`), `leading-7`/`leading-8`; `md:text-lg` for intro paragraphs. `text-sm` is reserved for captions, chips, and legal lines and must still be full-contrast.
- Never use `text-xs` for content a visitor is expected to read.

## 4. Component Stylings

### CTA system (one system, three tiers)
1. **Primary action** (always the Airbnb booking link): bordered box, transparent fill, `font-display text-sm uppercase tracking-[4px] px-6 py-3`, text/border in the surface's text color. Hover: scale 1.02 + 10% fill tint. Label comes from i18n (`landing.cta` in nav/hero contexts, `bookCta` in section contexts) and is always rendered UPPERCASE by the component.
2. **Form submit** (newsletter): identical shape and typography to primary, sized to its input row.
3. **Text link**: body font, sentence case, underline on cream (or no underline in footer link lists), with a trailing arrow for forward navigation ("The house in detail →"). Never uppercase.

Never mix tiers on the same intent. Never introduce a second primary style.

### Cards & content blocks
No rounded corners anywhere (radius 0 is the system). No shadows. Hairline separators use `border-brown/10` on cream and `border-cream/20` on tan (decorative only). Room cards: image, uppercase tracked h3, one short paragraph.

### Navigation
Fixed 56px header; hamburger + wordmark + language picker. Full-screen tan overlay menu: display-serif links, primary pages large, secondary pages smaller, one image preview panel. All labels localized via i18n, never hardcoded.

### Inputs & Forms
1px border in surface text color at full strength on focus, transparent fill, `px-4 py-3 text-base`, placeholder at 70% minimum. Labels always visible (dt/label above value), never placeholder-as-label.

### Newsletter band (compact rule)
A single quiet band above the footer: heading + one line + inline form in one row on desktop, stacked on mobile. Max `py-10`. It must never read as a page section of its own.

## 5. Layout Principles

- Content column: `max-w-3xl` for prose, `max-w-5xl` for image grids; page gutter `px-6`, `lg:px-[120px]`.
- Landing page = hero only (`100svh` scene + footer). Interior pages: h1 block, alternating cream sections; tan is used sparingly.
- Spacing rhythm: sections `py-16 md:py-24`; inside sections, `mb-6` after headings, `gap-3/4` in lists.
- Breakpoints: single column under 768px; grids collapse to 1 col; nav identical at all sizes.

## 6. Design System Notes for Generation

Use language like: "quiet", "sun-washed", "restrained", "one action per view", "lowercase serif headings with a trailing period". Colors: Sun Cream #f2ece2, Sand Tan #b8956e, Umber #7a5f40 (text on cream), Deep Tan #7f5f3e (AA-safe tan for text sections). Example prompt: "A quiet content section on sun cream: lowercase serif heading 'the house, briefly.', one short paragraph in umber at 16px, a row of hairline-bordered fact chips, one bordered uppercase serif CTA." Iterate by removing elements, not adding; if a section needs three styles, it is two sections.

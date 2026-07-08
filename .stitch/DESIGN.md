---
name: Casa Amani Madeira
colors:
  warm: "#b8956e"
  cream: "#f2ece2"
  brown: "#7a5f40"
  warm-deep: "#846344"
---

# Design System: Casa Amani Madeira

Structured after Uber Base (tokens, typography, dimensions, grids, radius,
motion, content design) but editorial in temperament: fewer levels, stronger
contrast between them, restraint as the accent. Single source of truth for
values: `src/app/globals.css` `@theme`. Governance: mirrored in
`openspec/changes/design-system/`. Components use token classes, never raw
arbitrary values.

## 1. Principles

Quiet, warm, unhurried. One sun-washed palette drawn from the house: plaster,
wood, afternoon light. Hierarchy comes from the serif display face and
whitespace, never from color volume or decoration. One action per view.
Iterate by removing, not adding: if a section needs three styles, it is two
sections.

## 2. Design Tokens

### Color
- **Sun Cream** `#f2ece2` `--color-cream`: page background; text on tan.
- **Sand Tan** `#b8956e` `--color-warm`: brand surface (heroes, footer, bands).
- **Umber** `#7a5f40` `--color-brown`: all text on cream (5.0:1 AA).
- **Deep Tan** `#846344` `--color-warm-deep`: AA-safe tan (cream on it 4.6:1). ADOPTED as the primary CTA fill (Filipe 2026-07-08: CTA in the footer color family). Still open: adopt for the footer itself?
- No accent color. Interactive elements borrow the surface's text color with a 1px border.

Contrast rules (binding): text on cream is full umber, never `/40..70` alphas (70% ≈ 2.9:1, fails AA). Text on tan is full cream, 16px minimum; cream on tan is ~2.4:1 and cannot pass AA, so tan carries only minimal text until the warm-deep decision. Hover may dim to 80% (transient states exempt).

### Containers (gutter ALWAYS outside the container, never inside)
- `max-w-content` 1280 (8x160): the module column. Every module aligns to it, including hero images and the room-card strip (first card flush left with the column).
- `max-w-copy` 768: prose columns.
- `max-w-narrow` 672: short-form pages.
- `max-w-hero-copy` 600: landing intro only.
Pattern: `<section class="bg-x px-gutter lg:px-gutter-lg"><div class="mx-auto w-full max-w-content">`. Never put `px-gutter*` inside the max-w wrapper; that is what causes module misalignment.

### Gutters
`px-gutter` 24 (mobile/tablet), `lg:px-gutter-lg` 120 (desktop).

### Spacing scale (8pt base, alternating 3:2 / 4:3 jumps for rhythm)
**8, 12, 16, 24, 32, 48, 64, 96, 128, 160.** 40 and 80 are retired from layout rhythm (40 remains only as the fixed control size `h-10`/`w-10`). Editorial pacing (Filipe, 2026-07-08): sections `py-16 md:py-24 lg:py-32` (64/96/128), page-top containers `py-16 md:py-24 lg:py-40` (160), compact bands `py-12` (48); 24 after headings (`mb-6`), 32 after intros (`mb-8`), 12 micro-gaps (`gap-3`).

### Letter-spacing
`tracking-cta` 4px (CTAs, room labels, tags) and `tracking-label` 6px (hero place lines). The only sub-8 values in the system.

## 3. Typography

Scale: **Perfect Fourth (1.333) anchored at 16px**, optically rounded at the
top: 16 → 21 → 28 → 38 → 50 → (67→72) → (89→88). Line-heights sit on the 8pt
baseline; 36 is the single permitted half-step. Chosen over Major Third (too
timid to reach an 88px wordmark) and Golden Ratio (no usable middle sizes).

| Token class | Size/LH | Use |
|---|---|---|
| `text-sm` (caption) | 14/20 | captions, fine print, uppercase tracked labels; full contrast only |
| `text-body` | 16/28 | UI body: forms, nav lists, landing/house copy, contact |
| `text-prose` | 18/32 | editorial long-form body (guide, FAQ, calheta, remote-work, privacy); ~72ch in the copy column |
| `text-intro` | 21/32 | ledes, FAQ questions (md+), compact-band headings |
| `text-title-sm` | 28/36 | section h2, header wordmark, page h1 mobile |
| `text-title` | 38/48 | page h1 (md), tagline mobile |
| `text-title-lg` | 50/56 | page h1 (lg), landing wordmark mobile |
| `text-display` | 72/80 | tagline desktop, landing wordmark md |
| `text-wordmark` | 88/80 | landing/house wordmark desktop only |

No sizes outside this ramp. The Header menu overlay (32/48 display links) is the one grandfathered exception, pending its own redesign.

### Font roles
- **GT Sectra Display** (`font-display`): identity moments; wordmark, all headings, CTA labels, large numerals.
- **GT Walsheim** (`font-body`): information; body, navigation lists, forms, captions. Medium 500 only for FAQ questions and emphasized UI.

### Casing rules (binding; the answer to "lowercase or caps?")
1. **lowercase + trailing period**: editorial display headings; section h2s ("the house.", "your home, briefly.") and editorial page h1s. Sectra only.
2. **UPPERCASE + `tracking-cta`**: CTAs, room labels, micro-tags ("COMING SOON"). Sectra for CTAs, either face for micro-labels at 14px.
3. **UPPERCASE + `tracking-label`**: place lines under wordmarks ("ARCO DA CALHETA MADEIRA").
4. **Title Case**: wayfinding; nav and footer links (The House, Remote Work). Walsheim.
5. **Sentence case**: everything else; body, text links, form labels and messages. Walsheim.
6. **Wordmark**: always lowercase "casa amani".

## 4. Components

### CTA system (the answer to "what font in CTAs?")
- **Primary action** (always the Airbnb booking link): SOLID deep-tan fill (`bg-warm-deep` #846344, footer color family), cream text (4.6:1 AA on every surface), **GT Sectra Display**, `text-sm uppercase tracking-cta px-6 py-3`, no border. Hover: scale 1.02 + `bg-warm-deep/90`. Exception: over photography (landing hero) the CTA keeps the outline treatment; solid fills fight the image and the blend.
- **Secondary action** (newsletter submit and any non-booking boxed action): outline; 1px border and text in the surface's text color, transparent fill.
- **Text link**: Walsheim, sentence case, underline in prose, trailing arrow for forward navigation. Never uppercase, never boxed.
Never mix tiers on one intent; never invent a third style. (Solid/outline split approved by Filipe 2026-07-08.)

### Corner radius
0 everywhere. The system has no rounded corners.

### Elevation
None. Flat surfaces; depth comes from photography and color bands, never shadows. Hairline separators: `border-brown/10` on cream, `border-cream/20` on tan (decorative only; not contrast-bearing).

### Navigation
Fixed 56px header: hamburger, wordmark (28px), language picker. Full-screen tan overlay menu with image preview. All labels via i18n.

### Inputs & forms
1px border in surface text color (full on focus), transparent fill, `px-4 py-3 text-body`, placeholder ≥70%, visible labels (sr-only permitted on single-field forms), `role="alert"` on errors.

### Newsletter band
One quiet `py-12` band above the footer; heading + line left, inline form right; never a page section of its own. Excluded from the landing page.

### Editorial devices (editorial pages ONLY: guide, calheta, remote-work, future notes/articles; never landing, house, faq, contact)
- **Kicker** (`components/Kicker.tsx`): numbered label ("01", "02") in display face, `text-sm uppercase tracking-cta`, above each section h2. Language-free by design.
- **Pull quote** (`components/PullQuote.tsx`): one per page at most, repeating a line that exists VERBATIM in the page's own copy, `text-title-sm`/`text-title` display with a hairline left border, breaking the column left on desktop. Never fabricate a quote.
- **Editorial breadcrumb** (`components/Breadcrumbs.tsx`): the page title IS the breadcrumb: "the guide /" as a smaller linked prefix baseline-aligned with the h1 at full title scale; no repeated title. No underline (underlines are reserved for prose text links); link affordance is the pattern plus a hover dim. Prefix fixed at intro size (~2.4:1 title ratio). nav[aria-label=Breadcrumb]. Guide subpages and future article hierarchies only.
- **Cards** (guide grids): title `text-intro` display, body `text-body` (never `text-prose`; prose is for reading columns), status tags `text-sm tracking-cta`. No opacity washes; state is expressed with tags and borders.

## 5. Motion

Tokens (already in `@theme`): durations `breath` 300 / `tide` 600 / `drift` 1000 / `settle` 1600 / `ambient` 25s; easings `out-natural`, `in-out-calm`, `ambient`. Rules: entrances use drift+out-natural (Reveal), color/border transitions use tide+calm, hovers use breath, heroes may Ken Burns on ambient. Transform and opacity only; everything collapses under `prefers-reduced-motion`. No scroll-jacking, no parallax.

## 6. Content design

Voice: short declaratives, restrained, warm; no exclamation marks, no
"stunning/luxurious/breathtaking", no em-dashes (build-enforced). Facts before
atmosphere on decision pages; atmosphere before facts on the landing page.
Numbers exact and stated once; admissions of limitation are on-brand. Facts
lists ("2 bedrooms · 3 bathrooms") must not wrap mid-fact: each fact is a
no-break unit, breaks happen at separators.

## 7. Generation notes

Language: "quiet", "sun-washed", "restrained", "one action per view",
"lowercase serif headings with a trailing period". Example prompt: "A quiet
content section on sun cream inside a 1280px column: lowercase serif heading
'the house.', one 16px umber paragraph, a bordered uppercase serif CTA."

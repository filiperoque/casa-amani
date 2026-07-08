## ADDED Requirements

### Requirement: Single token source with registered classes
All colors, containers, gutters, letter-spacing, and type sizes SHALL be defined once in `src/app/globals.css` under `@theme` and consumed via generated utility classes (`max-w-content`, `px-gutter`, `tracking-cta`, `text-body`, ...). Components SHALL NOT use raw arbitrary values for these dimensions.

#### Scenario: A new component is added
- **WHEN** a component needs a width, gutter, tracking, or font size
- **THEN** it uses an existing token class; if none fits, the token is added to `@theme` and `.stitch/DESIGN.md` first

### Requirement: 8pt baseline grid with rhythmic spacing scale
Spacing SHALL use the scale 8, 12, 16, 24, 32, 48, 64, 96, 128 (alternating 3:2 and 4:3 jumps). 40 and 80 SHALL NOT be used for layout rhythm; 40 remains permitted only as the fixed control size (`h-10`/`w-10`).

#### Scenario: Section padding
- **WHEN** a section needs vertical padding
- **THEN** it uses py-12, py-16, py-24, or lg:py-32 according to its tier

### Requirement: Perfect Fourth type scale with baseline line-heights
Type SHALL follow a Perfect Fourth (1.333) scale anchored at 16px with optical rounding at the top: 16/28 body, 21/32 intro, 28/36 title-sm, 38/48 title, 50/56 title-lg, 72/80 display, 88/80 wordmark, plus 14/20 caption. Line-heights sit on the 8pt baseline (36 is the single permitted half-step). No other sizes are allowed except the grandfathered Header overlay menu.

#### Scenario: Page heading
- **WHEN** a page h1 renders
- **THEN** it uses `text-title-sm md:text-title lg:text-title-lg` in GT Sectra Display

### Requirement: Container alignment with outside gutters
Every module SHALL align to `max-w-content` (1280px); prose uses `max-w-copy` (768), short-form pages `max-w-narrow` (672). Page gutters (`px-gutter` 24, `lg:px-gutter-lg` 120) SHALL be applied on the section element outside the max-width wrapper, never inside it.

#### Scenario: Module edges align
- **WHEN** two modules render on the same page at any viewport width
- **THEN** their content columns share identical left and right edges, including hero images and the room-card strip (first card flush with the column's left edge)

### Requirement: CTA system and casing rules
Primary actions (Airbnb booking) SHALL render solid: umber fill, cream text, GT Sectra Display, uppercase, `tracking-cta`, no border (outline permitted only over photography, e.g. the landing hero). Secondary boxed actions (form submits) SHALL render outline: 1px border and text in the surface's text color, transparent fill. (Amended 2026-07-08 per Filipe: solid primary / outline secondary.) Text links SHALL render in GT Walsheim, sentence case, never uppercase or boxed. Casing: lowercase + trailing period for editorial display headings; UPPERCASE tracked for CTAs, micro-labels, and place lines; Title Case for nav/footer wayfinding; sentence case for body; the wordmark is always lowercase.

#### Scenario: New booking CTA
- **WHEN** a booking CTA is added anywhere
- **THEN** it reuses the primary recipe and an i18n label; no new button style is invented

### Requirement: Contrast floors
Text on cream SHALL be full-strength `--color-brown` (no 40-70% alphas). Text on tan SHALL be full-strength cream at 16px minimum. Hover states may dim to 80%. Radius SHALL be 0 and elevation none throughout.

#### Scenario: Muted text is needed
- **WHEN** a secondary text treatment is needed on cream
- **THEN** hierarchy is expressed with size or font switch, not opacity

### Requirement: Editorial pacing and prose tier
Page-top containers SHALL use `py-16 md:py-24 lg:py-40` (160 desktop); standard sections `py-16 md:py-24 lg:py-32`; compact bands `py-12`. Long-form body on editorial pages (guide, FAQ, calheta, remote-work, privacy) SHALL use `text-prose` (18/32); UI and landing/house body stays `text-body` (16/28).

#### Scenario: New editorial page
- **WHEN** a new article or guide page is created
- **THEN** its container uses the page-top tier and its body paragraphs use text-prose

### Requirement: Editorial devices scoped to editorial pages
Numbered kickers (Kicker component) and pull quotes (PullQuote component, verbatim lines from the page's own copy only) SHALL appear only on editorial pages (guide subpages, calheta, remote-work, future notes/articles) and SHALL NOT appear on the landing page, house page, FAQ, contact, or privacy.

#### Scenario: Pull quote content
- **WHEN** a pull quote is added
- **THEN** its text exists verbatim elsewhere on the same page

### Requirement: Editorial breadcrumbs on guide subpages
Guide subpages SHALL show an editorial breadcrumb as the title composition itself: "the guide /" as a smaller linked prefix (intro/title-sm) baseline-aligned with the page h1 at full title scale, inside nav[aria-label=Breadcrumb]; the h1 contains only the page name. Card grids SHALL use text-body for descriptions (text-prose is reserved for reading columns) and SHALL NOT use opacity washes for state.

#### Scenario: New guide subpage
- **WHEN** a guide subpage renders
- **THEN** the breadcrumb precedes the h1 and links back to the guide index

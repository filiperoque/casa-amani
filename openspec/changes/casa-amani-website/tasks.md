## 1. Foundation (Complete)

- [x] 1.1 Next.js app with Tailwind CSS, TypeScript, i18n (5 locales)
- [x] 1.2 Design tokens: colors (warm, cream, brown), fonts (GT Sectra Display, GT Walsheim)
- [x] 1.3 Motion system: 3 easing curves, 5 duration tiers (Breath/Tide/Drift/Settle/Ambient)
- [x] 1.4 AVIF/WebP image pipeline with OptimizedImage component
- [x] 1.5 Em-dash CI check (prebuild hook)
- [x] 1.6 Vale prose linter (banned words, no exclamation, no prescriptive)

## 2. Header and Navigation (Complete)

- [x] 2.1 Sticky header with section-aware color switching (warm/cream)
- [x] 2.2 Hamburger icon (= to X morph, Drift timing)
- [x] 2.3 Full-screen menu overlay with image preview on hover
- [x] 2.4 Language picker dropdown (5 locales, native autonyms)
- [x] 2.5 Brand mark "casa amani" (appears on scroll, optical centering)
- [x] 2.6 STAY WITH US CTA in header (swaps with language picker when menu open)

## 3. Landing Page (Complete)

- [x] 3.1 Full-viewport hero with LandingScene (title, subtitle, intro, CTA)
- [x] 3.2 Ken Burns ambient animation on hero image
- [x] 3.3 Staggered entrance (Settle for title/subtitle, Drift for intro/CTA)
- [x] 3.4 Safari iOS fixes (svh, viewport-fit cover, theme-color)

## 4. The House (Complete)

- [x] 4.1 HouseHeroWordmark morph (position:sticky + scale, quintic easing)
- [x] 4.2 Hero image with subtitle
- [x] 4.3 Tagline section (heading + subheading)
- [x] 4.4 HouseGallery horizontal scroll (9 room cards)
- [x] 4.5 Location section (two-column)
- [x] 4.6 Stays Include and Amenities sections (hidden, data ready in translations)

## 5. Content Pages (Complete)

- [x] 5.1 Calheta (/calheta, formerly /the-place) with golf section
- [x] 5.2 Remote Work (/remote-work) with coliving comparison
- [x] 5.3 Experiences (/experiences) with 8 services + Service JSON-LD
- [x] 5.4 FAQ (/faq) with 20 questions, markdown link rendering, FAQPage JSON-LD
- [x] 5.5 Privacy (/privacy) with MailerLite disclosure

## 6. The Guide (Complete structure, content in progress)

- [x] 6.1 Five-category structure: Land, Sea, Table, Culture, Practical
- [x] 6.2 GuideEntry type system + GuideEntryCard component
- [x] 6.3 Table category populated (10 restaurants + 5 bars)
- [x] 6.4 Sea category with surf sub-page (1200-word guide)
- [x] 6.5 Land, Culture, Practical scaffolded (coming soon cards)
- [x] 6.6 308 redirects from old /the-place and /the-island paths
- [ ] 6.7 Phase 2: Table category full rewrite in Casa Amani register
- [ ] 6.8 Phase 3: Practical category (emergency contacts, safety, taxis, apps)
- [ ] 6.9 Phase 4: Land category (walks, levadas, viewpoints, MTB, gardens)
- [ ] 6.10 Phase 5: Sea category (boats, swimming, diving entries)
- [ ] 6.11 Phase 6: Culture category (MUDAS, music, festivals, whale/dolphin)

## 7. Footer (Complete)

- [x] 7.1 Unified footer (brand, pages, contact/booking in 3-column grid)
- [x] 7.2 Copyright + Privacy bottom bar
- [x] 7.3 Instagram link with Plausible event
- [x] 7.4 Scroll-triggered Reveal animations

## 8. Subscribe Module (Built, hidden)

- [x] 8.1 SubscribeBlock component (email capture, success/error states)
- [x] 8.2 /api/subscribe server-side route (MailerLite proxy)
- [x] 8.3 /{locale}/subscribe/confirmed page
- [x] 8.4 Plausible events (newsletter-signup, newsletter-confirmed)
- [x] 8.5 MailerLite account set up, API key + list ID in Vercel env vars
- [ ] 8.6 Re-enable after Notes from Madeira PDF v0 is ready
- [ ] 8.7 Customise MailerLite double opt-in and welcome email templates

## 9. Translations (Complete for existing content)

- [x] 9.1 Full translations for PT, DE, FR, PL across all sections
- [x] 9.2 Experiences, golf, reservation, subscribe, stays-include, amenities
- [x] 9.3 Footer labels with proper diacriticals
- [x] 9.4 PT-PT (not Brazilian) throughout

## 10. Performance and Accessibility (Complete)

- [x] 10.1 AVIF/WebP images (75% size reduction)
- [x] 10.2 Font preloading (3 woff2 files)
- [x] 10.3 LCP image preload
- [x] 10.4 Skip-to-content link
- [x] 10.5 Overlay scrollbar (no layout shift)
- [x] 10.6 Reduced motion media query
- [x] 10.7 Plausible events (outbound-airbnb, email-click, phone-click, outbound-instagram)

## 11. Design Engineering Polish (Complete)

- [x] 11.1 Text-wrap: balance on headings, pretty on body
- [x] 11.2 Font smoothing (antialiased + grayscale)
- [x] 11.3 Image outlines (1px rgba(0,0,0,0.08))
- [x] 11.4 Scale on press (active:scale-[0.96]) on CTA buttons
- [x] 11.5 No transition-all anywhere (specific properties only)
- [x] 11.6 will-change only on HouseHeroWordmark (transform)

## 12. SEO and Structured Data (Complete)

- [x] 12.1 VacationRental JSON-LD with amenityFeature, geo, sameAs
- [x] 12.2 FAQPage JSON-LD on FAQ and sub-pages
- [x] 12.3 Service JSON-LD on Experiences
- [x] 12.4 BreadcrumbList on all sub-pages
- [x] 12.5 Geo-anchored brand naming in meta tags
- [x] 12.6 Sitemap with all locale variants
- [x] 12.7 llms.txt with full page index

## 13. Pending (Not started)

- [ ] 13.1 Wikidata entity creation (JSON prepared at scripts/wikidata-entity.json)
- [ ] 13.2 Notes from Madeira PDF guide (content brief exists)
- [ ] 13.3 Commissioned photography day
- [ ] 13.4 Living Calendar for programming-driven venues
- [ ] 13.5 Affiliate strategy (wine, rum, experiences)

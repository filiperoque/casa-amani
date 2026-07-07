# Casa Amani: SEO, LLM, UX, and Brand Improvement Plan

**Date:** 2026-07-07
**Scope:** casa-amani.com (live site + codebase audit)
**Method:** Live crawl of all pages, robots.txt, sitemap.xml, llms.txt; full codebase review; competitive and AI-answer landscape research; evaluation against brand/taste, visual hierarchy, cognitive load, accessibility, motion, trust-calibration, and agent-readiness frameworks.

Everything in "Observations" was directly verified against the live site or the repo. Items that could not be verified are flagged and collected in the Appendix (section 17).

---

## 1. Executive summary

Casa Amani is a rare case: the hard parts are already done and the easy parts are broken.

The site has an unusually strong foundation for AI-era discovery. It ships `llms.txt` and `llms-full.txt`, explicitly welcomes 13 AI crawlers in robots.txt, embeds rich VacationRental / FAQPage / Place / Service / BreadcrumbList JSON-LD, serves fully static HTML, uses AVIF/WebP with descriptive alt text, runs cookieless Plausible with an LLM-referrer view already configured, and enforces a disciplined brand voice with build-time linting. Most villa sites have none of this.

But three failures currently cap all of that investment:

1. **The canonical/hreflang layer is actively harmful.** Every page's canonical points to a non-www, locale-less URL that either 301-redirects or, for the entire Guide section, returns a 404. No hreflang exists in HTML. All five locale variants share one English canonical, `<html lang="en">` is hardcoded for every locale, and titles/descriptions are English everywhere. Google is being told, page by page, "the real version of this page is a dead or redirecting URL on a different host." This plausibly explains why the freshest thing Google shows for the brand is a stale `casa-amani.com/index.html` crawl.
2. **The brand entity is losing its own name.** "Casa Amani" search results are owned by unrelated properties in the Bahamas, Spain, Mexico, and Costa Rica. The Madeira property's strongest third-party asset, its OurMadeira listing, calls it "Amani" and does not link to the site. There is no findable Google Business Profile. The Wikidata entity payload sits drafted in the repo, unpublished.
3. **The site asks for trust it never evidences.** No reviews, no host identity, no pricing signal of any kind, no contact page, four of six Guide pages saying "coming soon", and a heated-pool claim that contradicts itself between the house page ("heated pool") and the FAQ ("heating at extra cost"). For a 7-night-minimum booking, that is a lot of unanswered risk.

The strategy that follows is therefore not "add more"; it is mostly **repair the plumbing, publish what already exists, and finish what was started.** The translated amenities and "stays include" content is already written and hidden behind a code comment. The newsletter backend is built with no form on the page. The Wikidata entity is drafted. The Guide's best pages prove the format works; four of them are shells.

Biggest opportunities, in order of expected impact:

1. Fix canonicals, hreflang, `lang`, localized metadata, and the client-side root redirect (technical SEO repair, low effort, unblocks everything else).
2. Establish the entity "Casa Amani Madeira": consistent naming, Google Business Profile, Wikidata publish, OurMadeira link, Startup Madeira nomad-accommodation listing.
3. Close the trust loop: reviews page sourced from real OurMadeira/Airbnb reviews, host presence, pricing orientation, resolved fact contradictions.
4. Finish the Guide and add two decision-stage pages ("Calheta vs Funchal", "Where to stay on Madeira's west coast") aimed at the exact query formats that blogs and answer engines currently win.
5. Turn on what is built: newsletter form, hidden amenities section, branded 404.

---

## 2. Current-state diagnosis

### 2.1 What the project appears to be

A two-bedroom, three-bathroom villa (219 m² on a 324 m² plot) above Arco da Calheta on Madeira's southwest coast, sleeping up to six, with a 7 m pool, sea-facing position, fibre wifi, and a 7-night minimum stay. Positioned for slow stays and remote work. Licensed as Alojamento Local AL 176882/AL. Bookings run exclusively through one Airbnb listing; the property also appears on Booking.com, VRBO, Casai, and OurMadeira (which manages it under a Cessão de Exploração contract, per llms-full.txt). The site is a Next.js static export on Vercel, in five locales (en, pt, de, fr, pl).

### 2.2 What the site communicates well

- A distinct, restrained mood. The hero ("Above the village, a house. The Atlantic in front, the laurel behind...") is confident and unlike any OTA listing. The lowercase headings, short declarative sentences, and refusal of "stunning/luxurious" are consistent and enforced in the build.
- Honesty in the details. "The lower room... more private and comfortable, though without a window." "Nothing sponsored, nothing paid." "Last verified: 2026-06-15" on guide entries. This is exactly the register that earns calibrated trust.
- Machine-facing intent. llms.txt, AI-crawler allowlist, dense structured data, static HTML: the site clearly wants to be read by machines and mostly can be.
- The Table and Surf guide pages, which are specific, dated, distance-annotated, and useful.

### 2.3 What is unclear, underdeveloped, or missing

- **Who is behind it.** No host names, no faces, no "about" content. The only management signal ("Managed by: OurMadeira") lives in llms-full.txt, invisible to humans.
- **What it costs.** No price, no indicative range, no seasonal orientation, anywhere.
- **Whether anyone has stayed.** No reviews or testimonials, despite 10/10 reviews existing on OurMadeira.
- **The homepage as an answer.** One h1, zero h2s, a poem, and a button. Beautiful, but it gives search engines and LLMs almost nothing extractable on the most authoritative URL.
- **Four "coming soon" Guide pages** (land, sea, culture, practical) that are indexed, in the sitemap (EN only), and empty.
- **A contact page** (contact info is footer-only; /en/contact 404s).
- **Localization depth**: PT/DE/FR/PL pages have translated body copy but English titles, meta, nav labels, and fully English Guide content.

### 2.4 Highest-risk issues

| Risk | Severity | Why |
|---|---|---|
| Canonicals point at 404ing/redirecting non-www URLs | Critical | Can suppress indexing of the entire Guide section and confuse indexing of every page |
| No hreflang in HTML + shared EN canonical across locales | Critical | Four of five locales are effectively invisible to search as distinct pages |
| Client-side JS redirect at root `/` | High | Crawlers and preview bots that don't run JS see a blank tan div at the most-linked URL |
| Entity name collision ("Casa Amani" owned by other properties) | High | Brand queries and AI answers resolve to the wrong property |
| Heated-pool contradiction + dead `src/content/faq.ts` claiming central heating | High | Guest-expectation dispute risk and LLM hallucination seed; contradictory facts are exactly what makes models unreliable about you |
| No reviews/pricing/host identity | High | Conversion ceiling; E-E-A-T ceiling |
| Default unbranded Next.js 404 | Medium | Dead end for users and crawlers, on a site whose canonicals currently point at 404s |

### 2.5 Audience and intent mapping

**Primary audiences**

1. **Couples and small families (UK/DE/FR/PL/PT), 30-55, self-drive travelers** planning 1-2 week Madeira stays away from Funchal. High-intent searches: "villa rental Calheta Madeira", "Madeira villa heated pool", "holiday house Madeira west coast", "Arco da Calheta villa with pool". Must believe before booking: the photos are real, the location is practical (car, supermarket, restaurants), the pool is actually warm, the 7-night minimum is worth it, someone responsive is behind it.
2. **Remote workers / slow travelers**, 2-8 week stays, often via the Madeira digital-nomad ecosystem. Searches and AI queries: "Madeira digital nomad accommodation", "monthly rental Calheta", "villa with workspace Madeira", "Outsite alternative Madeira". Must believe: wifi is provably fast, workspaces are real, long-stay logistics (housekeeping, heating in winter, cost over a month) are handled.
3. **Surf-adjacent travelers** anchored on Jardim do Mar / Paul do Mar. The surf page already targets this well.

**Secondary audiences**

4. Golf travelers (the Calheta page mentions golf; low volume, high fit).
5. Travel writers, bloggers, and AI systems assembling "where to stay in Madeira" answers. This audience never books but determines citations.

**Informational queries they ask AI tools** (the site should be the best source for the first four): "What is Casa Amani in Madeira?", "Is Casa Amani good for remote work?", "How far is Casa Amani from the airport?", "Does Casa Amani have a heated pool and what does it cost?", "Where should I stay in Madeira, Calheta or Funchal?", "Is Arco da Calheta a good base?", "Can you work remotely from Madeira's west coast?"

**Objections and trust gaps, per audience**: price opacity (all), no reviews (all), no host (all), "will I be isolated without a car?" (answered well in FAQ), "is winter warm enough?" (answered), "heated vs paid-heating pool" (currently contradictory), "why book via Airbnb instead of Booking?" (unexplained).

---

## 3. SEO audit

### 3.1 Observations (verified)

**Canonicals and host resolution**

- Apex `casa-amani.com` 301s to `https://www.casa-amani.com/`. All pages serve from www. Every `rel=canonical` points at the **non-www apex**.
- Canonicals are also **locale-less**: `/en/house` declares `https://casa-amani.com/house`, which 301s (via `vercel.json`) back to `/en/house`. All five locale variants of a page declare the same canonical.
- **Guide canonicals point at dead URLs.** `/en/the-guide/surf` declares `https://casa-amani.com/the-guide/surf`; no redirect exists for unprefixed `/the-guide` or its subpages (except restaurants/bars legacy paths), so those canonical targets return 404.
- Implementation cause: each page sets a static `alternates.canonical` with the unprefixed path (`src/app/[locale]/*/page.tsx`); `metadataBase` is `https://casa-amani.com` (`src/app/layout.tsx`). No `generateMetadata` anywhere.

**Internationalization**

- Zero hreflang link tags in HTML across the entire build. hreflang exists only in the hand-maintained `public/sitemap.xml`.
- `<html lang="en">` hardcoded for every locale (`src/app/layout.tsx:145`).
- Titles, meta descriptions, and OG tags are English on all locales (static `metadata` exports). `/pt` has `og:locale en_GB`.
- Header nav labels and all Guide body content are hardcoded English on non-EN pages; footer and translated UI come from `translations.ts` (which is fully populated for all 5 locales).

**Indexability and crawl surface**

- Root `/` is a client-side redirect: a blank `#bb9669` div plus `router.replace` based on localStorage/navigator (`src/app/page.tsx`, `src/i18n/locale-detect.ts`). No server-side locale routing, no `<link rel=canonical>` value a bot can use there.
- Sitemap: 38 URLs, all `lastmod 2026-06-10`, hreflang clusters included, but **the-guide (+6 subpages) and experiences are listed in EN only** even though locale variants are live.
- 404s return the default unbranded Next.js 404 page. `/en/contact` 404s (no contact page exists).
- Google currently surfaces a stale `casa-amani.com/index.html` result titled "Casa Amani - Home", which matches no current page; the live homepage title is different. (Index freshness needs Search Console to confirm; see Appendix.)
- robots.txt: allow-all plus explicit allow for 13 AI crawlers, sitemap declared. Good.
- `meta keywords` tag present on all pages (identical boilerplate except surf). Inert for Google; noise.
- Subpages lack `og:url`, `og:type`, `og:site_name`, `og:locale` (homepage only). Privacy page og:title is the homepage default, mismatching its own title tag.

**Content and keyword surface**

- Homepage: single h1 ("casa amani"), **no h2/h3 at all**, ~40 words of body copy. Title tag is strong: "Casa Amani Madeira | Made for slow stays on Madeira's quiet side".
- House page h1 is the brand link ("casa amani"), not "The House".
- Four Guide pages (land, sea, culture, practical) are indexed "coming soon" shells. The surf page is not linked from the Guide index (only from the sea page).
- FAQ has 20 substantive questions in native `<details>/<summary>`, matching FAQPage JSON-LD. Questions are not headings (acceptable, but reduces on-page keyword structure).
- No pricing content, no reviews content, no host/about content, no gallery page.

**Off-site**

- "Casa Amani" SERP is owned by same-name properties in the Bahamas, Spain, Mexico, and Costa Rica; "Armani Casa" adds noise. Adding "Madeira" is currently the only disambiguator.
- OurMadeira lists the property as "Amani" (2 reviews, 10/10, "New to program") with **no link to casa-amani.com**.
- No findable Google Business Profile or Google Maps entity (unverified negative; check Maps directly).
- `scripts/wikidata-entity.json` contains a complete drafted Wikidata entity (5-language labels, P31/P17/P131, coordinates, P856 website). Not published.

### 3.2 Recommendations

**R3.1 Rebuild the canonical layer (Critical, ~1 day).**
Decide the canonical host once. Recommendation: **www** (it is what actually serves; switching serving to apex is equally fine but touch it once and never again). Then, in every page:

- Canonical = the page's own absolute, locale-prefixed, canonical-host URL (`https://www.casa-amani.com/en/house` from `/en/house`).
- Emit hreflang alternates for all 5 locales + `x-default` → `/en/...` in HTML via Next metadata `alternates.languages`.
- Replace static `metadata` exports with `generateMetadata({ params })` so canonical, hreflang, title, and description vary by locale.
- Set `metadataBase` to the canonical host.

**R3.2 Localize the metadata layer (Critical, 1-2 days).** Move titles/descriptions into `translations.ts` (a `meta` block per page), render via `generateMetadata`. Set `<html lang={locale}>` in the locale layout. Set `og:locale` per locale (`pt_PT`, `de_DE`, `fr_FR`, `pl_PL`) with `og:locale:alternate`. Translate header nav labels (footer already is).

**R3.3 Server-side the root redirect (High, half a day).** Options: (a) Next middleware doing Accept-Language 302 to `/{locale}` with `/` canonicalized to `/en`; or (b) statically serve the EN homepage at `/` and make `/en` canonical to it. Given Vercel + static export constraints, simplest robust fix: make `/` a real server redirect to `/en` in `vercel.json` (308), and keep client-side locale suggestion as a banner on `/en` rather than a blocking redirect.

**R3.4 Fix the sitemap (High, half a day).** Generate it at build time (Next `sitemap.ts`) from the route tree + locales so it can't drift: include all locale variants of every page, real per-page lastmod, hreflang clusters. Remove hand-maintained `public/sitemap.xml`.

**R3.5 Branded 404 (Medium, half a day).** Add `not-found.tsx`: brand header, one line in brand voice ("This page is not here. The house is."), links to home/house/FAQ, localized.

**R3.6 De-index or finish the shell pages (High).** Until land/sea/culture/practical have content, either `noindex` them or collapse them into the Guide index as labeled upcoming sections. Indexed "coming soon" pages are thin-content liabilities and terrible LLM sources. Also: link the surf page from the Guide index.

**R3.7 Remove `meta keywords`; complete OG on subpages** (og:url, og:type, og:site_name, og:locale per page); fix the privacy page og:title.

**R3.8 Heading repair.** Homepage: keep the hero poem, add a semantic h2 block below the fold (see section 5). House page: make the h1 "The house" (or "Casa Amani, the house") and move the brand link out of the h1.

### 3.3 Priority keyword clusters

| Cluster | Example queries | Target page | Competition notes |
|---|---|---|---|
| Brand + geo | casa amani madeira, casa amani calheta | Home | Must win; currently lost to name collisions |
| Villa + Calheta | villa rental calheta madeira, arco da calheta villa with pool, casa férias calheta | Home + House | OTAs dominate; Villa Gia proves an individual site can rank page 1 |
| Heated pool + Madeira | madeira villa heated pool | House | Less OTA-saturated; the site's key amenity |
| West coast decision | where to stay madeira west coast, calheta vs funchal, quietest part of madeira | NEW comparison page(s) | Blog-dominated, thin, winnable; this is the AI-citation format |
| Remote work | madeira digital nomad accommodation, remote work villa madeira, monthly stay calheta | Remote-work page | Site already names Outsite/Homeoffice Madeira; needs long-stay proof + nomad-directory links |
| Surf stay | jardim do mar surf stay, paul do mar accommodation, surf house madeira | Surf page | Already strongest page; needs operators section finished |
| PT/DE/FR/PL variants | casas de férias calheta, ferienhaus madeira westküste | Localized pages | Blocked entirely until R3.1/R3.2 ship |

### 3.4 E-E-A-T and digital PR

- **Experience/Trust**: publish a reviews page with real, attributed reviews (OurMadeira shows 10/10 with dates; Airbnb reviews can be quoted with guest first name + month). Never aggregate-rate in schema until reviews are displayed on-page.
- **Authority**: get the OurMadeira listing to link to casa-amani.com and align naming ("Casa Amani"); publish the drafted Wikidata entity; create the Google Business Profile (vacation rentals are eligible as lodging entities; verify against current GBP policy for ALs).
- **Link targets** (all verified as active content programs): Startup Madeira digital-nomad accommodation directory; Simply Owners (book-direct directory with an Arco da Calheta page); Madeira Lovers, Marvellous Madeira, The Road Reel, Julie Dawn Fox, The Portuguese Traveler, Wander with Laura, Say Yes to Madeira (all publish year-dated "where to stay in Madeira" guides that name individual properties); Digital Nomad World and The Professional Hobo (nomad guides). Pitch angle: the west-coast/quiet-side gap in their guides plus the site's own Guide as a citable resource.

---

## 4. LLM and AI-search optimization audit

### 4.1 Observations

**Strengths (unusually good)**

- `llms.txt` and `llms-full.txt` both live, well-formed, factual: key facts (2BR/3BA, 219 m², sleeps 6, 7-night min, check-in/out, AL number, airport distance), page directory, booking links, coordinates, management, amenities, mini-FAQ.
- robots.txt explicitly allows GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended, and 8 more.
- Fully static HTML: every fact is in the source, no JS needed.
- JSON-LD depth: site-wide VacationRental with geo, occupancy, amenities, AL identifier, sameAs to 5 OTA listings; localized FAQPage on /faq; Place on /calheta; Restaurant per guide entry; Service per experience; BreadcrumbList on several pages.
- Plausible already has an LLM-referrer view (chat.openai.com, perplexity.ai, gemini, claude.ai).

**Weaknesses**

- **The "what is this?" answer lives everywhere except the homepage.** The homepage gives an LLM a poem. The canonical description exists only in JSON-LD and llms.txt. A model quoting the homepage cannot state bedrooms, capacity, or location precisely.
- **Fact contradictions** (hallucination seeds): "heated pool" (house page, JSON-LD amenity, llms.txt) vs "heating available at extra cost" (FAQ); dead `src/content/faq.ts` claims "full air conditioning and central heating throughout" while live copy says there is no central heating. If that file ever leaks into a build or a crawl of the repo, it poisons answers.
- **FAQPage JSON-LD bug**: the "How do I book?" answer contains raw markdown `[Airbnb](https://...)` inside the structured data text.
- **Entity ambiguity**: five properties worldwide share the name; nothing on-page consistently says "Casa Amani **Madeira**" as the primary name except the title tag. JSON-LD `name` field and alternateNames exist (good) but off-site corroboration (Wikidata, GBP, OurMadeira naming) is absent.
- **Missing answer-ready content**: no pricing orientation (LLMs asked "how much is Casa Amani?" must guess or refuse), no reviews to cite, no host entity, no comparison content for the "where should I stay in Madeira" class of queries where citations are actually won.
- Locale content an LLM sees under /pt is a mix of PT body + EN metadata + EN guide content, which reads as an untrustworthy half-translated site.

### 4.2 Recommendations

**R4.1 Canonical description (use verbatim in JSON-LD `description`, llms.txt, OG description, and an on-page "in brief" block):**

> Casa Amani Madeira is a two-bedroom, three-bathroom villa above the village of Arco da Calheta, on the quiet southwest coast of Madeira, Portugal. The house is 219 m², sleeps up to six guests, and has a 7-metre pool, sea-facing terraces, dedicated workspaces, and fibre wifi. Minimum stay is seven nights. Bookings are taken through Airbnb. Licensed Alojamento Local AL 176882/AL.

(If pool heating is paid, say "heatable pool (heating at extra cost)" here and everywhere; see R4.4.)

**R4.2 Short AI-ready summary (for llms.txt header and meta descriptions):**

> A two-bedroom villa for slow stays and remote work above Arco da Calheta, on Madeira's quiet southwest coast. Sleeps 6, pool, fibre wifi, 7-night minimum, books via Airbnb.

**R4.3 Longer AI-ready profile.** Add a "Casa Amani in brief" section (on the homepage below the fold, or a compact `/en/about` page) written as extractable prose + a facts table: location (with coordinates), size, rooms, capacity, pool (with heating terms), wifi (state the measured Mbps; currently only "fibre" is claimed), stay terms (min 7 nights, check-in 16:00, checkout 11:00, no pets, no smoking), license, management (OurMadeira), booking channel and why ("we keep bookings on Airbnb so availability, pricing, and payment protection live in one place"), contact. This is the single highest-leverage LLM change: one URL that answers everything, in HTML, in every locale.

**R4.4 Resolve every fact contradiction, then encode facts once.** Decide the truth on pool heating and heating/AC; update house copy, FAQ, JSON-LD amenity list, llms.txt, and llms-full.txt to the same wording. **Delete `src/content/faq.ts`.** Longer term: move all quantitative facts (distances, sizes, times, capacity) into one typed `src/content/facts.ts` consumed by copy, JSON-LD, and llms.txt generation, so divergence becomes impossible.

**R4.5 Fix the FAQPage markdown bug**: render the a15 answer to plain text (or HTML link) before injecting into JSON-LD.

**R4.6 Add the missing answer surfaces:**
- FAQ additions: "How much does Casa Amani cost per night?" (answer with honest seasonal orientation + Airbnb pointer), "Who runs Casa Amani?", "Why do you only take bookings on Airbnb?", "Is the pool heated and does it cost extra?", "Can I stay for a month?"
- Comparison/decision pages (see section 14): "Calheta or Funchal: where to stay on Madeira", "Madeira's west coast for remote work". These match the exact format (area-by-area, year-dated, pro/con, named properties) that currently earns citations in answer engines.
- A `/reviews` page with dated, attributed, quoted reviews.

**R4.7 Entity relationships to make explicit** (in JSON-LD and prose): Casa Amani (locatedIn) Arco da Calheta (partOf) Calheta (partOf) Madeira, already present with Wikidata Q26253; (managedBy) OurMadeira; (listedOn) Airbnb/Booking/VRBO/Casai via sameAs, present; (near) Jardim do Mar, Paul do Mar, Ponta do Sol in prose and Place mentions in guide pages. Publish the Wikidata entity and add its QID to `sameAs` once live.

**R4.8 llms.txt upkeep**: add a lastUpdated date, the canonical description (R4.1), a pricing-orientation line, and links to the reviews and about pages once they exist. Add `llms.txt` reference link in the site footer for humans who are curious (optional but on-brand).

---

## 5. Content strategy and information architecture audit

### 5.1 Observations

- **Navigation** (header overlay): The House, The Guide, Remote Work, plus STAY WITH US. Calheta, Experiences, FAQ, Privacy are reachable via footer. The surf page is orphaned from the Guide index.
- **Homepage** is a single hero scene: brand, place line, poem, one CTA. No section explains the house, shows rooms, or answers anything. The entire persuasion burden is delegated to the Airbnb listing.
- **The house page** is strong: room-by-room h3 cards with honest copy. But the already-translated "stays include" (8 items: linens, weekly housekeeping, mid-stay change, pool/garden upkeep, starter pack, smart-lock self check-in, 4-language welcome booklet, 24-hour assistance line) and 15-item amenities list are **hidden by a code comment** (`house/page.tsx:82`). That hidden content is precisely the decision-support and reassurance content the site lacks.
- **Conversion path**: every CTA is the same Airbnb link with clean UTM discipline (7 distinct `utm_content` placements). There is no intermediate step for people not ready to leave the site (no availability hint, no pricing, no email capture; the newsletter block is built but commented out, `Footer.tsx:20`).
- **Storytelling gap**: no hosts, no "why this house exists", no neighborhood narrative beyond the (good) Calheta page.
- **Proof gap**: no reviews, no wifi speed number, no photos of workspaces called out for the remote-work audience (page copy describes "the setup" but the claim is unquantified).
- The privacy page describes a newsletter ("Notes from Madeira") that has no signup anywhere on the site.

### 5.2 Recommendations

**R5.1 Homepage: keep the poem, add a spine.** Below the fold, in order:
1. "The house, briefly": canonical description (R4.1) + 4-6 fact chips (2 bedrooms · sleeps 6 · 219 m² · pool · fibre wifi · 7-night minimum) + link to House.
2. Three-image strip into the House page (real photography already exists).
3. "The quiet side": 2 sentences + distances snippet, link to Calheta.
4. One quoted guest review (once reviews page exists).
5. CTA repeat + newsletter line.
This preserves the mood (each block short, declarative, lowercase headings) while giving humans, Google, and LLMs an extractable homepage.

**R5.2 Unhide the hidden content.** Ship "stays include" and amenities on the house page (already written, already translated). This is the cheapest high-impact content change available.

**R5.3 Add four pages**: `/reviews` (attributed quotes + link to Airbnb/OurMadeira), `/about` or a "who's behind this" block (host first names, one photo, two paragraphs, management note), `/contact` (email, phone, response-time expectation, simple form or mailto; the URL is already being guessed by users per the 404 on /en/contact), and a rates-orientation section or page ("Rates vary by season; recent stays have ranged roughly from €X to €Y per night; exact pricing and availability on Airbnb"). If publishing numbers is unacceptable, publish the shape ("winter weeks cost less than summer; monthly stays are discounted on Airbnb").
**Placeholder warning**: the €X-€Y range must come from the owners; do not fabricate.

**R5.4 Finish or fold the Guide.** Priority order by audience value: practical (car hire, shopping, arrival) → sea → land → culture. Reuse the Table/Surf format exactly: named entries, distances from the house, "Last verified" dates. Until then, apply R3.6 (noindex or fold into index).

**R5.5 Turn on the newsletter.** The MailerLite API route, double opt-in, confirmation page, and translated copy all exist. Un-comment `SubscribeBlock` in the footer once the promised "Notes from Madeira" PDF is ready, or change the offer to a plain "occasional notes" signup and ship now.

**R5.6 Navigation**: add FAQ to the header menu (it is the highest-utility page for undecided visitors), link Surf from the Guide index, and add Calheta ("The place") to the main nav.

---

## 6. UX and design audit

Severity model: Critical blocks users/launch; Major degrades outcomes; Minor is polish.

### 6.1 First impression and hierarchy

- **Five-second test: passes on mood, fails on facts.** A first-time visitor knows the feeling (quiet, warm, considered) but not the offer (how many bedrooms? where exactly? what does it cost?). The squint test finds the CTA fine; the "what is this" layer needs R5.1. (Major)
- **One CTA intent site-wide** ("stay with us" → Airbnb) with consistent labeling: good discipline, no competing verbs. (Pass)
- **Hero**: fits viewport, headline short, one CTA, real photography with Ken Burns fade and blur placeholder. (Pass)
- **Typography**: GT Sectra Display + GT Walsheim is a defensible, non-default pairing that matches the brand. Verify body sizes ≥16px and line lengths 45-75ch on Guide long-form pages. (Minor, verify)
- **Palette**: warm tan/cream/brown (#b8956e, #f2ece2, #7a5f40). Note candidly: warm-beige + espresso is also the generic "AI premium" default palette. Here it is anchored by real photography and a real place, which rescues it, but the differentiation lives in the photography and voice, not the palette. Keep contrast discipline (see section 8) and let the images carry color. (Note)

### 6.2 Friction and decision support

- **The booking leap is too big.** From a poetic homepage directly to Airbnb, with no on-site step that answers price, availability, or reviews. Expect drop-off at the handoff; the Plausible funnel ("Stay-with-us conversion") will show it. Fixes: R5.1 fact chips, R5.3 rates orientation and reviews, and a line under the CTA ("Availability and exact pricing on Airbnb") to set expectations before the jump. (Major)
- **Cognitive load is low everywhere** (short pages, chunked content, native accordions): the FAQ's 20 items could be grouped into 4 labeled clusters (The house / Booking & stay terms / Location & getting around / Working from here) to aid scanning. (Minor)
- **No gallery.** For this category, photography is the product. A dedicated gallery (or richer in-page galleries per room) with keyboard-navigable lightbox would serve the primary decision need. (Major)

### 6.3 Interaction and motion

- Motion system is disciplined: token-based durations, IntersectionObserver reveals, `prefers-reduced-motion` collapses animations, no animation libraries, transform/opacity only. (Pass; verify reveals never gate content visibility if JS fails, since reveal wrappers are client components.)
- Menu overlay: `role="dialog" aria-modal="true"`, Escape closes, but **no focus trap** and focus return is unverified. (Major, a11y)
- Ken Burns on the 5-image background slideshow: disabled under reduced motion (good). Ensure the slideshow pauses when not visible and never exceeds subtle drift. (Minor)
- GSAP/Remotion: not needed. The current restraint is the brand. The only motion investment worth making is a quiet crossfade lightbox for the future gallery. Adding scroll-driven animation here would be decoration, not communication.

### 6.4 Mobile

Unverified directly (no device-lab pass was run): confirm no horizontal scroll, heading overflow at 360px, `100dvh` behavior for the hero, and touch-target sizes for the language switcher and menu. Listed in the validation checklist (section 17).

---

## 7. Brand, voice, and mood audit

### 7.1 Current perceived attributes (from live copy and design)

Quiet, unhurried, honest, spare, warm, slightly literary, European. The voice is the site's most differentiated asset and is enforced mechanically (em-dash build check, Vale banned-words list: "stunning", "breathtaking", "luxury", "hidden gem"; no exclamations; no prescriptive "you must"). Guide copy ("Nothing sponsored, nothing paid. Updated when something changes.") and the windowless-room admission are exactly right.

### 7.2 Risks and gaps

- **Mood without grounding reads as evasive at booking time.** Restraint must not extend to withholding facts guests need (price shape, reviews, hosts). The brand fix is not louder copy; it is quiet facts. (Major)
- **The voice currently has no author.** Anonymous restraint feels like a brand exercise; named restraint feels like people. Two sentences from the owners fixes this.
- **Naming**: the brand should consistently render as "Casa Amani" with "Casa Amani Madeira" as the formal/disambiguating form in titles, JSON-LD name, GBP, Wikidata, and OTA listings (OurMadeira currently says just "Amani"). This is a brand decision with direct SEO/LLM consequences.
- **Consistency slip**: live Guide title "West Coast Directory" vs repo "West Coast Guide". "Guide" is the stronger, warmer word and matches nav labels; align repo and production.

### 7.3 Recommended brand attributes and principles

Keep: restrained, factual, warm, unhurried. Add: **accountable** (people and terms are visible) and **precise** (every claim checkable: wifi in Mbps, pool heating terms, distances already exemplary).

Voice principles (codify in AGENTS.md): short declaratives; facts before atmosphere on decision pages, atmosphere before facts on the homepage; numbers stated once and exactly; never promise what Airbnb settles (price, availability); admissions of limitation are on-brand ("the lower room has no window") and should be kept.

### 7.4 Example rewrites

Hero: **keep as is.** It is working. Add beneath the fold (R5.1), not instead.

"The house, briefly" block (new, homepage):
> **the house, briefly.**
> Two bedrooms, three bathrooms, 219 square metres above Arco da Calheta. A 7-metre pool facing the Atlantic. Fibre wifi and two places to work. Sleeps six. Stays start at seven nights.
> The house on Airbnb → · The house in detail →

Rates orientation (new):
> **what it costs.**
> Pricing lives on Airbnb and moves with the season. Winter weeks cost less than summer. Stays of a month or more are discounted. [If owners approve: Most weeks fall between €X and €Y a night.]

Claims to avoid: unqualified "heated pool" (until terms are settled), "perfect for", superlatives of any kind, invented review counts or ratings. Claims to make concrete: wifi speed (measure and state Mbps), workspace descriptions (desk sizes, chairs, monitor if any), pool temperature range when heated.

---

## 8. Accessibility and inclusive design audit

### 8.1 Observations

**Working well**: skip link on every page; aria-labels on navs and controls; one h1 per page; native `<details>/<summary>` FAQ; `prefers-reduced-motion` handled thoroughly; semantic `<main>`/`<nav>`/`<footer>` on subpages; focus-visible styles present; no autoplaying video; images have descriptive alt text; decorative slideshow images use `alt=""` correctly.

**Findings** (severity per WCAG-AA framing):

| # | Finding | Severity | Fix |
|---|---|---|---|
| A1 | `<html lang="en">` on PT/DE/FR/PL pages | Critical (3.1.1) | Set lang per locale (same fix as R3.2); screen readers currently mispronounce four languages |
| A2 | Landing page main content is a `div id="main"`, not `<main>` | Major | Use `<main>` on the landing scene like other pages |
| A3 | Menu overlay lacks a focus trap; focus return on close unverified | Major (2.4.3) | Trap Tab within dialog, return focus to hamburger on close |
| A4 | Low-contrast token combinations: `text-brown/40` on cream, `text-cream/50` on warm (#b8956e), `text-cream/70` overlays | Major (1.4.3) | Audit every alpha text token; minimum 4.5:1 body, 3:1 large; hero text over photos needs a scrim |
| A5 | `body` default text color is cream on a cream background | Major (latent) | Any unstyled element renders invisible text; set body text to brown |
| A6 | House page h1 contains only the brand link, not the page topic | Minor | Page-topic h1; brand link moves to header |
| A7 | FAQ "+" glyph is inside the summary accessible name | Minor | `aria-hidden` the glyph |
| A8 | Homepage has no heading structure beyond h1 | Minor | Solved by R5.1 |
| A9 | No width/height on fill images (CLS risk, also a stability issue for zoom users) | Minor | Provide aspect-ratio boxes |
| A10 | Future lightbox/gallery must have keyboard support, position announcement, focus trap | Note | Bake into R5 gallery spec |

Inclusive-language and cultural review: no issues found; copy avoids idiom-heavy English, units are metric with drive-times, and the multilingual ambition is right (the gap is execution depth, R3.2).

### 8.2 Contrast verification task

Run axe/Polypane on: footer links, "coming soon" muted text, fact captions, CTA button text on `#b8956e`, and text-over-photo hero states. Record pass/fail per token pair and encode the approved pairs as semantic tokens (e.g. `--text-muted-on-cream`) so future copy can't pick failing combos.

---

## 9. Technical SEO, performance, and structured data audit

### 9.1 Observations

**Solid**: static export, no render-blocking client content; AVIF→WebP→JPG `<picture>` chains with lazy loading and async decoding; self-hosted woff2 with `font-display: swap` and preloads; hero preloaded; security headers (HSTS preload, XFO DENY, nosniff, Referrer-Policy, Permissions-Policy, COOP); Plausible async with scroll-depth and click goals; no consent banner needed (cookieless, disclosed).

**Issues**:

| # | Finding | Impact | Fix |
|---|---|---|---|
| T1 | `images.unoptimized: true` + single-file-per-format: no responsive srcset; mobile downloads desktop-sized images | LCP/bandwidth | Extend `convert-images.sh` to emit 3-4 widths per format and add `srcset/sizes` to `OptimizedImage`, or re-enable Next image optimization |
| T2 | 5-image background slideshow loads on every page (first image eager) | LCP on subpages | Load slideshow only on landing; subpages use a single static image |
| T3 | Duplicate font/image preloads in head (manual `<link>` + Next hints) | Minor waste | Deduplicate; keep one mechanism |
| T4 | No width/height/aspect-ratio on fill images | CLS | Aspect-ratio containers |
| T5 | No CSP header | Hardening | Add CSP (script-src self + plausible.io; style-src self 'unsafe-inline' if Tailwind requires) |
| T6 | No web manifest | Minor | Add manifest + theme colors |
| T7 | Hand-maintained sitemap, stale lastmod | Crawl freshness | R3.4 build-time generation |
| T8 | `next.config.ts` lacks `output: "export"` yet `out/` is deployed; repo/production drift observed ("West Coast Directory" vs "Guide") | Deploy integrity | Pin the build path; make production always trace to a commit |
| T9 | Next.js canary (16.3.0-canary.36) in production | Stability | Pin to a stable release when 16.3 lands |
| T10 | No tests, no CI checks beyond em-dash script | Regression risk | Add a build-time validation step (see R9.1) |

**Verification needed** (cannot measure from here): Core Web Vitals field data (CrUX/PageSpeed Insights for `/en`, `/en/house`, `/en/the-guide/table` mobile), actual TTFB on Vercel edge, Search Console coverage/canonical reports. Exact tools listed in section 17.

**R9.1 Add an integrity check script** to prebuild alongside the em-dash check: assert every page's canonical URL returns 200 on the canonical host; assert sitemap URLs = built routes × locales; assert JSON-LD parses and contains no `](` markdown residue; assert every locale's translation keys match EN. All four current failure classes become build failures.

### 9.2 Structured data recommendations

Current schema is genuinely strong. Changes, in priority order:

1. **Fix FAQ answer serialization** (markdown leak); this is a bug.
2. **Align VacationRental with resolved facts** (pool heating wording; keep `petsAllowed:false`, occupancy, AL identifier, which are all good).
3. **Add `knowsLanguage`/`availableLanguage`** to reflect the 4-language welcome booklet and host languages, and `priceRange` (e.g. "€€€" or the approved range) once rates orientation is published. **Placeholder: owners must supply the range.**
4. **BreadcrumbList everywhere** (house, guide index, table, experiences currently missing it), with corrected locale-prefixed canonical URLs (they currently point at unprefixed URLs, same disease as R3.1).
5. **WebSite schema** on the homepage with `inLanguage` per locale and `name: "Casa Amani Madeira"` + `alternateName: "Casa Amani"`.
6. **Review/AggregateRating: only after on-page reviews exist**, and only mirroring genuinely displayed, attributable reviews.
7. **ImageObject**: add `contentUrl`, `caption`, `creditText` for hero/gallery images if a gallery ships.
8. After Wikidata publish: add the QID URL to `sameAs`.

Sample corrected canonical + hreflang + WebSite block (values real except where marked):

```html
<!-- /en/house head, after R3.1 -->
<link rel="canonical" href="https://www.casa-amani.com/en/house" />
<link rel="alternate" hreflang="en" href="https://www.casa-amani.com/en/house" />
<link rel="alternate" hreflang="pt" href="https://www.casa-amani.com/pt/house" />
<link rel="alternate" hreflang="de" href="https://www.casa-amani.com/de/house" />
<link rel="alternate" hreflang="fr" href="https://www.casa-amani.com/fr/house" />
<link rel="alternate" hreflang="pl" href="https://www.casa-amani.com/pl/house" />
<link rel="alternate" hreflang="x-default" href="https://www.casa-amani.com/en/house" />
```

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.casa-amani.com/#website",
  "url": "https://www.casa-amani.com/",
  "name": "Casa Amani Madeira",
  "alternateName": "Casa Amani",
  "inLanguage": ["en", "pt", "de", "fr", "pl"],
  "publisher": { "@id": "https://www.casa-amani.com/#vacation-rental" }
}
```

```json
// FAQPage answer, fixed (a15)
{
  "@type": "Question",
  "name": "How do I book?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "We currently take bookings exclusively through Airbnb. Availability, exact pricing, and payment protection all live there. Listing: https://www.airbnb.co.uk/rooms/1695506665949683620"
  }
}
```

---

## 10. Agent-readiness audit

### 10.1 What an AI agent can already do

Read every fact without JS; identify the entity via JSON-LD + llms.txt (name, geo, capacity, license, check-in/out, OTA sameAs links); answer 20 FAQ questions; hand a user the Airbnb URL. This is already above category norm.

### 10.2 Gaps for agents

| Gap | Consequence | Fix |
|---|---|---|
| No pricing signal | Agents guess or refuse on the #1 question | Rates orientation (R5.3) + `priceRange` |
| No availability signal | Agents cannot advise on dates | Out of scope to build a calendar; instead state the rule explicitly: "Availability is maintained solely on the Airbnb listing" in llms.txt + FAQ, so agents route correctly |
| Contradictory pool/heating facts | Divergent answers across surfaces | R4.4 single facts source |
| No canonical Q&A for booking-adjacent tasks ("cancellation policy?", "damage deposit?") | Agents extrapolate from Airbnb defaults | Add stay-terms FAQ entries mirroring the actual Airbnb policy settings |
| Locale mixture (EN metadata on PT pages) | Agents mis-detect language and trust drops | R3.2 |
| No machine-readable update cadence | Agents can't judge freshness | `lastUpdated` in llms.txt; real lastmod in sitemap; keep "Last verified" pattern |
| Contact semantics | Email/phone in footer only, no ContactPoint schema | Add `contactPoint` to VacationRental (email, telephone, availableLanguage, contactType "reservations") |

### 10.3 How an assistant should answer (canonical Q&A to encode in llms.txt)

- *What is Casa Amani?* → canonical description (R4.1).
- *How much does it cost?* → "Rates are set on Airbnb and vary by season; [range if approved]. Minimum stay 7 nights."
- *How do I book?* → "Only via the Airbnb listing: [URL]. The owners answer questions at stay@casa-amani.com."
- *Is it good for remote work?* → "Fibre wifi [state Mbps], two dedicated workspaces, 7-night minimum; most remote workers stay two to four weeks."

Markdown mirrors and an `/ai` page are **not recommended** at this stage: the HTML is already static and clean, llms.txt/llms-full.txt cover the mirror role, and a third fact surface increases divergence risk (the current problem), not retrievability. Revisit only if the site grows a large content hub.

---

## 11. Recommended sitemap

```
/                    → 308 to /en (server-side)
/{locale}/                       Home (rebuilt per R5.1)
/{locale}/house                  The house (+ unhidden amenities/stays-include)
/{locale}/calheta                The place
/{locale}/remote-work            Remote work
/{locale}/experiences            Experiences
/{locale}/reviews                NEW: Guest reviews
/{locale}/about                  NEW: The hosts / who's behind this (or block on home)
/{locale}/contact                NEW: Contact
/{locale}/faq                    FAQ (grouped into 4 clusters, +5 new Qs)
/{locale}/the-guide              Guide index (links all 6 incl. surf)
/{locale}/the-guide/table        (live)
/{locale}/the-guide/surf         (live)
/{locale}/the-guide/practical    (finish 1st)
/{locale}/the-guide/sea          (finish 2nd)
/{locale}/the-guide/land         (finish 3rd)
/{locale}/the-guide/culture      (finish 4th)
/{locale}/stay-madeira-west-coast   NEW: decision-stage guide (or under /the-guide)
/{locale}/privacy
/{locale}/subscribe/confirmed    (noindex)
```

Sitemap.xml: generated at build, all locales × all indexable routes, hreflang clusters, true lastmod. "Coming soon" pages excluded until content ships.

---

## 12. Recommended metadata (key pages, EN shown; translate per locale)

| Page | Title (≤60 chars) | Meta description (≤155 chars) |
|---|---|---|
| Home | Casa Amani Madeira \| Slow stays on the quiet west coast | A two-bedroom villa above Arco da Calheta. Pool, sea view, fibre wifi, workspaces. Sleeps 6, from 7 nights. Books via Airbnb. |
| House | The House \| Casa Amani Madeira \| 2BR villa, Arco da Calheta | 219 m², two bedrooms, three bathrooms, 7 m pool, outdoor dining, garage. Room by room, honestly described. |
| Calheta | Arco da Calheta \| Casa Amani Madeira \| The west coast | Where the house is and what's nearby: beach 6 km, Funchal 30 min, airport 50 min. Climate, golf, and getting here. |
| Remote work | Remote Work \| Casa Amani Madeira \| Work from the quiet side | Fibre wifi, two workspaces, seven-night minimum. Why remote workers stay two to four weeks on Madeira's west coast. |
| FAQ | FAQ \| Casa Amani Madeira | Twenty-five direct answers: pool heating, wifi, minimum stay, pets, parking, winter climate, how to book. |
| Reviews (new) | Guest Reviews \| Casa Amani Madeira | What guests say after staying, quoted with dates and sources. |
| Guide | The Guide \| Casa Amani Madeira \| West coast, verified | Places we go and send guests to. Distances from the house, dates verified. Nothing sponsored. |

Note: current titles are close to these already; the substantive changes are localization (R3.2) and the two new pages. Keep the existing title pattern `{Page} | Casa Amani Madeira | {qualifier}`.

---

## 13. Recommended schema (delta summary)

Covered in 9.2. Implementation order: (1) FAQ markdown fix, (2) canonical/hreflang layer, (3) facts alignment in VacationRental, (4) BreadcrumbList completion with locale URLs, (5) WebSite + ContactPoint, (6) priceRange [owner input], (7) Review/AggregateRating [after reviews page], (8) Wikidata QID in sameAs [after publish].

---

## 14. Recommended content plan

### 14.1 Priority content briefs

**Brief 1: /reviews, "what guests say"** (0.5 day once reviews collected)
Source: OurMadeira (2 reviews, 10/10, latest July 2026) and the Airbnb listing. Format: quote, guest first name, month/year, source link. No stars rendered until ≥5 reviews. Voice: let guests be effusive; the site stays quiet around them. Add Review schema mirroring only what is displayed.

**Brief 2: "Calheta or Funchal: where to stay on Madeira"** (1-2 days)
The decision-stage query the site can win. Format proven by the blogs that currently earn AI citations: area-by-area, who each suits, concrete numbers (sun hours, drive times, price posture), honest about Funchal's advantages, year in the H1. One contextual link to the house; this page is for citation and assist, not hard sell. Target: "calheta vs funchal", "where to stay madeira west coast", "quietest part of madeira".

**Brief 3: Guide/practical** (1 day)
Car hire (airport pickup norms), Pingo Doce and shopping, pharmacies/health, arrival logistics from FNC, weather by season with the existing 17-22°C winter numbers. This page serves every booked guest and every pre-booking anxiety simultaneously. Reuse the "Last verified" pattern.

**Brief 4: Remote-work proof upgrade** (0.5 day)
Add: measured wifi speed (run the test, state the number and date), workspace photos and dimensions, a one-paragraph "a work week here" sketch, Starlink/backup note if any [verify with owners], link to Startup Madeira nomad ecosystem. Then pitch the page to the nomad directories (section 3.4).

**Brief 5: Guide/sea, /land, /culture** (1 day each, can trail)
Same entry format as Table. Sea should absorb the existing surf cross-link and add SUP/kayak/whale-watching operators from Calheta marina once verified. The surf page's "confirming our recommended operators" gap should be closed at the same time.

**Brief 6: About/hosts block** (0.5 day, owner input required)
Two paragraphs: who owns the house, why it exists, who manages it (OurMadeira, with the relationship stated plainly), languages spoken, response expectations. One photo if the owners are willing. This is the highest trust-per-word content on the roadmap.

### 14.2 Cadence

No blog is recommended. The Guide with "Last verified" dates is the correct content engine for this brand: update it quarterly, let lastmod reflect it, and let the newsletter announce updates. One decision-stage guide (Brief 2) per quarter at most, only where a real query gap exists (next candidates: "Madeira in winter", "Madeira with a toddler" given the family-friendly FAQ).

---

## 15. Priority roadmap

### Immediate: 0-7 days

| # | Action | Why | Impact | Effort | Owner | Depends on | Success metric |
|---|---|---|---|---|---|---|---|
| 1 | Canonical/hreflang/lang/metadata rebuild (R3.1, R3.2, A1) | Indexing is actively misdirected | Very high | 1-2 d | Dev | Host decision (www) | GSC: canonicals accepted; locale pages indexed |
| 2 | Server-side root redirect (R3.3) | Blank page for non-JS crawlers | High | 0.5 d | Dev | #1 | `/` returns 308; GSC fetch renders |
| 3 | Fix FAQ JSON-LD markdown leak (R4.5) | Broken structured data | Medium | 1 h | Dev | none | Rich Results test passes |
| 4 | Resolve pool-heating + heating facts; delete `src/content/faq.ts` (R4.4) | Contradictions seed disputes and hallucinations | High | 2 h + owner call | Owner + Dev | Owner decision | One consistent claim across house/FAQ/JSON-LD/llms.txt |
| 5 | Unhide stays-include + amenities (R5.2) | Written, translated, hidden | High | 1 h | Dev | none | Sections live in 5 locales |
| 6 | Noindex or fold "coming soon" guide pages; link surf from guide index (R3.6) | Thin-content liability | Medium | 2 h | Dev | none | Shells out of index |
| 7 | Branded 404 (R3.5) | Dead ends | Low | 0.5 d | Dev | none | 404 shows brand + links |
| 8 | Remove meta keywords; complete OG on subpages (R3.7) | Hygiene | Low | 2 h | Dev | none | OG validator passes |
| 9 | Build-time sitemap (R3.4) | Drift-proof crawl surface | Medium | 0.5 d | Dev | #1 | Sitemap = routes × locales |

### Short term: 2-4 weeks

| # | Action | Impact | Effort | Owner | Depends on | Metric |
|---|---|---|---|---|---|---|
| 10 | Homepage spine: "the house, briefly" + fact chips + section links (R5.1) | Very high | 2-3 d | Dev + copy | Facts resolved (#4) | Bounce on /en; LLM answers quote homepage |
| 11 | Reviews page from OurMadeira/Airbnb (Brief 1) | High | 1 d | Owner + Dev | Review permissions | Page live; assisted conversion in Plausible funnel |
| 12 | Contact page + hosts block (Brief 6) | High | 1 d | Owner + Dev | Owner input | /en/contact 200; email-click goal rate |
| 13 | Rates orientation copy (R5.3) | High | 0.5 d | Owner | Owner pricing decision | "how much" FAQ live |
| 14 | FAQ: +5 questions, 4 clusters (R4.6, 6.2) | Medium | 0.5 d | Copy | #4, #13 | FAQPage schema updated |
| 15 | Google Business Profile creation + naming alignment ask to OurMadeira (link + "Casa Amani" naming) | High | 0.5 d + outreach | Owner | none | GBP live; OurMadeira links to site |
| 16 | Publish Wikidata entity (`scripts/wikidata-entity.json`); add QID to sameAs | Medium | 2 h | Dev | none | QID live and referenced |
| 17 | Accessibility pass: focus trap, `<main>` on landing, contrast token audit, body text color (A2-A5, A7) | High (a11y) | 1-2 d | Dev | none | axe clean on key pages |
| 18 | Newsletter on (R5.5) | Medium | 0.5 d | Owner (PDF) + Dev | PDF or offer change | Signups > 0 |
| 19 | Responsive images srcset (T1) + subpage slideshow removal (T2) | High (perf) | 1-2 d | Dev | none | Mobile LCP < 2.5 s on /en/house |

### Medium term: 1-3 months

| # | Action | Impact | Effort | Owner | Depends on | Metric |
|---|---|---|---|---|---|---|
| 20 | Finish Guide: practical → sea → land → culture; close surf-operators gap (Briefs 3, 5) | High | 4-5 d total | Copy + owner verification | Venue verification | Pages indexed; guide entrances in Plausible |
| 21 | "Calheta or Funchal" decision guide (Brief 2) | High | 2 d | Copy | none | Ranks/cited for "calheta vs funchal"-class queries |
| 22 | Localize guide content + nav labels (R3.2 completion) | High | 3-5 d | Translation | #1 | PT/DE/FR/PL fully coherent pages |
| 23 | Digital PR round 1: Startup Madeira listing, Simply Owners, 3-5 blog pitches (3.4) | High | ongoing | Owner/marketing | #10-#12 live (pitchable site) | 3+ referring domains; nomad-directory listing |
| 24 | Gallery/lightbox with full a11y spec (6.2, A10) | Medium | 2-3 d | Dev + design | Photo selects | Gallery engagement; time-on-house |
| 25 | Integrity check script in prebuild (R9.1) | Medium | 1 d | Dev | #1, #9 | CI fails on canonical/sitemap/schema drift |
| 26 | Facts single-source refactor (`facts.ts`) (R4.4) | Medium | 1-2 d | Dev | #4 | One source feeds copy/schema/llms.txt |
| 27 | CSP header, web manifest, preload dedupe (T3, T5, T6) | Low-med | 1 d | Dev | none | Headers verified |

### Strategic bets: 3-6 months

| # | Action | Impact | Effort | Owner | Depends on | Metric |
|---|---|---|---|---|---|---|
| 28 | Direct-booking evaluation: keep Airbnb-only vs add a booking engine (as Villa Gia does) | Potentially very high (fees, ownership of guest relationship) | Decision + 1-2 wk if adopted | Owner | 6 mo of funnel data | Direct-inquiry rate; effective nightly yield |
| 29 | Second decision-stage guide (e.g. "Madeira in winter") | Medium | 2 d | Copy | Brief 2 results | Citations/rankings |
| 30 | Review flywheel: post-stay email asking for OurMadeira/Airbnb review + permission to quote | High compounding | Process, not code | Owner | #11 | Review count growth |
| 31 | Stable Next.js migration + deploy pipeline pinning (T8, T9) | Risk reduction | 1-2 d | Dev | Next 16.3 stable | Prod = commit, reproducible |
| 32 | Seasonal photography (winter set) to support "Madeira in winter" content honestly | Medium | Shoot | Owner | none | Winter-query engagement |

---

## 16. Measurement plan

Plausible is already well-instrumented (outbound-airbnb, email-click, phone-click, scroll-50/90, newsletter-signup, the Stay-with-us funnel, and an LLM-referrer view). Additions and cadence:

**Weekly (owner glance)**: outbound-airbnb clicks by `utm_content` placement; LLM-referrer sessions; top entry pages.

**Monthly**:
- Google Search Console (set it up if not verified; this is a day-one prerequisite): coverage report (watch canonicals accepted post-fix), queries containing "casa amani", impressions for locale pages (should go from ~0 after R3.1/R3.2), Rich Results status for FAQ/VacationRental.
- AI-answer spot checks: ask ChatGPT, Perplexity, Gemini, and Claude "What is Casa Amani in Madeira?", "Where should I stay on Madeira's west coast?", "Is Casa Amani good for remote work?" Log accuracy and citation of casa-amani.com. The fact-contradiction fixes should show up here first.
- Core Web Vitals via PageSpeed Insights (mobile, /en and /en/house).

**Quarterly**: referring domains (target +3/quarter during PR push); OurMadeira/Airbnb review count; Guide "Last verified" refresh; booking-funnel ratio vs targets in PLAUSIBLE_SETUP.md.

**Success definition at 6 months**: brand SERP for "casa amani madeira" fully owned (site + GBP + OurMadeira + Wikidata); all 5 locales indexed with correct canonicals; at least one AI answer engine citing casa-amani.com for a non-brand west-coast query; measurable direct traffic from nomad-directory and blog links; Airbnb funnel conversion baseline established and improving after homepage spine + reviews ship.

---

## 17. Appendix: assumptions, unknowns, and validation checklist

### Stated assumptions

- www is acceptable as the canonical host (it is what serves today). If the owners prefer apex, invert R3.1 consistently.
- The Airbnb-exclusive booking model is intentional and stays for now (roadmap #28 revisits).
- OurMadeira manages the property under Cessão de Exploração (stated in llms-full.txt); outreach items assume this relationship is current.
- The five-locale strategy reflects real audience intent (UK/IE + PT + DE + FR + PL); no analytics were available to confirm demand per locale.

### Unknowns requiring validation (with the exact test)

| Unknown | How to verify |
|---|---|
| Google index status and canonical handling | Search Console: URL inspection on /en, /en/house, a guide URL; coverage report |
| Whether stale `/index.html` result persists | GSC + `site:casa-amani.com` after fixes; request reindexing |
| Existence/claimability of Google Business Profile | Google Maps search at the coordinates; business.google.com claim flow |
| Airbnb/Booking listing titles and review counts | Open the listings directly (listing 1695506665949683620) |
| Pool-heating terms, heating/AC truth, wifi Mbps, pricing range | Owner confirmation; run a speed test at the house |
| Field Core Web Vitals | PageSpeed Insights / CrUX for mobile |
| Mobile layout integrity (360px, 100dvh, touch targets) | Device pass or Polypane |
| Contrast pass/fail per token pair | axe DevTools / Polypane contrast audit (A4, A5) |
| Focus behavior of menu overlay | Manual keyboard test (Tab cycle, Escape, focus return) |
| Competitor JSON-LD practices | View-source on giasvillas.com, ourmadeira.com (fetch tooling stripped scripts) |
| GBP eligibility for AL vacation rentals under current policy | Google's lodging/GBP policy docs at setup time |
| US-bias caveat | All SERP research ran from US infrastructure; re-check key queries from PT/UK/DE (e.g. via GSC query data once flowing) |

### Fact-source ledger (where each key claim was verified)

- Site behavior, canonicals, 404s, JSON-LD, llms.txt: live fetches 2026-07-07 + `out/` build artifacts.
- Code-level causes: `src/app/layout.tsx`, `src/app/[locale]/*/page.tsx`, `src/app/page.tsx`, `public/sitemap.xml`, `vercel.json`, `src/i18n/translations.ts`, `src/content/faq.ts`, `Footer.tsx`, `house/page.tsx`.
- Competitive/SERP claims: web research 2026-07-07; sources include ourmadeira.com/regions/calheta-area/amani/, giasvillas.com, thevillacollection.com, digitalnomads.startupmadeira.eu, simplyowners.net, plus the named blogs in 3.4.
- Nothing in this document invents property facts; every number (219 m², 7-night minimum, distances, AL 176882/AL, check-in times) comes from the site's own content or structured data.





# Plausible Dashboard Setup

After deploying, configure these in the Plausible dashboard.

## Goals (Site Settings → Goals → Custom event)

Primary conversions:
- `outbound-airbnb`
- `outbound-instagram`
- `email-signup`
- `enquire-form-submit`
- `phone-click`
- `whatsapp-click`
- `email-click`

Engagement signals:
- `scroll-50`
- `scroll-90`
- `journal-read`

## Funnel (Funnels → Create)

Name: **Stay-with-us conversion**

1. Pageview on `/` (entry)
2. Custom event `scroll-50` (engaged)
3. Pageview on `/en/house` or any house/stay page (interest)
4. Any of: `email-signup` OR `outbound-airbnb` (lead or booking intent)

Target ratios after 3 months:
- Step 1 → 2: > 50%
- Step 2 → 3: > 15%
- Step 3 → 4: > 60%
- email-signup : outbound-airbnb ratio: at least 1:3

## LLM-source filtered view

Create a custom view filtered to referrers:
- chat.openai.com
- perplexity.ai
- gemini.google.com
- claude.ai

Even 5-10 visits/month here proves GEO strategy is working.

## Reporting cadence

- Weekly: Monday AM — funnel conversion, top referrers, anomalies
- Monthly: compare to previous month, top journal posts by engagement, source market quality
- Quarterly: OTA clickout ratios, manual booking attribution against OurMadeira data

## Verify

- [ ] Plausible script loads on every page (Network tab → filter `plausible`)
- [ ] Incognito visit triggers pageview in real-time view
- [ ] Clicking "Book a stay" / "Stay with us" fires `outbound-airbnb`
- [ ] Scrolling to 50% fires `scroll-50`
- [ ] Scrolling to 90% fires `scroll-90`
- [ ] No cookie banner needed (Plausible is cookieless)
- [ ] Privacy page exists at `/[locale]/privacy`
- [ ] Lighthouse Performance score unaffected

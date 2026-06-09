# Plausible Dashboard Setup

After deploying, configure these in the Plausible dashboard.

## Goals (Site Settings → Goals → Custom event)

Add each as a custom event goal:

- `outbound-airbnb`
- `outbound-booking`
- `outbound-vrbo`
- `outbound-ourmadeira`
- `outbound-casai`
- `email-signup`
- `phone-click`
- `whatsapp-click`
- `email-click`
- `scroll-50`
- `scroll-90`
- `journal-read`

## Funnel (Funnels → Create)

Name: **Stay-with-us conversion**

1. Pageview on `/`
2. Custom event `scroll-50`
3. Pageview on `/en/house` (or any house page)
4. Any of: `outbound-airbnb` OR `outbound-booking` OR `outbound-vrbo` OR `outbound-ourmadeira` OR `outbound-casai`

## Verify

- [ ] Plausible script loads on every page (Network tab → filter `plausible`)
- [ ] Incognito visit triggers pageview in real-time view
- [ ] Clicking "Book a stay" fires `outbound-airbnb` in real-time view
- [ ] Scrolling to 50% fires `scroll-50`
- [ ] Scrolling to 90% fires `scroll-90`
- [ ] No cookie banner needed (Plausible is cookieless)
- [ ] Privacy page exists at `/[locale]/privacy`
- [ ] Lighthouse Performance score unaffected

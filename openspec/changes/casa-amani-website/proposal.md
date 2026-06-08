## Why

Casa Amani is a luxury vacation villa in Arco da Calheta, Madeira that needs a web presence at casa-amani.com. The owner has a complete Figma design (file key `3G3S6WfoUR5VJlKEHyir9k`, frame `2032:222`) ready to implement — a single-page marketing site that showcases the property and drives booking inquiries.

## What Changes

- Build a complete single-page marketing website from a Figma design using Next.js and Tailwind CSS
- Implement five distinct sections: header/nav, hero with title, tagline, horizontally-scrolling house rooms gallery, and a Madeira location section
- Download and serve 11 high-quality property images from the Figma design
- Set up custom typography with GT Sectra Display (headings) and GT Walsheim (body) font families
- Configure the project for static export and deployment to casa-amani.com
- Support PT/EN language toggle in the navigation

## Capabilities

### New Capabilities
- `site-layout`: Overall page structure, responsive layout, header navigation, and language switcher
- `hero-section`: Full-width hero with background color, title typography, and subtitle
- `house-gallery`: Horizontally-scrolling room cards section with images and descriptions for 9 spaces (main bedroom, guest bedroom, family bathroom, swimming pool, living space, kitchen, lower room, outdoor dining, garage)
- `location-section`: Two-column Madeira location section with descriptive text and property image
- `typography-and-tokens`: Design tokens (colors, spacing) and custom font loading for GT Sectra Display, GT Sectra Fine, and GT Walsheim
- `static-assets`: Image optimization pipeline and static asset management for 11 property photos

### Modified Capabilities

## Impact

- **New files**: Page component, section components, layout, font configuration, global styles, image assets
- **Dependencies**: Next.js (already scaffolded), Tailwind CSS v4 (already configured), `next/font` for local fonts
- **Deployment**: Static export (`output: 'export'`) targeting casa-amani.com
- **Assets**: ~11 high-resolution property images to download from Figma and optimize

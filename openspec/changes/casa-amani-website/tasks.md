## 1. Project Configuration

- [ ] 1.1 Configure `next.config.ts` with `output: 'export'` and image optimization settings
- [ ] 1.2 Set up design tokens as CSS custom properties in `globals.css` (colors, font families)
- [ ] 1.3 Configure custom fonts with `next/font/local` in layout (GT Sectra Display, GT Sectra Fine, GT Walsheim with fallbacks)
- [ ] 1.4 Set up Tailwind theme extensions referencing CSS custom properties

## 2. Static Assets

- [ ] 2.1 Download all 11 property images from Figma asset URLs to `public/images/`
- [ ] 2.2 Rename images with descriptive filenames (hero, main-bedroom, guest-bedroom, etc.)

## 3. Layout and Header

- [ ] 3.1 Create root layout (`src/app/layout.tsx`) with font loading, metadata, and global styles
- [ ] 3.2 Create `Header` component with "MENU" left and "PT / EN" language toggle right

## 4. Hero Section

- [ ] 4.1 Create `Hero` component with "casa amani" title (88px serif) and "ARCO DA CALHETA, MADEIRA" subtitle (24px spaced uppercase)
- [ ] 4.2 Add full-width hero image below the title (654px height, object-cover)

## 5. Tagline Section

- [ ] 5.1 Create `Tagline` component with "your home, briefly." heading and subtitle on warm background

## 6. House Gallery Section

- [ ] 6.1 Create `HouseGallery` component with "the house" heading and feature list
- [ ] 6.2 Create `RoomCard` component (image, room name, description) with standard (399x525) and featured (560x736) variants
- [ ] 6.3 Implement horizontal scroll container with CSS overflow-x and flex-nowrap for 9 room cards
- [ ] 6.4 Wire up all 9 room cards with correct images, titles, and descriptions from the Figma design

## 7. Location Section

- [ ] 7.1 Create `Location` component with two-column layout: text left (heading + paragraph), image right
- [ ] 7.2 Implement responsive stacking for mobile viewports

## 8. Page Assembly and Responsive

- [ ] 8.1 Compose all sections in `src/app/page.tsx` in correct order
- [ ] 8.2 Add responsive breakpoints: reduce padding, scale fonts, stack gallery on mobile
- [ ] 8.3 Verify build succeeds with `npm run build` and static export generates correctly

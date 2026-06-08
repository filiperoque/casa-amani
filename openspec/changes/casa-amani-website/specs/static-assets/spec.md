## ADDED Requirements

### Requirement: Property images stored in public directory
All 11 property images SHALL be stored in `public/images/` with descriptive filenames and served as static assets via Next.js.

#### Scenario: Images are accessible
- **WHEN** the site is built
- **THEN** all images are available at `/images/<filename>` paths and included in the static export

### Requirement: Images optimized for web delivery
Property images SHALL be served through `next/image` with appropriate `sizes` attributes for responsive loading. The build process generates optimized WebP/AVIF variants automatically.

#### Scenario: Images serve optimized formats
- **WHEN** a browser that supports WebP/AVIF requests an image
- **THEN** the optimized format is served instead of the original JPEG/PNG

### Requirement: Static export configured
The Next.js config SHALL set `output: 'export'` to generate a fully static site in the `out/` directory, suitable for deployment to any static hosting provider.

#### Scenario: Build produces static output
- **WHEN** `npm run build` is executed
- **THEN** a complete static site is generated in the `out/` directory with all HTML, CSS, JS, and image assets

## ADDED Requirements

### Requirement: Hero displays title and subtitle over a warm background
The hero section SHALL display "casa amani" in GT Sectra Display at 88px and "ARCO DA CALHETA, MADEIRA" in GT Walsheim at 24px with 5.76px letter-spacing, both in cream (#f2ece2) on a warm golden background (#b8956e), centered horizontally.

#### Scenario: Hero renders with correct typography
- **WHEN** the page loads
- **THEN** "casa amani" appears centered in serif display font at 88px, with the subtitle below in spaced uppercase sans-serif

### Requirement: Hero image displays below the title
A full-width property image SHALL render below the hero title, constrained to 654px height with the image cropped to cover the container.

#### Scenario: Hero image renders
- **WHEN** the page loads
- **THEN** a property photograph spans the full content width below the title, maintaining aspect ratio via object-fit cover

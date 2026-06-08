## ADDED Requirements

### Requirement: Page renders as a single continuous scroll
The site SHALL render as a single page with vertically stacked sections: Header, Hero, Tagline, House Gallery, and Location.

#### Scenario: Full page load
- **WHEN** a user navigates to casa-amani.com
- **THEN** all five sections render in order without page navigation

### Requirement: Header displays navigation bar
The header SHALL display "MENU" on the left and a "PT / EN" language toggle on the right, positioned above the hero title within the warm-toned hero area.

#### Scenario: Header renders with navigation elements
- **WHEN** the page loads
- **THEN** the header shows "MENU" text left-aligned and "PT / EN" right-aligned, both in cream (#f2ece2) on the warm background (#b8956e)

### Requirement: Responsive layout adapts to viewport
The site SHALL be responsive, reflowing from the desktop layout (1440px design width) to narrower viewports. Horizontal padding reduces on smaller screens; the gallery switches from horizontal scroll to a stacked layout on mobile.

#### Scenario: Desktop viewport
- **WHEN** the viewport is 1024px or wider
- **THEN** the layout matches the Figma design with 120px horizontal padding

#### Scenario: Mobile viewport
- **WHEN** the viewport is narrower than 768px
- **THEN** padding reduces to 24px, font sizes scale down, and gallery cards stack vertically

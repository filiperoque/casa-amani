## ADDED Requirements

### Requirement: Location section displays in two-column layout
The Madeira section SHALL render as a two-column layout on desktop: left column with the heading "madeira. the pearl of the atlantic." (GT Sectra Fine, 72px) and descriptive paragraph (GT Walsheim, 32px/48px line-height), right column with a 560x654px property image. Background is warm golden (#b8956e), text is cream (#f2ece2). Padding is 120px on all sides.

#### Scenario: Location section renders on desktop
- **WHEN** the viewport is 1024px or wider
- **THEN** text and image display side-by-side with equal visual weight

#### Scenario: Location section renders on mobile
- **WHEN** the viewport is narrower than 768px
- **THEN** the layout stacks vertically with text above the image

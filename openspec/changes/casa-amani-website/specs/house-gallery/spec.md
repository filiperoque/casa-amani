## ADDED Requirements

### Requirement: House section displays title and features
The house section SHALL display "the house" as a centered heading in GT Sectra Fine at 72px, with a feature list below: "2 + 1 bedrooms • 234 m² • atlantic-facing • heated pool • open-plan living / workspaces • fibre wifi • outdoor dining & barbecue • garage for 2 cars" in GT Walsheim at 24px.

#### Scenario: House section header renders
- **WHEN** the user scrolls to the house section
- **THEN** the section shows a cream (#f2ece2) background with the title and features in dark brown (#7a5f40)

### Requirement: Room cards display in a horizontal scroll
The house section SHALL contain 9 room cards in a horizontally-scrollable container. Each card shows a property photo, a room name in spaced uppercase (GT Walsheim Medium, 20px, 4.8px tracking), and a description (GT Walsheim Regular, 16px). Standard cards are 399px wide with 525px-tall images; the featured "Living Space" card is 560px wide with a 736px-tall image.

#### Scenario: Gallery scrolls horizontally on desktop
- **WHEN** the user interacts with the gallery on a viewport wider than 1024px
- **THEN** the cards scroll horizontally with overflow, showing partial next cards as a scroll affordance

#### Scenario: All 9 rooms are present
- **WHEN** the gallery renders
- **THEN** cards appear for: The Main Bedroom, The Guest Bedroom, The Family Bathroom, The Swimming Pool, The Living Space, The Kitchen, The Lower Room, The Outdoor Dining Area, The Garage

### Requirement: Room card images lazy-load
Room card images beyond the initial viewport SHALL use lazy loading to reduce initial page weight.

#### Scenario: Offscreen images lazy-load
- **WHEN** the page loads
- **THEN** only images within or near the viewport load immediately; remaining images load as the user scrolls the gallery

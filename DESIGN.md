---
name: "Julien Bonavita CV"
description: "One-page CV with a high-contrast creative-director portfolio direction."
colors:
  white: "#ffffff"
  black: "#000000"
  ink: "#050505"
  carbon: "#171717"
  graphite: "#2b2e2e"
  ghost: "#ffffff1a"
  muted-dark: "#777777"
  muted-light: "#c6c4b9"
  cyan: "#07b0f3"
  signal-red: "#941608"
  signal-yellow: "#e6e147"
typography:
  display:
    fontFamily: "\"Arial Black\", \"Arial Narrow\", Impact, \"Helvetica Neue Condensed\", Helvetica, Arial, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6.6vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.035em"
  giant-outline:
    fontFamily: "\"Arial Black\", \"Arial Narrow\", Impact, \"Helvetica Neue Condensed\", Helvetica, Arial, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(4rem, 10vw, 8rem)"
    fontWeight: 900
    lineHeight: 0.82
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, Aptos, \"Segoe UI\", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.45
  micro-label:
    fontFamily: "\"Arial Narrow\", \"Helvetica Neue Condensed\", Arial, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.5em"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(1.5rem, 4.2vw, 3.75rem)"
  hero-top: "clamp(10rem, 27vh, 18rem)"
  section: "clamp(5rem, 10vw, 9rem)"
  grid-gap: "clamp(1rem, 2.1vw, 1.875rem)"
  measure: "82rem"
components:
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.black}"
    padding: "0"
  project-tile:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    width: "min(100%, 420px)"
    height: "420px"
  contact-link:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "0"
---

# Design System: Julien Bonavita CV

## 1. Overview

**Creative North Star: "Le Portfolio En Mouvement"**

This target system adapts the public-facing mechanics observed on `anthonydesigner.com`: stark black/white contrast, huge uppercase display type, sparse navigation, square proof tiles, long black scroll sections and a final typographic contact block. It must feel closer to a creative director portfolio than to a conventional CV page.

This is an adaptation, not a clone. Do not copy third-party source code, logos, image assets, text, class names or exact composition. Translate the reference into Julien's content: content, SEO, acquisition, AI, KEDGE proof, projects and contact. The result should be aggressive and memorable while staying recruiter-readable.

**Key Characteristics:**
- White first viewport with a very sparse header and one massive uppercase positioning statement.
- Immediate transition into black portfolio territory with square proof tiles.
- No rounded cards, no pills, no shadows, no soft beige editorial styling.
- Typography carries the identity: bold condensed uppercase for impact, narrow tracked micro-labels for navigation and metadata.
- Images should be treated as graphic proof panels, preferably monochrome or heavily contrast-managed.
- Motion is allowed for scroll cues, hover image reveals and color transitions, but content stays visible without animation.

## 2. Colors

The palette is stark monochrome with tiny signal-color accents. White creates the opening shock; black carries the portfolio body.

### Primary
- **Hard Black**: the dominant long-scroll background, contact surface and main type color on white.
- **Hard White**: the opening hero background and text color on black.

### Secondary
- **Carbon Tile**: square proof-tile background for project marks, screenshots or cropped visuals.
- **Graphite Overlay**: hover or media overlay when pure black is too flat.

### Tertiary
- **Signal Cyan**: a tiny accent for active punctuation, link sparks or small proof markers only.
- **Signal Red**: optional micro-accent for one contrast point; never a section background.
- **Signal Yellow**: optional micro-accent for one contrast point; never a gradient.

### Neutral
- **Ghost White**: subtle borders, tile overlays and inactive separators on black.
- **Muted Dark**: secondary text on black, especially back-to-top or low-priority metadata.
- **Muted Light**: low-priority type on white when black would overstate the element.

### Named Rules
**The Monochrome Majority Rule.** At least 90% of any viewport should be black, white or near-black. Accent colors are punctuation, not decoration.

**The No Beige Rule.** Do not bring back warm paper, cream or sand backgrounds in this direction. The reference energy depends on hard black against hard white.

**The Tile Contrast Rule.** Project tiles sit on black and must read as deliberate square objects: no rounded corners, no card shadows, no pastel panels.

## 3. Typography

**Display Font:** heavy compressed sans stack using available system fallbacks.
**Body Font:** Manrope, Aptos, Segoe UI and system sans fallbacks.
**Label/Mono Font:** narrow uppercase sans; no monospace.

**Character:** Type is blunt, graphic and brand-forward. Headlines should feel like a campaign poster or agency reel: uppercase, dense, short and strongly wrapped. Body copy remains minimal because the display type does most of the positioning work.

### Hierarchy
- **Display** (900, `clamp(3rem, 6.6vw, 6rem)`, `0.88`, uppercase): hero line, section commands and contact prompts. Keep letter spacing at or above `-0.035em`.
- **Giant Outline** (900, `clamp(4rem, 10vw, 8rem)`, `0.82`, uppercase outline): background section word such as "PROJETS" or "CURRENT". Use once per long black band.
- **Title** (900, `clamp(2rem, 4vw, 4.5rem)`, `0.9`, uppercase): project and experience titles.
- **Body** (400, `16px`, `1.45`): short explanations only. Avoid paragraphs longer than 45-55ch in this direction.
- **Micro Label** (700, `0.78rem`, `0.5em`, uppercase): navigation, CTA labels, metadata and back-to-top. Use very short words because the tracking is extreme.

### Named Rules
**The Uppercase Economy Rule.** Uppercase is allowed because the copy is short. If a block needs more than two lines of explanation, switch to body case and reduce the display scale.

**The No Script Rule.** Remove the handwritten signature system in this direction. The identity should be logo-like, geometric and blunt.

**The Outline Is Atmospheric Rule.** Outline text is background atmosphere. It must not carry critical information alone.

## 4. Elevation

The system is flat and high-contrast. Depth comes from scale, section color, image cropping, opacity, overlay and scroll position. Shadows, blur cards and tactile elevation do not belong here.

### Named Rules
**The Zero Radius Rule.** Major surfaces, image tiles and CTA zones use `0px` radius. Pills and soft rounded controls break the reference direction.

**The No Shadow Rule.** Do not add drop shadows to separate layers. Black/white contrast and grid spacing do that work.

**The Motion Surface Rule.** Hover movement should affect image opacity, scale or color. Do not animate layout dimensions.

## 5. Components

### Buttons
- **Shape:** no button boxes by default. Primary actions are typographic links, not filled pills.
- **Primary:** uppercase micro-label or heavy display link, transparent background, no border.
- **Hover / Focus:** color accent, underline sweep, opacity shift or image reveal. Focus must remain visible with a clear outline or underline state.
- **Secondary:** same as primary but lower contrast through muted text.

### Chips
- Avoid chips in this direction. Replace tags with short metadata rows or micro-label clusters. If tags are unavoidable, use plain uppercase text separated by generous spacing, not pill backgrounds.

### Cards / Containers
- **Corner Style:** square (`0px`).
- **Background:** black body sections, white hero, carbon project tiles.
- **Shadow Strategy:** no shadows.
- **Border:** use no border by default; use Ghost White only for subtle inactive separators on black.
- **Internal Padding:** project tiles should be visually square and centered; section rhythm should be large and cinematic.

### Inputs / Fields
- The site currently has no form fields. Keep contact as direct links unless a real technical reason exists for a form.

### Navigation
- Sparse top navigation: mark at top-left, one or few links top-right.
- Use micro-label typography with extreme tracking. Links should remain short: `PROJETS`, `CONTACT`, `TOP`.
- Header should feel overlaid and light, not like a boxed app bar. Avoid backdrop blur and borders unless readability forces them.

### Project Tiles
- Use a 3-column grid on desktop with square tiles around `420px`.
- Each tile should show a real project visual, logo-like crop or high-contrast screenshot treatment.
- Default tile background is Carbon Tile. Hover may reveal a full image or increase contrast.
- On mobile, tiles stack as full-width squares or near-squares with preserved visual weight.

### Hero
- First viewport is mostly white space.
- Top-left contains a compact mark or `JB`.
- Top-right contains one micro-label navigation link.
- Main headline sits low enough to create tension and should be short, uppercase and direct.
- Do not put the hero in a card.

### Contact Poster
- Final section is black with heavy white prompt copy.
- Social/contact links may be large uppercase abbreviations or compact text links.
- Back-to-top is low-contrast, tracked and positioned away from the main contact prompt.

## 6. Do's and Don'ts

### Do:
- **Do** make the first viewport radically simple: white field, tiny nav, massive black statement.
- **Do** move quickly into black portfolio sections with square project proof tiles.
- **Do** translate all reference mechanics into Julien's own content and assets.
- **Do** keep KEDGE, SEO, IA and acquisition proof visible; visual boldness must not erase recruiter utility.
- **Do** use real project images, screenshots or credible crops instead of generic decorative panels.
- **Do** keep body copy short, scannable and subordinate to proof.
- **Do** preserve WCAG AA contrast and `prefers-reduced-motion`.

### Don't:
- **Don't** copy `anthonydesigner.com` source code, logos, images, text, class names or exact layout coordinates.
- **Don't** describe the result as "exactly the same design"; treat the site as a reference for visual mechanics only.
- **Don't** make the site look like a CV Word mis en page.
- **Don't** make it a portfolio artistique décoratif that hides the professional story.
- **Don't** make it a landing page SaaS générique.
- **Don't** make it a page corporate scolaire trop sage.
- **Don't** add beige paper backgrounds, pill buttons, rounded cards, decorative glass, gradient text or soft shadow cards.
- **Don't** expose phone numbers or private profile details without explicit confirmation.

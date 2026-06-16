# NextGreen Website — UI Design Specification

**Source website:** https://nextgreen.webflow.io/  
**Purpose:** UI-only design handoff file for recreating, adapting, or briefing an AI/design tool.  
**Scope:** Visual design, layout system, reusable UI components, page structure, and responsive behavior.  
**Not included:** Full website copy, legal text, CMS article content, SEO copy, or content migration.

---

## 1. Design Direction

NextGreen has the feel of a premium SaaS website built around sustainability, energy, workflow efficiency, and modern B2B credibility.

The UI should feel:

- Clean, corporate, and polished.
- Sustainability-led without looking overly organic or rustic.
- Modern SaaS with strong conversion sections.
- Spacious, calm, and structured.
- Trust-building through logos, testimonials, stats, pricing, and clear CTAs.

### Visual Keywords

`SaaS` · `sustainability` · `clean tech` · `green energy` · `modern software` · `premium B2B` · `minimal` · `rounded` · `airy` · `trustworthy`

---

## 2. UI-Only Extraction Rule

When recreating the site, focus only on:

- Layout structure.
- Section hierarchy.
- Visual rhythm.
- Component styling.
- Navigation patterns.
- Button styles.
- Card design.
- Pricing table structure.
- Testimonial layouts.
- Blog listing layout.
- Form layout.
- Footer system.

Do **not** copy placeholder lorem ipsum content or article body text unless needed as dummy text.

---

## 3. Estimated Design Tokens

> Note: The exact Webflow variables should be checked inside the Webflow project if available. The following palette is a practical UI recreation estimate based on the public visual direction.

### 3.1 Color Palette

| Token | Suggested Hex | Usage |
|---|---:|---|
| `--color-forest-950` | `#101B16` | Primary dark text, dark footer, high-contrast CTA background |
| `--color-forest-800` | `#183C2E` | Main brand green, primary buttons, badges |
| `--color-forest-600` | `#2E6B4F` | Secondary green accents, icon backgrounds |
| `--color-lime-400` | `#C8F06A` | Highlight accents, pills, small UI signals |
| `--color-sage-100` | `#EEF6EA` | Soft green cards/background sections |
| `--color-cream-100` | `#F7F3E8` | Warm page background / off-white section background |
| `--color-neutral-000` | `#FFFFFF` | Cards, forms, header surface |
| `--color-neutral-100` | `#F6F8F5` | Alternate light sections |
| `--color-neutral-300` | `#DDE5DC` | Borders and dividers |
| `--color-neutral-600` | `#66736D` | Supporting text |
| `--color-neutral-900` | `#111513` | Headings and primary copy |

### 3.2 Color Usage

- Use dark forest green for primary CTAs and dark emphasis sections.
- Use light cream/off-white as the main page canvas.
- Use sage/mint backgrounds for feature blocks and sustainability-related cards.
- Use lime only as a restrained accent, never as the dominant page color.
- Keep cards mostly white with subtle green-tinted borders.

---

## 4. Typography System

> Exact font family is not confirmed from the visual extraction. Use a modern SaaS-style sans-serif such as `Inter`, `Manrope`, `Satoshi`, or `DM Sans` when recreating.

### 4.1 Font Pairing Recommendation

```css
font-family: Inter, Manrope, Arial, sans-serif;
```

### 4.2 Type Scale

| Style | Desktop | Tablet | Mobile | Weight | Line-height |
|---|---:|---:|---:|---:|---:|
| Display / Hero H1 | 64–76px | 52–60px | 40–46px | 600–700 | 1.02–1.08 |
| H2 | 44–56px | 38–44px | 32–38px | 600–700 | 1.08–1.15 |
| H3 | 26–32px | 24–28px | 22–26px | 600 | 1.2 |
| H4 | 20–24px | 20–22px | 18–20px | 600 | 1.25 |
| Body Large | 18–20px | 17–18px | 16–18px | 400 | 1.55 |
| Body | 16px | 16px | 15–16px | 400 | 1.6 |
| Small / Meta | 13–14px | 13–14px | 12–13px | 500 | 1.4 |
| Button | 15–16px | 15–16px | 15px | 600 | 1 |

### 4.3 Typography Character

- Headings should be bold but not aggressive.
- Use tight heading spacing, especially on hero titles.
- Body copy should be relaxed, readable, and muted in color.
- Use small uppercase or semi-bold labels sparingly for badges, tags, and metadata.

---

## 5. Layout System

### 5.1 Grid

- Desktop container: `1180–1280px` max width.
- Grid: 12-column layout.
- Column gap: `24–32px`.
- Section padding desktop: `96–140px` vertical.
- Section padding tablet: `72–96px` vertical.
- Section padding mobile: `56–72px` vertical.

### 5.2 Page Rhythm

Use clear alternating section patterns:

1. Hero / intro block.
2. Trust-building strip.
3. Feature or benefit section.
4. Image-led proof section.
5. Social proof.
6. Pricing or conversion block.
7. CTA / contact / footer.

### 5.3 Radius System

| Element | Radius |
|---|---:|
| Small chip / tag | `999px` |
| Buttons | `999px` or `12–16px` depending on variant |
| Cards | `20–28px` |
| Large image containers | `28–40px` |
| Form inputs | `12–16px` |
| Pricing cards | `24–32px` |

### 5.4 Shadows

Use subtle shadows only.

```css
--shadow-card: 0 12px 40px rgba(16, 27, 22, 0.06);
--shadow-elevated: 0 18px 60px rgba(16, 27, 22, 0.10);
```

Shadows should feel soft, not tech-heavy.

---

## 6. Core Components

## 6.1 Header / Navigation

### Structure

- Left: NextGreen logo.
- Center/right: navigation links.
- Services link has a dropdown/mega-menu style pattern.
- Right: primary CTA button, usually `Book a demo`.
- Mobile: collapsible menu with stacked links and CTA.

### Header Style

- White or off-white surface.
- Sticky behavior optional.
- Height: `76–88px` desktop.
- Horizontal padding aligned to page container.
- Nav links use muted dark text with hover green.
- CTA button uses dark forest green or solid brand green.

### Navigation Items Pattern

- Services
- About us
- Contact us
- Blog
- Book a demo CTA

### Services Dropdown UI

- Use a light floating card.
- 2-column or 4-item card grid.
- Each service item includes:
  - Small icon or circular marker.
  - Short heading.
  - One-line supporting text.
  - Hover state with soft sage background.

---

## 6.2 Buttons

### Primary Button

Use for highest-priority CTAs.

```css
background: #183C2E;
color: #FFFFFF;
border-radius: 999px;
padding: 14px 22px;
font-weight: 600;
```

Hover:

```css
background: #101B16;
transform: translateY(-1px);
```

### Secondary Button

Use for alternative navigation and softer CTAs.

```css
background: #EEF6EA;
color: #183C2E;
border: 1px solid #DDE5DC;
border-radius: 999px;
padding: 14px 22px;
```

### Text Button

Use inside cards and sections.

```css
color: #183C2E;
font-weight: 600;
text-decoration: none;
```

Add arrow icon on hover when possible.

---

## 6.3 Cards

### Standard Card

Used for features, benefits, value propositions, and why-template items.

```css
background: #FFFFFF;
border: 1px solid #DDE5DC;
border-radius: 24px;
padding: 28px;
box-shadow: 0 12px 40px rgba(16, 27, 22, 0.06);
```

### Feature Card Content

- Icon chip.
- Short heading.
- Supporting text.
- Optional link or arrow.

### Card Hover

- Border becomes slightly darker green.
- Card rises `-2px`.
- Shadow becomes slightly stronger.

---

## 6.4 Icon System

### Icon Style

- Minimal line icons.
- Rounded strokes.
- Sustainability and software metaphors:
  - Leaf.
  - Energy bolt.
  - Workflow nodes.
  - Dashboard chart.
  - Globe.
  - Shield.
  - Checkmark.
  - Arrow.

### Icon Containers

- Circular or rounded-square background.
- Typical size: `44–56px`.
- Background: soft sage or cream.
- Icon color: forest green.

---

## 6.5 Image System

### Imagery Direction

Use photography and abstract visuals connected to:

- Wind turbines.
- Green fields.
- Renewable energy.
- Clean software dashboards.
- Business teams.
- Environmental impact.
- Calm, premium B2B settings.

### Image Treatment

- Large rounded image blocks.
- Some overlapping or side-by-side image compositions.
- Soft masking and rounded corners.
- Avoid harsh rectangles.
- Keep image colors natural, green, cream, and neutral.

### Hero Image Pattern

- Large visual beside or below the hero copy.
- Often with layered secondary image/card overlay.
- Rounded corners between `28–40px`.

---

## 6.6 Logo Strip

### Purpose

Build immediate trust after the hero.

### UI Pattern

- Section title above or beside logos.
- Logos arranged horizontally on desktop.
- Use grayscale or muted logo styling.
- On mobile, logos wrap into 2-column or horizontal scroll.
- Keep strong whitespace.

---

## 6.7 Pricing Cards

### Structure

- Section heading and short intro.
- Billing toggle: Monthly / Yearly.
- Three pricing cards:
  - Basic.
  - Business.
  - Enterprise.
- Enterprise/most popular plan receives stronger visual emphasis.

### Pricing Card UI

```css
background: #FFFFFF;
border: 1px solid #DDE5DC;
border-radius: 28px;
padding: 32px;
```

### Most Popular Card

```css
border: 2px solid #183C2E;
background: #EEF6EA;
```

### Feature List

- Check icons.
- 3–5 list items.
- CTA at bottom.
- Maintain equal card height.

---

## 6.8 Testimonials

### UI Pattern

- Section title.
- Short supporting intro.
- Decorative or stacked image group near heading.
- Multi-card testimonial grid or slider.
- Each testimonial card includes:
  - Avatar.
  - Quote text.
  - Client name.
  - Role/company line.

### Card Style

- White card.
- Soft border.
- Rounded corners.
- Avatar circle.
- Quote text in muted dark.

---

## 6.9 Stats Block

### UI Pattern

Used heavily on service page.

- Large numeric metric.
- Small descriptive label.
- Optional icon/image alongside.
- Arrange as 4 metrics in grid on desktop.
- Mobile: 2x2 or vertical stack.

### Styling

- Numbers should be large, dark, and bold.
- Labels should be small, muted, and uppercase/semi-bold.
- Cards may use white or sage background.

---

## 6.10 FAQ Accordion

### UI Pattern

- FAQ section heading.
- Short intro.
- Accordion list with 5 questions.
- Final mini-CTA: `Still have questions?` + contact link/button.

### Accordion Style

- White rows or transparent rows with bottom borders.
- Question row has text left and plus/minus icon right.
- Expanded answer appears with muted body text.
- Use `16–20px` vertical padding per row.

---

## 6.11 Forms

### Contact Form Pattern

Fields:

- First name.
- Surname.
- Company name.
- Email.
- Message textarea.
- Submit button.

### Form UI

```css
input, textarea {
  background: #FFFFFF;
  border: 1px solid #DDE5DC;
  border-radius: 14px;
  padding: 14px 16px;
  color: #111513;
}
```

### Layout

- First name and surname can sit in 2 columns on desktop.
- Company/email full width or 2-column depending on space.
- Message full width.
- Submit button aligned left.

---

## 6.12 Blog Cards

### Blog Listing Card Structure

- Image thumbnail on top.
- Title.
- Short excerpt.
- Author name.
- Date.
- Reading time.

### Blog Layout

- Desktop: 3-column grid.
- Tablet: 2-column grid.
- Mobile: 1-column stack.
- Use consistent image aspect ratio, likely `4:3` or `16:10`.

### Blog Post Page UI

- Centered article hero.
- Meta row under title.
- Large featured image.
- Rich text body.
- Pull quotes block.
- Related articles grid at bottom.

---

## 6.13 Footer

### Footer Structure

- Logo/brand area.
- Page links.
- Resource links.
- Social links.
- Newsletter/contact form or consultant CTA.
- Copyright and designer/powered-by credit line.

### Footer UI

- Dark forest or light off-white depending on final adaptation.
- If dark:
  - Use white headings.
  - Use muted light-green/gray body links.
  - CTA form uses white input surface.
- If light:
  - Use top border.
  - Keep link columns clean and compact.

---

# 7. Page-Level UI Blueprints

---

## 7.1 Home Page UI Blueprint

### Section 1 — Header

- Logo left.
- Navigation right.
- Services dropdown.
- Primary CTA button.

### Section 2 — Hero

**Layout:** Two-column or split hero with text left and image right/below.

**UI Elements:**

- Large H1.
- Short supporting paragraph.
- Two CTAs: primary + secondary/text link.
- Sustainability hero image, likely renewable-energy visual.
- Optional floating image/card overlay.

**Style Notes:**

- Large spacing.
- Rounded media blocks.
- Strong visual focus on calm green energy imagery.

### Section 3 — Trusted By / Logo Strip

- Section title.
- Logo grid or marquee-style arrangement.
- Muted logo treatment.

### Section 4 — Workflow Integration Feature

**Layout:** Heading + intro + 3 feature cards.

**Cards:**

- Icon.
- Heading.
- Supporting body.

### Section 5 — Sustainable Business Transformation

**Layout:** Split content.

- Left: Heading, paragraph, two benefit blocks.
- Right: Image composition.
- CTA link/button.

### Section 6 — Customer Testimonials

- Heading.
- Supporting intro.
- Testimonial cards in grid/slider.
- Avatar/name/role pattern.

### Section 7 — Pricing

- Section heading.
- Monthly/yearly toggle.
- 3 pricing cards.
- Highlight most popular plan.

### Section 8 — Why NextGreen / Feature Grid

- Heading and intro.
- 8-card grid covering design, consistency, responsiveness, accessibility, etc.

### Section 9 — About / Final CTA

- Short about section with image.
- Two links/CTAs.
- Strong footer transition.

### Section 10 — Footer

- Multi-column footer with links and consultant/contact form.

---

## 7.2 Service Page UI Blueprint

### Section 1 — Header

Same reusable site header.

### Section 2 — Service Hero

- Page title.
- Intro paragraph.
- Two CTAs.
- Hero image composition.

### Section 3 — Stats

- Section title.
- Intro text.
- 4 metric cards:
  - Review rating.
  - Satisfaction.
  - Conversion increase.
  - Page-view increase.

### Section 4 — Case Study / Carbon Footprint Feature

- Split layout.
- Left or right visual.
- Heading and text.
- Read case study button/link.

### Section 5 — Features

- Section heading.
- Intro.
- 3 feature points/cards.

### Section 6 — Testimonials

Reuse testimonial component.

### Section 7 — Client Portfolio CTA

- Big headline.
- Supporting text.
- CTA buttons.
- Logo/image grid.

### Section 8 — FAQs

Use accordion pattern.

### Section 9 — Footer

Same reusable footer.

---

## 7.3 About Page UI Blueprint

### Section 1 — About Hero

- Page title.
- Short intro.
- Visual gallery or animated/masked visual block.

### Section 2 — Feature Growth Block

- Heading.
- Intro.
- 3 short feature points.
- Image pair.

### Section 3 — Why NextGreen

- 4-card grid.
- Reuse feature card style.

### Section 4 — Job Openings

- Section heading and intro.
- Job list with role, work mode, and apply button.
- Use table-like stacked rows with subtle dividers.

### Section 5 — Footer

Same reusable footer.

---

## 7.4 Contact Page UI Blueprint

### Section 1 — Contact Hero

- Page title.
- Short intro.

### Section 2 — Contact Form + Contact Info

**Desktop Layout:** Two columns.

- Left: Form.
- Right: Contact method cards.

**Contact Cards:**

- Email.
- Live chat.
- Phone.
- Office.

### Section 3 — Footer

Same reusable footer.

---

## 7.5 Blog Listing UI Blueprint

### Section 1 — Blog Hero

- Page title.
- Short intro.

### Section 2 — Blog Grid

- Card grid with image, title, excerpt, author/date/read time.
- 3 columns desktop.
- 2 columns tablet.
- 1 column mobile.

### Section 3 — Footer

Same reusable footer.

---

## 7.6 Blog Post UI Blueprint

### Section 1 — Article Header

- Title centered or max-width constrained.
- Author/date/read-time row.

### Section 2 — Featured Image

- Wide rounded image.

### Section 3 — Rich Text Article

- H2/H3 headings.
- Paragraphs.
- Blockquotes.
- Spacious text column, around `680–760px` max width.

### Section 4 — Related Posts

- Section heading.
- 3 related blog cards.

### Section 5 — Footer

Same reusable footer.

---

## 7.7 Utility / Rich Text Page UI Blueprint

Use this pattern for:

- Terms.
- License.
- Cookie policy.
- Utility content.

### Structure

- Simple header.
- Centered content column.
- Rich text hierarchy:
  - H2.
  - H3.
  - H4.
  - H5.
  - H6.
  - Paragraphs.
  - Blockquotes.
  - Inline links.

### Styling

- Max text width: `720–800px`.
- Generous vertical rhythm.
- Headings in dark neutral.
- Body in muted neutral.
- Blockquote with left border or soft sage background.

---

# 8. Responsive Design Rules

## Desktop

- Use 12-column layouts.
- Hero and major feature sections can be split 50/50 or 55/45.
- Pricing cards align in one row.
- Testimonials can be multi-column or slider.
- Header shows full nav.

## Tablet

- Convert large split sections into 2-column or stacked depending on density.
- Pricing can be 2 cards on first row and 1 full-width card below.
- Logo grids wrap.
- Testimonials use 2 columns.

## Mobile

- Header collapses into hamburger menu.
- All major sections stack vertically.
- CTA buttons become full width or stacked.
- Pricing cards stack one per row.
- Testimonial cards stack.
- Blog cards stack.
- Large section padding reduced.
- Image overlays should simplify to one image per block if needed.

---

# 9. Interaction & Motion Guidelines

Use subtle motion only.

### Recommended Interactions

- Button hover lift: `translateY(-1px)`.
- Card hover lift: `translateY(-2px)`.
- Dropdown fade + small vertical slide.
- FAQ accordion open/close animation.
- Logo strip can be static or slow marquee.
- Testimonials can be a touch-friendly slider.

### Avoid

- Heavy parallax.
- Fast animations.
- Flashy transitions.
- Overly complex scroll effects.

---

# 10. Accessibility Notes

- Keep text contrast strong, especially on green backgrounds.
- Do not use lime green for body text.
- Buttons should have visible focus states.
- Forms need clear labels, not placeholders only.
- Accordion controls should be keyboard accessible.
- Images should have descriptive alt text.
- Tap targets should be at least `44px` high on mobile.

---

# 11. Component Inventory Checklist

Use this list when building in Figma/Webflow/AI Studio.

- [ ] Header component.
- [ ] Mobile menu component.
- [ ] Services dropdown component.
- [ ] Primary button.
- [ ] Secondary button.
- [ ] Text link button.
- [ ] Hero split layout.
- [ ] Logo strip.
- [ ] Feature card.
- [ ] Stat card.
- [ ] Image composition block.
- [ ] Testimonial card.
- [ ] Pricing card.
- [ ] Billing toggle.
- [ ] FAQ accordion.
- [ ] Contact form.
- [ ] Contact method card.
- [ ] Blog card.
- [ ] Article rich text block.
- [ ] Job opening row.
- [ ] Footer.
- [ ] Newsletter/contact form in footer.

---

# 12. Suggested Figma / AI Builder Instruction

Use this instruction when asking an AI design tool to recreate the UI.

```text
Create a UI-only website design system and responsive page screens inspired by the NextGreen Webflow template. Focus on the visual structure only, not copywriting. Build a premium sustainability SaaS interface with clean corporate spacing, dark forest green brand accents, soft sage/cream backgrounds, rounded cards, pill buttons, large modern typography, renewable-energy imagery, logo strips, pricing cards, testimonial cards, stat blocks, FAQ accordions, contact forms, blog cards, and a multi-column footer.

Pages to design:
1. Home
2. Services
3. About
4. Contact
5. Blog listing
6. Blog post
7. Utility / rich text page

Use reusable components for header, dropdown nav, buttons, cards, pricing, FAQ, testimonials, forms, and footer. Keep all content as placeholders. Prioritize visual hierarchy, responsiveness, accessibility, and a premium SaaS sustainability look.
```

---

# 13. Developer Implementation Notes

### CSS Token Setup

```css
:root {
  --color-forest-950: #101B16;
  --color-forest-800: #183C2E;
  --color-forest-600: #2E6B4F;
  --color-lime-400: #C8F06A;
  --color-sage-100: #EEF6EA;
  --color-cream-100: #F7F3E8;
  --color-neutral-000: #FFFFFF;
  --color-neutral-100: #F6F8F5;
  --color-neutral-300: #DDE5DC;
  --color-neutral-600: #66736D;
  --color-neutral-900: #111513;

  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 28px;
  --radius-xl: 40px;
  --radius-pill: 999px;

  --shadow-card: 0 12px 40px rgba(16, 27, 22, 0.06);
  --shadow-elevated: 0 18px 60px rgba(16, 27, 22, 0.10);

  --container-max: 1240px;
  --section-padding: 112px;
}
```

### Container Utility

```css
.container {
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: 24px;
}
```

### Section Utility

```css
.section {
  padding-block: var(--section-padding);
}

@media (max-width: 767px) {
  .section {
    padding-block: 64px;
  }
}
```

---

# 14. Final UI Principle

The design should not feel like a generic green template. It should feel like a premium SaaS product that uses sustainability as its strategic visual language: clean space, confident typography, soft green systems, high-trust proof sections, and practical conversion blocks.

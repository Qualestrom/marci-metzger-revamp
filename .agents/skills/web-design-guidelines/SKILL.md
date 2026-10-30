---
name: web-design-guidelines
description: Review UI code for Web Interface Guidelines compliance. Audits accessibility, focus states, animation safety, typography, touch targets, layout shifts, dark mode, and anti-patterns with high signal-to-noise.
---

# Web Interface Guidelines & Audit Skill

Engineered for systematic auditing and implementation of web interfaces against Vercel's Web Interface Guidelines and industry standards.

---

## 1. When to Use

Apply this skill whenever:
- Auditing existing or newly written frontend components (`.jsx`, `.tsx`, `.html`, `.css`)
- Reviewing touch interaction, keyboard navigation, or accessibility (WCAG AA)
- Verifying animation performance and `prefers-reduced-motion` compliance
- Checking layout stability (Cumulative Layout Shift, image dimensions, font rendering)
- Inspecting dark mode contrast and responsive safe areas

---

## 2. Core Quality Rules

### 1. Accessibility (WCAG AA Compliance)
- **Icon Buttons**: Every icon-only button must have an explicit `aria-label` or `title`.
- **Form Controls**: Every input/select/textarea must have an associated `<label>` or `aria-label`.
- **Semantic Elements**: Use `<button>` for actions, `<a>` / `<Link>` for navigation. NEVER use `<div onClick>` or `<span onClick>`.
- **Keyboard Navigation**: Interactive elements must respond to `Enter` and `Space`.
- **Decorative Elements**: Decorative SVG icons, shapes, and background graphics must have `aria-hidden="true"`.
- **Images**: All `<img>` tags must have an `alt` attribute (`alt=""` if purely decorative).
- **Heading Hierarchy**: Maintain logical `<h1>` through `<h6>` structure. Use only one `<h1>` per view.
- **Color Contrast**: Body text must maintain at least 4.5:1 contrast against its background; large text ($\ge 18\text{pt}$ or bold $\ge 14\text{pt}$) must maintain at least 3:1.

### 2. Focus States & Keyboard Wayfinding
- **Visible Focus**: Interactive elements must provide a high-contrast visible focus ring (`:focus-visible`).
- **Never Kill Outlines**: NEVER write `outline: none` or `outline: 0` without immediately providing a visible `:focus-visible` replacement.
- **Use `:focus-visible`**: Target `:focus-visible` rather than `:focus` so click interactions do not trigger persistent rings on mouse release.
- **Group Focus**: Use `:focus-within` for composite form fields, input search bars, and card containers.

### 3. Touch & Mobile Ergonomics
- **Minimum Target Size**: Touch targets must be at least $44 \times 44\text{px}$ (or $48 \times 48\text{px}$ on dense touch displays).
- **No Dead Hit Zones**: Form inputs and their labels, checkboxes, and toggle switches must share a single contiguous hit target.
- **Fast Tap Response**: Use `touch-action: manipulation` to eliminate the 300ms mobile browser tap delay.
- **Safe Area Insets**: Full-bleed overlays, fixed headers, and bottom navigation bars must include `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)`.
- **Zero Horizontal Overflow**: Always protect viewports from horizontal leakage:
  ```css
  html, body {
    overflow-x: hidden;
    max-width: 100vw;
  }
  ```

### 4. Animation & Motion Performance
- **Compositor Only**: Animate ONLY GPU-composited properties: `transform`, `opacity`, and `filter`.
- **Never `transition: all`**: Explicitly declare transition properties (e.g. `transition: transform 200ms ease, opacity 200ms ease`). `transition: all` triggers unnecessary layout recalculations.
- **Respect Reduced Motion**: Always provide reduced-motion alternatives:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```
- **Interruptible Transitions**: CSS and JS animations must gracefully respond if user interrupts midway through (e.g., hovering off quickly).
- **SVG Transform Origins**: Set `transform-box: fill-box; transform-origin: center;` on SVG elements undergoing rotation or scale transforms.

### 5. Typography & Text Handling
- **Heading Line Balance**: Use `text-wrap: balance` on headlines and display text to eliminate orphaned words.
- **Tabular Numerals**: Apply `font-variant-numeric: tabular-nums` to stats, metrics, clocks, and counters to prevent jitter.
- **Flex Child Truncation**: Flex child elements containing text must have `min-width: 0` for `text-overflow: ellipsis` or truncation to work properly.
- **Typography Polish**: Use curly quotes (`“` and `”`), proper em dashes (`—`), and non-breaking spaces (`&nbsp;`) between numbers and units (e.g., `100&nbsp;ms`, `5&nbsp;MB`).

### 6. Performance & Layout Shift (CLS)
- **Explicit Image Dimensions**: Every `<img>` must define `width` and `height` attributes or an `aspect-ratio` CSS property to prevent Cumulative Layout Shift ($CLS < 0.1$).
- **Loading Prioritization**:
  - Above-the-fold critical images / logos: `fetchpriority="high"` or `loading="eager"`.
  - Below-the-fold images: `loading="lazy"`.
- **Zero Layout Reads in Render**: Do not query `getBoundingClientRect()`, `offsetHeight`, or `scrollTop` inside render cycles. Batch DOM measurements.

### 7. Dark Mode & Theming Consistency
- **Root Declaration**: Declare `color-scheme: dark` on `<html>` or `<body>` in dark mode to automatically style native scrollbars and controls.
- **Meta Color**: Set `<meta name="theme-color" content="...">` to match the background surface for mobile browser chrome.
- **Form Element Theming**: Ensure `<select>`, `<option>`, and `<input>` have explicit dark background and text colors to prevent white background bugs on Windows and mobile.

---

## 3. High-Priority Anti-Patterns (Flag Immediately)

| Anti-Pattern | Why It Fails | Correct Solution |
| :--- | :--- | :--- |
| `outline: none` without focus ring | Breaks keyboard accessibility | Add `:focus-visible { outline: 2px solid ...; }` |
| `transition: all` | Recalculates layout, causes jank | Specify exact properties (`transform, opacity`) |
| `<div onClick={...}>` | Inaccessible to keyboard & screen readers | Use `<button onClick={...}>` |
| Icon button without `aria-label` | Screen readers announce "Button" with no context | Add `aria-label="Action description"` |
| `user-scalable=no` | Prevents vision-impaired users from zooming | Never disable user scaling |
| Image without explicit width/height | Triggers Cumulative Layout Shift (CLS) | Add `width`, `height`, or `aspect-ratio` |
| Touch targets $< 44\text{px}$ | High miss rate and user frustration on mobile | Ensure `min-height: 44px; min-width: 44px;` |
| Text contrast $< 4.5:1$ | Illegible under ambient light or low vision | Adjust color palette to meet WCAG AA standards |

---

## 4. Audit Output Format

When auditing files, use concise, actionable `file:line` syntax:

```text
## src/components/Navigation.jsx
src/components/Navigation.jsx:42 - icon button missing aria-label
src/components/Navigation.jsx:78 - transition: all used; specify transform, opacity

## src/components/Hero.jsx
src/components/Hero.jsx:15 - heading missing text-wrap: balance
src/components/Hero.jsx:30 - img missing explicit width/height or aspect-ratio
```

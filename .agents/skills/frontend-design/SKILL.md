---
name: frontend-design
description: Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. Prevents generic AI defaults, clashing gradients, and visual clutter. Enforces aesthetic restraint, purposeful typography, and theme-grounded creative direction.
---

# Frontend Design & Aesthetic Intent

Lead frontend design with intentional, bespoke visual identity. Reject generic templates, cliché layouts, and artificial decoration. Make deliberate, restrained choices about palette, typography, and layout that reflect the exact brief and subject matter.

---

## 1. Ground Designs in the Subject Matter

- **Root every design in its specific world**: Visual choices must come from the subject's universe, materials, lore, and vernacular — not generic SaaS presets.
  - *Example (Genshin Cryo / Snezhnayan / Sandrone)*: Focus on cold crystalline elegance, immaculate silver and frost blues, delicate filigree, restrained mechanical precision, and celestial motifs. Do NOT slap arbitrary electric purple neon or generic cyber brackets on it.
- **Never design without a distinct point of view**: If the brief specifies an identity, honor it strictly. If it is ambiguous, define the aesthetic tone before touching CSS.

---

## 2. Eliminate Generic "AI-Generated Tells"

Avoid these common visual traps that immediately make a page look like uncalibrated AI output:
1. **The Gradient Clutter**: Slapping aggressive multi-color neon gradients (e.g., cyan-to-purple or orange-to-pink) across headers, buttons, and text. Use pure, harmonious hues with refined alpha blends instead.
2. **The "Tech Eyebrow" Addiction**: Tracked-out ALL-CAPS eyebrow labels above every single heading or card (`01 // ROOT`, `MODULE // DATA`). Only use labels when they provide real semantic classification.
3. **Numbered Markers Everywhere**: Numbering sections (`01`, `02`, `03`) when the content is NOT a sequence. Numbers are for timelines, steps, and ordered lists only.
4. **Mindless Corner Brackets & Tech Chrome**: Slapping chamfer brackets, crosshairs, or diagonal cuts onto every single card or section. Chrome should be rare, purposeful, and deliberate.
5. **The SaaS-Card Monoculture**: Chopping everything into identical rounded rectangles with the same heavy drop shadow and border radius regardless of content hierarchy.
6. **Scattered Animations**: Adding entrance fade-and-slide to every single card, heading, and icon. Non-user-triggered motion should be a single orchestrated moment (e.g. page boot or hero reveal), while interactive motion should directly answer user gestures (hover, click, expand).

---

## 3. The Law of Aesthetic Restraint: "Spend Boldness in One Place"

- **One Heroic Feature**: Let one element be the memorable, breathtaking centerpiece of a view (e.g. a stunning hero particle system, an interactive star linchpin, or an elegant typography statement). Keep everything around it quiet, disciplined, and functional.
- **Coco Chanel's Rule for UI**: "Before leaving the house, take a look in the mirror and remove one accessory."
  - Before finalizing any UI change, inspect the page and remove at least one decorative element (an extra border, an unnecessary badge, an excessive glow, or redundant icon).
- **Whitespace is Structure**: Use generous negative space and disciplined alignment instead of filling empty gaps with boxes, borders, or background patterns.

---

## 4. Typographic Craft

- **Family Discipline**: Use at most 1–2 distinct font families. If using two, pair a distinctive display/heading face with a clean, readable body face.
- **Scale Hierarchy**: Follow an established typographic scale with intentional weights and optical line heights:
  - Headings: `1.1` to `1.25` line height, tighter letter-spacing (`-0.02em` to `-0.01em`).
  - Body copy: `1.5` to `1.6` line height, line lengths strictly under `75–80` characters.
- **Headline Dignity**: Never highlight random single words in an italicized or rainbow-colored span unless it carries semantic syntactic meaning.
- **Number Treatment**: Always use `font-variant-numeric: tabular-nums` for counters, statistics, and tabular data.

---

## 5. Intentional Color Strategy

- **Curated 4–6 Hex Core Palette**: Define a tight palette consisting of:
  - Base Background (e.g., deep abyss / crystalline dark)
  - Surface Layer (elevated translucent dark with controlled blur)
  - Primary Brand / Element Color (e.g., pure frost ice `#a5f3fc` or `#7dd3fc`)
  - Accent / Reaction Color (used sparingly for active signals or interactive focus)
  - Text Primary (high-contrast off-white, contrast $\ge 7:1$)
  - Text Muted (soft slate, contrast $\ge 4.5:1$)
- **Restraint in Accents**: Accent colors should occupy less than 10% of the visual field. If everything glows, nothing stands out.

---

## 6. Pre-Execution Design Review Process

Before writing or revising frontend code:
1. **Brainstorm Plan**: Identify the subject vernacular, core palette (hex), typography roles, and single bold element.
2. **Sanity Check Against Defaults**: Ask yourself:
   - Does this contain generic AI markers (random badges, brackets, neon gradients)?
   - Is it too busy or decorative?
   - Does it feel authentic to the subject?
3. **Refine & Strip**: Remove redundant visual noise.
4. **Implement with Precision**: Use clean CSS variables and semantic HTML.

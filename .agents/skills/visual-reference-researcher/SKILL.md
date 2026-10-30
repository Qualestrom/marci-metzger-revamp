---
name: visual-reference-researcher
description: Protocol for researching visual references, game lore/mechanics, and design benchmarks. Prevents hallucinated lore and outdated information by verifying primary sources and extracting actionable design tokens (palette, geometry, motion curves, restraint boundaries).
---

# Visual Reference Researcher Skill

Engineered to conduct deep, accurate reference research for game themes, visual motifs, and interaction patterns—converting visual research into concrete engineering tokens without hallucinated lore or informational bloat.

---

## 1. When to Use

Apply this skill whenever:
- Researching visual references, character motifs, lore elements, or game mechanics (e.g., Genshin Snezhnaya, Cryo reactions, Sandrone / Marionette clockwork)
- Benchmarking modern Awwwards / industry UI patterns for interaction references
- Verifying the canonical accuracy of a design concept against official patches, wikis, or asset archives
- Translating visual inspiration into actionable CSS/SVG specifications

---

## 2. Canonical Verification Protocol (Zero Hallucination)

1. **Primary Sources Over SEO Spam**:
   - Query official game wikis (Fandom / Genshin Wiki), patch notes, and official media over random forum threads or SEO aggregator blogs.
   - For UI/interaction benchmarks, inspect production source code, official documentation, or verified CSS/GSAP demos.
2. **Version & Timeline Anchoring**:
   - Explicitly verify release timelines (e.g., ensuring references match current version/character releases rather than legacy 1.0 assumptions).
3. **Fact-Check Before Extraction**:
   - If lore or mechanic details are ambiguous, verify against in-game skill descriptions, constellation artwork, or verified gameplay footage before assuming visual characteristics.

---

## 3. The 4-Part Reference Card Extraction

Every reference research task must boil down into a structured, concise **Reference Card**—never a wall of text:

```markdown
### Visual Reference Card: [Subject Name]
1. **Palette Tokens**:
   - Primary: `#hex` (Role: base crystalline hue)
   - Secondary / Refraction: `#hex` (Role: subtle shimmer or reaction border)
   - Background Anchor: `#hex` (Role: high-contrast dark floor)
   - Text Contrast: `X.X:1` against background (WCAG AA compliant)

2. **Geometric Primitives**:
   - Core Shapes: (e.g., 8-point astral diamond, thin concentric orbital ring, delicate mechanical gear)
   - Line Weight: Hairline (`1px` to `1.5px`), sharp chamfer angles or smooth curves.
   - SVG Blueprint: Minimalist path or clean geometric coordinates.

3. **Motion & Dynamic Curves**:
   - Transition Timing: `XXXms` (e.g., `200ms` for active states, `600ms` for idle orbital shimmers)
   - Easing Function: `cubic-bezier(...)` or spring physics parameters.
   - Behavior: Responsive to user interaction (hover/click); zero unprompted continuous CPU churn.

4. **Restraint Boundary (What NOT to copy)**:
   - Explicitly state which elements of the reference are omitted to prevent visual noise (e.g., "Do not copy full 3D puppet models or heavy neon particle bursts; extract only the fine clockwork ring motif").
```

---

## 4. Handoff to Design Intent Alignment

Once the Reference Card is extracted:
1. Deliver the Reference Card to the user for immediate review and approval.
2. Hand off the approved card to `design-intent-alignment` to define the single focal point and freeze list.
3. Proceed to code implementation with `design-system` and `ui-styling`.

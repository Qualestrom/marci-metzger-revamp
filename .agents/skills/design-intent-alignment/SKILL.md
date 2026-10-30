---
name: design-intent-alignment
description: Pre-flight design reasoning protocol and aesthetic alignment gate. Enforces strict anti-slop rules, isolates visual focal points, freezes existing working UI, and mandates single atomic micro-steps before making frontend code changes.
---

# Design Intent Alignment Skill

A decision-making protocol engineered to eliminate AI design slop, ground visual decisions in the project's authentic aesthetic, and ensure crystal-clear alignment before touching code.

---

## 1. When to Use

Apply this skill whenever:
- Planning or executing visual modifications to any component, page, or layout
- Deciding on colors, typography, card shapes, borders, or animations
- Receiving open-ended feedback like *"make it look better"*, *"revamp the UI"*, or *"add more effects"*
- Auditing proposed changes to ensure they do not look like generic, uncalibrated AI templates

---

## 2. The 4-Step Pre-Flight Protocol

Before modifying any CSS or JSX file, formulate and document this 4-step contract:

### Step 1: Ground in the Theme Anchor
- Identify the specific aesthetic vernacular of this project:
  - **Aesthetic**: Snezhnayan Crystalline Elegance / Cryo Vision / Clockwork Precision.
  - **Colors**: Deep abyss backdrop (`#060913`, `#0f172a`), crisp frost ice (`#38bdf8`, `#7dd3fc`), diamond white (`#f8fafc`).
  - **Feel**: Cold, immaculate, refined, elegant, celestial.
  - **Prohibited**: Electric purple/cyan neon clashes, cyber arcade corners, warm terracotta, generic corporate blues.
- *Note*: If researching unfamiliar mechanics or visual motifs, use `visual-reference-researcher` first to generate a structured 4-part Reference Card before setting this anchor.

### Step 2: The Single Focal Point
- Choose the **ONE** memorable element for the screen or section:
  - *Example*: In the Hero, the focal point is the interactive Celestial Star Linchpin.
  - *Rule*: Everything surrounding the focal point must be quiet, disciplined, and functional. Never allow secondary cards, buttons, and borders to compete for attention.

### Step 3: Declare the Freeze List
- Explicitly list the elements that are already working well and must **NOT** be touched:
  - *"We are not modifying the layout of the navigation bar."*
  - *"We are not changing the card grid structure."*
  - *"We are not adding new border brackets to section headers."*

### Step 4: Isolate into a Single Micro-Step
- Deconstruct the work into one atomic change:
  - Change **one** domain at a time (e.g., color token calibration first, typography hierarchy second).
  - Verify immediately in the browser via screenshot or DOM inspection before moving to the next component.

---

## 3. The Anti-AI Slop Quality Gate

Review the proposed code diff against the **8 Prohibited AI Tells**:

| AI Slop Tell | Strict Standard |
| :--- | :--- |
| **Neon Two-Tone Gradients** | No cyan-to-purple or rainbow gradients. Use pure, single-hue alpha blends. |
| **Mechanical Corner Brackets** | No chamfered corner cuts or bracket decorations on standard cards. |
| **Tracked Uppercase Eyebrows** | No `01 // ROOT` or `TECH // TAG` labels pasted on every heading. |
| **Pointless Numbering** | No `01`, `02`, `03` on non-sequential content. |
| **SaaS Card Monoculture** | Don't wrap everything in identical rounded boxes. Use whitespace and typography. |
| **Universal Glows** | If everything glows, nothing is special. Glow reserved for primary focal point only. |
| **Scattered Scroll Animations** | No slide-and-fade on every card. Entrance motion is one coordinated moment. |
| **Multi-File Sprawl** | Max 1-2 tightly related files modified per turn. |

---

## 4. Chanel's Subtraction Check

Before marking any visual change complete:
1. View the live interface.
2. Ask: *"What element here is purely decorative and does not serve the content or the theme?"*
3. Remove at least one unnecessary border, shadow, badge, or glow.
4. Confirm that the result feels cleaner, more confident, and more elegant.

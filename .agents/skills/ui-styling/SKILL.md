---
name: ui-styling
description: Accessible component styling, modern visual design engineering, and responsive layout patterns. Enforces mobile-first responsive architecture, dark mode depth elevation, glassmorphism surface recipes, touch targets, and tactile micro-interactions without visual clutter or canvas bloat.
---

# UI Styling & Component Architecture

Engineering guidelines for creating accessible, high-polish, performant interface components and modern layouts without template bloat or artificial decoration.

---

## 1. When to Use

Use this skill when:
- Implementing or modifying UI components (modals, cards, navigation docks, forms, tabs, drawers)
- Styling with CSS variables, semantic tokens, or scoped CSS modules
- Creating responsive, mobile-first grid and flexbox layouts
- Implementing dark mode elevation, frosted glassmorphism, or translucent surfaces
- Adding micro-interactions (hover glides, active haptic scale, spring dismissals)
- Ensuring WCAG-compliant keyboard focus indicators and touch targets ($\ge 44\text{px}$)

---

## 2. Core Architectural Principles

### 1. Mobile-First Fluidity
- Design for the smallest viewport first (320px/375px), then layer min-width media queries (`768px`, `1024px`, `1440px`).
- Always prevent horizontal scroll:
  ```css
  html, body {
    overflow-x: hidden;
    max-width: 100vw;
  }
  ```
- Use `env(safe-area-inset-bottom)` and `env(safe-area-inset-top)` for mobile fixed bars and navigation docks.

### 2. High-Fidelity Glassmorphism & Depth
- Layer translucent backgrounds with controlled backdrop filters for depth without GPU churn:
  ```css
  .glass-surface {
    background: rgba(var(--surface-rgb), 0.75);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.12);
  }
  ```
- Never stack multiple heavy blurs on top of each other; reserve backdrop filters for elevated modals, docks, and top-level cards.

### 3. Tactile Micro-Interactions
- Calibrate hover transitions between 150ms and 250ms with `cubic-bezier(0.16, 1, 0.3, 1)`:
  ```css
  .interactive-element {
    transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1),
                background-color 200ms ease,
                border-color 200ms ease,
                box-shadow 200ms ease;
  }
  ```
- Use subtle scale feedback on active press:
  ```css
  .interactive-element:active {
    transform: scale(0.98);
  }
  ```
- Only animate GPU-composited properties: `transform`, `opacity`, `filter`. NEVER use `transition: all`.

### 4. Restraint in Decoration
- **Do NOT slap decorative corner brackets, crosshairs, or clip-paths onto every card.**
- Mechanical chamfers or geometric polygon clips should be reserved strictly for rare, thematic badges or special hero focal points, never applied uniformly across ordinary content cards.
- Content hierarchy must come from typography and whitespace, not arbitrary borders and badges.

---

## 3. UI Component Recipes

### 1. Accessible Focus Indicator
```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
  box-shadow: 0 0 12px var(--color-glow);
}
```

### 2. Touch Target Constraint
```css
.touch-target {
  min-width: 44px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

### 3. Crystalline Elevation Hierarchy (Dark Mode)
```css
/* Level 0: Background Base */
--surface-base: #060913;

/* Level 1: Subtle Card Surface */
--surface-card: rgba(15, 23, 42, 0.65);
--border-card: rgba(148, 163, 184, 0.12);

/* Level 2: Elevated Overlay / Dropdown / Modal */
--surface-elevated: rgba(15, 23, 42, 0.88);
--border-elevated: rgba(56, 189, 248, 0.28);
--shadow-elevated: 0 20px 50px rgba(0, 0, 0, 0.7);
```

---

## 4. UI Polish & Review Checklist

Before finalizing any component or layout:
- [ ] Tap targets on touch screens are $\ge 44\text{px}$.
- [ ] Text contrast meets WCAG AA standards ($\ge 4.5:1$ body, $\ge 3:1$ large).
- [ ] All interactive controls have distinct hover, focus, active, and disabled states.
- [ ] Content reflows cleanly without text clipping or truncated labels.
- [ ] Reduced motion preference is honored via `@media (prefers-reduced-motion: reduce)`.
- [ ] Chanel's Rule applied: at least one unnecessary decorative element removed.

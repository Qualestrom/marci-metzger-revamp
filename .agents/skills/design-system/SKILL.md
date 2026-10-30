---
name: design-system
description: Token architecture, component specifications, and systematic design standards. Enforces three-layer token structure (Primitive → Semantic → Component), CSS custom properties, spacing/typography scales, component specs (default, hover, active, focus, disabled), and theme token systems.
---

# Design System Engineering Skill

Systematic architecture for design tokens, component specifications, and scalable interface infrastructure.

---

## 1. When to Use

Use this skill when:
- Defining or refactoring design tokens (colors, spacing, typography, radii, shadows)
- Structuring CSS custom properties across themes (light, dark, high-contrast)
- Specifying component states and interactive variants
- Standardizing spacing grids, elevation levels, and layout containers
- Enforcing design consistency between design guidelines and production code

---

## 2. Three-Layer Token Architecture

Always organize design tokens in a 3-tier hierarchy:

```
┌────────────────────────────────────────────────────────┐
│ 1. PRIMITIVE TOKENS (Raw values, palette hex/hsl)      │
│    e.g. --blue-500: #3b82f6; --cyan-400: #38bdf8;      │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│ 2. SEMANTIC TOKENS (Purpose aliases, context-aware)    │
│    e.g. --color-primary: var(--cyan-400);              │
│         --color-bg-surface: var(--slate-900);          │
│         --color-border-glow: var(--cyan-400);          │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│ 3. COMPONENT TOKENS (Specific element bindings)        │
│    e.g. --btn-primary-bg: var(--color-primary);        │
│         --card-glass-border: var(--color-border-glow); │
└────────────────────────────────────────────────────────┘
```

### Benefits:
- Components **never** reference primitive hex values directly.
- Switching themes (or elemental styles) only requires changing semantic tokens.

---

## 3. Spacing, Elevation & Radii Scales

### Spacing Scale (8pt Grid System)
```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
```

### Elevation & Depth Levels
```css
--elevation-flat: 0 0 0 1px var(--color-border);
--elevation-low: 0 2px 8px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--color-border);
--elevation-mid: 0 8px 24px rgba(0, 0, 0, 0.6), 0 0 15px var(--color-glow);
--elevation-high: 0 24px 60px rgba(0, 0, 0, 0.8), 0 0 35px var(--color-glow-strong);
```

---

## 4. Component Specification Protocol

Every interactive component must document and satisfy 5 state variations:

| Property | Default | Hover | Active / Pressed | Focus-Visible | Disabled |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Background** | `var(--comp-bg)` | `var(--comp-bg-hover)` | `var(--comp-bg-active)` | `var(--comp-bg)` | `var(--comp-bg-disabled)` |
| **Border** | `1px solid var(--border)` | `1px solid var(--border-glow)` | `1px solid var(--border-active)` | `2px solid var(--focus-ring)` | `1px solid var(--border-muted)` |
| **Transform** | `none` | `translateY(-2px)` | `scale(0.97)` | `none` | `none` |
| **Box Shadow**| `var(--shadow-sm)` | `var(--shadow-glow)` | `var(--shadow-inner)` | `0 0 0 3px var(--focus-glow)`| `none` |
| **Cursor** | `pointer` | `pointer` | `pointer` | `pointer` | `not-allowed` |

---

## 5. Checklist for Token & Component Audits

- [ ] All colors derive from semantic CSS variables (`var(--...)`), zero inline hex values.
- [ ] Dark and light themes share identical semantic variable names.
- [ ] Hover and active transitions define explicit durations and easing curves.
- [ ] Layouts utilize container queries or fluid percentage/clamp units.

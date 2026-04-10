# Deadwater visual style guide

Use this as the default visual reference for new page design, landing pages, and major section redesigns.

## Current direction

The homepage now uses a dark, marine, glass-panel style. "Glassmorphism" is close, but the goal is not generic frosted UI. The real direction is:

- dark oceanic atmosphere
- translucent control-room panels
- bright cyan/sea accents used sparingly
- strong contrast with soft blur and glow
- rounded panels that feel premium, not playful
- layered surfaces instead of flat blocks

Think submerged systems, not startup candy.

## Visual principles

- Build depth with layers, not with random decoration.
- Prefer luminous edges, soft gradients, and transparent surfaces over flat cards.
- Keep the background dark and atmospheric so bright accents feel earned.
- Make the layout feel engineered and calm, not busy.
- Use bold typography, but keep the surrounding surfaces quiet.
- Every major section should feel like a panel in the same system.

## Surface rules

- Primary background: near-black ink tones.
- Accent colors: cyan-blue and sea-green only. Do not introduce extra accent families unless there is a strong reason.
- Cards/panels: translucent dark fills with low-opacity white borders.
- Borders: subtle, usually `border-white/10` or dark ink borders.
- Glow: soft blue glow behind priority panels is good; avoid neon overload.
- Radius: large radii are part of the system. Favor `rounded-[24px]` to `rounded-[36px]`.
- Shadows: soft, deep, diffused shadows. Avoid harsh drop shadows.

## Layout rules

- Lead with one dominant hero message and one supporting visual system panel.
- Follow with stacked sections that alternate between open space and grouped panels.
- Use asymmetry where helpful, but keep reading flow obvious.
- Panels should feel compositional, not like a grid of identical SaaS cards.
- When closing a page, prefer a wide, high-emphasis closing panel over a weak footer-like CTA box.

## Typography rules

- Headlines should be short, confident, and clean.
- Do not put periods at the end of headings.
- Eyebrows should be uppercase, spaced out, and low-noise.
- Body copy should stay direct and readable against the dark background.
- Avoid overly formal enterprise phrasing.

## Component patterns to reuse

- Hero split layout: strong left-side headline, right-side outcome panel.
- Glass panel: translucent dark background, thin border, large radius, soft shadow.
- Three-state comparison row: before / system fix / after.
- Closing fit panel: full-width, gradient-backed, high-emphasis CTA block.
- Nested panel list: one parent panel with smaller internal cards for grouped ideas.

## Motion and effects

- Motion should feel slow, atmospheric, and purposeful.
- Favor ambient loops and subtle transitions over busy microinteractions.
- Blur and glow should imply depth, not novelty.

## What to avoid

- Flat white cards on dark backgrounds.
- Generic SaaS gradient blobs with no structure.
- Too many badge pills, tiny icons, or dashboard cliches.
- Purple-heavy palettes.
- Overly playful illustrations that break the serious, submerged tone.
- UI that feels like a template marketplace landing page.

## Implementation cues from the homepage

- Atmospheric section background:
  `bg-[radial-gradient(...),radial-gradient(...),linear-gradient(...)]`
- Glass panel shell:
  dark translucent fill, `border-white/10`, deep shadow, large radius
- Highlight panel:
  low-opacity accent fill with restrained border emphasis
- Closing section:
  wide gradient-backed panel with internal tiles and one clear CTA

## Default standard for future pages

If a new page is a major commercial page, it should visually rhyme with the homepage unless there is a specific reason to diverge. That means:

- same ink background family
- same cyan/sea accent family
- same glass-panel surfaces
- same large-radius geometry
- same premium, submerged, engineered mood

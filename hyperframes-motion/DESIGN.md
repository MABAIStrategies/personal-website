# Architect Signal Loop

## Purpose

A six-second motion bridge for Mark Bockrath's portfolio. It visualizes the operating thesis: scattered signals become an intentional system, and the system produces compounding movement. The final WebM sits quietly behind the portfolio's thesis section and must never compete with the live WebGL hero.

## Canvas and timing

- Canvas: 1920 × 1080, 16:9
- Duration: 6 seconds
- No audio
- Three overlapping scenes with incoming transitions; earlier scenes remain as texture rather than performing explicit exits

## Visual direction

- Near-black field with warm off-white type
- One spectral accent family: ice blue, muted violet, and restrained amber
- Editorial typography: Georgia as the serif voice, Arial as the small technical voice
- Structural dot grid, hairline paths, orbit geometry, and a faceted central form
- No cyan/purple fog, neon blobs, faux hologram UI, or generic “AI” iconography

## Scene plan

1. **Signal / 0.0–2.2s** — A sparse field of deterministic signal points and offset rules enters. The word CHAOS appears as a large outlined editorial label. Motion is lateral and slightly misaligned.
2. **System / 1.8–4.3s** — A dark panel reveal reorganizes the points onto a radial architecture. SYSTEM enters solid. Paths draw toward a central faceted core.
3. **Scale / 3.9–6.0s** — A circular iris and precise diagonal sweep reveal COMPOUND. Rings rotate, the core resolves, and the brand lockup lands. Final 0.45s fades to the base field.

## Motion language

- Entrances use `power3.out` or `expo.out`
- Structural paths use linear drawing
- Different layers use different axes and durations
- No t=0 animation; the opening frame is intentionally sparse
- The energy arc builds from 0.25s to 4.8s, breathes, then resolves cleanly

## Implementation constraints

- Deterministic HTML/CSS/SVG only; no random values and no network media
- One paused GSAP root timeline registered as `main`
- Every timed scene is a full-frame `.clip` with explicit start and duration
- The rendered asset is decorative and contains no essential information

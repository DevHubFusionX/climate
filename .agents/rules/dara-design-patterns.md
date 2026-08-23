---
trigger: always_on
---

# Dara Design & UI Guidelines

## 1. Content & Spacing Philosophy
- **Minimal Copy & Zero Noise**: Keep text concise, direct, and focused. Avoid dense paragraphs or repetitive text; use punchy headers and short, single-sentence descriptions.
- **Abundant White Space**: Maintain generous vertical and horizontal breathing room (`py-24` to `py-32`, large margins, spacious grid gaps) to convey clarity and simplicity.
- **Custom, Non-Generic Layouts**: Do NOT use generic or cookie-cutter bento grids. Design custom, asymmetrical, and bespoke section layouts tailored specifically to the narrative of each section (e.g., sticky anchors, custom wave overlays, tailored cards).

## 2. Component Architecture & Page Structure
- **Section Decomposition**: Keep pages under `src/pages/<PageName>/<PageName>.jsx` and split each section into `src/pages/<PageName>/sections/<SectionName>.jsx`.
- **Layout Framing**: Preserve the `.page-root` outer padding and `.app-frame` with `overflow: clip` in `Layout.jsx` for smooth sticky interactions without clipping issues.
- **Sticky Curtain Effect**: The Hero section remains sticky at the top (`sticky top-0 z-[1] h-[calc(100vh-28px)]`), and subsequent page sections slide over it with `relative z-10 bg-white`.

## 3. Visual & Styling Standards
- **Color System**:
  - Primary Brand Blue: `rgb(0, 86, 184)`, deeper gradient tones `rgb(0, 60, 140)`, `rgb(0, 38, 100)`.
  - Dark Navy Overlays: `rgba(10, 18, 45, 0.52)` / `rgba(10, 18, 45, 0.78)`.
  - Clean / Warm Backgrounds: `#f4f3ef`, `#f8f9fa`, `#fbfbfa`, with `slate-900` text for headings and `slate-500` for body.
  - Sustainability Accent: `#4ade80` (green highlights, status indicators, SVG accents).
- **Typography**: Inter with tight tracking (`tracking-tight`, `tracking-[-1.2px]`), clamp font sizes for display headers (e.g., `clamp(38px, 5vw, 64px)`), and small uppercase eyebrows (`text-[11px] font-bold tracking-[1.5px] uppercase text-slate-400`).
- **Cards & Visual Containers**: Large rounded corners (`rounded-2xl` to `rounded-[36px]`), subtle borders (`border-slate-200/50` or `border-white/15`), glassmorphism (`backdrop-blur-md bg-white/10`), and bespoke textures (gradient waves, metallic numerals, light seams).
- **Buttons**: `rounded-full` or `rounded-xl`, with subtle lift `hover:-translate-y-0.5` and soft colored drop shadows (`shadow-[0_4px_16px_rgba(0,86,184,0.35)]`).

## 4. Interactions & Animations
- **Scroll Reveals**: Use the `useVisible` Intersection Observer hook (threshold 0.08–0.1) across sections to trigger smooth entry transitions (`opacity-0 translate-y-8` -> `opacity-100 translate-y-0`).
- **Timing & Easing**: Use `duration-700` to `duration-1000` with cubic bezier curve `ease-[cubic-bezier(0.16,1,0.3,1)]`.

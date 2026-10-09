# Mark Bockrath — Personal Portfolio

An interactive portfolio for Mark Bockrath, Founder & CEO of MAB AI Strategies. The experience pairs editorial storytelling with one purposeful WebGL scene, scroll choreography, an interactive systems constellation, and a HyperFrames-authored motion layer.

## Stack

- React 19 + TypeScript + Vite
- Three.js for the refractive hero core
- GSAP + ScrollTrigger for page choreography
- HyperFrames for the thesis motion asset
- Local variable fonts with no runtime font requests

## Local development

```bash
npm install
npm run dev
```

## Production verification

```bash
npm run build
npm run preview
```

The HyperFrames source lives in `hyperframes-motion/`. Run its validation gate from that directory with `npm run check`.

## Deployment

The root is a standard Vite project. In Vercel, use the default framework detection and deploy the repository root. The production domain should only be promoted after the draft preview is approved.

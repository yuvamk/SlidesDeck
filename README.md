# 🏙️ Dubai Mall: The World's Stage
### High-Fidelity Interactive B2B Sales Deck

[![Next.js 14](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-611AD1?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## ✨ Overview
This isn't just a presentation; it's a **cinematic interactive experience**. Built for the elite commercial team at Dubai Mall, this "Digideck-style" platform showcases the world's most visited retail destination through advanced web technology.

**Experience the Deck:**
- **Zero Scroll Architecture**: 100vh × 100vw slides with state-managed transitions.
- **Cinematic Motion**: Custom-eased transitions (Fade + Scale) for a premium editorial feel.
- **Interactive Depth**: Internal panel navigation for complex retail and event data.

---

## 🚀 The Slide Journey

| # | Slide | Visual Experience | Key Technology |
|---|-------|-------------------|----------------|
| **01** | **The Intro** | Hero particles & skyline silhouette. | `Three.js` + `Framer Motion` |
| **02** | **The Property** | Split-layout architectural overview. | `GSAP` Scale Logic |
| **03** | **The Numbers** | Real-time statistical dashboard. | `GSAP` Counters |
| **04** | **Retail Mix** | **4-Panel internal navigation** with data charts. | `Recharts` + `Keyboard Capture` |
| **05** | **Luxury** | "Fashion Avenue" editorial reveal. | `SVG ClipPath` Animations |
| **06** | **Dining** | Culinary excellence showcase. | Staggered Card Entrances |
| **07** | **Attractions** | Interactive Bento Grid of the "Destination Planet". | Hover-Scale Interactivity |
| **08** | **Events** | Multi-panel event platform walkthrough. | Internal State Management |
| **09** | **Sponsorship** | Tiered partnership card system. | Premium Glassmorphism |
| **10** | **The Opportunity** | High-conversion CTA with particle finish. | `Three.js` Dynamic Background |

---

## 🛠️ Technology Stack

- **Core**: Next.js 14 (App Router) & TypeScript
- **Animation**: 
  - `Framer Motion`: Orchestrating slide transitions and UI reveals.
  - `GSAP`: Precision control for numeric counters and marquee tickers.
- **Visuals**:
  - `Three.js`: Interactive 3D particle systems in the background.
  - `Tailwind CSS`: Bespoke design system implementation.
- **Interaction**:
  - `Lucide React`: Premium iconography.
  - Custom React Context for global deck state & navigation flow.

---

## 🎮 Navigation Controls

- **[ → ] or [ ↓ ]**: Advance to the next slide.
- **[ ← ] or [ ↑ ]**: Return to the previous slide.
- **[ Space ]**: Quick advance.
- **[ Swipe ]**: Mobile-responsive touch gestures (50px threshold).
- **Custom Cursor**: A gold-accented dot with a lag-follow ring for enhanced precision.

---

## 🎨 Design Tokens

- **DM Gold**: `#C9A96E` (Primary brand accent)
- **DM Black**: `#0A0A0A` (Deep surface background)
- **DM Navy**: `#0D1117` (Subtle depth variation)
- **Typography**: 
  - `Cormorant Garamond`: Elegant display headings.
  - `Inter`: Clean, legible body and statistical data.

---

## 🛠️ Installation & Running

1. **Clone & Install**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Experience**:
   Open [http://localhost:3000](http://localhost:3000) (or the port shown in terminal).

---

### 🏛️ Built for the World's Stage.
*This project was architected to redefine how high-stakes B2B sales decks are presented.*

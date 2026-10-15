# InAmigos Foundation — NGO Awareness Webpage

A premium, art-directed NGO awareness webpage built as part of an internship assignment for **InAmigos Foundation**. The design uses a Forest Green + Ivory + Sage + Gold identity with scroll-triggered reveal animations, editorial typography, and a Challenge → Action → Impact storytelling structure.

## Technologies Used

- **HTML5** — semantic structure
- **CSS3** — styling, layout (Flexbox & Grid), responsiveness, and animations
- **Minimal vanilla JavaScript** — mobile navigation, scroll-reveal animations via IntersectionObserver, and active nav-link tracking
- **Vite** — development server and build tool (included with the project setup)

## How to Run

### Option 1: Open directly in a browser

Simply open `index.html` in any modern web browser. All images are loaded from royalty-free online sources (Pexels), so an internet connection is required for images to display.

### Option 2: Using the development server

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (typically `http://localhost:5173`).

### Option 3: Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
.
├── index.html        # Main HTML file with all webpage sections
├── style.css         # All styling, responsive design, and animations
├── main.js           # Minimal JS for mobile nav and scroll effects
├── package.json      # Project configuration
└── README.md         # This file
```

## Website Sections

1. **Navigation Bar** — Fixed header with smooth-scroll links, active-section tracking, and mobile hamburger menu
2. **Hero Section** — Editorial headline "Small Actions. Lasting Change." with staggered entrance animations, CTAs, certification badges, and a scroll cue
3. **About Us** — Asymmetrical layout with floating founded-date badge, mission, vision, and values cards with gold accent icons
4. **Impact Stats Band** — Dark forest-green section with verified statistics and gold accent numbers
5. **Our Projects** — Six flagship initiative cards with image zoom, tag overlays, and animated arrow links
6. **How Change Happens** — Challenge → Action → Impact storytelling sequence with numbered steps and dashed connectors, plus six intended outcome cards
7. **Gallery** — Asymmetrical masonry-style photo grid with hover zoom (stock photos, clearly labeled)
8. **Get Involved** — High-contrast forest-green call-to-action with gold volunteer button and supporting image
9. **Contact & Footer** — Verified contact info, social links, sources, credits, and closing message

## Research Sources

All factual information about InAmigos Foundation was gathered from these official sources:

1. **Official Website:** https://inamigosfoundation.org.in/
2. **LinkedIn:** https://www.linkedin.com/company/inamigos-foundation/

### Verified Information Used

- Founded September 23, 2020 by Mr. Govind Shukla
- Section 8 registered non-profit, based in Bilaspur, Chhattisgarh
- Certifications: 80G & 12A, CSR-1, NITI Aayog, IAF ISO 9001:2015
- Six flagship projects: Seva, Bachpanshala, Jeev, Udaan, Prakriti, Vikas
- Mission, Vision, and Values as published on official channels
- Statistics (200 volunteers, 28 states, 6 projects, 50,000 beneficiaries) as reported on the official website
- Contact details (email, phone, HQ location) from official sources

### Image Credits

All photographs are royalty-free images from [Pexels](https://www.pexels.com), used for illustrative purposes. They do not depict actual InAmigos Foundation events unless explicitly stated otherwise. The gallery section includes a visible note clarifying this.

## Content Notes

- All project names, descriptions, and organizational details are based on information available on the official InAmigos Foundation website.
- Statistics shown are as reported on the official website and are not independently verified.
- Stock photographs are used throughout and are clearly labeled as illustrative in the gallery section.
- No fabricated testimonials, partnerships, or unsupported claims are included.

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Forest Green | `#153D32` | Primary buttons, headings, dark sections |
| Ivory | `#F8F7F0` | Main background |
| Sage Green | `#A8C3A0` | Secondary surfaces, footer links |
| Muted Gold | `#D9A441` | Accents, statistics, icons, highlights |
| Charcoal | `#202923` | Body text |
| White | `#FFFFFF` | Cards, clean surfaces |

## Responsive Breakpoints

- **Desktop:** > 992px — full multi-column layouts
- **Tablet:** ≤ 992px — two-column grids, stacked about section
- **Mobile:** ≤ 640px — single-column layout, hamburger navigation

## License

This is an educational project created as part of an internship assignment. Content about InAmigos Foundation belongs to the respective organization.

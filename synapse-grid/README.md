# Synapse Grid — NRI Support Services Website

A fully static, multi-page website for **Synapse Grid**, a service platform that connects the Indian diaspora with trusted, professional support for property management, parent care, legal documentation, errands, and travel — all from anywhere in the world.

---

## Project Structure

```
synapse-grid/
├── index.html          # Home page
├── about.html          # About Us page
├── services.html       # Services detail page
├── contact.html        # Contact & enquiry form page
├── feedback.html       # Testimonials & feedback form page
├── css/
│   ├── style.css       # Global styles, variables, navbar, buttons, footer
│   └── pages.css       # Page-specific styles, animations, hero globe
├── js/
│   └── main.js         # Shared JS — theme toggle, navbar scroll, mobile menu, scroll reveal
└── README.md           # This file
```

---

## Pages

### `index.html` — Home
The main landing page. Contains:
- Sticky navbar with theme toggle and mobile hamburger menu
- Hero section with animated "India → World" globe visual
- Services preview grid (6 service cards)
- "Why Synapse Grid" section with 4 trust points
- CTA banner
- Testimonials snippet (3 cards)
- Footer with links and social placeholders

### `about.html` — About Us
The company story and team page. Contains:
- Origin story of the founder (Arjun Malhotra, 2019)
- Mission & Vision cards with Font Awesome icons
- Core Values grid (6 values with icons)
- Leadership team cards (4 members)
- CTA section

### `services.html` — Services
Full detail page for all 6 services. Contains:
- Quick-jump navigation tabs with icons
- Individual service cards: Property, Parent Care, Errands, Legal, Travel
- Premium Concierge full-width card
- CTA to contact

### `contact.html` — Contact
Enquiry and contact information page. Contains:
- Contact info items (email, phone, address, coverage) with FA icons
- FAQ accordion (3 questions)
- Full enquiry form (name, email, phone, country, service, city, message)
- Success toast notification on submit

### `feedback.html` — Feedback
Testimonials and review submission page. Contains:
- Hero stats (4.9 rating, 2K+ families, 98% recommend)
- 9 testimonial cards with FA star ratings
- Leave feedback form with interactive star rating widget
- Success toast on submit

---

## CSS Files

### `css/style.css` — Global Stylesheet
- **CSS Variables** — full light/dark theme token system (`--bg-primary`, `--accent`, `--border`, etc.)
- **Reset & Base** — box-sizing, body font, overflow
- **Typography** — Cormorant Garamond (headings), DM Sans (body), Space Mono (mono/labels)
- **Layout** — `.container`, `.section`, `.section-sm`
- **Navbar** — fixed, blur backdrop, scroll shadow, active link underline
- **Theme Toggle** — pill toggle with sliding knob; sun icon centered on left, moon icon centered on right; JS-driven `data-theme` attribute switches both knob position and icon visibility
- **Buttons** — `.btn-primary`, `.btn-outline`, `.btn-nav`
- **Section Labels** — mono uppercase with accent line prefix
- **Cards** — hover lift + border highlight
- **Page Hero** — gradient background with hex pattern overlay
- **Footer** — 4-column grid, responsive to 2-col then 1-col
- **Animations** — `fadeUp`, `fadeIn`, `pulse-gold` keyframes
- **Responsive** — breakpoints at 900px and 600px

### `css/pages.css` — Page-Specific Styles
- **Scroll Reveal** — `.reveal` / `.revealed` with `IntersectionObserver` (opacity + translateY)
- **Hero Globe Animation** — full orbital system:
  - Two concentric dashed rings spinning in opposite directions (`spinCW` 18s, `spinCCW` 12s)
  - 9 country flag nodes (`.flag-node`) using `flag-icons` CSS library
  - `requestAnimationFrame` JS loop counter-rotates each flag to stay upright
  - Two expanding pulse rings (`globePulse` keyframe)
  - Globe core with cycling destination text (India → London/Toronto/Dubai/etc.)
  - Pulsing arrow between "India" and destination
- **Services Grid** — 3-col card grid with top-border hover accent
- **Why Grid** — 2-col grid with numbered items
- **Services Full Grid** — 2-col detailed service cards, premium spans full width
- **About Page** — stacked card visual, values grid, team grid
- **Contact Page** — 2-col layout, info items, form styles
- **Feedback Page** — 3-col testimonial grid, star rating widget, feedback form

---

## JavaScript — `js/main.js`

Shared across all pages via `<script src="js/main.js">`.

| Feature | Description |
|---|---|
| **Theme Toggle** | Reads `localStorage` for saved preference, falls back to `prefers-color-scheme`. Sets `data-theme` on `<html>`. Persists across pages. |
| **Navbar Scroll** | Adds `.scrolled` class (box-shadow) when `scrollY > 30px` |
| **Mobile Menu** | Hamburger toggles `.open` on menu and icon. Closes on any link click. |
| **Active Nav Link** | Matches `window.location.pathname` to nav `href` and adds `.active` class |
| **Scroll Reveal** | `IntersectionObserver` watches `.reveal` elements, adds `.revealed` at 12% visibility threshold |

### Inline scripts in `index.html`
- **Globe destination cycler** — `setInterval` every 2s fades out and cycles through 8 city names inside the globe core
- **Flag upright loop** — `requestAnimationFrame` reads each ring's computed rotation matrix and applies the exact inverse rotation to every `.flag-node`, keeping all flags visually upright at all times

---

## External Libraries

| Library | Version | Used For |
|---|---|---|
| [Google Fonts](https://fonts.google.com) | — | Cormorant Garamond, DM Sans, Space Mono |
| [Font Awesome](https://fontawesome.com) | 6.5.0 | All icons across all pages (service icons, nav icons, contact icons, stars, theme toggle) |
| [flag-icons](https://github.com/lipis/flag-icons) | 7.2.3 | Country flag icons on the hero globe orbit rings (CSS sprite-based, works in Chrome on Windows) |

All libraries are loaded via CDN — no build step or package manager required.

---

## Changes Made (Session Log)

### Icons — All Pages
- Replaced every emoji across all 5 pages with Font Awesome 6.5 icons
- Added FA CDN link to `<head>` of all pages
- Mapping: `🏠` → `fa-house`, `👨‍👩‍👧` → `fa-people-roof`, `🛍️` → `fa-bag-shopping`, `📋` → `fa-file-lines`, `✈️` → `fa-plane`, `⭐` → `fa-crown`, `🎯` → `fa-bullseye`, `🌏` → `fa-earth-asia`, `🤝` → `fa-handshake`, `💛` → `fa-heart`, `⚡` → `fa-bolt`, `📊` → `fa-chart-bar`, `🌱` → `fa-seedling`, `🇮🇳` → `fa-map-pin`, `📧` → `fa-envelope`, `📞` → `fa-phone`, `📍` → `fa-location-dot`, `🌐` → `fa-globe`, `🔒` → `fa-lock`, `✅` → `fa-circle-check`, `🙏` → `fa-hands-praying`
- All `★★★★★` star ratings replaced with 5× `fa-solid fa-star` icons

### Theme Toggle
- Redesigned pill toggle (52×28px) with a larger sliding knob (20×20px)
- Sun icon sits centered inside the left knob position; moon icon sits centered inside the right knob position
- Active icon is visible, inactive icon is hidden via `opacity` transition synced with the knob slide
- Works correctly in both light and dark mode on all pages

### Hero Globe Animation (`index.html`)
- Replaced static globe with a full animated orbital system
- Two rings spin in opposite directions with 9 country flag nodes
- Globe core cycles through destination cities every 2 seconds with fade transition
- Pulsing arrow and expanding pulse rings added
- **Flag rendering fix**: replaced emoji flags (broken in Chrome/Windows) with `flagcdn.com` image tags, then replaced again with `flag-icons` CSS library (SVG sprites, fully cross-browser)
- **Upright flags fix**: `requestAnimationFrame` loop reads each ring's live rotation matrix and counter-rotates every flag node to stay perfectly horizontal at all times

---

## How to Run

No build step needed. Open any HTML file directly in a browser, or serve with any static file server:

```bash
# Using Python
python -m http.server 8080

# Using Node.js (npx)
npx serve synapse-grid
```

Then open `http://localhost:8080` in your browser.

---

## Browser Support

Tested and working in Chrome, Firefox, Edge, and Safari. Flag icons use CSS background-image sprites (not emoji) for full Chrome on Windows compatibility.

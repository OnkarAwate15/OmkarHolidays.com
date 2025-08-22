# VoyageOptics — Tour & Travel (React)

Interactive, animated, professional-grade Tour & Travel website using **HTML5, CSS3, JavaScript, Bootstrap 5, React 18, GSAP, AOS, Swiper, Leaflet, React Router, React Hook Form**.

## Features
- Hero with video background + GSAP entry animations
- Destinations grid with category filters + Leaflet interactive map
- Tour packages with sorting (price, duration, popularity) and collapsible itinerary
- Booking page with **React Hook Form** validation and animated confirmation modal
- Vehicles gallery (EV/SUV/Sedan/MPV) with filters
- About timeline + team cards with hover lift
- Contact form with validation + Bootstrap toast success
- AOS scroll animations, Swiper reviews (can be added similarly), responsive Bootstrap 5 layout

## Getting Started
```bash
npx create-react-app .   # (Optional if you use this repo as-is with react-scripts in package.json)
npm install
npm start
```
> If you copied these files into an empty folder, just run `npm install` then `npm start`.

### Build
```bash
npm run build
```

## Data
Static JSON at `public/assets/data/data.json` powers destinations, tours, and vehicles.

## Tech
React 18, React Router 6, Bootstrap 5, GSAP, AOS, Swiper, Leaflet, React Hook Form.

## Notes
- External libraries are loaded once in `public/index.html`; components access them via global objects: `window.gsap`, `window.AOS`, `window.L`, etc.
- Replace images/video with your own assets in `public/assets` for production.

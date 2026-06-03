# MyUni — University Companion App

A mobile-first React single-page application modeled after the LSBU myLSBU campus companion. Built with Vite, React, Tailwind CSS, and Lucide icons.

## Features

- **My Campus home feed** — hero carousel, quick actions, navigation cards, daily essentials, and more
- **Bottom navigation** — five tabs with active states and alert badge
- **Time-aware greeting** — Good Morning / Afternoon / Evening / Night
- **Auto-rotating carousel** — 4-second interval with manual chevron controls
- **390px mobile shell** — centered on desktop with grey outer background

## Setup

### Prerequisites

- Node.js v18+
- npm or pnpm

### Installation

```bash
# Root (optional, for concurrent dev with server)
npm install

# Client
cd client && npm install
```

### Run the client

```bash
cd client && npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Build for production

```bash
cd client && npm run build
```

### Run client + legacy weather server

```bash
npm run dev
```

## Tech stack

- **Frontend**: React 18, Vite 5, Tailwind CSS 3, lucide-react
- **Typography**: Nunito (body), Playfair Display (logo)
- **Colors**: Primary `#A0274F`, Secondary `#E07B2A`, Charcoal `#3A3A3A`

## Project structure

```
client/src/
  components/
    BottomNav.jsx
    HeroCarousel.jsx
    QuickGrid.jsx
    DailyEssentials.jsx
    FeatureCards.jsx
    LibraryCard.jsx
    FullWidthCards.jsx
    ...
  screens/
    HomeScreen.jsx
  App.jsx
```

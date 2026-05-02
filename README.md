<div align="center">

# College Diary

### ACT 36th Anniversary — The Sky is Blue

A professionally architected web application celebrating the 36th Foundation Anniversary of the **Asian College of Technology (ACT)**. Built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**, following clean architecture principles.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

</div>

---

## Overview

College Diary is a static, multi-page website that documents the memorable events of ACT's 36th Foundation Anniversary — including Foundation Day, College Day, and video highlights. The project prioritizes **separation of concerns**, **modularity**, and **minimal coupling** through a component-driven architecture.

## Pages

| Route | Description |
|-------|-------------|
| `/` | **Home** — Hero banner with background imagery, event highlight cards linking to timeline sections |
| `/about` | **About** — ACT's 36-year history, mission statement, and key statistics |
| `/timeline` | **Timeline** — Chronological photo and video gallery organized by Foundation Day, College Day, and Highlights |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS 3.4 |
| Language | TypeScript 5 |
| Font | Inter (Google Fonts via `next/font`) |
| Build Output | Static HTML (`output: 'export'`) |
| Linting | ESLint with Next.js config |

## Project Structure

```
CollegeDiary/
├── public/
│   ├── images/                     # Photo assets (Foundation Day, College Day)
│   └── videos/                     # Video highlights (Anniversary, Lamparoza)
│
├── src/
│   ├── app/                        # Routes — pages compose components only
│   │   ├── layout.tsx              #   Root layout (Navbar + Footer + font + metadata)
│   │   ├── page.tsx                #   Home page
│   │   ├── globals.css             #   Tailwind directives + global styles
│   │   ├── about/
│   │   │   └── page.tsx            #   About page
│   │   └── timeline/
│   │       └── page.tsx            #   Timeline page
│   │
│   ├── components/                 # Reusable UI — no business logic
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          #   Sticky nav, mobile drawer, active link indicator
│   │   │   └── Footer.tsx          #   Site footer with copyright + links
│   │   ├── home/
│   │   │   └── HeroSection.tsx     #   Hero banner with badge + CTAs
│   │   ├── timeline/
│   │   │   ├── EventCard.tsx       #   Single photo event (image + caption)
│   │   │   ├── VideoCard.tsx       #   Single video event (player + caption)
│   │   │   └── SectionHeading.tsx  #   Decorated section divider
│   │   └── ui/
│   │       ├── Button.tsx          #   Themed button (primary, secondary, ghost)
│   │       └── Card.tsx            #   Card wrapper (cloud shadow, hover lift)
│   │
│   ├── data/
│   │   └── events.ts              # Static content — timeline sections, event data
│   │
│   ├── types/
│   │   └── index.ts               # TypeScript interfaces (TimelineEvent, VideoEvent, etc.)
│   │
│   └── lib/
│       └── constants.ts           # Site name, nav links, metadata
│
├── tailwind.config.ts              # Extended sky-blue palette, cloud shadows, animations
├── postcss.config.mjs              # PostCSS with Tailwind + Autoprefixer
├── next.config.mjs                 # Static export configuration
├── tsconfig.json                   # TypeScript paths + strict mode
├── package.json                    # Dependencies and scripts
└── .gitignore
```

## Architecture Principles

| Principle | Implementation |
|-----------|---------------|
| **Separation of concerns** | Pages only compose components; data lives in `/data`; types in `/types`; constants in `/lib` |
| **Modularity** | Each UI section is a self-contained component accepting typed props |
| **Reduced coupling** | Shared UI primitives (`Button`, `Card`) are reused across all pages — no duplicated styles |
| **Static-only** | No API routes, no database — all content is in typed data files |
| **Server Components** | Components are React Server Components by default; only `Navbar` uses `"use client"` for mobile toggle |

## Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** 9+

### Installation

```bash
git clone <repository-url>
cd CollegeDiary
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

Static files are exported to the `out/` directory — deployable to **Netlify**, **Vercel**, **GitHub Pages**, or any static hosting provider.

### Lint

```bash
npm run lint
```

## Design System — "The Sky is Blue"

| Element | Detail |
|---------|--------|
| **Palette** | `sky-50` through `sky-700`, white cards, `slate-800` text |
| **Shadows** | Custom `shadow-cloud` — blue-tinted soft shadows |
| **Corners** | `rounded-2xl` on cards, `rounded-full` on badges and buttons |
| **Hover** | Cards lift with `shadow-cloud-hover`; nav links animate underline |
| **Background** | `foundationbg.jpg` fixed at 30% opacity across all pages |
| **Scrollbar** | Custom sky-blue themed scrollbar |
| **Typography** | Inter font family, responsive sizing |

---

<div align="center">

**College Diary** &copy; 2024 &middot; ACT 36th Foundation Anniversary

</div>

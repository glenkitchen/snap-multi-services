# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 project for Snap-Multi-Services, a professional equipment services company. The main goal is to convert the static HTML file `assets/UI.html` into a Next.js application with reusable React components.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

The development server runs on http://localhost:3000

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Package Manager**: npm (with bun.lockb present)
- **Linting**: ESLint with Next.js config

## Project Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable React components (to be created)
- `assets/` - Static assets including the source UI.html file
- `public/` - Public static files

## Key Architecture Notes

### Component Strategy

- Abstract UI components from the static HTML in `assets/UI.html`
- Create reusable components in `src/components/` folder
- The static HTML contains a complete business website with:
  - Header with navigation and contact info
  - Hero section with gradient background and animations
  - Services section (Air Compressor, Generator, Equipment Repairs, Emergency)
  - Equipment categories (Air Equipment, Compressors, Generators)
  - Features & benefits section
  - Call-to-action section
  - Footer with contact details
- Also create this section which is not in the static html
  - A product catalog with `assets\products.json`

### Design System

The HTML uses a custom Tailwind config with:

- Primary color: `#22c55e` (green)
- Secondary color: `#3b82f6` (blue)
- Accent color: `#f59e0b` (amber)
- Custom animations: float, pulse-slow, bounce-slow
- Gradient backgrounds and hero patterns

### Path Aliases

- `@/*` maps to `./src/*` for clean imports

## Business Context

Snap-Multi-Services specializes in:

- Air compressor servicing (from R1,280)
- Generator maintenance (POA)
- Equipment repairs with emergency 24/7 service
- Air-related equipment sales

Key contacts:

- Paul: 084 323 4595 (Equipment Specialist)
- Jason: 082 839 6910 (Service Manager)

## Development Notes

- Use the existing HTML structure in `assets/UI.html` as the design reference
- Use the pdfs in `assets` where necessary for content, layout and images.
- Maintain the existing styling and animations when converting to React
- Follow Next.js 15 App Router conventions
- Use TypeScript for all new components
- Preserve the business branding and color scheme

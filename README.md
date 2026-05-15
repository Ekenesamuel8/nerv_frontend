# NERV Frontend

NERV is a Web3 gaming frontend built with Next.js. The app is designed around a gaming arena experience where players can discover games, join playtests, view leaderboards, manage a profile, explore live sessions, and where developers can submit games or request support.

At its current stage, this repository is primarily a frontend prototype. The product surface is already mapped out across multiple routes and UI flows, but most data is still hardcoded and there is little backend or blockchain integration wired in yet.

## Overview

The app presents NERV as a platform for:

- discovering early-stage Web3 games
- joining playtests and viewing game details
- tracking gamer and game leaderboards
- viewing a player profile and progress
- exploring live streaming style interactions
- submitting games and developer support requests

This makes the project useful both as:

- a product prototype for the NERV platform
- a UI foundation for future backend and wallet integration

## Current State

This codebase is mostly frontend.

What is already in place:

- multi-page Next.js app using the App Router
- polished gaming-themed UI with Tailwind styling
- motion and transitions using Framer Motion
- signup, login, password reset, dashboard, discovery, profile, leaderboard, live, and developer flows
- local interactive components such as modals, chat, file upload previews, and media device controls

What is not meaningfully connected yet:

- no real authentication flow
- no persistent backend or database integration
- no API-driven content loading
- no production wallet integration
- no blockchain transaction logic
- no real live-streaming backend

In short: this repository currently behaves more like a working product mockup than a fully connected production app.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- Font Awesome

## Main Routes

These are the key user-facing routes currently present in the app:

- `/`
  Signup-style landing page
- `/login`
  Login screen
- `/passwordreset`
  Password reset flow
- `/dashboard`
  Main gamer landing page
- `/discovery`
  Game discovery and playtest listing
- `/games/[slug]`
  Dynamic game route
- `/games/cosmic-clash`
  Implemented game detail page
- `/games/cosmic-clash/leaderboard`
  Game-specific leaderboard
- `/leaderboard`
  General leaderboard
- `/leaderboard/gamerleaderboard`
  Games leaderboard page
- `/profile`
  Player profile and notifications
- `/ongoing-live`
  Ongoing live sessions list
- `/ongoing-live/live`
  Local live session preview and interaction page
- `/developer`
  Developer support form
- `/developerforgame`
  Game registration form

## Notable Features

### Player-facing

- dashboard hero and featured game cards
- discovery page with categories and game states
- game detail page for `cosmic-clash`
- player profile with stats, testing progress, and notifications
- leaderboard screens for players and games

### Live experience

- local camera preview
- local screen sharing preview
- mic toggle
- fake viewer count and tipping state
- local chat sidebar

Note: the live experience currently uses browser media APIs for local preview only. It is not connected to a real streaming service.

### Developer-facing

- developer support request form
- game registration form
- local asset preview for uploads

## Project Structure

```text
nerv_frontend/
├─ public/                 # Static assets and images
├─ src/
│  ├─ app/                 # App Router pages
│  ├─ components/          # Shared UI and feature components
│  └─ lib/                 # Small utilities
├─ package.json
└─ README.md
```

Important folders:

- `src/app`
  Route pages and layout
- `src/components`
  Navbar, modals, chat UI, buttons, and shared pieces
- `public/images`
  Game and branding visuals used across the interface

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Scripts

- `npm run dev` - start the development server with Turbopack
- `npm run build` - create a production build with Turbopack
- `npm run start` - run the production build

## Known Limitations

- most page content is hardcoded in component files
- form submissions are mostly placeholder behavior
- wallet connection is currently modal-only UI
- only `cosmic-clash` has a real game detail implementation
- some navigation actions are presentational rather than fully wired
- some copy/text encoding issues are still present in the UI

## Good Next Steps

If this project is moving toward production, the next logical steps would be:

1. add a real backend or BaaS for authentication and content
2. connect discovery, leaderboards, profiles, and game pages to real data
3. integrate wallet support with a proper Web3 client
4. replace mock live functionality with real streaming or realtime infrastructure
5. centralize data models instead of keeping mock arrays inside pages
6. add validation, error states, and test coverage

## Summary

NERV Frontend is a strong UI-first foundation for a Web3 gaming platform. It already communicates the product vision clearly and covers many of the major user journeys, even though most of the logic is still frontend-only.

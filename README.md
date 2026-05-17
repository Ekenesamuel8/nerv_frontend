# NERV Frontend

NERV is a next-generation Web3 gaming platform built with Next.js and designed to expand interactive gaming experiences within the Stellar ecosystem through Soroban smart contracts, decentralized identity, wallet interoperability, community-driven playtesting, and on-chain gaming engagement.

The platform is centered around a gaming arena experience where players can:

- discover emerging Web3 games
- participate in playtests
- compete on leaderboards
- build on-chain gaming reputation
- engage in live gaming sessions
- interact with developers
- earn ecosystem-based incentives

For developers, NERV provides infrastructure and onboarding pathways for publishing games, managing communities, and integrating Stellar-powered gaming mechanics.

At its current stage, this repository is primarily a frontend prototype. The application surface and user flows are already mapped out, while backend systems, Soroban integrations, and decentralized infrastructure are planned for future implementation.

---

# Why NERV Matters to Stellar

NERV is designed to help expand the practical adoption of the :contentReference[oaicite:0]{index=0} ecosystem by creating developer-friendly and user-accessible gaming infrastructure powered by Stellar technologies.

The platform aims to contribute to the Stellar ecosystem through:

- increasing real-world Soroban use cases in gaming
- providing reusable frontend patterns for Stellar dApps
- onboarding new developers into Stellar gaming infrastructure
- enabling wallet-connected gaming experiences
- supporting decentralized reputation and reward systems
- creating open-source reference implementations for Web3 gaming platforms
- improving ecosystem accessibility for both gamers and developers

As the project evolves, NERV is intended to become a production-grade reference architecture for building gaming experiences on Stellar and Soroban.

---

# Vision

NERV aims to become a community-driven gaming ecosystem where:

- players own their gaming identity
- rewards and achievements become portable on-chain assets
- developers can launch games with integrated wallet experiences
- leaderboards and tournament systems can leverage Soroban smart contracts
- playtesting participation can be transparently tracked and rewarded
- gaming communities can grow around decentralized infrastructure

The long-term vision aligns with Stellar’s broader mission of accessible, scalable, and developer-friendly blockchain infrastructure.

---

# Current State

This codebase is currently frontend-focused.

## What is Already Implemented

- Multi-page Next.js application using the App Router
- Gaming-themed responsive UI using Tailwind CSS
- Interactive animations powered by Framer Motion
- Authentication-style flows
- Dashboard and discovery experiences
- Leaderboards and player profile interfaces
- Live-session UI interactions
- Developer onboarding flows
- Local interactive features such as:
  - modals
  - local media controls
  - file upload previews
  - chat interfaces

---

## What is Planned for Future Stellar Integration

The next phase of development is intended to introduce deep Stellar ecosystem integration, including:

### Soroban Smart Contracts

Potential use cases include:

- on-chain tournament systems
- decentralized leaderboards
- achievement verification
- reward distribution
- playtest participation tracking
- NFT-style gaming achievements
- developer payout infrastructure

### Stellar Wallet Integration

Planned integrations may include:

- Freighter Wallet
- WalletKit
- Stellar account abstraction patterns
- seamless gamer onboarding
- transaction signing flows

### Ecosystem Infrastructure

Future backend work may include:

- realtime multiplayer coordination
- persistent gamer profiles
- decentralized asset ownership
- game metadata indexing
- analytics infrastructure
- event-driven architecture

---

# Overview

NERV presents a platform for:

- discovering early-stage Web3 games
- joining playtests and viewing game details
- tracking gamer and game leaderboards
- viewing player profiles and progression
- exploring live gaming interactions
- submitting games and developer support requests

This makes the repository useful as both:

- a product prototype for a decentralized gaming platform
- a frontend foundation for future Stellar and Soroban integrations
- a contributor-friendly open-source ecosystem project

---

# Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- Font Awesome

---

# Main Routes

| Route | Description |
|---|---|
| `/` | Landing page |
| `/login` | Login screen |
| `/passwordreset` | Password reset flow |
| `/dashboard` | Main gamer dashboard |
| `/discovery` | Game discovery and playtest listings |
| `/games/[slug]` | Dynamic game route |
| `/games/cosmic-clash` | Game detail page |
| `/games/cosmic-clash/leaderboard` | Game leaderboard |
| `/leaderboard` | General leaderboard |
| `/leaderboard/gamerleaderboard` | Gamer rankings |
| `/profile` | Player profile |
| `/ongoing-live` | Live sessions |
| `/ongoing-live/live` | Live interaction preview |
| `/developer` | Developer support |
| `/developerforgame` | Game registration form |

---

# Notable Features

## Player Experience

- dashboard hero experience
- featured game cards
- discovery categories and filters
- gamer profile progression
- player and game leaderboards
- playtest exploration

---

## Live Gaming Experience

- local camera preview
- local screen sharing
- mic toggle
- tipping-state simulation
- local chat sidebar

> Note: current live functionality is browser-local only and not connected to production streaming infrastructure.

---

## Developer Experience

- developer support request flow
- game registration forms
- local asset upload previews
- onboarding-oriented UI flows

---

# Potential Contributor Areas

This repository is intentionally structured to support future open-source contributions across multiple disciplines within the Stellar ecosystem.

Potential contribution areas include:

## Frontend

- accessibility improvements
- responsive optimization
- performance optimization
- animation systems
- reusable component architecture

## Backend

- realtime systems
- API architecture
- indexing infrastructure
- authentication
- scalable game data systems

## Stellar / Soroban

- smart contract integrations
- wallet interoperability
- transaction flows
- reward systems
- decentralized reputation models
- tournament contract systems

## Developer Tooling

- testing infrastructure
- CI/CD pipelines
- documentation
- SDK utilities
- analytics dashboards

This structure makes NERV highly suitable for collaborative ecosystem development initiatives such as Drip Wave.

---

# Project Structure

```bash
nerv_frontend/
├─ public/                 # Static assets and images
├─ src/
│  ├─ app/                 # App Router pages
│  ├─ components/          # Shared UI and feature components
│  └─ lib/                 # Utilities
├─ package.json
└─ README.md
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

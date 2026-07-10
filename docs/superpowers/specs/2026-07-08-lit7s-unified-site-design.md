# LIT7s Unified Site Design

## Goal

Rebuild `LIT7s.com` as one consolidated home for LIT7s, LIT Super Sevens Series, LIT7s USA, camps, tournaments, media, and partner/contact paths.

## Source Direction

Use the current `LIT7s.com` structure and content as the baseline, then fold `supersevensseries.com`, `@lit7s`, `@lit7susa`, and `@supersevensseriesuk` into one site. The site should not feel like separate brand silos.

Key source facts:

- LIT7s is growing rugby 7s in the UK and USA.
- LIT7s London is promoted for 18 July 2026.
- LIT Florida 7s is promoted for 28 Nov 2026.
- LIT Super Sevens Series is Europe's largest rugby 7s series, established in 2011, and includes Elite, Open, and Social rugby 7s.
- LIT7s USA hosts camps and Florida tournament activity.
- Camps include The Olympic Experience and The IMG Experience.
- Contact email: `admin@lit7s.com`.

## Visual System

Green is the primary highlight color across the LIT7s site. Use pitch green and deep athletic green against a black/white sports-event base. Red is reserved as a secondary accent for LIT7s USA and Florida-specific details only.

The approved concepts are:

- Hero: `/Users/anton/.codex/generated_images/019f3ef0-d4a5-7cb3-8538-90cff6cd5bf0/ig_010ff121f2c2866a016a4e2d67b1488194b2b590b8075a735a.png`
- Events: `/Users/anton/.codex/generated_images/019f3ef0-d4a5-7cb3-8538-90cff6cd5bf0/ig_010ff121f2c2866a016a4e2dab0e1481949888646513339845.png`
- Credibility/media: `/Users/anton/.codex/generated_images/019f3ef0-d4a5-7cb3-8538-90cff6cd5bf0/ig_010ff121f2c2866a016a4e2df9721c81949fba3f73d35e2662.png`

## Site Structure

Build a single-page responsive site with anchored sections:

- Hero with nav, clear positioning, CTAs, and featured event rail.
- Events and camps directory with filter tabs for All, Tournaments, Camps, and Series.
- Series/program overview covering LIT Super Sevens Series, London, Florida, Olympic Experience, and IMG Experience.
- Credibility/media section with source-backed proof points, coach names, and Instagram handles.
- Partner/contact footer with CTAs.

## Content Rules

Use concrete source-backed labels and avoid stale 2025-first positioning where newer source signals point to 2026. Preserve older 2025 camp details only as context for named programs, not as primary upcoming dates.

Primary CTAs:

- `View Events`
- `Enter a Team`
- `Buy Tickets`
- `Reserve Camp Spot`
- `Player Application`
- `Contact LIT7s`

## Mobile Requirements

Mobile is a first-class target. The site must:

- Collapse nav into a clear mobile menu.
- Keep hero text readable without overflow.
- Keep event cards in a single-column flow.
- Avoid horizontal scrolling.
- Keep CTAs thumb-sized and visible.
- Preserve the event rail as stacked touch targets.

## Implementation

Use a Vite React static app because the workspace is empty and the page needs component structure, filtered event state, responsive behavior, and browser verification.

Use local assets for key imagery where practical. Keep UI text code-native. Do not ship generated concept images as the UI.

## Verification

Run unit tests for the content model and mobile navigation. Run a production build. Start the local dev server and verify desktop and mobile screenshots, console health, first viewport, filtering interaction, and mobile menu behavior.

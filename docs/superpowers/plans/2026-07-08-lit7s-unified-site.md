# LIT7s Unified Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished, mobile-optimized unified LIT7s.com static site that combines LIT7s, Super Sevens Series, LIT7s USA, camps, and tournaments.

**Architecture:** Use a Vite React app with source-backed content data in `src/data/siteContent.ts`, composable UI in `src/App.tsx`, and a single responsive stylesheet in `src/styles.css`. Use local image assets under `public/assets` and keep all navigational copy and CTAs code-native.

**Tech Stack:** React, Vite, TypeScript, Vitest, Testing Library, CSS media queries, local static assets.

---

### Task 1: Project Setup And Failing Tests

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `src/test-setup.ts`
- Create: `src/__tests__/siteContent.test.ts`
- Create: `src/__tests__/App.test.tsx`

- [ ] Create the Vite/React package and test configuration.
- [ ] Add tests that expect unified events, green-primary brand tokens, core CTAs, and mobile menu behavior.
- [ ] Run `npm install`.
- [ ] Run `npm test -- --run` and confirm the tests fail because implementation files do not exist yet.

### Task 2: Content Model And App Components

**Files:**
- Create: `src/data/siteContent.ts`
- Create: `src/App.tsx`
- Create: `src/main.tsx`
- Create: `src/vite-env.d.ts`

- [ ] Implement event, proof, coach, social, CTA, and nav data in `siteContent.ts`.
- [ ] Implement the unified single-page app in `App.tsx`.
- [ ] Add local UI state for event filters and mobile menu.
- [ ] Run `npm test -- --run` and confirm tests pass.

### Task 3: Responsive Styling And Assets

**Files:**
- Create: `src/styles.css`
- Add images: `public/assets/*.jpg`

- [ ] Download source-backed LIT7s imagery into `public/assets`.
- [ ] Implement desktop styles matching the green-primary accepted concepts.
- [ ] Implement mobile breakpoints for nav, hero, event rail, cards, proof grid, coach rail, and footer.
- [ ] Run `npm run build`.

### Task 4: Browser QA

**Files:**
- No source edits unless QA finds issues.

- [ ] Start `npm run dev -- --host 127.0.0.1`.
- [ ] Verify desktop first viewport, event filter interaction, and no console errors.
- [ ] Verify mobile viewport menu, readable hero text, stacked cards, and no horizontal overflow.
- [ ] Capture desktop and mobile screenshots outside the repo.
- [ ] Compare screenshots against the accepted green-primary concept images and fix material mismatches.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build production site to ./dist/
npm run preview   # Preview production build locally
```

Requires Node.js >=22.12.0.

## Architecture

This is an **Astro 6** static site (`labzzy.xyz`). The project uses ES modules with TypeScript strict mode (`astro/tsconfigs/strict`).

- `src/pages/` — File-based routing; each `.astro` file becomes a page
- `public/` — Static assets served as-is
- `astro.config.mjs` — Currently empty; all Astro defaults apply

No additional frameworks, UI libraries, or integrations are configured yet. The site is a minimal starter.

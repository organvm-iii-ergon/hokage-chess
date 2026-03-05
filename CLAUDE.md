# CLAUDE.md — hokage-chess

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

**HokageChess** — data-driven chess content creation and audience development platform. TypeScript library that models content strategy, analytics, growth mechanics, and narrative structures for chess YouTube/social media creators. Uses Ki-Sho-Ten-Ketsu storytelling structure + Chess.com API data. **DESIGN_ONLY** — library stubs and type definitions, no runtime backend.

## Commands

```bash
npm install
npm run build        # tsc → dist/
npm test             # jest --coverage
npm run lint         # eslint src/ --ext .ts
npm run dev          # tsc --watch
```

## Architecture

Pure TypeScript library — no server, no frontend. Four domain modules in `src/`:

- **`content-strategy.ts`** — Title formula scoring (`[EMOTION] + [STAKES] + [CONTEXT]`), thumbnail scoring, upload checklist, video idea types (`VideoFormat`, `VideoIdea`, `ThumbnailScore`)
- **`analytics.ts`** — Growth tracking types and analysis functions (YouTube/social metrics)
- **`growth.ts`** — Subscriber velocity, monetization milestone modeling
- **`narrative.ts`** — Ki-Sho-Ten-Ketsu narrative arc structures for chess video scripts

`src/index.ts` re-exports all four modules. Tests mirror `src/` in `tests/`. Coverage reports in `coverage/`.

**Design documents**: `docs/` contains ADRs, design specs, and source materials (Chess.com API spec sheets, market research).

<!-- ORGANVM:AUTO:START -->
## System Context (auto-generated — do not edit)

**Organ:** ORGAN-III (Commerce) | **Tier:** standard | **Status:** CANDIDATE
**Org:** `unknown` | **Repo:** `hokage-chess`

### Edges
- **Produces** → `unknown`: unknown
- **Consumes** ← `ORGAN-IV`: unknown

### Siblings in Commerce
`classroom-rpg-aetheria`, `gamified-coach-interface`, `trade-perpetual-future`, `fetch-familiar-friends`, `sovereign-ecosystem--real-estate-luxury`, `public-record-data-scrapper`, `search-local--happy-hour`, `multi-camera--livestream--framework`, `universal-mail--automation`, `mirror-mirror`, `the-invisible-ledger`, `enterprise-plugin`, `virgil-training-overlay`, `tab-bookmark-manager`, `a-i-chat--exporter` ... and 11 more

### Governance
- Strictly unidirectional flow: I→II→III. No dependencies on Theory (I).

*Last synced: 2026-02-24T12:41:28Z*
<!-- ORGANVM:AUTO:END -->


## ⚡ Conductor OS Integration
This repository is a managed component of the ORGANVM meta-workspace.
- **Orchestration:** Use `conductor patch` for system status and work queue.
- **Lifecycle:** Follow the `FRAME -> SHAPE -> BUILD -> PROVE` workflow.
- **Governance:** Promotions are managed via `conductor wip promote`.
- **Intelligence:** Conductor MCP tools are available for routing and mission synthesis.

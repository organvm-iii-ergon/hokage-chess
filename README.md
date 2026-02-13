# HokageChess

![CI](https://img.shields.io/github/actions/workflow/status/organvm-iii-ergon/hokage-chess/ci-python.yml?branch=main&label=CI)
![License](https://img.shields.io/badge/license-MIT-blue)
![Organ](https://img.shields.io/badge/organ-III%20%C2%B7%20Commerce-orange)
![Status](https://img.shields.io/badge/status-DESIGN__ONLY-lightgrey)
![Language](https://img.shields.io/badge/language-Python-3776AB?logo=python&logoColor=white)

![YouTube](https://img.shields.io/badge/platform-YouTube-red?logo=youtube&logoColor=white)
![Chess.com](https://img.shields.io/badge/API-Chess.com-81b64c)
![Data-Driven](https://img.shields.io/badge/approach-data--driven-blueviolet)

**HokageChess is a data-driven chess content creation and audience development platform that transforms chess media from generic tutorials into narrative-driven entertainment, combining Ki-Sho-Ten-Ketsu storytelling structure with growth analytics and strategic content optimization for YouTube and social media.**

---

## Table of Contents

1. [Business Problem](#1-business-problem)
2. [Solution Overview](#2-solution-overview)
3. [Technical Architecture](#3-technical-architecture)
4. [Installation and Setup](#4-installation-and-setup)
5. [Usage and API](#5-usage-and-api)
6. [Working Examples](#6-working-examples)
7. [Business Model](#7-business-model)
8. [Testing and Quality](#8-testing-and-quality)
9. [Cross-References](#9-cross-references)
10. [Contributing](#10-contributing)
11. [License and Author](#11-license-and-author)

---

## 1. Business Problem

The chess content creator economy is saturated with a paradox: chess is experiencing its greatest cultural renaissance since the Fischer-Spassky match of 1972, yet the overwhelming majority of new chess content follows identical patterns that produce diminishing returns. Thousands of creators upload "How to Beat 800 ELO" videos every week. The educational approach dominates because it is safe, but safety does not build audiences. What is missing is not more chess instruction but a coherent content strategy that treats chess videos as narrative media rather than classroom recordings.

### The Creator Economy Gap

Three structural problems define the chess content landscape in 2026:

**Problem 1: Undifferentiated Content.** The average chess creator produces educational content that is functionally interchangeable with hundreds of competitors. Without a distinctive narrative voice or content framework, small creators cannot compete on production quality alone against channels with professional editing teams and sponsorship budgets. The result is a red ocean where new creators exhaust their motivation producing content that algorithms cannot distinguish from incumbent offerings.

**Problem 2: No Data Feedback Loop.** Most chess creators make content decisions based on intuition or imitation. They watch what GothamChess or Levy Rozman does and attempt smaller-scale versions. This misses the fundamental insight that content strategy is a data problem. Click-through rates, audience retention curves, subscriber velocity, and revenue diversification trajectories are all measurable, optimizable systems. Without structured analytics, creators iterate blindly and abandon the effort when early results disappoint.

**Problem 3: The Monetization Cliff.** YouTube monetization requires 1,000 subscribers and 4,000 watch hours. For most chess creators, this threshold takes 12-18 months to reach organically. The gap between starting a channel and earning the first dollar creates an unsustainable period that kills the majority of chess content ventures before they reach viability. The solution is not to wait for YouTube ad revenue but to build diversified revenue from day one: coaching, tips, community access, and sponsorship pipelines that generate income while the subscriber base compounds.

### Market Opportunity

The chess content market is large and growing. Chess.com reached 150 million accounts. YouTube chess content generates hundreds of millions of monthly views. Twitch chess viewership surged and stabilized at levels that would have been unimaginable five years ago. But the revenue concentration is extreme: the top 20 chess creators capture the vast majority of sponsorship and ad revenue. HokageChess targets the underserved middle market, creators who want to build sustainable $500-1,000/month chess content businesses without requiring millions of subscribers.

---

## 2. Solution Overview

HokageChess is a strategic content engine with four integrated subsystems that address each dimension of the chess content problem: narrative differentiation, data-driven optimization, diversified monetization, and structured growth.

### Content Strategy Engine

The content strategy engine provides systematic frameworks for every dimension of video production. Rather than leaving creative decisions to ad hoc inspiration, the engine codifies proven patterns:

- **Title Formula:** Every video title follows the structure `[EMOTION] + [STAKES] + [CONTEXT]`. Example: "I Risked My Rating in the Craziest Line Against the Sicilian." This formula consistently produces 5-8% CTR in testing across the chess content vertical.
- **Thumbnail Optimization:** Data from top-performing chess content indicates that the highest-CTR thumbnails combine a face showing emotion, a board position or arrow overlay, and 2-4 words of bold text. The system provides thumbnail scoring against these criteria.
- **Narrative Arc Planning:** Content is organized into quarterly narrative themes that create continuity across videos. Rather than isolated educational topics, the channel tells a story across months: climb from chaos, rival encounters, redemption arcs.

### Analytics Dashboard

The analytics subsystem tracks the metrics that actually predict channel growth, not vanity metrics like total views:

- **CTR Tracking** with a target band of 5-8% and red-line alerts below 3%
- **Retention Analysis** targeting 50%+ audience retention at the 30-second mark, the single strongest predictor of algorithmic promotion
- **Subscriber Growth Curves** with phase-gated projections and velocity tracking
- **Weekly Scorecards** that aggregate performance into a single decision-ready summary

### Growth System

Growth follows a four-phase model with explicit gates and red-line indicators:

| Quarter | Target | Phase Gate |
|---------|--------|------------|
| Q1 | 33 to 250 subscribers | 3 videos/week consistency established |
| Q2 | 250 to 1,000 subscribers | CTR above 5%, retention above 50% at 30s |
| Q3 | 1,000 to 3,500 subscribers | YPP achieved, coaching pipeline active |
| Q4 | 3,500 to 10,000 subscribers | Sponsorship pipeline, community access tier |

### Narrative Framework

Every video uses the Ki-Sho-Ten-Ketsu four-act structure adapted for chess content:

1. **Ki (Introduction):** Hook with a provocative position, emotional stake, or rivalry callback. 0-15 seconds.
2. **Sho (Development):** Build the strategic tension. Explain the position, the opponent, the stakes. 15 seconds to midpoint.
3. **Ten (Twist):** The unexpected move, the blunder, the sacrifice that changes everything. The moment the viewer did not see coming.
4. **Ketsu (Conclusion):** Resolution and reflection. What was learned, what changed, what comes next in the narrative arc.

This structure replaces the tutorial format ("today we learn the London System") with narrative media ("I played the most dangerous line and this is what happened").

---

## 3. Technical Architecture

```
hokage-chess/
├── src/
│   ├── analytics/           # YouTube Data API + Chess.com API integration
│   │   ├── youtube_client.py
│   │   ├── chesscom_client.py
│   │   ├── retention_analyzer.py
│   │   └── ctr_tracker.py
│   ├── content/             # Content strategy engine
│   │   ├── title_generator.py
│   │   ├── thumbnail_scorer.py
│   │   ├── narrative_planner.py
│   │   └── calendar.py
│   ├── growth/              # Growth tracking and phase gates
│   │   ├── subscriber_tracker.py
│   │   ├── phase_gates.py
│   │   ├── weekly_scorecard.py
│   │   └── red_line_alerts.py
│   ├── monetization/        # Revenue pipeline management
│   │   ├── coaching_tracker.py
│   │   ├── sponsorship_pipeline.py
│   │   ├── ypp_estimator.py
│   │   └── revenue_dashboard.py
│   └── cli.py               # Command-line interface
├── tests/
│   ├── test_analytics.py
│   ├── test_content.py
│   ├── test_growth.py
│   └── test_monetization.py
├── docs/
│   ├── ADR/
│   │   └── 001-kishotenketsu-over-tutorial.md
│   ├── content-strategy.md
│   └── growth-model.md
├── .github/
│   └── workflows/
│       └── ci-python.yml
├── pyproject.toml
├── CLAUDE.md
├── CHANGELOG.md
├── LICENSE
└── README.md
```

### Analytics Pipeline

The analytics pipeline integrates two external data sources and produces actionable weekly reports:

```
Chess.com API ──→ Game Data Ingestion ──→ Performance Metrics
                                              │
YouTube Data API ──→ Channel Analytics ──→ Content Metrics
                                              │
                                              ▼
                                     Weekly Scorecard
                                     ├── CTR by video
                                     ├── Retention curves
                                     ├── Subscriber velocity
                                     ├── Revenue by stream
                                     └── Red-line alerts
```

**Chess.com API Integration.** Fetches game history, rating progression, opponent data, and opening statistics. Used to identify the most compelling games for content (blunders, brilliant moves, rating milestones) and to track the player improvement narrative that forms the backbone of the channel story.

**YouTube Data API Integration.** Pulls video performance metrics including impressions, CTR, average view duration, retention curves, and subscriber attribution. Powers the analytics dashboard and feeds the content optimization engine with feedback on what title formulas, thumbnail styles, and narrative structures produce the best results.

**Weekly Scorecard Generator.** Aggregates all data sources into a single report that answers: "What should I film this week, and how should I title/thumbnail it?" The scorecard includes top-performing content patterns, underperforming videos with diagnosis, and content calendar recommendations for the next two weeks.

### API Integrations

| Service | Purpose | Authentication |
|---------|---------|---------------|
| YouTube Data API v3 | Channel analytics, video performance | OAuth 2.0 |
| Chess.com Public API | Game history, rating, opponents | Public (no auth) |
| Ko-fi Webhooks | Donation tracking | Webhook secret |
| Social media schedulers | Cross-platform distribution | API keys |

---

## 4. Installation and Setup

### Prerequisites

- Python 3.11+
- YouTube Data API credentials (OAuth 2.0 client)
- Chess.com username
- (Optional) Ko-fi creator account for donation tracking

### Quick Start

```bash
# Clone the repository
git clone https://github.com/organvm-iii-ergon/hokage-chess.git
cd hokage-chess

# Create virtual environment
python -m venv .venv
source .venv/bin/activate

# Install dependencies
pip install -e ".[dev]"

# Copy environment template and fill in credentials
cp .env.example .env
# Edit .env with your YouTube API credentials and Chess.com username

# Verify installation
hokage --version
hokage health-check
```

### Environment Configuration

```bash
# .env.example
YOUTUBE_CLIENT_ID=your-oauth-client-id
YOUTUBE_CLIENT_SECRET=your-oauth-client-secret
CHESSCOM_USERNAME=your-chess-com-username
KOFI_WEBHOOK_SECRET=optional-kofi-secret
HOKAGE_DATA_DIR=./data
HOKAGE_LOG_LEVEL=INFO
```

### First Run

```bash
# Authenticate with YouTube (opens browser for OAuth flow)
hokage auth youtube

# Import your Chess.com game history
hokage import games --username YOUR_USERNAME --months 6

# Generate your first weekly scorecard
hokage scorecard generate
```

---

## 5. Usage and API

### Content Calendar

The content calendar manages a 3+3 weekly schedule: three long-form videos (Monday, Wednesday, Friday) and three Shorts (Tuesday, Thursday, Saturday). All content is planned two weeks in advance with batch filming sessions.

```bash
# View current two-week content plan
hokage calendar show

# Generate next week's content plan based on analytics
hokage calendar plan --week next

# Add a video to the calendar
hokage calendar add \
  --date 2026-02-17 \
  --type long-form \
  --title "I Found the ONLY Move That Wins Against the Fried Liver" \
  --narrative-act climax \
  --quarterly-arc "Rival Wars"

# List all videos in the current quarterly narrative arc
hokage calendar arc --quarter Q1-2026
```

### Analytics Queries

```bash
# Weekly scorecard with all metrics
hokage scorecard generate --format markdown

# CTR analysis for the last 30 days
hokage analytics ctr --days 30

# Retention analysis for a specific video
hokage analytics retention --video-id VIDEO_ID

# Subscriber velocity and phase gate status
hokage growth status

# Revenue breakdown by stream
hokage revenue summary --month 2026-02
```

### Title and Thumbnail Scoring

```bash
# Score a proposed title against the formula
hokage content score-title "I Sacrificed My Queen and This Happened"
# Output: Score 8.2/10 — Emotion: YES (sacrifice), Stakes: YES (queen), Context: PARTIAL (add opponent context)

# Evaluate a thumbnail concept
hokage content score-thumbnail \
  --has-face true \
  --emotion "shock" \
  --text-words 3 \
  --has-board-position true
# Output: Score 9.1/10 — All criteria met
```

### Narrative Planning

```bash
# View quarterly narrative arc
hokage narrative arc --quarter Q1-2026

# Plan a Ki-Sho-Ten-Ketsu structure for a video
hokage narrative structure \
  --game-id CHESSCOM_GAME_ID \
  --hook "rating milestone" \
  --twist "unexpected sacrifice at move 24"
```

---

## 6. Working Examples

### Example 1: Video Optimization Workflow

This is the end-to-end workflow for producing an optimized chess video, from game selection to publication:

```bash
# Step 1: Identify the most compelling game from recent play
hokage games rank --days 7 --criteria drama
# Output:
# 1. Game #48291 — Rating: 1247 vs 1312 — Queen sacrifice leads to checkmate (Drama: 9.4)
# 2. Game #48287 — Rating: 1247 vs 1198 — Opponent blunders in winning position (Drama: 7.8)
# 3. Game #48290 — Rating: 1247 vs 1275 — Endgame grind, down material (Drama: 6.2)

# Step 2: Generate title candidates for the top game
hokage content titles --game-id 48291 --count 5
# Output:
# 1. "I Sacrificed My QUEEN and My Opponent Had No Idea" (Score: 8.7)
# 2. "The Queen Sacrifice That Shouldn't Have Worked" (Score: 8.3)
# 3. "How I Beat a 1300 With the CRAZIEST Queen Sacrifice" (Score: 7.9)
# 4. "My Opponent Thought I Blundered My Queen..." (Score: 8.5)
# 5. "This Queen Sacrifice is NOT What You Think" (Score: 7.2)

# Step 3: Generate a Ki-Sho-Ten-Ketsu script outline
hokage narrative structure --game-id 48291
# Output:
# Ki (0:00-0:15):  "I'm about to show you the game that changed how I think about chess."
# Sho (0:15-4:00): Build up — solid opening, slight edge, opponent applies pressure
# Ten (4:00-6:00): The sacrifice — queen for two pieces and an attack that should not work
# Ketsu (6:00-7:30): The checkmate, what I learned, tease the next rivalry video

# Step 4: Schedule the video
hokage calendar add --date 2026-02-19 --type long-form --game-id 48291 --title-index 1
```

### Example 2: Growth Phase Gate Review

```bash
# Check current growth phase status
hokage growth status
# Output:
# Current Phase: Q1 (33 → 250 subscribers)
# Current Subscribers: 147
# Velocity: +18/week (14-day average)
# Projected Phase Gate: Week 7 of 12 (on track)
#
# Phase Gate Criteria:
#   ✓ Publishing 3 videos/week consistently (8 consecutive weeks)
#   ✓ CTR above 4% (current: 5.3%)
#   ✗ Retention above 50% at 30s (current: 44.2%) — RED LINE: focus on hooks
#
# Recommendation: Retention is below target. Review Ki (hook) sections
# of last 5 videos. Consider A/B testing hook styles: question vs. statement vs. preview.

# Get specific red-line alert details
hokage growth alerts
# Output:
# ALERT: 30-second retention at 44.2% (target: 50%)
# — Last 5 videos averaged 42.8% retention at 30s
# — Best performer: "Queen Sacrifice" at 58.1% (strong emotional hook)
# — Worst performer: "London System Guide" at 31.4% (educational opener)
# — Diagnosis: Educational openings underperform narrative hooks by 20+ points
```

### Example 3: Revenue Dashboard

```bash
hokage revenue summary --month 2026-02
# Output:
# Revenue Summary — February 2026
# ─────────────────────────────────
# Ko-fi Tips:          $47.00  (12 donations)
# Coaching Sessions:    $0.00  (launching Q2)
# YPP Ad Revenue:       $0.00  (not yet eligible — 147/1000 subs)
# Sponsorships:         $0.00  (pipeline building)
# ─────────────────────────────────
# Total:               $47.00
# Run Rate:           $282/yr  (annualized from current month)
# Target Run Rate:    $500/mo by Month 12
```

---

## 7. Business Model

### Monetization Timeline

The monetization strategy is phased to generate revenue before YouTube Partner Program eligibility, eliminating the "monetization cliff" that kills most small channels:

| Phase | Timeline | Revenue Streams | Target Monthly Revenue |
|-------|----------|-----------------|----------------------|
| **Phase 0** (Months 1-3) | Q1 | Ko-fi tips, community building | $25-75/mo |
| **Phase 1** (Months 4-6) | Q2 | Add coaching sessions ($50/hr, 6-10 sessions/mo) | $300-575/mo |
| **Phase 2** (Months 7-9) | Q3 | Add YPP ad revenue, first sponsorship inquiries | $450-950/mo |
| **Phase 3** (Months 10-12) | Q4 | Add regular sponsorships, premium community tier | $750-1,500/mo |

### Revenue Projections (Year 1)

| Stream | Monthly (Steady State) | Annual Projection |
|--------|----------------------|-------------------|
| Coaching | $300-500 | $2,400-4,000 |
| Sponsorships | $100-300 | $600-1,800 |
| YPP Ad Revenue | $50-150 | $300-900 |
| Ko-fi / Community | $50-100 | $600-1,200 |
| **Total** | **$500-1,050** | **$3,900-7,900** |

### Coaching Service Design

Coaching is the highest-margin revenue stream and the earliest to activate. The service structure:

- **Quick Review** ($25, 30 min): Single game analysis with written summary
- **Deep Dive** ($50, 60 min): Full opening repertoire review or multi-game pattern analysis
- **Monthly Mentorship** ($150/mo): Weekly session + async game review + personalized study plan
- **Target capacity:** 6-10 sessions per month (avoid burnout while maintaining content production)

### Sponsorship Pipeline

Sponsorship readiness begins at 1,000 subscribers. Target sponsors include chess product companies (boards, clocks, software), online chess platforms, and chess education services. The pipeline tracks:

- Outreach list and contact status
- Rate card (CPM-based for video integration, flat fee for dedicated content)
- Contract templates and deliverables tracking
- Performance reporting for sponsor retention

---

## 8. Testing and Quality

### Test Strategy

```bash
# Run the full test suite
pytest tests/ -v

# Run tests with coverage
pytest tests/ --cov=src --cov-report=term-missing

# Run specific test module
pytest tests/test_analytics.py -v

# Type checking
mypy src/

# Linting
ruff check src/ tests/
```

### Test Coverage Targets

| Module | Target Coverage | Focus Areas |
|--------|----------------|-------------|
| `analytics/` | 90% | API response parsing, metric calculations, edge cases |
| `content/` | 85% | Title scoring formula, thumbnail criteria, calendar logic |
| `growth/` | 90% | Phase gate evaluation, red-line detection, velocity math |
| `monetization/` | 80% | Revenue aggregation, projection calculations |

### CI Pipeline

The GitHub Actions workflow (`ci-python.yml`) runs on every push and pull request:

1. **Lint** — ruff check + ruff format verification
2. **Type Check** — mypy strict mode
3. **Test** — pytest with coverage threshold enforcement (80% minimum)
4. **Build** — verify package builds cleanly

### Data Quality

Analytics data is validated at ingestion:

- YouTube API responses are schema-validated against known response shapes
- Chess.com game data is deduplicated by game ID
- Revenue data requires source attribution (no untracked income)
- Weekly scorecards include data freshness indicators (stale data flagged if API fetch is >24h old)

---

## 9. Cross-References

### ORGAN-III Siblings

HokageChess sits within [ORGAN III (Commerce)](https://github.com/organvm-iii-ergon), the revenue-generating arm of the eight-organ system. Related repositories:

| Repository | Relationship |
|-----------|-------------|
| [`multi-camera--livestream--framework`](https://github.com/organvm-iii-ergon/multi-camera--livestream--framework) | Livestream production infrastructure for chess streaming sessions |
| [`mirror-mirror`](https://github.com/organvm-iii-ergon/mirror-mirror) | Analytics and audience insights platform (shared analytics patterns) |
| [`public-record-data-scrapper`](https://github.com/organvm-iii-ergon/public-record-data-scrapper) | ORGAN-III flagship; demonstrates the data pipeline architecture pattern this repo adapts for content analytics |
| [`gamified-coach-interface`](https://github.com/organvm-iii-ergon/gamified-coach-interface) | Gamification patterns that inform the coaching service tier design |

### Cross-Organ Dependencies

| Organ | Repository | Connection |
|-------|-----------|-----------|
| ORGAN-V (Public Process) | [`public-process`](https://github.com/organvm-v-logos/public-process) | Building-in-public essays documenting the HokageChess content experiment |
| ORGAN-VII (Marketing) | [`organvm-vii-kerygma`](https://github.com/organvm-vii-kerygma) | POSSE distribution for channel announcements and milestone posts |
| ORGAN-IV (Orchestration) | [`orchestration-start-here`](https://github.com/organvm-iv-taxis/orchestration-start-here) | System governance and promotion pipeline |

### System Context

HokageChess is a content-commerce product that demonstrates a specific thesis within the eight-organ model: **creative content is a business system, not an artistic accident**. The analytics pipeline, growth model, and monetization structure are designed to be reproducible across content verticals, not just chess. The Ki-Sho-Ten-Ketsu narrative framework, the title formula, and the phase-gated growth model could be adapted for any niche content strategy with minimal modification.

This repo contributes to the ORGAN-III portfolio angle: evidence of product-market thinking, sustained revenue generation, and the ability to package creative activity into commercially viable systems.

---

## 10. Contributing

### Development Setup

```bash
# Fork and clone
git clone https://github.com/YOUR_USERNAME/hokage-chess.git
cd hokage-chess

# Install development dependencies
pip install -e ".[dev]"

# Install pre-commit hooks
pre-commit install

# Run the full quality check
make check  # lint + type-check + test
```

### Contribution Guidelines

- **Issues first.** Open an issue describing the proposed change before submitting a PR.
- **Tests required.** All new functionality must include tests. Coverage must not decrease.
- **Type hints required.** All function signatures must include type annotations.
- **Commit messages.** Use imperative mood, keep the title under 72 characters. Example: `feat: add retention curve visualization to weekly scorecard`.
- **Branch naming.** Use `feat/`, `fix/`, `docs/`, or `refactor/` prefixes.

### Areas Open for Contribution

- Additional API integrations (Lichess, Twitch analytics)
- Visualization components for the analytics dashboard
- Alternative narrative framework templates beyond Ki-Sho-Ten-Ketsu
- Localization of title formula patterns for non-English chess content markets

---

## 11. License and Author

**License:** [MIT](./LICENSE)

**Author:** [@4444j99](https://github.com/4444j99)

**Organization:** [organvm-iii-ergon](https://github.com/organvm-iii-ergon) (ORGAN III -- Commerce)

### The Eight-Organ System

HokageChess is one of 81 repositories across 8 GitHub organizations that form a unified creative-institutional system:

| Organ | Domain | GitHub Organization |
|-------|--------|-------------------|
| I | Theory | [organvm-i-theoria](https://github.com/organvm-i-theoria) |
| II | Art | [organvm-ii-poiesis](https://github.com/organvm-ii-poiesis) |
| **III** | **Commerce** | **[organvm-iii-ergon](https://github.com/organvm-iii-ergon)** |
| IV | Orchestration | [organvm-iv-taxis](https://github.com/organvm-iv-taxis) |
| V | Public Process | [organvm-v-logos](https://github.com/organvm-v-logos) |
| VI | Community | [organvm-vi-koinonia](https://github.com/organvm-vi-koinonia) |
| VII | Marketing | [organvm-vii-kerygma](https://github.com/organvm-vii-kerygma) |
| Meta | Governance | [meta-organvm](https://github.com/meta-organvm) |

---

`organvm-iii-ergon/hokage-chess` -- DESIGN_ONLY -- Part of the Eight-Organ System

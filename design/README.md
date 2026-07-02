# SLO Watch — "The Service-Level Review" design system

**Project:** [slo-watch](https://github.com/Kabelo-Theko/slo-watch) · **Redesign:** complete UI/UX overhaul, July 2026

## The concept

An SLA report is a **market report**: an index (compliance), tickers (P1/P2/P3),
a commodities board (MTTR by category), a movers list (repeat incidents), and
trading hours (the 7×24 creation grid). This redesign sets the tool as a
broadsheet financial paper — salmon stock, oxford ink, a serif nameplate,
double-rule section dividers — because that is the register in which managers
already read numbers they must defend.

The app's own Truth Guard philosophy becomes the paper's editorial line:
**figures by the desk, prose by the columnist.** Every number is computed
in-browser; the AI writes only the column at the end, with a printed receipt.

### Design DNA

| | |
|---|---|
| **Essence** | A morning paper for service levels. The data is the market; the AI is the columnist. |
| **One-liner** | "The Financial Times hired to cover a service desk." |
| **Archetype** | Sage 70 (the trusted record) / Ruler 30 (the standard it holds you to) |
| **Canvas** | Salmon paper `#FAF0E4` (morning edition) · oxford night `#0F1A2C` (evening edition) |
| **Accent** | Oxford blue `#14498C` (morning) ↔ salmon ink `#F0A379` (evening). Up/down market semantics: green `#1E6B41` / red `#A5231C` reserved for meeting/missing SLA. |
| **Type cast** | Source Serif 4 (nameplate, headlines, the column — incl. italic ledes + drop cap) · Archivo (UI text) · IBM Plex Mono (every numeral, tabular) |
| **Shape** | 2–4px radii; rules, not boxes. The **double rule** (thick over thin) is the signature divider; section kickers (A1, B1…) number the desks. |
| **Motion** | Nearly still — a single page-turn reveal per view, meters fill once, nothing loops except the writing spinner |
| **Signature** | Nameplate masthead + dateline; kicker-numbered deskheads; the index tile with an up/down delta vs the 90% bar; drop-cap column |
| **Rejection list** | No cards-with-shadows-everywhere, no rounded pills as primary chrome, no dark default, no dashboard-gradient KPIs, no Inter, no emoji, no spinner-only loading |

### Why this fits these users

The reader is an IT manager preparing evidence for a stakeholder meeting. A
broadsheet is the visual language of *defensible numbers* — rules, tabular
figures, sourced prose. The index tile answers "are we okay?" in one glance
(number + delta vs the 90% bar); the movers list says where to look; the
methodology page is the audit trail.

### How it differs from the siblings

Only project with: salmon/oxford palette, serif nameplate + centered masthead
(a nameplate convention, not a marketing hero), kicker-numbered section rules,
drop-cap AI prose, market up/down language. (ticket-triage: dark dispatch
strips · onboard-kit: cream welcome kit · net-doctor: phosphor oscilloscope ·
requirements-forge: cyanotype blueprint · incident-retro: archival dossier ·
resolve-notes: riso zine · portfolio: kinetic editorial.)

## Functional parity (zero loss)

CSV paste/upload/sample · editable SLA targets · the full metrics engine
(parser with quoted fields, header aliases, open-ticket exclusion — verbatim) ·
overall + per-priority + per-category compliance · MTTR bars + KPIs · repeat
incidents with High-vol flags · 7×24 heatmap with hover counts + legend ·
AI summary with model select, reasoning receipt, 503 → deterministic fallback,
network-error → fallback · metrics JSON export · copy summary.

New: index delta badge (vs the 90% bar, computed honestly) · designed quiet
state ("waiting for the morning file") · theme-aware heatmap ink (oxford ↔
salmon) · live-region announcements · morning/evening editions persisted ·
custom engraver-line icon set (incl. the quill).

## Files

| File | Contents |
|---|---|
| `tokens.css` | Both editions as CSS custom properties |
| `tailwind.config.js` | Tokens for Tailwind consumers |
| `components.md` | Components + all states |
| `accessibility.md` | Measured contrast, focus, keyboard, ARIA |
| `motion.md` | The (deliberately few) animations |
| `grid.md` | Breakpoints & reflow |
| `icons/review-icons.svg` | 14 icons — 24px, 1.6 stroke, engraver's line |

## Reaching every state

| State | How |
|---|---|
| Quiet state | Load the app — the folded-paper illustration |
| Populated front page | Load sample data → Run the numbers |
| Warn / error notices | Run with empty desk; remove the `resolved` header; break a column name |
| Delta up/flat/down | Sample lands below the bar; edit SLA targets to push it above 90% |
| Column loading / fallback | Write the column without the backend — deterministic fallback + receipt |
| Evening edition | Masthead toggle; heatmap re-inks in salmon; persists |

# Responsive grid & layout — SLO Watch "The Service-Level Review"

## Breakpoints
| Width | Changes |
|---|---|
| ≤ 600px | MTTR bar rows compress (90px labels); edition label hides in the top strip |
| ≤ 640px | Quiet state stacks (illustration above copy) |
| ≤ 680px | Index board stacks: THE NUMBER above its delta |
| 1080px | `--page-max` — the page never widens past a readable broadsheet column block |

Checked at 360 / 768 / 1280 / 1536.

## Column structure
```
┌ masthead ──────────────────────────────────────────┐
│ edition · dateline · theme        (mono top strip)  │
│              THE SERVICE-LEVEL REVIEW               │  ← nameplate
│         The Data Desk | Methodology                 │  ← section index
╞═ double rule ═══════════════════════════════════════╡
│ A1 THE DATA DESK ────────────────────────────────── │
│ [import panel: paste 2fr | file+sample 1fr]         │
│ [targets panel: ruled table]                        │
│ Run the numbers                                     │
│ B1 THE NUMBER ─ index tile + delta                  │
│ [P1][P2][P3] tickers (auto-fit ≥200px)              │
│ B2 listings · B3 commodities · B4 movers            │
│ B5 heatmap (h-scroll ≥600px inner grid)             │
│ ── the column (left-ruled serif prose) ──           │
╞═ double rule ═══════════════════════════════════════╡
│ colophon                                            │
└─────────────────────────────────────────────────────┘
```

## Reflow rules
- **Import row**: `flex: 2 1 340px` paste / `1 1 200px` controls — wraps to
  stacked under ~600px.
- **Tickers**: `repeat(auto-fit, minmax(200px, 1fr))` — 3-up → 2-up → 1-up.
- **Listings**: horizontal scroll inside their panel; rules never break.
- **Heatmap**: fixed 600px inner grid, scrolls horizontally in its wrap;
  labels stay attached.
- **KPI stubs**: `flex: 1 1 170px`, wrap freely.
- **The column**: prose measure capped at 66ch; drop cap only on the first
  paragraph.

## Type fluidity
Nameplate `clamp(1.9 → 3.2rem)`; THE NUMBER `clamp(3 → 5.25rem)`; body fixed
15px; ledes italic serif 17px. All numerals tabular mono.

## Rhythm
4px grid (83% audited; exceptions are optical 2px rule offsets). Panel
interiors 20px; desk gaps 32px between deskheads; page padding 32→64px.

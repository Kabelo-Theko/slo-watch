# Responsive grid & layout — SLO Watch v2 "Vanilla Ledger"

## Breakpoints
| Width | Changes |
|---|---|
| ≤ 600px | MTTR bar labels compress (92px); brand wordmark hides (dot stays); nav floats at 8px |
| ≤ 640px | Quiet state stacks |
| ≤ 680px | THE NUMBER board stacks (figure above delta) |
| 1120px | `--page-max` |

Checked at 360 / 768 / 1280.

## Structure
```
        ( floating pill nav — detached, centered )
┌ page ────────────────────────────────────────────┐
│ hero: overline · Fraunces H1 · lede · dateline   │
│ The Data Desk ─ import panel · targets panel     │
│ Run the numbers → quiet | dashboard              │
│   THE NUMBER (ledger-ruled stat + delta)         │
│   [P1][P2][P3] tickers (auto-fit ≥210px)         │
│   listings · time-to-resolve · movers · heatmap  │
│   the columnist card                             │
│ colophon                                         │
└───────────────────────────────────────────────────┘
```

## Reflow
Import row `2fr/1fr` wraps ~600px; tickers auto-fit 3→2→1; listings scroll
inside panels; heatmap scrolls in its wrap (600px inner grid); columnist prose
capped 62ch.

## Rhythm
4px grid (91% audited). Panels 24px interior; section heads 64px above /
20px below; hero 48px top; page bottom 96px. Radii: 10 (fields) / 16 / 22
(panels) / pill.

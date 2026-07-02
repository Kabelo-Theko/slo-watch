# Component library — SLO Watch v2 "Vanilla Ledger"

Semantic tokens only. Type: Fraunces (display) · Satoshi (text) · Spline Sans
Mono (numerals, tabular).

## Floating pill nav (signature)
Detached, sticky at 12px, blurred ivory pill with soft shadow: brand dot +
Fraunces wordmark · section pills · theme toggle.
Pill states: default / hover / active (`aria-current` — espresso-filled) /
focus-visible.

## Hero
Overline (mono caps, provenance claim) → Fraunces headline with *italic
emphasis* → lede → mono dateline. Max 60ch; the page's one display moment
outside THE NUMBER.

## Section heads
Calm Fraunces h2 + right-aligned mono note. No kickers, no rules — whitespace
(64px) does the separation.

## Panels
Ivory cards, 22px radius, 1px hairline + soft shadow, 24px padding.

## Buttons (pill, tactile)
| State | Primary (ledger blue) | Secondary (outline) |
|---|---|---|
| default / hover (−1px lift) / focus / active (.97 spring) / disabled / busy (`aria-busy` + spinner + "Writing…") | ✓ | ✓ |

## Inputs
Sunken vanilla fields, 16px radius, borderless-until-hover; dashed file drop;
mono number inputs; pill select with custom caret.

## THE NUMBER (`.indexboard`)
Fraunces stat at clamp(4–7.5rem) over a **2px ledger rule**, with a pill delta
badge (up green / flat amber / down red — computed vs the 90% bar) and a
provenance note. The screen's single foreground element.

## Tickers
Ivory cards: mono P-badge + big tabular % → rounded meter (good ≥90 / mid ≥70 /
bad) → "met/total vs target" line.

## Listings
Hairline tables: caps label heads over one strong rule, hover tint in
accent-subtle, `.num` mono cells, compliance pills, "High vol" flag pills,
Investigate/Monitor verdicts.

## Time-to-resolve board
Rounded track bars (accent fill, one-shot 500ms) + KPI stubs on sunken vanilla
with **ledger-ruled figures**.

## Heatmap
22px rounded cells, 4px gap; ink scales with count in the edition's hue
(ledger blue ↔ periwinkle via `--hm-*`); hover springs to 1.35 with shadow;
mono legend; per-cell `title` counts.

## The columnist
A single ivory card: byline (quill + "prose by the model, figures by the
desk") → model select + Write the column → Fraunces prose (no drop cap — the
serif carries it) → mono reasoning receipt → export row. 503/network → labelled
deterministic fallback.

## Notices
Soft tinted rows (info/warn/err) with icon; error keeps a visible red border.

## Quiet state
Dashed vanilla frame, ledger-book line drawing, "Waiting for the morning file."

## Iconography
`icons/review-icons.svg` — 14 symbols, 24px grid, **1.8 round stroke** (pen
line). Always `currentColor`, always `aria-hidden`.

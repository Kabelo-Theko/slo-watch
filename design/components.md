# Component library — SLO Watch "The Service-Level Review"

Semantic tokens only (`tokens.css`). Type: display = Source Serif 4,
text = Archivo, data = IBM Plex Mono (tabular numerals everywhere).

## Masthead (navigation)
Three bands under a **3px double rule**:
1. **Top strip** — edition label (mono caps), live dateline, theme toggle.
2. **Nameplate** — "The Service-Level Review" in serif 700 (centered by
   newspaper convention — a nameplate, not a hero), mono subtitle.
3. **Section index** — buttons with a 3px *top* indicator:
   default / hover / `aria-current` (oxford text + rule) / focus-visible.

## Deskheads (section headers — signature)
`2.5px heavy rule → kicker (A1, B1… mono caps in accent) + serif h2 + right note
→ 1px light rule`. Number every desk; the kicker doubles as wayfinding.

## Buttons
Rect (2px radius), engraver icons:
| State | Primary (oxford/salmon) | Secondary (outline) |
|---|---|---|
| default / hover / focus / active(translateY 1px) / disabled(.55) / busy(`aria-busy` + spinner + "Writing…") | ✓ | ✓ |

## Inputs
- **CSV textarea**: mono 12.5px on sunken stock; placeholder shows the format.
- **File input**: dashed border (the "drop the file on the desk" affordance).
- **SLA number inputs**: mono, 84px, in a ruled table with P-badges and plain-language descriptions.
- **Model select**: custom caret, no native arrow.

## The index tile (`.indexboard`) — the one foreground element
"THE NUMBER": serif 700 at `clamp(3rem…5.25rem)`, tabular. Beside it the
**delta badge**: up (green, chart-up icon, "+x pts above the 90% bar") /
flat (amber, arrow) / down (red, chart-down) — computed against the 90%
threshold, never invented. Provenance note beneath ("computed from your CSV…").

## Ticker cards (`.ticker`)
P1/P2/P3: heavy top rule, mono symbol + big tabular %, a **meter** (good ≥90 /
mid ≥70 / bad) and "met/total vs target" line. Auto-fit grid 200px+.

## Listings (data tables)
Newspaper listings: caps column heads over a **2px heavy rule**, hairline rows,
hover tint in accent-subtle, `.num` cells mono-tabular. Variants:
- **Compliance by category** with pills (good/mid/bad, % inside the pill).
- **The movers** with "High vol" flag badges + Investigate/Monitor verdicts.

## MTTR commodities board
Label / track / mono value rows; fills in accent; one-shot 450ms width
transition. KPI stubs (heavy top rule): Overall MTTR, Resolved tickets.

## Heatmap ("when trouble arrives")
7×24 grid, 22px cells, 2px gap; ink scales with count in the edition's
data hue (oxford by morning, salmon by evening — `--hm-r/g/b` tokens);
hover scales 1.3 with outline; mono legend ramp; per-cell `title` counts.

## The column (AI region)
Byline strip (quill icon + "prose by the model, figures by the desk") →
model select + **Write the column** → output with a left rule, serif prose
with a **drop cap**, mono reasoning receipt (model · task · timestamp).
Failure modes designed: 503 → deterministic fallback (labelled receipt),
network error → same; backend error → plain statement. Export row: JSON
download + copy summary.

## Notices (alerts)
"Corrections desk" style: icon + text on semantic-subtle background with a
semantic border. info (Filed.) / warn / err. Parse status region is
`aria-live` (original contract preserved).

## Quiet state
Folded-broadsheet line illustration + "Waiting for the morning file" + what
the front page will print. Returns whenever the dashboard is cleared.

## Colophon (footer)
Double rule; mono: Truth Guard line, author, source link.

## Iconography
`icons/review-icons.svg` — 14 symbols (file, target, press/chart, quill,
up/down/flat trends, grid, download, copy, alert, check, sun, moon).
24px grid · **1.6px squared stroke** — an engraver's line, lighter than
Dispatch's 1.75 signage stroke and squared where onboard-kit is round.

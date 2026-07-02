# Accessibility sheet — SLO Watch v2 "Vanilla Ledger"

Target WCAG 2.2 AA. Implemented in `docs/index.html`.

## Measured contrast (WCAG 2.x)

### Morning (vanilla)
| Pair | Ratio | Verdict |
|---|---|---|
| text-max #221A10 / vanilla #EFE5D2 | 13.4:1 | AAA |
| text-primary #33291B / vanilla | 11.4:1 | AAA |
| text-secondary #6B5D48 / card #FBF6EB | 5.93:1 | AA+ |
| text-tertiary #695D46 / vanilla (labels) | ≥5:1 | AA |
| ledger blue #2743C8 / vanilla | 6.17:1 | AA+ |
| accent-text #2038AC / vanilla | 7.56:1 | AAA |
| on-accent #F5F6FF / blue | 7.16:1 | AAA |
| up #23713F · down #B23222 · warn #7A5600 / vanilla | 4.8 / 4.98 / 5.32:1 | AA |
| P1 / P2 / P3 on card | 5.78 / 6.17 / 8.77:1 | AA+–AAA |

### Evening (espresso)
| Pair | Ratio | Verdict |
|---|---|---|
| text-primary #F0E7D8 / espresso #191108 | 15.2:1 | AAA |
| text-secondary #BFB39E / card #251B0F | 8.18:1 | AAA |
| periwinkle #A9B8FF / espresso | 9.77:1 | AAA |
| on-accent #10173B / periwinkle | 9.1:1 | AAA |
| up / down / warn on espresso | 9.26 / 7.67 / 9.79:1 | AAA |

Heatmap cells are supplementary density ink; exact counts live in `title`
tooltips and the adjacent tables.

## Focus, keyboard, ARIA (unchanged contracts, restyled)
- Two-layer focus ring (canvas + ledger blue) on every interactive element,
  including the floating-nav pills.
- Order: skip link → brand → section pills → theme → import (paste → file →
  sample) → SLA targets → Run the numbers → dashboard controls → colophon.
- Section switches move focus to the section `<h2 data-viewtitle>`.
- Parse status stays `aria-live="polite"`; global `.sr-only` status region
  announces sample-load, analysis (with the headline number), column, copies.
- Delta badge always states the relationship in words; arrows decorative.
- Compliance pills contain the percentage; flags and verdicts are text.

## Motion
One page-turn per view; meter/bar fills once; hover lift −1px with spring,
press .97; the only loop is the writing spinner (`aria-busy`). Full
reduced-motion collapse.

## Targets & zoom
Pill buttons ≥ 44px tall; nav pills ≥ 36px; number inputs 40px. Fluid to
360px; zoom never disabled.

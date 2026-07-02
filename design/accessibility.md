# Accessibility sheet — SLO Watch "The Service-Level Review"

Target WCAG 2.2 AA. Implemented in `docs/index.html`.

## Measured contrast (WCAG 2.x)

### Morning edition (salmon)
| Pair | Ratio | Verdict |
|---|---|---|
| text-max #221C14 / canvas #FAF0E4 | 14.9:1 | AAA |
| text-primary #33291D / canvas | 12.6:1 | AAA |
| text-secondary #5D5140 / card #FFF9F1 | 7.39:1 | AAA |
| text-tertiary #71634F / canvas (canvas only) | 5.18:1 | AA |
| oxford accent as text #14498C / canvas | 7.9:1 | AAA |
| on-accent #F6EFE4 / oxford | 7.79:1 | AAA |
| up #1E6B41 / canvas | 5.77:1 | AA |
| down #A5231C / canvas | 6.53:1 | AA+ |
| warn #7A5600 / canvas | 5.9:1 | AA |
| P1 #A5231C · P2 #7A5600 · P3 #14498C on card | 7.03 / 6.35 / 8.5:1 | AAA |

### Evening edition (oxford night)
| Pair | Ratio | Verdict |
|---|---|---|
| text-primary #E4D8C6 / canvas #0F1A2C | 12.4:1 | AAA |
| text-secondary #AB9F8C / card #182642 | 5.79:1 | AA |
| salmon accent as text #F0A379 / canvas | 8.49:1 | AAA |
| on-accent #33150A / salmon | 8.16:1 | AAA |
| up #6FC48E · down #F08A80 · warn #E3B65C / canvas | 8.27 / 7.18 / 9.23:1 | AAA |
| P3 #8FB4E8 / card | 7.07:1 | AAA |

Heatmap cells are data-density ink, not text; counts are exposed via `title`
and the legend, and the full figures live in the adjacent tables (the heatmap
is supplementary, per the honest-encoding rule).

## Focus indicators
Global `:focus-visible` two-layer ring (2px canvas + 2px accent) on section
links, buttons, inputs, selects, file input, textarea, footer links.

## Keyboard navigation order
1. Skip link → `#page`
2. Masthead: theme toggle → section links (The Data Desk / Methodology)
3. Data desk: CSV textarea → file input → Load sample → SLA targets (P1→P3) → Run the numbers
4. Dashboard: model select → Write the column → Download JSON → Copy summary
5. Colophon links

Section switches move focus to the section's `<h2 data-viewtitle>`.

## ARIA strategy
| Surface | Treatment |
|---|---|
| Section nav | Buttons with `aria-current="page"` |
| Parse status | `aria-live="polite"` container (original behavior kept) + designed notices with icons |
| Global announcements | `.sr-only` `role="status"` live region: sample loaded, analysis complete (with the headline number), column ready, copies/downloads |
| SLA inputs | Per-field `aria-label` ("P1 SLA target in hours") |
| Heatmap | Wrapper `role="img"` + label; per-cell `title` tooltips carry exact counts |
| AI column | `role="region"` labelled; button `aria-busy` while writing |
| Delta badge | Text always states the relationship ("+2.3 pts above the 90% bar") — the arrow icon is decorative |
| Icons | All `aria-hidden`; icon-only theme toggle has a dynamic `aria-label` |

## Color independence
Up/down/flat deltas pair color with explicit text. Compliance pills contain the
percentage. "High vol" flags are text badges. Priority badges are letters
(P1/P2/P3), not colors alone. Meter fills sit next to "met/total" text.

## Motion
One page-turn reveal per section; meter/bar fills transition once on render;
the only loop is the writing spinner (`aria-busy` accompanies it). Full
`prefers-reduced-motion` collapse.

## Targets & zoom
Buttons ≥ 40px tall; the 22px heatmap cells are non-interactive (hover-only
enhancement, data available elsewhere). Layout fluid to 360px; zoom never
disabled.

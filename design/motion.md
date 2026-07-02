# Motion spec — SLO Watch "The Service-Level Review"

Temperament: **nearly still**. A paper does not animate; it is *printed*.
Motion exists only to mark the page turning and the ink drying.

## Tokens
```css
--motion-micro: 120ms;  --motion-small: 200ms;
--motion-large: 300ms;  --motion-page: 400ms;
--ease-standard:  cubic-bezier(.2, 0, 0, 1);
--ease-emphasized: cubic-bezier(.05, .7, .1, 1);
```

## Choreography (complete list — brevity is the point)
| Interaction | Trigger | Animation | Spec |
|---|---|---|---|
| Page turn | section switch / first render | fade + 10px rise on the view | 400ms emphasized — the single load animation |
| Meters & bars | dashboard render | width 0 → value | 450ms emphasized, once |
| Heatmap hover | pointer | scale 1.3 + outline | 120ms standard |
| Row hover | pointer | background tint | instant (no transition needed) |
| Button press | active | translateY(1px) | 120ms |
| Writing spinner | AI fetch | rotation loop + `aria-busy` + "Writing…" | until resolve — the only loop |
| Theme swap | toggle | background transition; heatmap re-inks | 300ms standard |

Explicitly rejected: staggered card entrances (this is a printed page, not a
deal), count-up numbers (a report states figures; it does not perform them),
pulsing alerts.

## Reduced motion
Global collapse to 0.01ms, single iteration. Nothing communicates by motion
alone — deltas, fills and spinners all have text equivalents.

# Motion spec — SLO Watch v2 "Vanilla Ledger"

Temperament: **calm hands on paper** — nothing dances; things settle.

## Tokens
```css
--motion-micro: 130ms; --motion-small: 220ms;
--motion-large: 320ms; --motion-page: 420ms;
--ease-standard:  cubic-bezier(.2, 0, 0, 1);
--ease-spring:    cubic-bezier(.34, 1.26, .5, 1);  /* tactile only */
--ease-emphasized: cubic-bezier(.05, .7, .1, 1);
```

## Choreography (complete)
| Interaction | Animation | Spec |
|---|---|---|
| Page turn (view switch) | fade + 12px rise | 420ms emphasized — the one load reveal |
| Meters & bars | width 0 → value | 500ms emphasized, once |
| Button hover / press | lift −1px / scale .97 | 130ms spring |
| Heatmap hover | scale 1.35 + shadow | 130ms spring |
| Writing spinner | rotation + `aria-busy` | until resolve — the only loop |
| Theme swap | background transition; heatmap re-inks | 320ms standard |

Rejected: staggered entrances, count-ups, pulsing anything.

## Reduced motion
Global collapse (0.01ms, single iteration); no information rides on motion.

# SLO Watch — "Vanilla Ledger" design system (v2)

**Project:** [slo-watch](https://github.com/Kabelo-Theko/slo-watch) · **v2 redesign, July 2026**
*(v1's broadsheet register was retired after review: its serif pairing and
newspaper chrome read as templated, and its salmon canvas collided with
onboard-kit's cream.)*

## The concept

An SLA review is a **ledger**: figures entered carefully, ruled off, defensible
line by line. v2 sets the tool on vanilla-latte stock with espresso ink and one
fountain-pen blue — the register of a beautifully kept book of accounts, built
with a 2026 hand: a floating pill nav, one huge Fraunces stat moment, tactile
pill buttons, calm whitespace-led sections.

The Truth Guard philosophy stays the editorial line: **figures by the desk,
prose by the columnist.** Every number is computed in-browser; the AI writes
only the closing column, with a printed receipt.

### Design DNA

| | |
|---|---|
| **Essence** | A well-kept ledger for service levels. Calm, warm, defensible. |
| **One-liner** | "A private bank's ledger-keeper hired to review a service desk." |
| **Canvas** | Vanilla latte `#EFE5D2` with ivory cards `#FBF6EB` (morning) · espresso `#191108` (evening). Clearly browner than onboard-kit's near-white cream — the collision is resolved. |
| **Accent** | Fountain-pen ledger blue `#2743C8` (morning) ↔ periwinkle ink `#A9B8FF` (evening). Up/down semantics: green `#23713F` / red `#B23222` reserved for met/missed. |
| **Type cast** | Fraunces 450–650 (display — warm, high-character serif with optical sizing) · Satoshi (UI text, Fontshare) · Spline Sans Mono (every numeral, tabular) |
| **Shape** | Soft 10–22px radii, pill buttons and pill nav — tactile, not institutional |
| **Signature** | The ledger rule: a fine baseline under THE NUMBER and every KPI figure; the floating detached pill nav; the italic Fraunces emphasis ("kept like a ledger") |
| **Motion** | Calm: one page-turn per view, meters fill once, springs only on tactile hovers (−1px lift, .97 press) |
| **Rejection list** | No newspaper chrome (kickers, double rules, mastheads), no Source Serif/Archivo, no centered nameplate, no salmon, no gradients, no uniform density |

### The 2026 bar it was rebuilt against

Warm human canvas · dramatic type scale (hero clamp 2.8–5rem, stat clamp
4–7.5rem vs 15px body ≈ 8×) · rounded tactile controls · ONE hot accent ·
whitespace-dominant rhythm (sections at 64px, panels 24px) · spring
micro-motion · Fontshare voice (Satoshi).

## Functional parity (zero loss — engine untouched)

The entire v1 script ships byte-identical: CSV parser (quoted/multiline),
header aliases, metrics engine, per-priority/category compliance, MTTR, repeat
incidents with flags, 7×24 heatmap (re-inked blue/periwinkle via `--hm-*`
tokens), AI column with model select + receipt + 503/network deterministic
fallbacks, JSON export, copy summary, live-region announcements, theme
persistence.

## Files

`tokens.css` (both themes) · `tailwind.config.js` · `components.md` ·
`accessibility.md` (measured tables) · `motion.md` · `grid.md` ·
`icons/review-icons.svg` (14 pen-line icons, round caps).

## Reaching every state

| State | How |
|---|---|
| Quiet state (ledger book) | Load the app |
| Populated review | Load sample data → Run the numbers |
| Delta up/flat/down | Sample lands below the 90% bar; raise SLA targets to push above |
| Warn / error notices | Run empty; break a column header |
| Column + fallback receipt | Write the column offline → deterministic fallback |
| Evening edition | Moon toggle in the pill nav; heatmap re-inks periwinkle |

# slo-watch

**Built for:** IT Support · Junior Business Analyst · IT Manager

## What it does

Paste or upload a support ticket CSV and get a full SLA/SLO service report in seconds. No server needed for the analysis: every compliance percentage, MTTR figure, repeat-incident count, and heatmap cell is computed entirely in your browser using plain JavaScript (the Truth Guard principle). The AI only writes a prose executive summary from those pre-computed numbers; it never produces or alters a single metric.

## Key outputs

- Overall SLA compliance percentage and per-priority breakdown (P1/P2/P3)
- MTTR (mean time to resolve) overall and by category, as CSS bar charts
- Repeat-incident table grouped by category with cumulative resolution hours
- Creation heatmap: a 7-day by 24-hour grid showing when tickets are raised
- Optional AI executive summary naming the top 3 operational risks and recommended interventions

## Truth Guard

Every number on the dashboard comes from deterministic browser JavaScript applied to your CSV. The AI backend receives only the computed metrics string (not your raw ticket data) and is tasked solely with writing prose. You can explain every figure to a stakeholder because you computed it yourself.

## Model toggle

The AI summary supports three NVIDIA-hosted models:

- DeepSeek Flash (fast, default)
- DeepSeek Pro (higher quality)
- MiniMax M3

## Running locally

No build step required. Open `docs/index.html` directly in a browser to use the analyser without AI.

To enable the AI summary, deploy to Vercel and set one or more environment variables:

- `NVIDIA_API_KEY` (used by all models as a fallback)
- `NVIDIA_API_KEY_FLASH` (Flash model specifically)
- `NVIDIA_API_KEY_PRO` (Pro model specifically)
- `NVIDIA_API_KEY_MINIMAX` (MiniMax model specifically)

Get API keys from https://integrate.api.nvidia.com

Deploy command:

```
vercel deploy
```

## CSV format

Required columns (case-insensitive, any order):

- `id` - ticket identifier
- `created` or `opened` or `created_at` - creation datetime
- `resolved` or `closed` or `resolved_at` - resolution datetime (blank = open ticket, excluded from compliance and MTTR)
- `priority` - P1, P2, or P3
- `category` - e.g. POS, Network, Email, Hardware, Access
- `store` - store or site identifier

Datetime format: `YYYY-MM-DD HH:MM` or ISO 8601.

## Data handling

Your CSV is processed entirely in the browser. Raw ticket rows are never sent anywhere. The AI call sends only the computed metrics summary string (under 1,500 characters). No data is stored or logged.

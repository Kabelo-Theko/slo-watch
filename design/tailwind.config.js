/**
 * SLO Watch v2 "Vanilla Ledger" — Tailwind consumption of tokens.css
 * Tokens are CSS custom properties (theme via html[data-theme]).
 */
module.exports = {
  content: ["./docs/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: ["selector", '[data-theme="evening"]'],
  theme: {
    fontFamily: {
      display: ["Fraunces", "Georgia", "serif"],
      sans: ["Satoshi", "system-ui", "sans-serif"],
      mono: ["Spline Sans Mono", "ui-monospace", "monospace"],
    },
    extend: {
      colors: {
        vanilla: {
          DEFAULT: "var(--canvas-base)",
          sunken: "var(--canvas-sunken)",
          card: "var(--canvas-card)",
          overlay: "var(--canvas-overlay)",
        },
        espresso: {
          max: "var(--text-max)",
          DEFAULT: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
          disabled: "var(--text-disabled)",
        },
        ledger: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          pressed: "var(--accent-pressed)",
          text: "var(--accent-text)",
          subtle: "var(--accent-subtle)",
          on: "var(--on-accent)",
          rule: "var(--ledger-rule)",
        },
        market: {
          up: "var(--up)", "up-subtle": "var(--up-subtle)",
          down: "var(--down)", "down-subtle": "var(--down-subtle)",
          warn: "var(--warn)", "warn-subtle": "var(--warn-subtle)",
        },
        priority: { p1: "var(--p1)", p2: "var(--p2)", p3: "var(--p3)" },
      },
      borderColor: { DEFAULT: "var(--border-default)", strong: "var(--border-strong)" },
      borderRadius: { field: "var(--radius-sm)", card: "var(--radius-md)", panel: "var(--radius-lg)", pill: "999px" },
      boxShadow: { 1: "var(--shadow-1)", 2: "var(--shadow-2)", nav: "var(--shadow-nav)", focus: "var(--focus-ring)" },
      maxWidth: { page: "1120px" },
      fontSize: {
        hero: ["var(--text-hero)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        index: ["var(--text-index)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        h2: ["var(--text-h2)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(.2, 0, 0, 1)",
        spring: "cubic-bezier(.34, 1.26, .5, 1)",
        emphasized: "cubic-bezier(.05, .7, .1, 1)",
      },
      transitionDuration: { micro: "130ms", small: "220ms", large: "320ms", page: "420ms" },
    },
  },
  plugins: [],
};

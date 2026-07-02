/**
 * SLO Watch "The Service-Level Review" — Tailwind consumption of tokens.css
 * Tokens are CSS custom properties (theme via html[data-theme]);
 * utilities reference the variables so classes switch editions for free.
 */
module.exports = {
  content: ["./docs/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: ["selector", '[data-theme="evening"]'],
  theme: {
    fontFamily: {
      display: ["Source Serif 4", "Georgia", "serif"],
      sans: ["Archivo", "system-ui", "sans-serif"],
      mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
    },
    extend: {
      colors: {
        paper: {
          DEFAULT: "var(--canvas-base)",
          sunken: "var(--canvas-sunken)",
          card: "var(--canvas-card)",
          overlay: "var(--canvas-overlay)",
        },
        ink: {
          max: "var(--text-max)",
          DEFAULT: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
          disabled: "var(--text-disabled)",
        },
        oxford: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          pressed: "var(--accent-pressed)",
          text: "var(--accent-text)",
          subtle: "var(--accent-subtle)",
          on: "var(--on-accent)",
        },
        market: {
          up: "var(--up)", "up-text": "var(--up-text)", "up-subtle": "var(--up-subtle)",
          down: "var(--down)", "down-text": "var(--down-text)", "down-subtle": "var(--down-subtle)",
          warn: "var(--warn)", "warn-subtle": "var(--warn-subtle)",
        },
        priority: { p1: "var(--p1)", p2: "var(--p2)", p3: "var(--p3)" },
        rule: { heavy: "var(--rule-heavy)", light: "var(--rule-light)" },
      },
      borderColor: { DEFAULT: "var(--border-default)", strong: "var(--border-strong)" },
      borderRadius: { press: "var(--radius-xs)", ui: "var(--radius-sm)" },
      boxShadow: { 1: "var(--shadow-1)", 2: "var(--shadow-2)", focus: "var(--focus-ring)" },
      maxWidth: { page: "1080px" },
      fontSize: {
        nameplate: ["var(--nameplate)", { lineHeight: "1" }],
        index: ["var(--text-index)", { lineHeight: "0.95" }],
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(.2, 0, 0, 1)",
        emphasized: "cubic-bezier(.05, .7, .1, 1)",
      },
      transitionDuration: { micro: "120ms", small: "200ms", large: "300ms", page: "400ms" },
    },
  },
  plugins: [],
};

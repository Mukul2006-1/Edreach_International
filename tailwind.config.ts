import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body:    ["var(--font-body)", "sans-serif"],
        mono:    ["var(--font-mono)", "monospace"],
      },
      colors: {
        bg: {
          base:    "#F8F9FC",
          surface: "#FFFFFF",
          muted:   "#F0F2F7",
          subtle:  "#E8ECF4",
        },
        ink: {
          900: "#0D1526",
          700: "#1E2E45",
          500: "#3D506B",
          300: "#7589A0",
          100: "#A8B8CC",
        },
        azure: {
          700: "#1D4ED8",
          600: "#2563EB",
          500: "#3B82F6",
          100: "#EEF3FF",
          50:  "#F5F8FF",
        },
        jade: {
          700: "#047857",
          600: "#059669",
          100: "#ECFDF5",
        },
        border: {
          DEFAULT: "#DDE3EE",
          strong:  "#C4CEDF",
        },
      },
      boxShadow: {
        card: "0 1px 3px rgba(13,21,38,0.06), 0 4px 16px rgba(13,21,38,0.05)",
        "card-hover": "0 4px 12px rgba(13,21,38,0.08), 0 12px 32px rgba(13,21,38,0.07)",
        "btn": "0 1px 2px rgba(29,78,216,0.15), 0 4px 12px rgba(29,78,216,0.2)",
        "btn-hover": "0 2px 4px rgba(29,78,216,0.2), 0 8px 20px rgba(29,78,216,0.25)",
      },
    },
  },
  plugins: [],
};
export default config;

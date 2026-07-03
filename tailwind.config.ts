import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#142524",
        deep: {
          DEFAULT: "#0D3B36",
          light: "#17534C",
          dark: "#092926",
        },
        mint: {
          DEFAULT: "#BFE8D9",
          pale: "#EAF6F1",
          deep: "#8FD2BB",
        },
        ivory: "#FBF9F5",
        coral: {
          DEFAULT: "#FF6F5E",
          light: "#FFB4A2",
          dark: "#E85A48",
        },
        sand: "#E7E2D6",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        tooth: "1.75rem",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(13, 59, 54, 0.25)",
        card: "0 8px 30px -10px rgba(13, 59, 54, 0.15)",
        glow: "0 0 0 6px rgba(191, 232, 217, 0.35)",
      },
      keyframes: {
        "draw-smile": {
          "0%": { strokeDashoffset: "600" },
          "100%": { strokeDashoffset: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "typing-dot": {
          "0%, 60%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "30%": { transform: "translateY(-4px)", opacity: "1" },
        },
      },
      animation: {
        "draw-smile": "draw-smile 1.6s ease-out forwards",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "typing-dot": "typing-dot 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

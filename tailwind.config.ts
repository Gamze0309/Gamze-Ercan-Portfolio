import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "primary-family": ["Amaranth", "sans-serif"],
      serif: ["Merriweather", "serif"],
      "logo-family": ["Allura", "cursive"],
      "content-family": ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        orange: "#F0A04B",
        green: "#B1C29E",
        yellow: "#FADA7A",
        dark: "#3B3838",
        light: "#fce7c8",
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "primary-family": ["Amaranth", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        orange: "#F0A04B",
        green: "#B1C29E",
        yellow: "#FADA7A",
        "dark-text": "#3B3838",
        "light-text": "#F0E9E9",
      },
    },
  },
  plugins: [],
} satisfies Config;

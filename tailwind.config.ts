import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "birds-of-paradise": ["Birds of Paradise"],
      },
    },
    animation: {
      "slide-up": "slide-up 0.3s ease-out",
    },
    keyframes: {
      "slide-up": {
        "0%": { transform: "translateY(10%)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
    },
  },
  plugins: [],
} satisfies Config;

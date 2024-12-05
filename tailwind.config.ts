import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9747FF",
        secondary: "rgba(34,36,38)",
        tertiary: "#222426",
        quaternary: "#323232",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
      },
      spacing: {
        8.5: "2.125rem",
        18: "4.5rem",
      },
      transitionDuration: {
        400: "400ms",
      },
      lineHeight: {
        128: "128%",
        150: "150%",
      },
      animation: {
        workdown: "workdown 2s linear infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",

      },
      keyframes: {
        "workdown": {
          "50%": { transform: "scale(1.25)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },

      }
    },
  },
  plugins: [],
};
export default config;

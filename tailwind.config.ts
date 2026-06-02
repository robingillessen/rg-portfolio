import type { Config } from "tailwindcss";

const config = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#f7f5ef",
        foreground: "#1f2328",
        paper: "#fffdf8",
        ink: "#141414",
        muted: "#64645f",
        line: "#ded8cc",
        border: "#ded8cc",
        brand: "#00f2bd",
        "brand-soft": "#9ff9df",
        "brand-dark": "#007d66",
        accent: "#00f2bd",
        "accent-dark": "#007d66",
        "accent-light": "#9ff9df",
        "accent-soft": "#d9fff3",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;

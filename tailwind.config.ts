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
        background: "#ffffff",
        foreground: "#141714",
        paper: "#f4f5f2",
        ink: "#141714",
        muted: "#62675f",
        line: "#dde1da",
        border: "#dde1da",
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

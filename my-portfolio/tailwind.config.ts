import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        chivo: ["var(--font-chivo)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        muted: "var(--muted)",
        mutedBackground: "var(--background-muted)",
        modalBackground: "var(--background-modal)",
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "12px",
        lg: "16px",
        xl: "24px",
      },
      borderWidth: {
        "0.2": "0.2px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },
      boxShadow: {
        soft: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        strong: "0px 6px 20px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
} satisfies Config;

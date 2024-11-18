import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'dark': '#010101',
      'light': '#E0E0E0',
      'gray': '#A2A2A2',
      'accent1': '#CA165D',
      'accent2': '#87CEFA',
    },
    // fontSize: {
    //   h1: '132px',
    //   h2: '68px',
    //   h3: '48px',
    //   h4: '28px',
    //   p: '16px',
    // },
  },
  plugins: [],
} satisfies Config;

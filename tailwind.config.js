import { fontFamily } from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        WHITE: "#F6F5F4",
        LIGHTBLUE: "#E8E5FF",
        DARKBLUE: "#1C182A",
        GRAYBLUE: "#423E51",
        YELLOW: "#FBBF24",
        GRAY: "#E6E6E6",
      },
      fontFamily: {
        DM: ["var(--FONTDM)", ...fontFamily.sans],
        INTER: ["var(--FONTINTER)", ...fontFamily.sans],
        ROBOTO: ["var(--FONTROBOTO)", ...fontFamily.sans],
        SATOSHI: ["Satoshi", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};

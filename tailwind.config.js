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

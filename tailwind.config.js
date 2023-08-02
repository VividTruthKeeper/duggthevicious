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
        BLACK: "#1B182A",
        LIGHTBLUE: "#E8E5FF",
        DARKBLUE: "#1C182A",
        GRAYBLUE: "#423E51",
        YELLOW: "#FBBF24",
        GRAY: "#E6E6E6",
        WHITE_OPAQUE: "rgba(250, 245, 240, 0.08)",
        FAQ: "rgba(66, 62, 81, 0.04)",
      },
      fontFamily: {
        DM: ["var(--FONTDM)", ...fontFamily.sans],
        INTER: ["var(--FONTINTER)", ...fontFamily.sans],
        ROBOTO: ["var(--FONTROBOTO)", ...fontFamily.sans],
        SATOSHI: ["Satoshi", ...fontFamily.sans],
      },
      gridTemplateColumns: {
        ABOUT: "240px 1fr",
        FAQ: "16px 1fr",
        FAQ_SM: "12px 1fr",
      },
    },
  },
  plugins: [],
};

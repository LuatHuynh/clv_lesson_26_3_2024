import { BreakPointEnum } from "./src/consts/breakPoint";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: `${BreakPointEnum.xs}px`,
      sm: `${BreakPointEnum.sm}px`,
      md: `${BreakPointEnum.md}px`,
      lg: `${BreakPointEnum.lg}px`,
      xl: `${BreakPointEnum.xl}px`,
      xxl: `${BreakPointEnum.xxl}px`,
      mb: `${BreakPointEnum.MOBILE}px`,
    },
    colors: {
      primary: "#03204c",
      secondary: "#3bc4e2",
      "youtube-red": "#ff0000",
      "icon-color": "#888888",
      "link-hover": "#52a9ff",
    },
    extend: {},
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGray: "#2F2F2F",
        secondGray: "#585858",
        errorRed: "#DF0101",
      },
      fontFamily: {
        gamja: ["Gamja Flower", "roboto"],
        diphylleia: ["Diphylleia", "sans-serif"],
        lora: ["Lora", "sans-serif"],
      },
    },
  },
};
export default config;

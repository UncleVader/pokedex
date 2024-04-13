import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /bg-type-(grass|fire|water|bug|normal|default)/,
    }
  ],
  theme: {
    extend: {
      colors: {
        "type-grass": "var(--grass)",
        "type-fire": "var(--fire)",
        "type-water": "var(--water)",
        "type-bug": "var(--bug)",
        "type-normal": "var(--normal)",
        "type-default": "var(--default)",
        "main-bg": "var(--main-bg)",
        "black-a5": "var(--black-a5)",
        "black-a8": "var(--black-a8)",
        "black-a9": "var(--black-a9)",
      },
      boxShadow: {
        "black-a2": "0 0 0 1px var(--black-a2)",
        "black-a9": "0 0 0 1px var(--black-a9)",
        "input-focus": "0 0 0 2px var(--black-a5)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

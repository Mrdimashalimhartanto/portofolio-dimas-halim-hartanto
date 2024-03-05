import type { Config } from "tailwindcss";

const withMT = require("@material-tailwind/react/utils/withMT");
const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    fontFamily: {
      snapFontFamily: ["Inter", "sans-serif"],
    },
    container: {
      screens: {
        lg: "960px",
        xl: "1088px",
      },
      padding: "16px",
      center: true,
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backdropBlur: {
        none: "none",
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px",
      },
      boxshadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.05)",
        rg: "0 10px 30px rgba(0, 0, 0, 0.05)",
        lg: "0 16px 32px rgba(0, 0, 0, 0.08)",
      },
      overflow: {
        auto: "auto",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
});
export default config;

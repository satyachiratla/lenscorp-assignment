import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "url('/images/hero-background.jpg')",
        "gradient-to-150": "linear-gradient(150deg, #dcfce7, 30%, #fff)",
        "gradient-to-230": "linear-gradient(230deg, #dbeafe, 30%, #fff)",
        "gradient-to-400": "linear-gradient(400deg, #fee2e2, 30%, #fff)",
        "gradient-to-330": "linear-gradient(330deg, #ffedd5, 30%, #fff)",
      },
      clipPath: {
        "custom-polygon": "polygon(0 22.5%, 100% 0, 100% 100%, 0 100%)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".clip-custom-polygon": {
          "clip-path": "polygon(0 22.5%, 100% 0, 100% 100%, 0 100%)",
        },
      };
      addUtilities(newUtilities);
    }),
    require("daisyui"),
  ],
  daisyui: {
    themes: ["light"],
  },
};
export default config;

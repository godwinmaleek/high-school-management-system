/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },

          "100%": { opacity: "1" },
        },
      },

      animation: {
        fadeIn: "fadeIn 0.3s linear 1",
      },
    },
  },
  plugins: [daisyui],
});

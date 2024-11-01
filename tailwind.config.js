/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: [
    "./presets/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./formkit.theme.ts",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      green: "#6C9A8B",
      grey: "#AD2D8",
      blue: "#143642",
      deepblue: "#020617",
      yellow: "#EC9A29",
      red: "#A8201A",
      black: "#000000",
      white: "#FFFFFF",
      sand: "#242424",
      gold: "#DDAC17",
      amber: colors.amber,
    },
    fontFamily: {
      sans: " Work Sans, sans-serif",
    },
  },
  plugins: [require("tailwindcss-primeui")],
};

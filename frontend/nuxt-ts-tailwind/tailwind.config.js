/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [
      {
        "light": { ...require("daisyui/src/theming/themes")["lofi"] },
      },
      {
        "dark": { ...require("daisyui/src/theming/themes")["black"] }
      }
    ],
  },
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}", "./static/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "black", "lofi"],
  },
}

// npx tailwindcss -i ./static/css/input.css -o ./static/css/output.css --watch --minify
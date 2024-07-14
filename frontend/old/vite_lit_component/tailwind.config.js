/** @type {import('tailwindcss').Config} */
export default {
  content: { 
    files : [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{html,js}", 
    "./static/**/*.{html,js}"
    ],
    transform: {
      ts: tailwindTransform
    }
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "black", "lofi"],
  },
}


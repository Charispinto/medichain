/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "cupcake"],
  },
  plugins: [
    require('daisyui'),

  ],
}
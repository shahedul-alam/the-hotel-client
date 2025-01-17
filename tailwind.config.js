/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "syne": ["Syne", "serif"],
      },
      colors: {
        "secondary": "#575757",
        "primary-border": "#d6d6d6",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


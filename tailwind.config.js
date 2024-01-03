/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'avax-red': '#E84142',
        'grad-red': 'F11D1F',
        'grad-blue': '6E87E3'
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Orbitron': ["'Orbitron', 'sans-serif'"],
        'Sacramento': [ "'Sacramento', 'cursive'"],
        'Ma-Shan-Zheng': [ "'Ma Shan Zheng', 'cursive'"],
        'Permanent-Marker': ["'Permanent Marker', 'cursive'"],

      },
    },
  },
  plugins: [
    require("a17t"),
  ],
}
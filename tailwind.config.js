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
        'Poppins': ["'Poppins', 'sans-serif'"],
        'Lumanosimo': ["'Lumanosimo', 'cursive'"],
        'Oswald': ["'Oswald', 'sans-serif'"],
      },
    },
  },
  plugins: [
    require("a17t"),
    require('tailwind-scrollbar-hide')
  ],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ Add this line
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

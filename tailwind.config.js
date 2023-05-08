/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 5s ease-in-out infinite',
        spin: 'spin 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
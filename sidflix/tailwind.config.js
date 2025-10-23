/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: '#00bfff',
      },
      boxShadow: {
        neon: '0 0 20px #00bfff',
      },
    },
  },
  plugins: [],
}

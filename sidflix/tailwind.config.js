/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: '#ffffff',
      },
      boxShadow: {
        neon: '0 0 20px #ffffff',
      },
    },
  },
  plugins: [],
}


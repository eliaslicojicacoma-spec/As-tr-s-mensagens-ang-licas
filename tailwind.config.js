/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // Azul Marinho Solene
        secondary: '#f59e0b', // Dourado do Clarim
      },
    },
  },
  plugins: [],
}

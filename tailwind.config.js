/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores oficiais do Clarim da Verdade
        primary: '#0f172a', // Slate 900
        secondary: '#f59e0b', // Amber 500
        accent: '#1e293b', // Slate 800
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}


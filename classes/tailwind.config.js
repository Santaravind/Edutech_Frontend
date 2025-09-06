/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { backgroundColor: '#dc2626' }, // yellow-400
          '50%': { backgroundColor: '#2563eb' }, // blue-600
        },
      },
      animation: {
        blink: 'blink 1s infinite',
      },
    },
  
  },
  plugins: [],
}


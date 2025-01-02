/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        selected:"#4C585B",
        neighbour:'#7E99A3',
        primary:'#F4EDD3'
      }
    },
  },
  plugins: [],
}


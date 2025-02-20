/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        selected: "#F0BB78",
        neighbour: "#543A14",
        primary: "#FFF0DC",
        primaryBg: "#131010",
      },
      fontFamily: {
        dmSans: ["DM Sans, serif"],
      },
    },
  },
  plugins: [],
};

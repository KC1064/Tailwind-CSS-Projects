/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        spline: "'Spline Sans',sans",
        poppins: "'Poppins',sans",
      },
      colors: {
        primary: "#65C51C",
      }
    },
  },
  plugins: [],
}
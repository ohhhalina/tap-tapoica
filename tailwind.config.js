/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors: {
        lime: "#B7CD7F",
        matcha_green: "#B7CE80",
        yellow: "#bab600",
        dusty_pink: "#E0D4C8",
        japgreen: "#8c9657",
        choco_brown: "#D2A67E",
        primary: "#f0e5c1"
      },

      fintFamily: {
        sans: ["Poppins", "sans-serif"],
        handwriting: ["Merienda", "cursive"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
}


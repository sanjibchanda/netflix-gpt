/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#ffe0c9",
          DEFAULT: "#ffc498",
          dark: "#ff6e01",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// screens: {
//   xs: "480px",
//   sm: "576px",
//   md: "768px",
//   lg: "992px",
//   xl: "1280px",
//   "2xl": "1440px",
//   "3xl": "1600px",
//   "4xl": "1920px",
// },

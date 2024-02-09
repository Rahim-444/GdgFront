/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //add a new color
      colors: {
        mainBlue: "#013958",
        Green: "#0D9D58",
      },
    },
  },
  plugins: [],
};

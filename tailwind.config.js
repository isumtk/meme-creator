/** @type {import('tailwindcss').Config} */
const colors = import("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      black: "#222629",
      gray: "#474B4F",
      grey: "#6B6E70",
      green: "#86C232",
      grass: "#61892F",
      white: "white",
      blue: "#44318D",
      inherit: "inherit",
    },
    fontFamily: {
      primary: ["Roboto", "sans-serif"],
      secondary: ["Montserrat", "sans-serif"],
      cursive: ["Pacifico", "cursive"],
    },
    extend: {},
  },
  plugins: [],
};

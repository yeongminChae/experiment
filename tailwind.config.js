/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        1019: "1.5fr 1.9fr 1.5fr",
      },
      gridTemplateRows: {
        1019: "1fr 9.9fr 1fr",
      },
    },
  },
  darkMode: "media", // DEFAULT depends on my browser's setting
  // darkMode: "class", // depends on my preference
  plugins: [require("@tailwindcss/forms")],
};

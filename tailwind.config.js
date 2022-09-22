/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "media", // DEFAULT depends on my browser's setting
  // darkMode: "class", // depends on my preference
  plugins: [require("@tailwindcss/forms")],
};

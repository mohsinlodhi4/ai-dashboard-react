/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/preline/preline.js",
    ".node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0c0c3a",
        secondary: "#7a7add",
      },
    },
  },
  plugins: [require("preline/plugin"), require("flowbite/plugin")],
};

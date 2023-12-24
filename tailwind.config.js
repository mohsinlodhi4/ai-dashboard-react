/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/preline/dist/*.js",
    "/node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0c0c3a",
        secondary: "#7a7add",
      },
    },
  },
  plugins: ["preline/plugin", require("flowbite/plugin")],
};

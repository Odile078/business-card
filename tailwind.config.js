/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],

  theme: {
    extend: {
      colors: {
        brandblue: {
          light: "#06c",
          DEFAULT: "#06c",
          dark: "#2997ff",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      color: ["active"],
    },
  },
  plugins: [],
};

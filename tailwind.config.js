module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#ff604f",
      },
      fontFamily: {
        sans: ['"Jost"', "sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

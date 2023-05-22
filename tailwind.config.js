/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      logo: ["Italiana"],
      poppins: ["Poppins"],
    },
    fontSize: {
      logo: ["32px", "38px"],
      custom: ["20px", "30px"],
    },
    extend: {},
  },
  plugins: [require("tailwindcss")],
  corePlugins: {
    preflight: true,
  },
  important: "#root",
};

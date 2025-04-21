/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "plus-jakarta": ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#00BFFF0A",
          200: "#00BFFF1A",
          300: "#00BFFF",
        },
        secondary: {
          100: "#1F24300A",
          200: "#1F24301A",
          300: "#1F2430",
        },
        accent: {
          100: "#FF7F500A",
          200: "#FF7F501A",
          300: "#FF7F50",
        },
        black: {
          DEFAULT: "#000000",
          100: "#8C8E98",
          200: "#666876",
          300: "#191D31",
        },
      },
    },
  },
  plugins: [],
};

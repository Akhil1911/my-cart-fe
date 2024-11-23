/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        themeColor: "#28b498",
        themeColorDark: "#578f84",
      },
    },
  },
  plugins: [],
};

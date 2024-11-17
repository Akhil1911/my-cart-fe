/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        themeColor: "#458985",
        activeColor: "#D7D6A5",
      },
    },
  },
  plugins: [],
};

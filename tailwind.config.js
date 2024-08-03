/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          from: { from: { opacity: 0 }, to: { opacity: 1 } },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn .5s ease-in-out",
        slideDown: "slideDown .5s ease-in-out",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      keyframes: {
        opacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        toRight: {
          '0%': { transform: 'translateX(-200px)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
        toLeft: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
        toTop: {
          '0%': { transform: 'translateY(60px)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
        toBottom: {
          '0%': { transform: 'translateY(-60px)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
      },
      animation: {
        opacity: "opacity 1s ease forwards",
        toRight: 'toRight 1s ease forwards',
        toLeft: 'toLeft 1s ease forwards',
        toTop: 'toTop 1s ease forwards',
        toBottom: 'toBottom 1s ease forwards',
      },
      width: {
        fullNavbar: "calc(100% - 210px)",
        notFullNavbar: "calc(100% - 64px)",
      },
    },
  },
  plugins: [require("./plugins/animationDelay")],
};

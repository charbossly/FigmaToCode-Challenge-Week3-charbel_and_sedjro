/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      t12: "12px",
      t14: "14px",
      t16: "16px",
      t18: "18px",
      t24: "24px",
      t28: "28px",
      t32: "32px",
      t38: "38px",
      t42: "42px",
      t48: "48px",
      t50: "50px",
      t55: "55px",
    },

    extend: {
      backgroundImage: {
        image: "url('/images/bgImage.png')",
      },
      colors: {
        blackBlueUi: "#252b42",
        grayUi: "#737373",
        blueUi: "#23a6f0",
        lightGrayUi: "#FAFAFA",
        redUi: "#e74040",
        pinkUi: "#FFE9EA",
        indigoUi: "#977DF4",
      },
    },
  },
  plugins: [],
};

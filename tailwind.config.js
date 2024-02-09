/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      t14: "14px",
      t16: "16px",
      t18: "18px",
      t24: "24px",
      t48: "48px",
    },

    extend: {
      colors: {
        blackBlueUi: "#252b42",
        grayUi: "#737373",
        blueUi: "#23a6f0",
        lightGrayUi: "#FAFAFA",
        redUi: "#e74040",
        pinkUi: "#FFE9EA",
        
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      t14: "14px",
    },

    extend: {
      colors: {
        lightGrayUi: "#FAFAFA",
        lightBlackUi: "#737373",
        blueUi: "#737373",
      },
    },
  },
  plugins: [],
};

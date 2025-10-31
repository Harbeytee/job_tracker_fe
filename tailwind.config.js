/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "custom-gray": "0 2px 8px 0 rgba(99, 99, 99, 0.3)",
      },
      colors: {
        background: "#F9F9FA",
        primary: "#5101ff",
        neutral: {
          50: "#f7f8fc",
          100: "#f7f7f7",
          200: "#f6f7f9",
          300: "#ebebeb",
        },
        black: {
          400: "#1b1b1b",
          950: "#000000",
        },
        gray: {
          100: "#e4e4e7",
          200: "#d3d1d1",
          300: "#D4D4D8",
          400: "#6b6b6b",
        },
      },
    },
  },
  plugins: [],
};

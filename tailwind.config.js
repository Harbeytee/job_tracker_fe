/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        jobTracker: {
          primary: "#5101ff",
        },
      },
    },
  },
  plugins: [],
};

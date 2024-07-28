/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "	#5847eb",
        "very-dark-blue": "#0f1424",
        "dark-blue": "#1c1f4a",
        "desaturated-blue": "#6f76c8",
        "pale-blue": "#bdc1ff",
      },
      fontFamily: {
        Rubik: "Rubik, sans-serif",
      },
    },
  },
  plugins: [],
};

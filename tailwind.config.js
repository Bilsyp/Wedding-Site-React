/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sacra: ["Sacramento", "cursive"],
        poppis: ["Poppins", "sans-serif"],
      },
      colors: {
        shadows: "rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};

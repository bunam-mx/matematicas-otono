/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.{js,ts,jsx,tsx}", "./Components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "autumn_black": "#0D0D0D",
        "autumn_red": "#F23D3D",
        "autumn_orange": "#F25D27",
        "autumn_lightorange": "#F28705",
        "autumn_yellow": "#F29F05",
      }
    },
  },
  plugins: [],
}


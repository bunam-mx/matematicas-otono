/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.{js,ts,jsx,tsx}", "./Components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "autumn-black": "#0D0D0D",
        "autumn-red": "#F23D3D",
        "autumn-orange": "#F25D27",
        "autumn-lightorange": "#F28705",
        "autumn-yellow": "#F29F05",
      },
      fontFamily: {
        gillsanscondensed: ["GillSansNovaCondensedBold", "sans-serif"],
      },
    },
  },
  plugins: [],
}


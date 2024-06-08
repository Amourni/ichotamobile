/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: {
          DEFAULT: "#FFFFFF",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
        gold: {
          100: "#C69857"
        }
      },
      fontFamily: {
        pthin: ["Sora-Thin", "sans-serif"],
        pextralight: ["Sora-ExtraLight", "sans-serif"],
        plight: ["Sora-Light", "sans-serif"],
        pregular: ["Sora-Regular", "sans-serif"],
        pmedium: ["Sora-Medium", "sans-serif"],
        psemibold: ["Sora-SemiBold", "sans-serif"],
        pbold: ["Sora-Bold", "sans-serif"],
        pextrabold: ["Sora-ExtraBold", "sans-serif"],
      },
    },
  },
  plugins: [],
}


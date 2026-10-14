/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecfdf3",
          100: "#d1fadf",
          200: "#a6f4c5",
          300: "#6ce9a6",
          400: "#32d583",
          500: "#1a9a4d",
          600: "#15803d",
          700: "#116633",
          800: "#0f4f29",
          900: "#0c3d21",
        },
        ink: {
          50: "#f7f8f7",
          100: "#eef0ef",
          200: "#dfe3e1",
          400: "#8a938e",
          500: "#6b746f",
          600: "#4b524e",
          700: "#2f3532",
          800: "#1c201e",
          900: "#111413",
          950: "#0a0c0b",
        },
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        rise: {
          "0%": { transform: "translateY(16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        draw: {
          "0%": { strokeDashoffset: "1200" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        rise: "rise 0.7s ease-out both",
        draw: "draw 2.4s ease-out both",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecfdf3", 100: "#d1fadf", 200: "#a6f4c5", 300: "#6ce9a6", 400: "#32d583",
          500: "#1a9a4d", 600: "#15803d", 700: "#116633", 800: "#0f4f29", 900: "#0c3d21",
        },
        cream: { 50: "#fbfaf7", 100: "#f6f3ec", 200: "#ece6da", 300: "#ddd4c3" },
        forest: { 700: "#1d3a2a", 800: "#12261b", 900: "#0c1a12", 950: "#07100b" },
        sunrise: { 400: "#ff9a3c", 500: "#ff6a3d", 600: "#f43f5e" },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "SF Pro Text", "system-ui", "sans-serif"],
        display: ['"Instrument Serif"', '"New York"', "Georgia", "serif"],
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        float: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        aurora: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(6%, -4%) scale(1.08)" },
          "66%": { transform: "translate(-5%, 5%) scale(0.95)" },
        },
        shine: { "0%": { backgroundPosition: "200% 0" }, "100%": { backgroundPosition: "-200% 0" } },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        float: "float 7s ease-in-out infinite",
        aurora: "aurora 18s ease-in-out infinite",
        shine: "shine 6s linear infinite",
      },
    },
  },
  plugins: [],
};

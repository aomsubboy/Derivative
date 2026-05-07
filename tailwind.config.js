/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050509",
        ember: "#ffb86b",
        aqua: "#49d8ff",
        rosefire: "#ff5d8f",
        aurora: "#62f2b5",
      },
      boxShadow: {
        glow: "0 0 36px rgba(73, 216, 255, 0.22)",
        rose: "0 0 44px rgba(255, 93, 143, 0.2)",
        gold: "0 0 38px rgba(255, 184, 107, 0.18)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      light: "#F3F3F3",
      dark: "#0D111A",
      background: "#e8e8e8",
      red: "red",
      white: "white",
      lightBorder: "rgba(71, 71, 71, 0.20)",
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    fontSize: {
      8: "0.5rem",
      10: "10px",
      12: "0.75rem",
      14: "14px",
      16: "1rem",
      20: "1.25rem",
      24: "1.5rem",
      28: "1.75rem",
      36: "2.25rem",
      48: "3rem",
      64: "4rem",
    },
    padding: {
      sm: "12px",
      md: "24px",
      lg: "4rem",
    },
    margin: {
      sm: "12px",
      md: "24px",
      lg: "4rem",
    },
    extend: {},
  },
  plugins: [],
};

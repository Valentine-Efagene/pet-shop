import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
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
      40: "2.5rem",
      48: "3rem",
      64: "4rem",
    },
    padding: {
      sm: "12px",
      md: "1rem",
      lg: "4rem",
      lgInner: "2rem",
    },
    margin: {
      sm: "12px",
      md: "24px",
      lg: "4rem",
    },
    gap: {
      sm: "1rem",
      md: "2rem",
      lg: "4rem",
    },
    extend: {
      keyframes: {
        jerk: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(0.2rem)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        jerk: "jerk 1s ease-in-out",
      },
    },
  },
  plugins: [],
};

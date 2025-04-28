/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        accent: "var(--accent)",
        cardBg: "var(--card-bg)",
        cardHoverBg: "var(--card-hover-bg)",
      },
    },
  },
  plugins: [],
};

module.exports = config;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        primary: "#60a5fa",
        secondary: "#a855f7",
      },
      backgroundColor: {
        "dark-primary": "#0f172a",
        "dark-secondary": "#1e293b",
        "dark-tertiary": "#334155",
      },
      textColor: {
        "dark-primary": "#f8fafc",
        "dark-secondary": "#cbd5e1",
        "dark-muted": "#64748b",
      },
    },
  },
  plugins: [],
};

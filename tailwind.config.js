/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          main: "#F8FAFC",       // clean light background
          dark: "#0F172A",       // dark navy
        },
        text: {
          main: "#0F172A",       // primary text
          muted: "#475569",      // secondary text
        },
        accent: {
          main: "#6366F1",       // indigo (professional + matches character)
          dark: "#4F46E5",
          soft: "#E0E7FF",
        },
        border: {
          subtle: "#E2E8F0",
        },
      },
      boxShadow: {
        "accent-strong": "0 8px 30px rgba(99, 102, 241, 0.25)",
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif'], // Always add a fallback font
      },
      container: {
        padding: {
          DEFAULT: "30px",
          lg: "0",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      colors: {
        primary: "#222222",
        secondary: "#F5E6ED",
      },
    },
  },
  plugins: [],
}

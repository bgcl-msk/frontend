/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "box_color": "#010140",
        "navbar_bg": "#F3F9FD",
        "blue_color":"#1D4771",
        "lightblue_color":"#007AFF",
      }
    },
  },
  plugins: [],
}
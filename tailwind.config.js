/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",  // Bao gồm tất cả các file HTML trong thư mục gốc
    "./src/**/*.{html,js}"  // Bao gồm các file HTML và JS trong thư mục src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer"
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'lilita':['Lilita One']
    },
    extend: {},
  },
  plugins: [],
}

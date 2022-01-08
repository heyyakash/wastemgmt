const join =require('path');
module.exports = {
  plugins: {
    tailwindcss: {
      config:join("./","tailwind.config.js")
    },
    autoprefixer: {},
  },
}

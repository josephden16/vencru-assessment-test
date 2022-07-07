// prettier.config.js
module.exports = {
  semi: true,
  endOfLine: "lf",
  trailingComma: "es5",
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  plugins: [require("prettier-plugin-tailwindcss")],
};

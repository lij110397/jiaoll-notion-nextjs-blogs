/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  singleQuote: true,
  jsxSingleQuote: true,
  semi: false,
  useTabs: false,
  tabWidth: 2,
  bracketSpacing: true,
  arrowParens: 'always',
  trailingComma: 'none',
  plugins: ['prettier-plugin-tailwindcss']
}

export default config

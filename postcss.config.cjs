const nesting = require('postcss-nested')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
	plugins: [nesting(), tailwindcss(), autoprefixer()]
}

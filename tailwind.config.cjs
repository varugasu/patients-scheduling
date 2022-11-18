/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: { DEFAULT: '#307d3d', dark: '#3a573f' },
				background: '#e8f4ea'
			}
		}
	},
	plugins: []
}

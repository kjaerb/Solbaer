/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				abel: ['Abel', 'sans-serif'],
				sans: ['Proxima Nova'],
				poppins: ['Poppins', 'sans-serif']
			}
		}
	},
	plugins: []
};

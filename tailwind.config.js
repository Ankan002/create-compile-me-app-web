/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"primary-dark": "#010100",
				"secondary-dark": "#10111A",
				"primary-light": "#F4F6FA",
				"secondary-light": "#F1F2F6",
				"primary-orange": "#FC5830",
				"secondary-orange": "#FF0032",
				"light-grey": "#B5BAC7",
				white: "#FFFFFF",
				"primary-yellow": "#F6BA3D",
				"secondary-yellow": "#FEE9C0",
				"semi-transparent": "rgba(0, 0, 0, 0.6)",
				"primary-green": "#08CD92",
				"primary-red": "#D61C4E",
			},
			fontFamily: {
				manrope: "'Manrope', sans-serif",
				"fira-code": "'Fira Code', monospace",
				quicksand: "'Quicksand', sans-serif",
			},
		},
	},
	plugins: [],
};

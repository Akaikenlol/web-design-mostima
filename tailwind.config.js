/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		extend: {
			height: { 900: "900px" },
			colors: { primary: "#e9eaee", secondary: "#101c28" },
			fontFamily: {
				primary: "Low Gun",
				secondary: ["'Josefin Sans'", "sans-serif"],
			},
			letterSpacing: { "5px": "5px" },
			borderWidth: { 5: "5px" },
			maxWidth: { xxxs: "150px" },
			rotate: { 270: "270deg" },
		},
	},
	plugins: [],
};

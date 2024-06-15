/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	variants: {
		extend: {
			display: ["group-hover"]
		}
	},
	theme: {
		extend: {
			colors: {
				text: "#1c0d07",
				background: "#fcf6f4",
				primary: "#cc643e",
				secondary: "#e1ae9c",
				accent: "#d78669"
			},
			fontSize: {
				sm: "0.750rem",
				base: "1rem",
				xl: "1.333rem",
				"2xl": "1.777rem",
				"3xl": "2.369rem",
				"4xl": "3.158rem",
				"5xl": "4.210rem"
			},
			fontFamily: {
				heading: ["Spinnaker", "sans-serif"],
				body: ["Spinnaker", "sans-serif"]
			},
			fontWeight: {
				normal: 400,
				bold: 700
			}
		}
	},
	plugins: ["prettier-plugin-tailwindcss", require("daisyui")],
	daisyui: {
		themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "dark", // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ":root", // The element that receives theme color CSS variables
		themes: [
			{
				mytheme: {
					primary: "#cc643e",
					secondary: "#e1ae9c",
					accent: "#d78669",
					neutral: "#1C0D07",
					"base-100": "#fcf6f4",
					info: "#7CB9E8",
					success: "#32de84",
					warning: "#FFAC1C",
					error: "#fd5c63"
				}
			}
		]
	}
};

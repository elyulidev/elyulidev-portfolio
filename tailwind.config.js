/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			padding: {
				DEFAULT: "15px",
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},
		extend: {
			colors: {
				primary: "#131424",
				secondary: "#393A47",
				accent: "#F13024",
			},
			backgroundImage: {
				explosion: 'url("/bg-explosion.png")',
				circles: 'url("/bg-circles.png")',
				circleStar: 'url("/circle-star.svg")',
				site: 'url("/site-bg.svg")',
				yoelkis: 'url("/yoelkis.webp")',
				fito: 'url("/fito.webp")',
				yordanis: 'url("/yordanis.webp")',
				daniel: 'url("/daniel.webp")',
				bioqApp: 'url("/thumb1.jpg")',
				thumb2: 'url("/thumb2.jpg")',
				thumb3: 'url("/thumb3.jpg")',
				thumb4: 'url("/thumb4.jpg")',
			},
			animation: {
				"spin-slow": "spin 6s linear infinite",
			},
			fontFamily: {
				poppins: [`var(--font-poppins)`, "sans-serif"],
				sora: [`var(--font-sora)`, "sans-serif"],
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
};

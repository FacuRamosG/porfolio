/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		fontFamily:{
			sans:['Gotham SSm A , sans-serif']
		},
		extend: {
			animation: {
				'bounce-slow': 'bounce 3s linear infinite',
			  },
			  
		},
		patterns: {
			opacities: {
				100: "1",
				80: ".80",
				60: ".60",
				40: ".40",
				20: ".20",
				10: ".10",
				5: ".05",
			},
			sizes: {
				1: "0.25rem",
				2: "0.5rem",
				4: "1rem",
				6: "1.5rem",
				8: "2rem",
				16: "4rem",
				20: "5rem",
				24: "6rem",
				32: "8rem",
			}
		},
	},
	plugins: [
		require('flowbite/plugin'),
		require('tailwindcss-bg-patterns')
	],
}

module.exports = {
	content: ['./src/**/*.{svelte,js,ts}'],
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				dark: {
					...require('daisyui/src/colors/themes')['[data-theme=dark]'],
					secondary: '#BF409D'
				}
			},
			{
				light: {
					...require('daisyui/src/colors/themes')['[data-theme=light]'],
					secondary: '#D700AB'
				}
			}
		]
	}
};

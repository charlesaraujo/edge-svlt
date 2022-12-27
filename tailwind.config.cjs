module.exports = {
	content: ['./src/**/*.{svelte,js,ts}'],
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			'light',
			{
				dark: {
					...require('daisyui/src/colors/themes')['[data-theme=dark]'],
					secondary: '#BF409D'
				}
			}
		]
	}
};

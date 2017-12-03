module.exports = {
	mode: 'spa',
	/*
	** Headers of the page
	*/
	head: {
		title: 'Hyacinth Capital',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Hyacinth Capital' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	/*
	** Customize the progress bar color
	*/
	loading: { color: '#0E2E47' },
	/*
	** Build configuration
	*/
	build: {
		vendor: ['babel-polyfill'],
		babel: {
			presets: ['env', 'vue-app']
		},
		/*
		** Run ESLint on save
		*/
		extend (config, ctx) {
			if (ctx.dev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	},
	css: [
		'bootstrap/dist/css/bootstrap.css',
		'font-awesome/css/font-awesome.css',
		'@/assets/css/global.scss'
	],
	plugins: ['~/plugins/main.js']
}

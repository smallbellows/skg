'use strict';

module.exports = {
	theme: {
		slug: 'skg',
		name: 'skg',
		author: 'Sara Given'
	},
	dev: {
		browserSync: {
			live: true,
			proxyURL: 'localhost:8888/bookclub',
			bypassPort: '8181'
		},
		browserslist: [ // See https://github.com/browserslist/browserslist
			'> 1%',
			'last 2 versions'
		],
		debug: {
			styles: true, // Render verbose CSS for debugging.
			scripts: false // Render verbose JS for debugging.
		}
	},
	export: {
		compress: true
	}
};

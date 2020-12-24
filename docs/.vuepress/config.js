// const { getChildren } = require("vuepress-sidebar-atuo")

module.exports = {
  title: '路漫漫其修远兮',
  description: '保持前进，不要停下学习的脚步',
  head: [
		['link', { rel: 'icon', href: '/images/icon.jpg' }],
		['meta', { name: 'theme-color', content: '#0084ff' }],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		['meta', { name: 'msapplication-TileImage', content: '/images/icon' }],
		['meta', { name: 'msapplication-TileColor', content: '#000000' }]
	],
  base: '/',
	markdown: {
		lineNumbers: false
	},
	plugins: ['permalink-pinyin', ['autobar', { 'pinyinNav': true }], 'rpurl', '@vuepress/back-to-top'],
	themeConfig: {
		lastUpdated: 'Last Updated',
    nav:[
			{text: 'Web', link: '/web/'},
			{text: 'Github', link: 'https://github.com/xiuyuan66/'} 
		],
    sidebar: {
      // '/web/': [
			// 	{
			// 		title: 'Vue',
			// 		sidebarDepth: 1,
			// 		children: [
			// 		]
			// 	},
			// 	{
			// 		title: 'js',
			// 		sidebarDepth: 1,
			// 		children: [
			// 		]
			// 	},
      // ]
    }
  }
}
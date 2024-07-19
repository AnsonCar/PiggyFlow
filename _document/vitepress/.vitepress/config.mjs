import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  base: '/PiggyFlow/',
  title: "Piggy Flow",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '路線圖', link: '/roadmap'},
    ],

    sidebar: {
      '/development' : [
        { text: 'overview', link: '/development/overview'},
      ]
    },

    footer: {
      message: 'Design By AnsonCar',
      copyright: 'Copyright © 2024 Cetopus | STAR | Carhyme'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AnsonCar/PiggyFlow' }
    ]
  },
})

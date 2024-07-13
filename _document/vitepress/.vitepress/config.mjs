import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  title: "Piggy Flow",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '路線圖', link: '/roadmap'},
    ],

    sidebar: {
      
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

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Savannah Techies",
  description: "A Savannah Techies Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Jarida', link: '/jarida' }
    ],

    sidebar: [
      {
        text: 'Jarida',
        items: [
          { text: 'Jarida', link: '/jarida' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

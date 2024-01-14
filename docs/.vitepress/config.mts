import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "@nickyg91",
  description: "A VitePress portfolio site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nickyg91' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/nickolas-g/' },
    ],
  }
})

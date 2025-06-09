import { defineConfig } from "vitepress";
import llmstxt from "vitepress-plugin-llms";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [llmstxt()],
  },
  srcDir: "./src",
  base: "/PiggyFlow/",
  title: "Piggy Flow",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "路線圖", link: "/roadmap" }],

    sidebar: {
      "/development": [{ text: "overview", link: "/development/overview" }],
    },

    footer: {
      message: "Design By AnsonCar",
      copyright: "Copyright © 2024 Cetopus | STAR | Carhyme",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/AnsonCar/PiggyFlow" },
    ],
  },
});

import { defineConfig } from "vitepress";
import llmstxt from "vitepress-plugin-llms";

export default defineConfig({
  title: "PiggyFlow 文档",
  description: "基于 Vue 3 和 Django 5 的全栈项目文档",
  lang: "zh-CN",

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#25499A" }],
  ],

  themeConfig: {
    // logo: "/MainWorkFlow.png",

    nav: [],

    sidebar: [
      {
        text: "开发指南",
        items: [
          { text: "概述", link: "/development/overview" },
          { text: "架构", link: "/architecture" },
          { text: "技术栈", link: "/technology" },
          { text: "组件", link: "/components" },
          { text: "状态管理", link: "/stores" },
          { text: "OpenAPI 客户端", link: "/openapi-client" },
        ],
      },

      {
        text: "基础组件",
        items: [
          { text: "TP Alert", link: "/components/tp-alert" },
          { text: "TP Box", link: "/components/tp-box" },
          { text: "TP Button", link: "/components/tp-btn" },
          { text: "TP CRUD Button", link: "/components/tp-crud-btn" },
          { text: "TP Data Table", link: "/components/tp-data-table" },
          { text: "TP Input", link: "/components/tp-input" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/AnsonCar/PiggyFlow" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present Carhyme",
    },
  },

  vite: {
    plugins: [llmstxt()],
  },
  srcDir: "./src",
  base: "/PiggyFlow/",
  title: "Piggy Flow",
  description: "A VitePress Site",
});

import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

const __dirname = new URL(".", import.meta.url).pathname;

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  head: [["link", { rel: "prefetch", href: "/extra/sidebar_scrollbar.js" }]],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "博客与资料库",
      description: "KurimulaAiri",
    },
    "/en/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
  },

  theme,

  alias: {
    // 你可以在这里将别名定向到自己的组件
    // 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 HomePage.vue
    // "@theme-hope/components/home/HomePage": path.resolve(
    //   __dirname,
    //   "./components/HomePage.vue",
    // ),
  },

  // Enable it with pwa
  // shouldPrefetch: false,
});

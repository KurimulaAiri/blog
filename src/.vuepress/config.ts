import { getDirname, path } from "vuepress/utils";
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
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

  shouldPrefetch: false,

  alias: {
    // 你可以在这里将别名定向到自己的组件
    // 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 HomePage.vue
    "@theme-hope/components/sidebar/Sidebar": path.resolve(
      __dirname,
      "./components/MySidebar.vue",
    ),
  },
  // Enable it with pwa
  // shouldPrefetch: false,
});

import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

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

  // Enable it with pwa
  // shouldPrefetch: false,
});

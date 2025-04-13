import { navbar } from "vuepress-theme-hope";


// 这里是导航栏
export const zhNavbar = navbar([
  "/zh/",
  // "/zh/demo/",
  {
    text: "文章",
    icon: "pen-to-square",
    // prefix: "/zh/posts/",
    prefix: "/zh/art/",
    children: [
      {
        text: "代码学习",
        icon: "pen-to-square",
        prefix: "learning/coding",
        children: [
          // { text: "苹果1", icon: "pen-to-square", link: "1" },
          // { text: "苹果2", icon: "pen-to-square", link: "2" },
        ],
      },
      {
        text: "考研相关",
        icon: "pen-to-square",
        prefix: "learning/master",
        children: [
          {
            text: "数学",
            icon: "pen-to-square",
            link: "math/",
          },
          // {
          //   text: "香蕉 1",
          //   icon: "pen-to-square",
          //   link: "1",
          // },
          // {
          //   text: "香蕉 2",
          //   icon: "pen-to-square",
          //   link: "2",
          // },
          // "3",
          // "4",
        ],
      },
      // { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      // { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      // "tomato",
      // "strawberry",
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);

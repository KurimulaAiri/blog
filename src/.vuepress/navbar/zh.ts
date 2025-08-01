import { navbar } from "vuepress-theme-hope";


// 这里是导航栏
export const zhNavbar = navbar([
  "/",
  // "/zh/demo/",
  {
    text: "文章",
    icon: "pen-to-square",
    // prefix: "/zh/posts/",
    prefix: "/art/",
    children: [
      {
        text: "代码学习",
        icon: "pen-to-square",
        prefix: "learning/coding",
        children: [
          { text: "RocketMQ安装与配置", icon: "pen-to-square", link: "cy/stage_4/RocketMQ" },
          { text: "四阶段笔记", icon: "pen-to-square", link: "cy/stage_4/Lessen" },
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
          {
            text: "英语",
            icon: "pen-to-square",
            link: "english/",
          },
          {
            text: "政治",
            icon: "pen-to-square",
            link: "politics/",
          },
          {
            text: "专业课",
            icon: "pen-to-square",
            link: "major/",
          }
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
      {
        text: "其他",
        icon: "pen-to-square",
        prefix: "other/",
        children: [
          {
            text: "Latex速查表",
            icon: "pen-to-square",
            link: "LaTex",
          },
          {
            text: "测试用",
            icon: "code",
            link: "Test",
          }
        ]
      }
      // { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      // { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      // "tomato",
      // "strawberry",
    ],
  },
  "/intro",
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);

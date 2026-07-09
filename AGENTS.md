# Blog 项目说明

## 项目概述

基于 **VuePress 2** + **vuepress-theme-hope** 构建的个人博客与资料库站点。

- 站点地址：https://md.s1r0ko.top
- 仓库：KurimulaAiri/blog（master 分支）
- 作者：KurimulaAiri

## 技术栈

- **框架**：VuePress 2 (2.0.0-rc.24)
- **主题**：vuepress-theme-hope (^2.0.0-rc.94)
- **构建**：Vite (@vuepress/bundler-vite)
- **包管理**：pnpm
- **数学公式**：KaTeX
- **评论系统**：Giscus（基于 GitHub Discussions）
- **搜索**：Algolia DocSearch
- **PWA**：已启用

## 常用命令

```bash
pnpm docs:dev          # 启动开发服务器
pnpm docs:clean-dev    # 清除缓存后启动开发服务器
pnpm docs:build        # 构建生产版本
```

## 目录结构

```
blog/
├── src/
│   ├── .vuepress/           # 站点配置
│   │   ├── theme.ts         # 主题配置（含 markdown 插件选项）
│   │   ├── config.ts        # VuePress 配置
│   │   ├── navbar/          # 导航栏配置
│   │   ├── sidebar/         # 侧边栏配置
│   │   ├── components/      # 自定义组件（MySidebar.vue, MyTableLine.vue）
│   │   ├── styles/          # 自定义样式（SCSS）
│   │   └── public/          # 静态资源（图片、图标、字体）
│   ├── art/                 # 文章内容
│   │   ├── learning/        # 学习笔记
│   │   │   ├── coding/      # 编程相关（1.md ~ 7.md 等）
│   │   │   ├── master/      # 考研相关（计网、数据结构、OS、数学等）
│   │   │   └── bigdata/     # 大数据相关
│   │   └── other/           # 其他文章
│   ├── en/                  # 英文内容
│   ├── Memorandum.md        # 备忘录
│   ├── intro.md             # 个人介绍
│   └── README.md            # 首页
├── .github/workflows/      # CI/CD（deploy-docs.yml）
└── package.json
```

## Markdown 扩展语法

项目主题启用了以下 Markdown 增强功能，编写文章时应优先使用：

### 提示容器（hint）

```markdown
::: note 标题
注释内容
:::

::: tip 标题
提示内容
:::

::: warning 标题
警告内容
:::

::: important 标题
重要内容
:::

::: caution 标题
危险内容
:::

::: details 标题
可折叠的详情内容
:::

::: success 标题
成功内容
:::
```

### GFM 警告（alert）

```markdown
> [!NOTE] 标题
> 内容

> [!WARNING] 标题
> 内容
```

### 标记高亮（mark）

```markdown
这是 ==高亮文本== 的示例
```

### 脚注（footnote）

```markdown
正文中的脚注引用[^1]

[^1]: 脚注内容

行内脚注^[行内脚注文本]
```

### 选项卡（tabs）

```markdown
::: tabs
@tab 选项卡1
内容1

@tab 选项卡2
内容2
:::
```

### 代码块分组（codeTabs）

````markdown
::: code-tabs
@tab pnpm
```bash
pnpm add xxx
```

@tab npm
```bash
npm install xxx
```
:::
````

### 其他已启用功能

- **align**：自定义对齐
- **attrs**：属性支持
- **figure**：图片说明
- **imgLazyload**：图片懒加载
- **imgSize**：图片尺寸
- **include**：导入文件
- **markmap**：思维导图
- **plantuml**：PlantUML 图表
- **spoiler**：剧透文本
- **sub/sup**：上下角标
- **tasklist**：任务列表
- **stylize**：自定义样式化（如 `*Recommended*` → Badge）
- **math (KaTeX)**：数学公式
- **highlighter (shiki)**：代码高亮，支持 notationDiff（diff 语法 `+`/`-`）、notationHighlight（行高亮 `{1,3-5}`）、collapsedLines

### 未启用（需安装依赖后开启）

- mermaid（流程图）—— 当前已注释
- chartjs / echarts（图表）—— echarts 已安装依赖但未在 markdown 中启用
- flowchart（流程图）
- playground / vuePlayground / sandpack（交互演示）
- revealjs（幻灯片）

## 文章编写规范

1. 文章 frontmatter 格式：

```yaml
---
title: 文章标题
date: YYYY-MM-DD
icon: 图标名称（FontAwesome solid 前缀，如 code, book）
order: 排序数字
category:
    - 分类名
tag:
    - 标签1
    - 标签2
---
```

2. 编程类文章放在 `src/art/learning/coding/` 下，按数字序号命名（1.md, 2.md, ...）
3. 考研类笔记放在 `src/art/learning/master/` 对应子目录下
4. 优先使用主题提供的 hint 容器而非原生 HTML `<details>` 标签
5. 需要高亮关键词时使用 `==标记==` 语法
6. 需要展示代码差异时使用 diff 语法或 shiki notationDiff

## 部署

通过 GitHub Actions（`.github/workflows/deploy-docs.yml`）自动构建并部署。docs 目录为 `src`，分支为 `master`。

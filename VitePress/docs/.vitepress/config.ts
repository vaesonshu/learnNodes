import { defineConfig } from 'vitepress'
export default defineConfig({
  base: '/FELearnNodes/',
  title: '前端学习笔记',
  description: '在学习前端过程中总结的笔记、自己对知识的沉淀和思考',
  lang: 'zh-CN',
  themeConfig: {
    footer: {
      message: '根据 MIT 许可证发布。',
      copyright: 'Copyright © 2022-present vaeian & FELearnNodes Contributors'
    },
    nav: [
    ],
  }
})

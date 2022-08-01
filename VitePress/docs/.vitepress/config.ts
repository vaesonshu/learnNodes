import { defineConfig } from 'vitepress'
import renderPermaLink from './render-perma-link'
import MarkDownItCustomAnchor from './markdown-it-custom-anchor'
export default defineConfig({
  title: '前端驿栈（学习笔记）',
  description: '在学习前端过程中总结的笔记、自己对知识的沉淀和思考',
  lang: 'zh-CN',
  themeConfig: {
    // logo: '/logo.svg',
    nav: [
      { text: 'JavaScript', link: '/javascript/', activeMatch: '/javascript/' },
      { text: 'TypeScript', link: '/config/', activeMatch: '/config/' },
      { text: 'Vue', link: '/vue/', activeMatch: '/vue/' },
      { text: 'React', link: '/plugins/', activeMatch: '/plugins/' },
      { text: 'Node', link: '/plugins/', activeMatch: '/plugins/' },
      { text: 'Vite', link: '/guide/', activeMatch: '/guide/' },
      { text: '算法', link: '/algorithm/', activeMatch: '/algorithm/' },
      {
        text: '实战项目',
        items: [
          { text: 'Team', link: '/team' },
          {
            text: '前端技术社区',
            link: '#'
          },
          {
            text: '进击的松鼠-Blog',
            link: 'https://twitter.com/vite_js'
          }
        ]
      },
      {
        text: 'Node',
        items: [
          {
            text: 'express',
            link: '#'
          },
          {
            text: 'koa2',
            link: '#'
          },
          {
            text: 'egg',
            link: '#'
          }
        ]
      },
      {
        text: '计算机基础',
        items: [
          {
            text: 'HTTP',
            link: '#'
          },
          {
            text: '计算机网络',
            link: '#'
          },
          {
            text: '计算机组成原理',
            link: '#'
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'twitter', link: '#' },
      { icon: 'discord', link: '#' },
      { icon: 'github', link: '#' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指引',
          items: [
            {
              text: '为什么选 Vite',
              link: '/guide/why'
            },
            {
              text: '开始',
              link: '/guide/'
            },
            {
              text: '功能',
              link: '/guide/features'
            },
            {
              text: '使用插件',
              link: '/guide/using-plugins'
            },
            {
              text: '依赖预构建',
              link: '/guide/dep-pre-bundling'
            },
            {
              text: '静态资源处理',
              link: '/guide/assets'
            },
            {
              text: '构建生产版本',
              link: '/guide/build'
            },
            {
              text: '部署静态站点',
              link: '/guide/static-deploy'
            },
            {
              text: '环境变量与模式',
              link: '/guide/env-and-mode'
            },
            {
              text: '服务端渲染（SSR）',
              link: '/guide/ssr'
            },
            {
              text: '后端集成',
              link: '/guide/backend-integration'
            },
            {
              text: '比较',
              link: '/guide/comparisons'
            },
            {
              text: '从 v2 迁移',
              link: '/guide/migration'
            }
          ]
        },
        {
          text: 'API',
          items: [
            {
              text: '插件 API',
              link: '/guide/api-plugin'
            },
            {
              text: 'HMR API',
              link: '/guide/api-hmr'
            },
            {
              text: 'JavaScript API',
              link: '/guide/api-javascript'
            },
            {
              text: '配置参考',
              link: '/config/'
            }
          ]
        }
      ],
      '/config/': [
        {
          text: '配置',
          items: [
            {
              text: '配置 Vite',
              link: '/config/'
            },
            {
              text: '共享选项',
              link: '/config/shared-options'
            },
            {
              text: '服务器选项',
              link: '/config/server-options'
            },
            {
              text: '构建选项',
              link: '/config/build-options'
            },
            {
              text: '预览选项',
              link: '/config/preview-options'
            },
            {
              text: '依赖优化选项',
              link: '/config/dep-optimization-options'
            },
            {
              text: 'SSR 选项',
              link: '/config/ssr-options'
            },
            {
              text: 'Worker 选项',
              link: '/config/worker-options'
            }
          ]
        }
      ],
      '/javascript/': [
        {
          text: 'javascript',
          items: [
            {
              text: '开始',
              link: '/javascript/'
            },
            {
              text: 'ES6',
              link: '/javascript/es6'
            }
          ]
        },
        {
          text: '解析vue3源码',
          items: []
        }
      ],
      '/vue/': [
        {
          text: '手写vue3源码',
          items: [
            {
              text: '开始',
              link: '/vue/'
            },
            {
              text: '实现构建流程',
              link: '/vue/build'
            }
          ]
        },
        {
          text: '解析vue3源码',
          items: []
        }
      ],
      '/algorithm/': [
        {
          text: '数据结构与算法',
          items: [
            {
              text: '开始',
              link: '/algorithm/'
            },
            {
              text: '栈',
              link: '/algorithm/stack'
            }
          ]
        }
      ]
    },
    footer: {
      message: '根据 MIT 许可证发布。',
      copyright: 'Copyright © 2022-present vaeian & FELearnNodes Contributors'
    }
  },
  markdown: {
    anchor: {
      permalink: renderPermaLink,
    },
    config: (md) => {
      md.use(MarkDownItCustomAnchor)
    }
  }
})

import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'MiaBot 文档',
  description: 'MiaBot 是一个基于Go_CQhttp开发的一款机器人框架！',

  theme: defaultTheme({
    logo: 'https://api.skyxk.cn/UnturnedIcon/Item/689.png',
    colorMode: 'dark',
    repo: 'Aikkes-xk/MiaBot_Docs',
    docsBranch: 'main',
    docsDir: 'docs',
    editLink: true,
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
        navbar: [
          {
            text: '社区',
            link: 'https://www.unbbs.net/category/miabot',
          },
          {
            text: '框架文档',
            link: '/InstallDocs',
            activeMatch: '/InstallDocs'
          },
          {
            text: '未转变者中文社区',
            link: 'https://www.unbbs.net/',
          },
        ],
        sidebar: {
          '/InstallDocs': [
            {
              text: 'MiaBot文档',
              children: [
                '/InstallDocs/Index.md'
              ],
            },
            {
              text: 'MiaBot框架',
              children: [
                '/InstallDocs/Install.md',
                '/InstallDocs/login.md',
                '/InstallDocs/plugins.md'
              ],
            },
            {
              text: '问题解决',
              children: [
                '/InstallDocs/Issue/Login_Issue.md'
              ],
            }
          ],
        }
      }
    }
  })
})

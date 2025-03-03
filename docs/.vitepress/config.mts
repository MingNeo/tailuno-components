import path from 'node:path'
import { defineConfig } from 'vitepress'
// import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import demoPlugin from '../../packages/markdown-it-demo-plugin/index.js'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'TailUno Component',
  description: 'custom components',
  // 设置构建输出目录
  outDir: '../dist',
  // 根据环境变量判断是否添加 base 路径
  base: process.env.NODE_ENV === 'production' ? '/tailuno-components/' : '/',
  // base: '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '组件', link: '/components/' },
    ],

    sidebar: [
      {
        text: 'Tailwind/unocss UI组件',
        items: [
          { text: '使用说明', link: '/ui-components/' },
          { text: 'Button 基础按钮', link: '/ui-components/button' },
          { text: 'Tooltip 文字提示', link: '/ui-components/tooltip' },
          // { text: 'Dialog 弹窗', link: '/ui-components/dialog' },
          { text: 'Input 输入框', link: '/ui-components/input' },
          { text: 'Select 选择器', link: '/ui-components/select' },
          { text: 'Switch 开关', link: '/ui-components/switch' },
          { text: 'Dropdown 下拉菜单', link: '/ui-components/dropdown' },
          { text: 'Tabs 标签页', link: '/ui-components/tabs' },
          { text: 'Card 卡片', link: '/ui-components/card' },
          { text: 'Navbar 导航栏', link: '/ui-components/navbar' },
          { text: 'Avatar 头像', link: '/ui-components/avatar' },
          { text: 'Badge 徽章', link: '/ui-components/badge' },
          { text: 'Breadcrumb 面包屑', link: '/ui-components/breadcrumb' },
          { text: 'Progress 进度条', link: '/ui-components/progress' },
          { text: 'Alert 警告', link: '/ui-components/alert' },
          { text: 'Loading 加载中', link: '/ui-components/loading' },
          { text: 'Pagination 分页', link: '/ui-components/pagination' },
          { text: 'Divider 分隔线', link: '/ui-components/divider' },
          { text: 'Checkbox 复选框', link: '/ui-components/checkbox' },
          { text: 'Radio 单选框', link: '/ui-components/radio' },
          { text: 'Range 滑块', link: '/ui-components/range' },
          { text: 'Modal 弹窗', link: '/ui-components/modal' },
          { text: 'Drawer 抽屉', link: '/ui-components/drawer' },
          { text: 'ButtonGroup 按钮组', link: '/ui-components/buttonGroup' },
          { text: 'Steps 步骤条', link: '/ui-components/steps' },
          { text: 'Rating 评分组件', link: '/ui-components/rating' },
          { text: 'Skeleton 骨架屏', link: '/ui-components/skeleton' },
          { text: 'Collapse 折叠面板', link: '/ui-components/collapse' },
          { text: 'Table 表格', link: '/ui-components/table' },
          { text: 'ChatBubble 聊天气泡', link: '/ui-components/chatBubble' },
          { text: 'Stat 统计数值', link: '/ui-components/stat' },
          // { text: 'Tag 标签', link: '/ui-components/tag' },
          // { text: 'Upload 上传', link: '/ui-components/upload' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mingNeo/tailwind-components' },
    ],
  },
  vite: {
    resolve: {
      alias: {
        'ui-components': `${path.resolve(new URL('.', import.meta.url).pathname, '../../packages/ui-components')}/`,
      },
    },
    plugins: [
      // Unocss(),
      AutoImport({
        resolvers: [],
      }),
      Components({
        resolvers: [],
      }),
    ],
  },
  markdown: {
    config: (md) => {
      md.use(demoPlugin)
    }
  },
})

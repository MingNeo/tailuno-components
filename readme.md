# TailUno Component

基于 Tailwind/UnoCSS 的 Vue 组件库,提供开箱即用的响应式 UI 组件。

## 特性

- 🎨 基于 Tailwind/UnoCSS - 使用流行的原子化 CSS 框架
- 📦 开箱即用 - 在线复制即可使用,无需安装及额外配置
- 📱 响应式设计 - 适配各种屏幕尺寸
- 🎈 轻量级 - 按需引入,不携带冗余代码
- 🎉 丰富组件 - 提供 30+ 常用 UI 组件

## 快速开始

1. 确保项目已安装 Tailwind CSS 或 UnoCSS。

2. 确保自己项目中配置了primary主题颜色，或自行替换组件代码中如text-primary、bg-primary等颜色为自定义颜色

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#000000',
      }
    },
  },
}
```

```js
// unocss.config.js
export default defineConfig({
  theme: {
    colors: {
      primary: '#000000',
    }
  },
})
```

2. 复制需要的组件代码到你的项目中

3. 直接使用组件

## 文档

访问 [在线文档](https://mingneo.github.io/tailuno-components/) 查看详细使用说明和示例。

## 许可证

[MIT](LICENSE)

# TailUno Components

## 特性

- 😊 无需安装，无需引入，复制即可使用
- 😊 使用代码即源码，可随意修改定制，适用各种根据设计图进行修改的场景
- 😊 95%组件无需js，仅依赖tailwind/unocss。需要js的组件也提供了可一键复制的js代码。
- 😊 仅依赖 tailwind/unocss。也可使用css 定义 class方式，则0依赖。
- 🔥 大量组件，满足各种场景
- 📦 每个组件都有详细的文档和示例
- 🛠️ 支持自定义统一主题
- 🌈 响应式设计
- 😊 黑暗模式适配

## 为什么需要TailUno Components
市面上已有许多优秀的组件库，如 material-ui、Ant Design、Element Plus、Vuetify等，为什么还要开发这个组件库？

首先，TailUno Components 与这些组件库并非互斥关系，而是互补关系。

因为这些组件库虽然功能强大，但只局限于对应的框架（react、vue等）。

而且封装的程度较深，适用于无需设计，直接使用组件库的企业级中后台场景，或者个人项目。样式基本是固定的，基本仅能支持简单修改一下主题等等，如果想自定义，需要花费大量时间去修改，并且不一定能满足需求。

得益于tailwind 和 unocss的流行，我们可以轻松定义UI的样式，但是自己去实现一些无需js的基本样式仍会耗费大量的时间。

TailUno Components 用法即源码，可以随意修改，不仅是颜色、大小、间距等，甚至还包括组件的布局、样式等，完全改造的面目全非都没问题。

其次，对于各种组件库，我们需要安装，需要配置按需引入等等。

TailUno Components 只依赖tailwind/unocss，无需安装，无需引入，复制即可使用。

需要复杂的js逻辑的组件，可以使用如上组件库或者独立的组件包，对于大多数无需js或仅需简单js的组件，直接从TailUno Components中复制代码粘贴进你的项目即可。

## 快速开始

直接复制组件代码到项目中即可使用

> 注意：
> 1. 确保项目已安装 Tailwind CSS 或 UnoCSS。
> 2. 确保自己项目中配置了primary主题颜色，或自行替换组件代码中如text-primary、bg-primary等颜色为自定义颜色

```ts
// tailwind.config.js
{
  theme: {
    extend: {
      colors: {
        primary: 'blue',
      },
    },
  },
}

// unocss.config.js
{
  theme: {
    primary: 'blue',
  },
}
```

## vscode 插件 [TODO]
- 拖拽使用
- [Vscode TailUno Components](https://marketplace.visualstudio.com/items?itemName=mingNeo.tailuno-components)

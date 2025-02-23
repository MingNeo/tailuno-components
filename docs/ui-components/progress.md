# Progress 进度条

响应式进度条组件。

<script setup>
  import CssProgress from 'ui-components/css-class/Progress/CssClass.vue'
  import InlineProgress from 'ui-components/Progress/Inline.vue'
</script>

## 行内 Tailwind/UnoCSS 用法
使用行内Tailwind/UnoCSS类直接构建导航栏
::: raw
<InlineProgress />
:::

::: details 查看代码
<<< ../../packages/ui-components/Progress/Inline.vue#snippet{html}
:::

## CSS 类用法
::: raw
使用预定义的CSS类来构建导航栏
<CssProgress />
:::

::: details 查看代码
::: code-group
<<< ../../packages/ui-components/css-class/Progress/CssClass.vue#snippet{html}[html]
<<< ../../packages/ui-components/css-class/Progress/index.css
:::

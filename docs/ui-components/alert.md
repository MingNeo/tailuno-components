# Alert 提示

响应式提示组件。

<script setup>
  import CssAlert from 'ui-components/css-class/Alert/CssClass.vue'
  import InlineAlert from 'ui-components/Alert/Inline.vue'
</script>

## 行内 Tailwind/UnoCSS 用法
使用行内Tailwind/UnoCSS类直接构建导航栏
::: raw
<InlineAlert />
:::
::: details 查看代码
<<< ../../packages/ui-components/Alert/Inline.vue#snippet{html}
:::

## CSS 类用法
::: raw
使用预定义的CSS类来构建导航栏
<CssAlert />
:::

::: details 查看代码
::: code-group
<<< ../../packages/ui-components/css-class/Alert/CssClass.vue#snippet{html}[html]
<<< ../../packages/ui-components/css-class/Alert/index.css
:::

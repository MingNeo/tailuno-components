# Divider 分割线

响应式分割线组件，支持多种样式和深色模式。

<script setup>
  import CssDivider from 'ui-components/css-class/Divider/CssClass.vue'
  import InlineDivider from 'ui-components/Divider/Inline.vue'
</script>

## 行内 Tailwind/UnoCSS 用法
使用行内Tailwind/UnoCSS类直接构建分割线
::: raw
<InlineDivider />
:::

::: details 查看代码
<<< ../../packages/ui-components/Divider/Inline.vue#snippet{html}
:::

## CSS 类用法
::: raw
使用预定义的CSS类来构建分割线
<CssDivider />
:::

::: code-group
<<< ../../packages/ui-components/css-class/Divider/CssClass.vue#snippet{html}[html]
<<< ../../packages/ui-components/css-class/Divider/index.css
:::

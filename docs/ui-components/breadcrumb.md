# Breadcrumb 面包屑

响应式面包屑组件。

<script setup>
  import CssBreadcrumb from 'ui-components/css-class/Breadcrumb/CssClass.vue'
  import InlineBreadcrumb from 'ui-components/Breadcrumb/Inline.vue'
</script>

## 行内 Tailwind/UnoCSS 用法
使用行内Tailwind/UnoCSS类直接构建导航栏
::: raw
<InlineBreadcrumb />
:::
::: details 查看代码
<<< ../../packages/ui-components/Breadcrumb/Inline.vue#snippet{html}
:::

## CSS 类用法
::: raw
使用预定义的CSS类来构建导航栏
<CssBreadcrumb />
:::

::: details 查看代码
::: code-group
<<< ../../packages/ui-components/css-class/Breadcrumb/CssClass.vue#snippet{html}[html]
<<< ../../packages/ui-components/css-class/Breadcrumb/index.css
:::

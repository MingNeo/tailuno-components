# Badge 徽章

响应式徽章组件。

<script setup>
  import CssBadge from 'ui-components/css-class/Badge/CssClass.vue'
  import InlineBadge from 'ui-components/Badge/Inline.vue'
</script>

## 行内 Tailwind/UnoCSS 用法
使用行内Tailwind/UnoCSS类直接构建导航栏
::: raw
<InlineBadge />
:::
::: details 查看代码
<<< ../../packages/ui-components/Badge/Inline.vue#snippet{html}
:::

## CSS 类用法
::: raw
使用预定义的CSS类来构建导航栏
<CssBadge />
:::

::: details 查看代码
::: code-group
<<< ../../packages/ui-components/css-class/Badge/CssClass.vue#snippet{html}[html]
<<< ../../packages/ui-components/css-class/Badge/index.css
:::

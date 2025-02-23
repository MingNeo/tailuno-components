# ButtonGroup 按钮组

将多个按钮组合在一起的组件。

<script setup>
  import CssButtonGroup from 'ui-components/css-class/ButtonGroup/CssClass.vue'
  import InlineButtonGroup from 'ui-components/ButtonGroup/Inline.vue'
</script>

## 行内 Tailwind/UnoCSS 用法
使用行内Tailwind/UnoCSS类直接构建按钮组
::: raw
<InlineButtonGroup />
:::

::: details 查看代码
<<< ../../packages/ui-components/ButtonGroup/Inline.vue#snippet{html}
:::

## CSS 类用法
使用预定义的CSS类来构建按钮组
::: raw
<CssButtonGroup />
:::

::: details 查看代码
::: code-group
<<< ../../packages/ui-components/css-class/ButtonGroup/CssClass.vue#snippet{html}[html]
<<< ../../packages/ui-components/css-class/ButtonGroup/index.css
:::

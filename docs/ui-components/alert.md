# Alert 提示

响应式提示组件。

<script setup>
  import CssAlert from 'ui-components-css/Alert/CssClass.vue'
  import InlineAlert from 'ui-components/Alert/Inline.vue'
</script>

## 行内 Tailwind/UnoCSS 用法
使用行内的tailwind/unocss样式构建，复制组件的代码即可使用
::: raw
<InlineAlert />
:::
::: details 查看代码
<<< ../../packages/ui-components/Alert/Inline.vue#snippet{html}
:::

## CSS 类用法
::: raw
使用预定义的CSS类。复制index.css的样式即可使用
<CssAlert />
:::

::: details 查看代码
::: code-group
<<< ../../packages/ui-components-css/Alert/CssClass.vue#snippet{html}[html]
<<< ../../packages/ui-components-css/Alert/index.css
:::

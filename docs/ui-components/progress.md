# Progress 进度条

响应式进度条组件。

<script setup>
  import CssProgress from 'ui-components-css/Progress/CssClass.vue'
  import InlineProgress from 'ui-components/Progress/Inline.vue'
</script>

## 行内 Tailwind/UnoCSS 用法
使用行内的tailwind/unocss样式构建，复制组件的代码即可使用
::: raw
<InlineProgress />
:::

::: details 查看代码
<<< ../../packages/ui-components/Progress/Inline.vue#snippet{html}
:::

## CSS 类用法
::: raw
使用预定义的CSS类。复制index.css的样式即可使用
<CssProgress />
:::

::: details 查看代码
::: code-group
<<< ../../packages/ui-components-css/Progress/CssClass.vue#snippet{html}[html]
<<< ../../packages/ui-components-css/Progress/index.css
:::

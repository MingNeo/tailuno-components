# Group 组合

将多个组件组合在一起的组件。

<script setup>
  import CssGroup from 'ui-components-css/Group/CssClass.vue'
  import InlineGroup from 'ui-components/Group/Inline.vue'
</script>

## 行内 Tailwind/UnoCSS 用法
任意元素放在当前外层div下，即可实现组合效果
::: raw
<InlineGroup />
:::

::: details 查看代码
<<< ../../packages/ui-components/Group/Inline.vue#snippet{html}
:::

## CSS 类用法
使用预定义的CSS类。复制index.css的样式即可使用

使用`group-join`包裹任意元素，即可实现组合效果
::: raw
<CssGroup />
:::

::: details 查看代码
::: code-group
<<< ../../packages/ui-components-css/Group/CssClass.vue#snippet{html}[html]
<<< ../../packages/ui-components-css/Group/index.css
:::

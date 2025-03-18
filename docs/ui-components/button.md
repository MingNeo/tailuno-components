# Button 按钮

<script setup>
  import InlineButton from 'ui-components/Button/Inline.vue'
  import CssButton from 'ui-components-css/Button/CssClass.vue'
</script>

## 行内tailwind/unocss用法
使用行内的tailwind/unocss样式构建，复制组件的代码即可使用

<!-- ::: section title=示例 class="space-y-4 p-4" -->
<InlineButton />
<!-- ::: -->

::: details 查看代码
<<< ../../packages/ui-components/Button/Inline.vue#snippet{html}
:::

## CSS 类用法
::: raw
使用预定义的CSS类。复制index.css的样式即可使用
<CssButton />
:::

::: details 查看代码
::: code-group
<<< ../../packages/ui-components-css/Button/CssClass.vue#snippet{html}[html]
<<< ../../packages/ui-components-css/Button/index.css
:::

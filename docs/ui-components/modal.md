# Modal 模态框

模态框组件

`含javascript`

<script setup>
  import CssModal from 'ui-components-css/Modal/CssClass.vue'
  import InlineModal from 'ui-components/Modal/Inline.vue'
</script>

## 行内 Tailwind/UnoCSS 用法
使用行内的tailwind/unocss样式构建，复制组件的代码即可使用
::: raw
<InlineModal />
:::

::: details 查看代码
<<< ../../packages/ui-components/Modal/Inline.vue#snippet{html}
:::

## CSS 类用法
使用预定义的CSS类。复制index.css的样式即可使用
::: raw
<CssModal />
:::

::: details 查看代码
::: code-group
<<< ../../packages/ui-components-css/Modal/CssClass.vue#snippet{html}[html]
<<< ../../packages/ui-components-css/Modal/index.css
:::

# Input 输入框

<script setup>
  import InlineInput from 'ui-components/Input/Inline.vue'
  import CssInput from 'ui-components-css/Input/CssClass.vue'
</script>

## 行内tailwind/unocss用法
使用行内的tailwind/unocss样式构建，复制组件的代码即可使用
<InlineInput />

::: details 查看代码
<<< ../../packages/ui-components/Input/Inline.vue#snippet{html}
:::

## css 类用法
复制下面的index.css的class定义，并粘贴到组件或全局中使用
<CssInput />
::: details 查看代码
::: code-group
<<< ../../packages/ui-components-css/Input/CssClass.vue#snippet{html}[html]

<<< ../../packages/ui-components-css/Input/index.css
:::

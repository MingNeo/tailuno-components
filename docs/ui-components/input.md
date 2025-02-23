# Input 输入框

以下样式基于tailwind/unocss。primary颜色需在tailwind/unocss的theme中配置

<script setup>
  import InlineInput from 'ui-components/Input/Inline.vue'
  import CssInput from 'ui-components/css-class/Input/CssClass.vue'
</script>

## 行内tailwind/unocss用法
样式全在组件行内的tailwind/unocss class中，直接复制对应的代码使用即可
<InlineInput />

::: details 查看代码
<<< ../../packages/ui-components/Input/Inline.vue#snippet{html}
:::

## css 类用法
复制下面的index.css的class定义，并粘贴到组件或全局中使用
<CssInput />
::: details 查看代码
::: code-group
<<< ../../packages/ui-components/css-class/Input/CssClass.vue#snippet{html}[html]

<<< ../../packages/ui-components/css-class/Input/index.css
:::

# Button 按钮

以下样式基于tailwind/unocss。primary颜色需在tailwind/unocss的theme中配置

<script setup>
  import InlineButton from 'ui-components/Button/Inline.vue'
  import CssButton from 'ui-components/css-class/Button/CssClass.vue'
</script>

## 行内tailwind/unocss用法
样式全在组件行内的tailwind/unocss class中，直接复制对应的代码使用即可
::: raw
<InlineButton />
:::
::: details 查看代码
<<< ../../packages/ui-components/Button/Inline.vue#snippet{html}
:::

## css 类用法
复制下面的index.css的class定义，并粘贴到组件或全局中使用
::: raw
<CssButton />
:::
::: details 查看代码
::: code-group
<<< ../../packages/ui-components/css-class/Button/CssClass.vue#snippet{html}[html]
<<< ../../packages/ui-components/css-class/Button/index.css
:::

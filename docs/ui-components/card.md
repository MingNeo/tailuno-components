# Card 卡片

<script setup>
  import Inline from 'ui-components/Card/Inline.vue'
  import CssCard from 'ui-components-css/Card/CssClass.vue'
</script>

## 行内tailwind/unocss用法
使用行内的tailwind/unocss样式构建，复制组件的代码即可使用
::: raw
<Inline />
:::
::: details 查看代码
<<< ../../packages/ui-components/Card/Inline.vue#snippet{html}
:::

## css 类用法
复制下面的index.css的class定义，并粘贴到组件或全局中使用
::: raw
<CssCard />
:::
::: details 查看代码
::: code-group
<<< ../../packages/ui-components-css/Card/CssClass.vue#snippet{html}[html]

<<< ../../packages/ui-components-css/Card/index.css
:::

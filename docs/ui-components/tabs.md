# Tabs

以下样式基于tailwind/unocss。primary颜色需在tailwind/unocss的theme中配置

<script setup>
  import InlineTabs from 'ui-components/Tabs/Inline.vue'
  import CssTabs from 'ui-components/css-class/Tabs/CssClass.vue'
</script>

## 行内tailwind/unocss用法
样式全在组件行内的tailwind/unocss class中，直接复制对应的代码使用即可
<InlineTabs />

::: details 查看代码
<<< ../../packages/ui-components/Tabs/Inline.vue#snippet{html}
:::

## css 类用法
复制下面的index.css的class定义，并粘贴到组件或全局中使用
<CssTabs />
::: details 查看代码
::: code-group
<<< ../../packages/ui-components/css-class/Tabs/CssClass.vue#snippet{html}[html]

<<< ../../packages/ui-components/css-class/Tabs/index.css
:::

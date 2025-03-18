# Tabs 标签页

<script setup>
  import InlineTabs from 'ui-components/Tabs/Inline.vue'
  import CssTabs from 'ui-components-css/Tabs/CssClass.vue'
</script>

## 行内tailwind/unocss用法
使用行内的tailwind/unocss样式构建，复制组件的代码即可使用
<InlineTabs />

::: details 查看代码
<<< ../../packages/ui-components/Tabs/Inline.vue#snippet{html}
:::

## css 类用法
复制下面的index.css的class定义，并粘贴到组件或全局中使用
<CssTabs />
::: details 查看代码
::: code-group
<<< ../../packages/ui-components-css/Tabs/CssClass.vue#snippet{html}[html]

<<< ../../packages/ui-components-css/Tabs/index.css
:::

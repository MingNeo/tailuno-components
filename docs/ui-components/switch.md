# Switch 开关

<script setup>
  import InlineSwitch from 'ui-components/Switch/Inline.vue'
  import CssSwitch from 'ui-components-css/Switch/CssClass.vue'
</script>

## 行内tailwind/unocss用法
使用行内的tailwind/unocss样式构建，复制组件的代码即可使用
<InlineSwitch />

::: details 查看代码
<<< ../../packages/ui-components/Switch/Inline.vue#snippet{html}
:::

## css 类用法
复制下面的index.css的class定义，并粘贴到组件或全局中使用
<CssSwitch />
::: details 查看代码
::: code-group
<<< ../../packages/ui-components-css/Switch/CssClass.vue#snippet{html}[html]

<<< ../../packages/ui-components-css/Switch/index.css
:::

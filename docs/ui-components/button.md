# Button 按钮

以下样式基于tailwind/unocss。primary颜色需在tailwind/unocss的theme中配置

<script setup>
  import InlineButton from 'ui-components/Button/Inline.vue'
  // import CssButton from 'ui-components/css-class/Button/CssClass.vue'
</script>

## 行内tailwind/unocss用法
样式全在组件行内的tailwind/unocss class中，直接复制对应的代码使用即可

<!-- ::: section title=示例 class="space-y-4 p-4" -->
<InlineButton />
<!-- ::: -->

::: details 查看代码
<<< ../../packages/ui-components/Button/Inline.vue#snippet{html}
:::

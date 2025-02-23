# Loading 加载中

加载中组件。

<script setup>
  import CssLoading from 'ui-components/css-class/Loading/CssClass.vue'
  import InlineLoading from 'ui-components/Loading/Inline.vue'
</script>

## 行内 Tailwind/UnoCSS 用法
使用行内Tailwind/UnoCSS类直接构建导航栏
::: raw
<InlineLoading />
:::

::: details 查看代码
<<< ../../packages/ui-components/Loading/Inline.vue#snippet{html}
:::

## CSS 类用法
::: raw
使用预定义的CSS类来构建导航栏
<CssLoading />
:::

::: details 查看代码
::: code-group
<<< ../../packages/ui-components/css-class/Loading/CssClass.vue#snippet{html}[html]
<<< ../../packages/ui-components/css-class/Loading/index.css
:::

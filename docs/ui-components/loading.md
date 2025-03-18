# Loading 加载中

加载中组件。

<script setup>
  import CssLoading from 'ui-components-css/Loading/CssClass.vue'
  import InlineLoading from 'ui-components/Loading/Inline.vue'
</script>

## 行内 Tailwind/UnoCSS 用法
使用行内的tailwind/unocss样式构建，复制组件的代码即可使用
::: raw
<InlineLoading />
:::

::: details 查看代码
<<< ../../packages/ui-components/Loading/Inline.vue#snippet{html}

```css
@keyframes dots {
  0%,
  80%,
  100% {
    transform: scale(0);
  }

  40% {
    transform: scale(1);
  }
}
```
:::

<!-- ## CSS 类用法
::: raw
使用预定义的CSS类。复制index.css的样式即可使用
<CssLoading />
:::

::: details 查看代码
::: code-group
<<< ../../packages/ui-components-css/Loading/CssClass.vue#snippet{html}[html]
<<< ../../packages/ui-components-css/Loading/index.css
::: -->

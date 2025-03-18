# Select 选择器

响应式选择器组件。

<script setup>
  import CssSelect from 'ui-components-css/Select/CssClass.vue'
  import InlineSelectBase from 'ui-components/Select/Inline/base.vue'
  import InlineSelectCustom from 'ui-components/Select/Custom/index.vue'
</script>

## 行内 Tailwind/UnoCSS 用法
使用行内的tailwind/unocss样式构建，复制组件的代码即可使用
::: raw
<InlineSelectBase />
:::
::: details 查看代码
<<< ../../packages/ui-components/Select/Inline/base.vue#snippet{html}
:::

#### 自定义下拉菜单
`需要javascript` 控制下拉菜单显示和隐藏
::: raw
<InlineSelectCustom />
:::
::: details 查看代码
::: code-group
<<< ../../packages/ui-components/Select/Custom/index.vue#snippet{html}[html]
<<< ../../packages/ui-components/Select/Custom/index.js
<<< ../../packages/ui-components/Select/Inline/custom.vue[完整Vue版本]
:::

## CSS 类用法
::: raw
使用预定义的CSS类。复制index.css的样式即可使用
<CssSelect />
:::

::: details 查看代码
::: code-group
<<< ../../packages/ui-components-css/Select/CssClass.vue#snippet{html}[html]
<<< ../../packages/ui-components-css/Select/index.css
:::

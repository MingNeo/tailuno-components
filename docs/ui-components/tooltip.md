# Tooltip 文字提示

简单的文字提示气泡框。

<script setup>
  import TooltipInline from 'ui-components/Tooltip/Inline.vue'
  import TooltipCssClass from 'ui-components/css-class/Tooltip/CssClass.vue'
</script>

## 行内tailwind/unocss用法

### 基础提示
<br />
<TooltipInline />

> 使用 `group` 和 `group-hover` 类来控制提示框的显示和隐藏

> 移除after相关的即可不显示箭头

::: details 查看代码
::: code-group
<<< ../../packages/ui-components/Tooltip/Inline.vue#snippet{html}
:::

## css类 用法
复制下面的index.css的class定义，并粘贴到组件或全局中即可使用
<TooltipCssClass />
::: details 查看代码
::: code-group
<<< ../../packages/ui-components/css-class/Tooltip/CssClass.vue#snippet{html}[html]

<<< ../../packages/ui-components/css-class/Tooltip/index.css
:::

### 不同方向

通过调整 `absolute` 定位的位置来改变提示框的方向：

- 上方提示：使用 `bottom-full` 和 `mb-2`
- 下方提示：使用 `top-full` 和 `mt-2`
- 左侧提示：使用 `right-full` 和 `mr-2`
- 右侧提示：使用 `left-full` 和 `ml-2`

### 不同主题

通过更改背景色类名来实现不同的主题：

- 默认：`bg-gray-800`
- 主要：`bg-primary`
- 成功：`bg-green-500`
- 警告：`bg-yellow-500`
- 危险：`bg-red-500`

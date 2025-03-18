# Steps 步骤条

- 支持水平和垂直两种布局方式
- 可以显示步骤标题和描述文本
- 支持自定义当前步骤的样式
- 响应式设计，适配不同屏幕尺寸

<script setup>
  import InlineSteps from 'ui-components/Steps/Inline.vue'
  import CssSteps from 'ui-components-css/Steps/CssClass.vue'
</script>

## 行内tailwind/unocss用法
使用行内的tailwind/unocss样式构建，复制组件的代码即可使用
<InlineSteps />

::: details 查看代码
<<< ../../packages/ui-components/Steps/Inline.vue#snippet{html}
:::

<!-- ## css 类用法
复制下面的index.css的class定义，并粘贴到组件或全局中使用
<CssSteps />

::: details 查看代码
::: code-group
<<< ../../packages/ui-components-css/Steps/CssClass.vue#snippet{html}[html]
<<< ../../packages/ui-components-css/Steps/index.css
::: -->

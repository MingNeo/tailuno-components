# Login 登录

响应式登录组件。

<script setup>
  import InlineLogin from 'ui-components/Login/Normal.vue'
  import QuickLogin from 'ui-components/Login/QuickLogin.vue'
</script>

## 行内 Tailwind/UnoCSS 用法
使用行内的tailwind/unocss样式构建，复制组件的代码即可使用
::: raw
<div class="w-[400px] bg-gray-100 p-4">
  <InlineLogin />
</div>
:::
::: details 查看代码
<<< ../../packages/ui-components/Login/Normal.vue#snippet{html}
:::

**验证码登录**

::: raw
<div class="w-[400px] bg-gray-100 p-4">
  <QuickLogin />
</div>
:::
::: details 查看代码
<<< ../../packages/ui-components/Login/QuickLogin.vue#snippet{html}
:::

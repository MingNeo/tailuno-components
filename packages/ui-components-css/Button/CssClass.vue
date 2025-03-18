<template>
  <div class="flex flex-wrap items-center gap-3 pt-4">
    <!-- #region snippet -->
    <!-- 基础按钮组 -->
    <button class="btn">
      默认按钮
    </button>
    <button class="btn btn-primary">
      主要按钮
    </button>
    <button class="btn btn-success">
      成功按钮
    </button>
    <button class="btn btn-warning">
      警告按钮
    </button>
    <button class="btn btn-danger">
      危险按钮
    </button>

    <hr class="!m-0 w-full">

    <!-- plain按钮组 -->
    <button class="btn btn-plain">
      默认按钮
    </button>
    <button class="btn btn-plain btn-primary">
      主要按钮
    </button>
    <button class="btn btn-plain btn-success">
      成功按钮
    </button>
    <button class="btn btn-plain btn-warning">
      警告按钮
    </button>
    <button class="btn btn-plain btn-danger">
      危险按钮
    </button>

    <hr class="!m-0 w-full">

    <!-- 禁用状态 -->
    <button class="btn" disabled>
      禁用按钮
    </button>
    <button class="btn btn-primary" disabled>
      禁用主要
    </button>
    <button class="btn btn-success" disabled>
      禁用成功
    </button>
    <button class="btn btn-warning" disabled>
      禁用警告
    </button>
    <button class="btn btn-danger" disabled>
      禁用危险
    </button>

    <hr class="!m-0 w-full">

    <!-- plain 禁用状态 -->
    <button class="btn btn-plain" disabled>
      禁用按钮
    </button>
    <button class="btn btn-plain btn-primary" disabled>
      禁用主要
    </button>
    <button class="btn btn-plain btn-success" disabled>
      禁用成功
    </button>
    <button class="btn btn-plain btn-warning" disabled>
      禁用警告
    </button>
    <button class="btn btn-plain btn-danger" disabled>
      禁用危险
    </button>

    <hr class="!m-0 w-full">

    <!-- 圆角按钮组 -->
    <button class="btn btn-round">
      圆角按钮
    </button>
    <button class="btn btn-primary btn-round">
      圆角主要
    </button>

    <hr class="!m-0 w-full">

    <!-- 按钮尺寸 --> <!-- 图标按钮 -->
    <button class="btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" /></svg>
    </button>

    <!-- 文字图标按钮 -->
    <button class="btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" /></svg>
      带图标
    </button>

    <!-- 小尺寸 -->
    <button class="btn btn-small">
      小尺寸
    </button>

    <!-- 大尺寸 -->
    <button class="btn btn-large">
      大尺寸
    </button>
    <!-- #endregion snippet -->
  </div>
</template>

<style lang="css" scoped>
  @import './index.css';
</style>

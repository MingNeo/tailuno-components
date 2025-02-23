<template>
  <div class="flex flex-col gap-4">
    <!-- #region snippet -->
    <!-- 基础输入框 -->
    <label class="block">基础输入框</label>
    <div class="space-x-4">
      <input
        type="text"
        class="input"
        placeholder="基础输入框"
      >

      <input
        type="text"
        class="input"
        placeholder="禁用状态"
        disabled
      >

      <input
        type="text"
        class="input input-error"
        placeholder="错误状态"
      >
    </div>

    <!-- 不同尺寸 -->
    <label class="block">不同尺寸</label>
    <div class="space-x-4">
      <input
        type="text"
        class="input input-sm"
        placeholder="小尺寸"
      >

      <input
        type="text"
        class="input"
        placeholder="默认尺寸"
      >

      <input
        type="text"
        class="input input-lg"
        placeholder="大尺寸"
      >
    </div>

    <!-- 不同类型 -->
    <label>密码输入框</label>
    <input
      type="password"
      class="input"
      placeholder="密码输入框"
    >

    <!-- 数字输入框 -->
    <label>数字输入框</label>
    <input
      type="number"
      class="input"
      placeholder="数字输入框"
    >

    <!-- 搜索输入框 -->
    <label>搜索输入框</label>
    <input
      type="search"
      class="input"
      placeholder="搜索输入框"
    >

    <label class="block text-sm font-medium text-gray-700">带图标的输入框</label>

    <!-- 前置图标输入框 -->
    <div class="input input-wrapper w-[300px]">
      <svg class="input-icon-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        type="text"
        class="input-with-icon-left"
        placeholder="请输入"
      >
    </div>

    <!-- 后置图标输入框 -->
    <div class="input input-wrapper w-[300px]">
      <input
        type="text"
        class="input-with-icon-right"
        placeholder="请输入"
      >
      <button class="input-icon-right input-icon-btn">
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <!-- 后置图标输入框end -->
    <!-- #endregion snippet -->
  </div>
</template>

<style lang="css" scoped>
  @import './index.css';
</style>

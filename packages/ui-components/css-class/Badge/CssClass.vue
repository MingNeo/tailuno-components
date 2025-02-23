<template>
  <div class="badge-container">
    <!-- 基础徽章 -->
    <span class="badge badge-default">
      默认徽章
    </span>

    <!-- 带边框徽章 -->
    <span class="badge badge-bordered">
      边框徽章
    </span>

    <!-- 带图标徽章 -->
    <span class="badge badge-success">
      <span class="dot" />
      成功状态
    </span>

    <!-- 带图片徽章 -->
    <span class="badge">
      <img class="badge-icon" src="https://picsum.photos/20/20">
      图片徽章
    </span>

    <!-- 可移除徽章 -->
    <span class="badge badge-removable">
      可移除
      <button type="button" class="remove-button">
        <span class="sr-only">移除</span>
        <svg class="remove-icon" stroke="currentColor" fill="none" viewBox="0 0 8 8">
          <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
        </svg>
      </button>
    </span>
  </div>
</template>

<style lang="css" scoped>
  @import './index.css';
</style>

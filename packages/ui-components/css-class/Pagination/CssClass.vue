<template>
  <div class="flex flex-col gap-8">
    <!-- #region snippet -->
    <!-- 基础分页 -->
    <nav class="pagination-wrapper">
      <a href="#" class="pagination-item">上一页</a>
      <a href="#" class="pagination-item">1</a>
      <a href="#" class="pagination-item pagination-active">2</a>
      <a href="#" class="pagination-item">3</a>
      <span class="pagination-ellipsis">...</span>
      <a href="#" class="pagination-item">8</a>
      <a href="#" class="pagination-item">9</a>
      <a href="#" class="pagination-item">下一页</a>
    </nav>

    <!-- 圆形按钮分页 -->
    <nav class="pagination-wrapper">
      <a href="#" class="pagination-round">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </a>
      <a href="#" class="pagination-round">1</a>
      <a href="#" class="pagination-round pagination-active">2</a>
      <a href="#" class="pagination-round">3</a>
      <span class="pagination-ellipsis">...</span>
      <a href="#" class="pagination-round">12</a>
      <a href="#" class="pagination-round">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </a>
    </nav>

    <!-- 简单分页 -->
    <nav class="pagination-wrapper">
      <a href="#" class="pagination-simple">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        <span>上一页</span>
      </a>
      <span class="pagination-simple-text">第 2 页 / 共 10 页</span>
      <a href="#" class="pagination-simple">
        <span>下一页</span>
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </a>
    </nav>
    <!-- #endregion snippet -->
  </div>
</template>

<style lang="css">
  @import './index.css';
</style>

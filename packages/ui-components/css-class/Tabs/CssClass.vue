<template>
  <div class="flex flex-col space-y-6">
    <!-- #region snippet -->
    <!-- 基础标签页 -->
    <nav class="tabs">
      <button class="tab-item active">
        标签1
      </button>
      <button class="tab-item">
        标签2
      </button>
      <button class="tab-item">
        标签3
      </button>
    </nav>

    <!-- 带图标的标签页 -->
    <nav class="tabs">
      <button class="tab-item with-icon active">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        首页
      </button>
      <button class="tab-item with-icon">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        关于
      </button>
    </nav>

    <!-- 卡片式标签页 -->
    <nav class="tabs tabs-card">
      <button class="tab-item active">
        标签1
      </button>
      <button class="tab-item">
        标签2
      </button>
      <button class="tab-item">
        标签3
      </button>
    </nav>

    <!-- 垂直标签页 -->
    <nav class="tabs tabs-plain">
      <button class="tab-item active">
        标签1
      </button>
      <button class="tab-item">
        标签2
      </button>
      <button class="tab-item">
        标签3
      </button>
    </nav>

    <!-- 垂直标签页 -->
    <div class="flex space-x-4">
      <nav class="tabs tabs-vertical">
        <button class="tab-item active">
          标签1
        </button>
        <button class="tab-item">
          标签2
        </button>
        <button class="tab-item">
          标签3
        </button>
      </nav>
      <div class="flex-1 p-4 border rounded-md">
        内容区域
      </div>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>

<style lang="css" scoped>
  @import './index.css';
</style>

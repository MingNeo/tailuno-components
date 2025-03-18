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

    <!-- 基础标签页 -->
    <nav class="tabs">
      <button class="tab-item tab-item-roundline active">
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
        <svg class="mr-1.5 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1" /></svg>
        首页
      </button>
      <button class="tab-item with-icon">
        <svg class="mr-1.5 size-4" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="M256 42.667C138.18 42.667 42.667 138.179 42.667 256c0 117.82 95.513 213.334 213.333 213.334c117.822 0 213.334-95.513 213.334-213.334S373.822 42.667 256 42.667m0 384c-94.105 0-170.666-76.561-170.666-170.667S161.894 85.334 256 85.334c94.107 0 170.667 76.56 170.667 170.666S350.107 426.667 256 426.667m26.714-256c0 15.468-11.262 26.667-26.497 26.667c-15.851 0-26.837-11.2-26.837-26.963c0-15.15 11.283-26.37 26.837-26.37c15.235 0 26.497 11.22 26.497 26.666m-48 64h42.666v128h-42.666z" /></svg>
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

    <!-- plain风格标签页 -->
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
      <nav class="tabs tabs-plain tabs-vertical">
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
      <div class="flex-1 rounded-md border p-4">
        内容区域
      </div>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>

<style lang="css" scoped>
  @import './index.css';
</style>

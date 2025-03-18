<template>
  <div class="flex flex-col items-start gap-6 bg-gray-200 p-6">
    <!-- #region snippet -->
    <!-- 基础卡片 -->
    <div class="card">
      <div class="card-content">
        <h3 class="card-title">
          基础卡片
        </h3>
        <p class="card-desc">
          描述内容描述内容描述内容
        </p>
        <button class="card-btn">
          了解更多 →
        </button>
      </div>
    </div>

    <!-- 图片卡片 -->
    <div class="card">
      <img src="https://picsum.photos/id/185/300/300" class="card-img">
      <div class="card-content">
        <h3 class="card-title">
          带图片的基础卡片
        </h3>
        <p class="card-desc">
          描述内容描述内容描述内容
        </p>
        <button class="card-btn">
          了解更多 →
        </button>
      </div>
    </div>

    <!-- 侧边图片卡片 -->
    <div class="card card-side">
      <img src="https://picsum.photos/id/185/300/300" class="card-img">
      <div class="card-content">
        <h3 class="card-title">
          带图片的基础卡片
        </h3>
        <p class="card-desc">
          描述内容描述内容描述内容
        </p>
        <button class="card-btn">
          了解更多 →
        </button>
      </div>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>

<style lang="css" scoped>
  @import './index.css';
</style>

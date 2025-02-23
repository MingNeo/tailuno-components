<template>
  <div class="flex flex-col items-start gap-6 p-6 bg-gradient-to-b from-cyan-100 to-blue-500">
    <!-- #region snippet -->
    <!-- 基础卡片 -->
    <div class="card">
      <div class="card-content">
        <span class="card-tag">标签</span>
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
      <img src="https://picsum.photos/300/300" class="card-img">
      <div class="card-content">
        <span class="card-tag">标签</span>
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

    <!-- 玻璃拟态卡片容器 -->

    <div class="card-glass">
      <div class="card-content">
        <span class="card-tag">玻璃</span>
        <h3 class="card-title">
          玻璃拟态
        </h3>
        <p class="card-desc">
          模拟磨砂玻璃效果
        </p>
        <button class="card-btn">
          浏览 →
        </button>
      </div>
    </div>

    <!-- #endregion snippet -->
  </div>
</template>

<style lang="css" scoped>
  @import './index.css';
</style>

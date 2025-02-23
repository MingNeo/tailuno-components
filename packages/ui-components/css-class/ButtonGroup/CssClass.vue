<template>
  <div class="flex flex-col gap-4">
    <!-- #region snippet -->
    <!-- 基础按钮组 -->
    <div class="button-group">
      <button class="button">
        左按钮
      </button>
      <button class="button">
        中按钮
      </button>
      <button class="button">
        右按钮
      </button>
    </div>

    <!-- 主要按钮组 -->
    <div class="button-group">
      <button class="button button-primary">
        左按钮
      </button>
      <button class="button button-primary">
        中按钮
      </button>
      <button class="button button-primary">
        右按钮
      </button>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>

<style lang="css" scoped>
@import './index.css';
@import '../Button/index.css';
</style>

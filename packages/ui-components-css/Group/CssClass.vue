<template>
  <div class="flex flex-col gap-4">
    <!-- #region snippet -->
    <!-- 基础按钮组 -->
    <div class="group-join">
      <button class="btn">
        左按钮
      </button>
      <button class="btn">
        中按钮
      </button>
      <button class="btn">
        右按钮
      </button>
    </div>

    <!-- 主要按钮组 -->
    <div class="group-join">
      <button class="btn btn-primary">
        左按钮
      </button>
      <button class="btn btn-primary">
        中按钮
      </button>
      <button class="btn btn-primary">
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

<template>
  <div class="flex flex-wrap gap-4">
    <!-- #region snippet -->
    <!-- 基础提示 -->
    <div class="flex items-center gap-4">
      <!-- start -->
      <div class="tooltip">
        Top
        <div class="tooltip-popover">
          Top tooltip
        </div>
      </div>
      <!-- end -->

      <!-- start -->
      <div class="tooltip tooltip-bottom">
        Bottom
        <div class="tooltip-popover">
          Bottom tooltip
        </div>
      </div>
      <!-- end -->

      <!-- start -->
      <div class="tooltip tooltip-left">
        Left
        <div class="tooltip-popover">
          Left tooltip
        </div>
      </div>
      <!-- end -->

      <!-- start -->
      <div class="tooltip tooltip-right">
        Right
        <div class="tooltip-popover">
          Right tooltip
        </div>
      </div>
      <!-- end -->
    </div>

    <!-- 不同主题色 -->
    <div class="space-x-4">
      <!-- start -->
      <div class="tooltip tooltip-top tooltip-primary">
        <button class="text-primary">
          Primary
        </button>
        <div class="tooltip-popover">
          Primary tooltip
        </div>
      </div>
      <!-- end -->

      <!-- start -->
      <div class="tooltip tooltip-top tooltip-success">
        <button class="text-green-500">
          Success
        </button>
        <div class="tooltip-popover">
          Success tooltip
        </div>
      </div>
      <!-- end -->

      <!-- start -->
      <div class="tooltip tooltip-top tooltip-warning">
        <button class="text-yellow-500">
          Warning
        </button>
        <div class="tooltip-popover">
          Warning tooltip
        </div>
      </div>
      <!-- end -->

      <!-- start -->
      <div class="tooltip tooltip-top tooltip-danger">
        <button class="text-red-500">
          Danger
        </button>
        <div class="tooltip-popover">
          Danger tooltip
        </div>
      </div>
      <!-- end -->
    </div>

    <div class="space-x-4">
      <!-- 换行 -->
      <div class="tooltip tooltip-top">
        设置宽度/自动换行
        <div class="tooltip-popover tooltip-wrap w-40 text-center">
          通过tooltip-wrap并指定宽度来控制换行
        </div>
      </div>

      <!-- 不显示箭头 -->
      <div class="tooltip tooltip-top no-arrow">
        不显示箭头
        <div class="tooltip-popover">
          设置no-arrow不显示箭头
        </div>
      </div>

      <!-- 始终显示 -->
      <div class="tooltip tooltip-right tooltip-open">
        始终显示
        <div class="tooltip-popover">
          始终显示
        </div>
      </div>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>

<style lang="css" scoped>
@import './index.css';
@import '../Button/index.css';
</style>

<template>
  <div class="space-y-4">
    <!-- #region snippet -->
    <!-- 基础提示 -->
    <div class="flex items-center gap-4">
      <!-- start -->
      <div class="tooltip">
        上方提示
        <div class="tooltip-popover">
          这是一个上方提示文字
        </div>
      </div>
      <!-- end -->

      <!-- start -->
      <div class="tooltip tooltip-bottom">
        下方提示
        <div class="tooltip-popover">
          这是一个下方提示文字
        </div>
      </div>
      <!-- end -->

      <!-- start -->
      <div class="tooltip tooltip-left">
        左侧提示
        <div class="tooltip-popover">
          这是一个左侧提示文字
        </div>
      </div>
      <!-- end -->

      <!-- start -->
      <div class="tooltip tooltip-right">
        右侧提示
        <div class="tooltip-popover">
          这是一个右侧提示文字
        </div>
      </div>
      <!-- end -->
    </div>

    <!-- 不同主题色 -->
    <div class="space-x-4">
      <!-- start -->
      <div class="tooltip tooltip-top tooltip-primary">
        <button class="button button-primary">
          主要提示
        </button>
        <div class="tooltip-popover">
          这是一个提示文字
        </div>
      </div>
      <!-- end -->

      <!-- start -->
      <div class="tooltip tooltip-top tooltip-success">
        <button class="button button-success">
          成功提示
        </button>
        <div class="tooltip-popover">
          这是一个提示文字
        </div>
      </div>
      <!-- end -->

      <!-- start -->
      <div class="tooltip tooltip-top tooltip-warning">
        <button class="button button-warning">
          警告提示
        </button>
        <div class="tooltip-popover">
          这是一个提示文字
        </div>
      </div>
      <!-- end -->

      <!-- start -->
      <div class="tooltip tooltip-top tooltip-danger">
        <button class="button button-danger">
          危险提示
        </button>
        <div class="tooltip-popover">
          这是一个提示文字
        </div>
      </div>
      <!-- end -->
    </div>

    <div class="space-x-4">
      <!-- 换行 -->
      <div class="tooltip tooltip-top">
        设置宽度/自动换行
        <div class="tooltip-popover tooltip-wrap w-40">
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
  @import '../Button/index.css'
</style>

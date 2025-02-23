<template>
  <div class="flex flex-col gap-4">
    <!-- #region snippet -->
    <!-- 基础按钮组 -->
    <div>
      <button class="button">
        默认按钮
      </button>
      <button class="button button-primary">
        主要按钮
      </button>
      <button class="button button-success">
        成功按钮
      </button>
      <button class="button button-warning">
        警告按钮
      </button>
      <button class="button button-danger">
        危险按钮
      </button>
    </div>
    <!-- plain按钮组 -->
    <div>
      <button class="button button-plain">
        默认按钮
      </button>
      <button class="button button-plain button-primary">
        主要按钮
      </button>
      <button class="button button-plain button-success">
        成功按钮
      </button>
      <button class="button button-plain button-warning">
        警告按钮
      </button>
      <button class="button button-plain button-danger">
        危险按钮
      </button>
    </div>

    <!-- 禁用状态 -->
    <div>
      <button class="button" disabled>
        禁用按钮
      </button>
      <button class="button button-primary" disabled>
        禁用主要
      </button>
      <button class="button button-success" disabled>
        禁用成功
      </button>
      <button class="button button-warning" disabled>
        禁用警告
      </button>
      <button class="button button-danger" disabled>
        禁用危险
      </button>
    </div>

    <!-- plain 禁用状态 -->
    <div>
      <button class="button button-plain" disabled>
        禁用按钮
      </button>
      <button class="button button-plain button-primary" disabled>
        禁用主要
      </button>
      <button class="button button-plain button-success" disabled>
        禁用成功
      </button>
      <button class="button button-plain button-warning" disabled>
        禁用警告
      </button>
      <button class="button button-plain button-danger" disabled>
        禁用危险
      </button>
    </div>

    <!-- 圆角按钮组 -->
    <div>
      <button class="button button-round">
        圆角按钮
      </button>
      <button class="button button-primary button-round">
        圆角主要
      </button>
    </div>

    <!-- 按钮尺寸 -->
    <div>
      <button class="button button-small">
        小尺寸
      </button>
      <button class="button button-large">
        大尺寸
      </button>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>

<style lang="css" scoped>
  @import './index.css';
</style>

<template>
  <div class="flex flex-col space-y-4 vp-raw">
    <!-- #region snippet -->
    <label>基础开关</label>
    <input type="checkbox" class="switch">

    <label>小型开关</label>
    <input type="checkbox" class="switch switch-sm">

    <label>大型开关</label>
    <input type="checkbox" class="switch switch-lg">

    <label>禁用状态</label>
    <input type="checkbox" class="switch" disabled>

    <label>带文字</label>
    <div class="switch-wrapper">
      <input type="checkbox" class="switch">
      <span class="switch-label">开启状态</span>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>

<style lang="css">
  @import './index.css';
</style>

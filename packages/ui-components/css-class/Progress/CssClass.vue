<template>
  <div class="progress-container">
    <!-- 基础进度条 -->
    <div class="progress-bar">
      <div class="progress-bar-fill" :style="{ width: '45%' }" />
    </div>

    <!-- 带标签进度条 -->
    <div class="progress-with-label">
      <div class="progress-label">
        <span>进度</span>
        <span>45%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-bar-fill" :style="{ width: '45%' }" />
      </div>
    </div>

    <!-- 带步骤进度条 -->
    <div class="progress-with-steps">
      <div class="steps-label">
        <div class="step">
          申请
        </div>
        <div class="step">
          审批
        </div>
        <div class="step">
          完成
        </div>
      </div>
      <div class="progress-bar">
        <div class="progress-bar-fill" :style="{ width: '50%' }" />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
  @import './index.css';
</style>

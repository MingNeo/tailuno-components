<template>
  <div class="flex flex-col gap-8">
    <!-- #region snippet -->
    <!-- 基础步骤条 -->
    <div class="steps">
      <div class="step step-active">
        <div class="step-number">
          1
        </div>
        <div class="step-line" />
      </div>
      <div class="step">
        <div class="step-number">
          2
        </div>
        <div class="step-line" />
      </div>
      <div class="step">
        <div class="step-number">
          3
        </div>
        <div class="step-line" />
      </div>
      <div class="step">
        <div class="step-number">
          4
        </div>
      </div>
    </div>

    <!-- 带标题和描述的步骤条 -->
    <div class="steps steps-label">
      <div class="step step-active">
        <div class="step-line-wrapper">
          <div class="step-line" />
          <div class="step-number">
            1
          </div>
          <div class="step-line" />
        </div>
        <div class="step-content">
          <div class="step-title">
            步骤1
          </div>
          <div class="step-description">
            这是第一步的描述
          </div>
        </div>
      </div>
      <div class="step">
        <div class="step-line-wrapper">
          <div class="step-line" />
          <div class="step-number">
            2
          </div>
          <div class="step-line" />
        </div>
        <div class="step-content">
          <div class="step-title">
            步骤2
          </div>
          <div class="step-description">
            这是第二步的描述
          </div>
        </div>
      </div>
      <div class="step">
        <div class="step-line-wrapper">
          <div class="step-line" />
          <div class="step-number">
            3
          </div>
          <div class="step-line" />
        </div>
        <div class="step-content">
          <div class="step-title">
            步骤3
          </div>
          <div class="step-description">
            这是第三步的描述
          </div>
        </div>
      </div>
    </div>

    <!-- 垂直步骤条 -->
    <div class="steps-vertical">
      <div class="step step-active">
        <div class="step-number">
          1
        </div>
        <div class="step-content">
          <div class="step-title">
            步骤1
          </div>
          <div class="step-description">
            这是第一步的描述
          </div>
        </div>
      </div>
      <div class="step">
        <div class="step-number">
          2
        </div>
        <div class="step-content">
          <div class="step-title">
            步骤2
          </div>
          <div class="step-description">
            这是第二步的描述
          </div>
        </div>
      </div>
      <div class="step">
        <div class="step-number">
          3
        </div>
        <div class="step-content">
          <div class="step-title">
            步骤3
          </div>
          <div class="step-description">
            这是第三步的描述
          </div>
        </div>
      </div>
    </div>

    <!-- 图标顶部带标题的步骤条 -->
    <div class="steps steps-icon-top">
      <div class="step step-active">
        <div class="step-wrapper">
          <div class="step-number">
            1
          </div>
          <div class="step-line">
            <div class="step-line-progress" />
          </div>
        </div>
        <div class="step-content">
          <div class="step-title">
            步骤1
          </div>
          <div class="step-description">
            这是第一步的描述
          </div>
        </div>
      </div>
      <div class="step">
        <div class="step-wrapper">
          <div class="step-number">
            2
          </div>
          <div class="step-line">
            <div class="step-line-progress" />
          </div>
        </div>
        <div class="step-content">
          <div class="step-title">
            步骤2
          </div>
          <div class="step-description">
            这是第二步的描述
          </div>
        </div>
      </div>
      <div class="step">
        <div class="step-wrapper">
          <div class="step-number">
            3
          </div>
          <div class="step-line">
            <div class="step-line-progress" />
          </div>
        </div>
        <div class="step-content">
          <div class="step-title">
            步骤3
          </div>
          <div class="step-description">
            这是第三步的描述
          </div>
        </div>
      </div>
      <div class="step">
        <div class="step-wrapper">
          <div class="step-number">
            4
          </div>
        </div>
        <div class="step-content">
          <div class="step-title">
            步骤4
          </div>
          <div class="step-description">
            这是第四步的描述
          </div>
        </div>
      </div>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>

<style lang="css" scoped>
  @import './index.css';
</style>

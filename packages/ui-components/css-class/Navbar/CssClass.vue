<template>
  <div class="navbar-demo">
    <!-- #region snippet -->
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-wrapper">
          <!-- Logo区域 -->
          <div class="navbar-brand">
            <img class="navbar-logo" src="https://picsum.photos/50/50" alt="Logo">
          </div>

          <!-- 导航链接 -->
          <div class="navbar-links">
            <a href="#" class="navbar-link active">首页</a>
            <a href="#" class="navbar-link">产品</a>
            <a href="#" class="navbar-link">关于</a>
          </div>

          <!-- 右侧操作区 -->
          <div class="navbar-actions">
            <button class="navbar-action-btn">
              <iconify-icon icon="carbon:search" class="navbar-icon" />
            </button>
            <button class="navbar-action-btn">
              <iconify-icon icon="carbon:notification" class="navbar-icon" />
            </button>
            <!-- 用户头像和下拉菜单 -->
            <div class="navbar-avatar-wrapper">
              <div class="navbar-avatar">
                <iconify-icon icon="carbon:user" class="navbar-avatar-icon" />
              </div>
              <div class="navbar-dropdown">
                <div class="navbar-dropdown-content">
                  <a href="#" class="navbar-dropdown-item">
                    <span>Settings</span>
                  </a>
                  <a href="#" class="navbar-dropdown-item">
                    <span>Account</span>
                  </a>
                  <a href="#" class="navbar-dropdown-item">
                    <span>Logout</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- #endregion snippet -->
  </div>
</template>

<style lang="css" scoped>
  @import './index.css';
</style>

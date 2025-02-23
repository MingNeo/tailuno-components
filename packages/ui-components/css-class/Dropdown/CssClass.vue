<template>
  <div class="flex flex-col gap-4 items-center">
    <!-- #region snippet -->
    <!-- Basic Dropdown -->
    <div class="dropdown-wrapper">
      <button class="dropdown-trigger">
        下拉菜单
        <svg class="dropdown-icon" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
      <div class="dropdown-popover">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">选项 1</a>
          <a href="#" class="dropdown-item">选项 2</a>
          <a href="#" class="dropdown-item">选项 3</a>
        </div>
      </div>
    </div>

    <!-- Dropdown with Divider -->
    <div class="dropdown-wrapper">
      <img alt="profil" src="https://picsum.photos/50/50" class="mx-auto object-cover rounded-full h-10 w-10 shadow-sm">
      <div class="dropdown-popover dropdown-right">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">个人信息</a>
          <a href="#" class="dropdown-item">设置</a>
          <div class="dropdown-divider" />
          <a href="#" class="dropdown-item text-red-500">退出登录</a>
        </div>
      </div>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>

<style lang="css" scoped>
  @import './index.css';
</style>

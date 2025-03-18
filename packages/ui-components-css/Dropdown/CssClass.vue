<template>
  <div class="flex flex-col items-start gap-4 py-4">
    <!-- #region snippet -->
    <p>hover触发</p>
    <!-- Basic Dropdown -->
    <div class="dropdown">
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

    <p>使用dropdown-focus，可以按钮focus时触发</p>
    <div class="dropdown dropdown-focus">
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

    <p>设置 dropdown-show 可以强制触发，也可以自行通过js添加移除 dropdown-show 来控制</p>
    <div class="dropdown dropdown-show">
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

    <hr class="mt-36 w-full">

    <!-- Dropdown with Divider -->
    <div class="dropdown">
      <img alt="profil" src="https://picsum.photos/id/185/50/50" class="mx-auto size-10 rounded-full object-cover shadow-sm">
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

.dropdown:last-child {
  align-self: center;
}
</style>

<template>
  <div class="flex flex-col items-start gap-4">
    <!-- #region snippet -->
    <!-- Basic Dropdown -->
    <p>hover触发</p>
    <div class="relative inline-block group">
      <button class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
        下拉菜单
        <svg class="ml-2 -mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
      <div class="h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 group-hover:overflow-visible transition-all duration-300 absolute z-[10] pt-2 w-56">
        <div class="rounded-md shadow-lg bg-white overflow-hidden ring-1 ring-black/5 focus:outline-none dark:bg-gray-800 dark:ring-gray-700">
          <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">选项 1</div>
          <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">选项 2</div>
          <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">选项 3</div>
        </div>
      </div>
    </div>

    <p>focus触发</p>
    <div class="relative inline-block">
      <button class="inline-flex items-center peer px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
        下拉菜单
        <svg class="ml-2 -mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
      <div class="hidden peer-focus:block absolute z-[10] pt-2 w-56">
        <div class="rounded-md shadow-lg bg-white overflow-hidden ring-1 ring-black/5 focus:outline-none dark:bg-gray-800 dark:ring-gray-700">
          <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">选项 1</div>
          <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">选项 2</div>
          <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">选项 3</div>
        </div>
      </div>
    </div>

    <!-- Dropdown with Divider -->
    <div class="relative inline-block group self-end">
      <div class="inline-flex items-center p-2 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
        <img alt="profil" src="https://picsum.photos/50/50" class="mx-auto object-cover rounded-full h-10 w-10 shadow-sm">
      </div>
      <div class="hidden group-hover:block absolute right-0 z-[10] pt-2 w-56">
        <div class="rounded-md shadow-lg bg-white ring-1 ring-black/5 focus:outline-none dark:bg-gray-800 dark:ring-gray-700">
          <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">个人信息</div>
          <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">设置</div>
          <div class="my-1 border-0 border-t border-solid border-gray-100 dark:border-gray-600" />
          <div class="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">退出登录</div>
        </div>
      </div>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>

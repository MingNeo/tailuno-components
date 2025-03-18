<template>
  <div class="flex flex-col items-start gap-4">
    <!-- #region snippet -->
    <!-- Basic Dropdown -->
    <p>hover触发</p>
    <div class="group relative inline-block">
      <button class="inline-flex items-center rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
        下拉菜单
        <svg class="-mr-1 ml-2 size-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
      <div class="absolute z-10 h-0 w-56 overflow-hidden pt-2 opacity-0 transition-all duration-300 group-hover:h-auto group-hover:overflow-visible group-hover:opacity-100">
        <div class="overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-gray-800 dark:ring-gray-700">
          <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">
            选项 1
          </div>
          <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">
            选项 2
          </div>
          <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">
            选项 3
          </div>
        </div>
      </div>
    </div>

    <p>focus触发</p>
    <div class="relative inline-block">
      <button class="peer inline-flex items-center rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
        下拉菜单
        <svg class="-mr-1 ml-2 size-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
      <div class="absolute z-10 hidden w-56 pt-2 peer-focus:block">
        <div class="overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-gray-800 dark:ring-gray-700">
          <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">
            选项 1
          </div>
          <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">
            选项 2
          </div>
          <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">
            选项 3
          </div>
        </div>
      </div>
    </div>

    <p>用户头像</p>
    <!-- Dropdown with Divider -->
    <div class="group relative inline-block self-center">
      <div class="inline-flex items-center rounded-md bg-white p-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
        <img alt="profil" src="https://picsum.photos/id/185/50/50" class="mx-auto size-10 rounded-full object-cover shadow-sm">
      </div>
      <div class="absolute right-0 z-10 hidden w-56 pt-2 group-hover:block">
        <div class="rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-gray-800 dark:ring-gray-700">
          <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">
            个人信息
          </div>
          <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">
            设置
          </div>
          <div class="my-1 border-0 border-t border-solid border-gray-100 dark:border-gray-600" />
          <div class="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
            退出登录
          </div>
        </div>
      </div>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>

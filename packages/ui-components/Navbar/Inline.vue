<template>
  <div class="bg-gray-200 dark:bg-gray-900 p-4 space-y-8">
    <!-- #region snippet -->
    <nav class="relative md:flex bg-white dark:bg-gray-800 shadow-sm md:px-4">
      <input type="checkbox" class="peer hidden" id="menu-toggle">
      <label for="menu-toggle" class="md:hidden block p-2 shadow-sm">
        ☰ 菜单
      </label>

      <div class="shrink-0 items-center hidden md:flex">
        <img class="w-16 h-8" src="https://picsum.photos/100/50" alt="Logo">
      </div>
      <div class="peer-checked:block hidden md:block mt-2 md:mt-0 md:flex-1">
        <div class="flex flex-col md:ml-2 md:flex-row gap-4 p-4 bg-white rounded-md shadow-md md:shadow-none">
          <a href="#" class="font-medium hover:text-blue-600">Home</a>
          <a href="#" class="font-medium hover:text-blue-600">Product</a>
          <a href="#" class="font-medium hover:text-blue-600">Service</a>
          <a href="#" class="font-medium hover:text-blue-600">About</a>
          <a href="#" class="font-medium hover:text-blue-600">Contact</a>
        </div>
      </div>

      <div class="hidden md:flex items-center">
        <div class="ml-3 relative group">
          <img class="w-8 h-8 rounded-full" src="https://picsum.photos/100/50" alt="avatar">
          <div class="hidden absolute right-0 w-56 origin-top-right z-[999] group-hover:block">
            <div class="w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black/5">
              <div class="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <a href="#"
                  class="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                  role="menuitem">
                  <span class="flex flex-col">
                    <span>
                      Settings
                    </span>
                  </span>
                </a>
                <a href="#"
                  class="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                  role="menuitem">
                  <span class="flex flex-col">
                    <span>
                      Account
                    </span>
                  </span>
                </a>
                <a href="#"
                  class="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                  role="menuitem">
                  <span class="flex flex-col">
                    <span>
                      Logout
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- 居中导航样式 -->
    <nav
      class="relative max-w-6xl mx-auto md:flex md:justify-center md:items-center bg-white dark:bg-gray-800 shadow-sm md:px-4">
      <input type="checkbox" class="peer hidden" id="menu-toggle-2">
      <label for="menu-toggle-2" class="md:hidden block p-2 shadow-sm dark:text-white">
        ☰ 菜单
      </label>

      <div class="shrink-0 items-center md:absolute md:left-4 hidden md:flex">
        <img class="w-16 h-8" src="https://picsum.photos/100/50" alt="Logo">
      </div>
      <div class="peer-checked:block hidden md:flex mt-2 md:mt-0">
        <div class="flex flex-col md:flex-row gap-6 p-4 bg-white dark:bg-gray-800 rounded-md shadow-md md:shadow-none">
          <a href="#" class="font-medium hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">首页</a>
          <a href="#" class="font-medium hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">产品</a>
          <a href="#" class="font-medium hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">服务</a>
          <a href="#" class="font-medium hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">关于</a>
          <a href="#" class="font-medium hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">联系我们</a>
        </div>
      </div>

      <div class="hidden md:absolute md:right-4 md:flex items-center space-x-2">
        <button class="px-4 py-1 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white">登录</button>
        <button class="px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700">注册</button>
      </div>
    </nav>

    <!-- 带搜索框的导航 -->
    <nav class="relative max-w-6xl mx-auto md:flex bg-white dark:bg-gray-800 shadow-sm md:px-4">
      <input type="checkbox" class="peer hidden" id="menu-toggle-3">
      <label for="menu-toggle-3" class="md:hidden block p-2 shadow-sm dark:text-white">
        ☰ 菜单
      </label>

      <div class="shrink-0 items-center hidden md:flex">
        <img class="w-16 h-8" src="https://picsum.photos/100/50" alt="Logo">
      </div>

      <div class="peer-checked:block hidden md:flex md:flex-1 md:items-center mt-2 md:mt-0">
        <div
          class="flex flex-col md:flex-row md:ml-4 gap-4 p-4 bg-white dark:bg-gray-800 rounded-md shadow-md md:shadow-none">
          <a href="#" class="font-medium hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">首页</a>
          <a href="#" class="font-medium hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">产品</a>
          <a href="#" class="font-medium hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">服务</a>
        </div>
      </div>

      <div class="hidden md:flex items-center ml-4 space-x-2">
        <div class="relative flex-1 max-w-lg">
          <input type="text" placeholder="搜索..." class="w-full px-4 py-1 rounded-lg border dark:border-gray-600 bg-gray-100 dark:bg-gray-700
            focus:outline-none focus:ring-2 focus:ring-primary dark:text-gray-200 dark:placeholder-gray-400">
        </div>
        <img class="w-8 h-8 rounded-full" src="https://picsum.photos/100/50" alt="avatar">
      </div>
    </nav>

    <!-- #endregion snippet -->
  </div>

</template>

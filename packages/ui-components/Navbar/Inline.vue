<template>
  <div class="space-y-8 bg-gray-200 p-4 dark:bg-gray-900">
    <!-- #region snippet -->
    <nav class="relative bg-white shadow-sm md:flex md:px-4 dark:bg-gray-800">
      <input id="menu-toggle" type="checkbox" class="peer hidden">
      <label for="menu-toggle" class="block p-2 shadow-sm md:hidden">
        ☰ 菜单
      </label>

      <div class="hidden shrink-0 items-center md:flex">
        <img class="h-8 w-16" src="https://picsum.photos/id/185/100/50" alt="Logo">
      </div>
      <div class="mt-2 hidden peer-checked:block md:mt-0 md:block md:flex-1">
        <div class="flex flex-col gap-4 rounded-md bg-white p-4 shadow-md md:ml-2 md:flex-row md:shadow-none">
          <a href="#" class="font-medium hover:text-blue-600">Home</a>
          <a href="#" class="font-medium hover:text-blue-600">Product</a>
          <a href="#" class="font-medium hover:text-blue-600">Service</a>
          <a href="#" class="font-medium hover:text-blue-600">About</a>
          <a href="#" class="font-medium hover:text-blue-600">Contact</a>
        </div>
      </div>

      <div class="hidden items-center md:flex">
        <div class="group relative ml-3">
          <img class="size-8 rounded-full" src="https://picsum.photos/id/185/100/50" alt="avatar">
          <div class="absolute right-0 z-[999] hidden w-56 origin-top-right group-hover:block">
            <div class="mt-2 w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 dark:bg-gray-800" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <a href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem">
                Account
              </a>
              <a href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- 居中导航样式 -->
    <nav class="relative mx-auto max-w-6xl bg-white shadow-sm md:flex md:items-center md:justify-center md:px-4 dark:bg-gray-800">
      <input id="menu-toggle-2" type="checkbox" class="peer hidden">
      <label for="menu-toggle-2" class="block p-2 shadow-sm md:hidden dark:text-white">
        ☰ 菜单
      </label>

      <div class="hidden shrink-0 items-center md:absolute md:left-4 md:flex">
        <img class="h-8 w-16" src="https://picsum.photos/id/185/100/50" alt="Logo">
      </div>
      <div class="mt-2 hidden peer-checked:block md:mt-0 md:flex">
        <div class="flex flex-col gap-6 rounded-md bg-white p-4 shadow-md md:flex-row md:shadow-none dark:bg-gray-800">
          <a href="#" class="font-medium hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">首页</a>
          <a href="#" class="font-medium hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">产品</a>
          <a href="#" class="font-medium hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">服务</a>
          <a href="#" class="font-medium hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">关于</a>
          <a href="#" class="font-medium hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">联系我们</a>
        </div>
      </div>

      <div class="hidden items-center space-x-2 md:absolute md:right-4 md:flex">
        <button class="px-4 py-1 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white">
          登录
        </button>
        <button class="rounded-md bg-blue-600 px-4 py-1 text-white hover:bg-blue-700">
          注册
        </button>
      </div>
    </nav>

    <!-- 带搜索框的导航 -->
    <nav class="relative mx-auto max-w-6xl bg-white shadow-sm md:flex md:px-4 dark:bg-gray-800">
      <input id="menu-toggle-3" type="checkbox" class="peer hidden">
      <label for="menu-toggle-3" class="block p-2 shadow-sm md:hidden dark:text-white">
        ☰ 菜单
      </label>

      <div class="hidden shrink-0 items-center md:flex">
        <img class="h-8 w-16" src="https://picsum.photos/id/185/100/50" alt="Logo">
      </div>

      <div class="mt-2 hidden peer-checked:block md:mt-0 md:flex md:flex-1 md:items-center">
        <div class="flex flex-col gap-4 rounded-md bg-white p-4 shadow-md md:ml-4 md:flex-row md:shadow-none dark:bg-gray-800">
          <a href="#" class="font-medium hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">首页</a>
          <a href="#" class="font-medium hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">产品</a>
          <a href="#" class="font-medium hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">服务</a>
        </div>
      </div>

      <div class="ml-4 hidden items-center space-x-2 md:flex">
        <div class="relative max-w-lg flex-1">
          <input type="text" placeholder="搜索..." class="w-full rounded-lg border bg-gray-100 px-4 py-1 focus:outline-none focus:ring-2
            focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder:text-gray-400">
        </div>
        <img class="size-8 rounded-full" src="https://picsum.photos/id/185/100/50" alt="avatar">
      </div>
    </nav>

    <!-- 移动端底部导航 -->
    <nav class="flex justify-around bg-white shadow-sm dark:bg-gray-800">
      <div class="tab-item active flex flex-1 flex-col items-center justify-center py-2 text-sm text-primary">
        <svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19" />
        </svg>
        首页
      </div>
      <button class="tab-item flex flex-1 flex-col items-center justify-center py-2 text-sm text-gray-500">
        <svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" fill-rule="evenodd"
            d="M3.879 5.879C3 6.757 3 8.172 3 11v2c0 2.828 0 4.243.879 5.121C4.757 19 6.172 19 9 19h6c2.828 0 4.243 0 5.121-.879C21 17.243 21 15.828 21 13v-2c0-2.828 0-4.243-.879-5.121C19.243 5 17.828 5 15 5H9c-2.828 0-4.243 0-5.121.879m2.676 2.289a1 1 0 0 0-1.11 1.664l5.446 3.63a2 2 0 0 0 2.218 0l5.446-3.63a1 1 0 0 0-1.11-1.664L12 11.798z"
            clip-rule="evenodd" /></svg>
        消息
      </button>
      <button class="tab-item flex flex-1 flex-col items-center justify-center py-2 text-sm text-gray-500">
        <svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" />
        </svg>
        个人中心
      </button>
    </nav>

    <!-- #endregion snippet -->
  </div>
</template>

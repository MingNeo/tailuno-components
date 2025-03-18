<template>
  <div class="vp-raw flex flex-col items-center space-y-4">
    <!-- #region snippet -->

    <!-- 基础标签页 -->
    <nav class="flex space-x-4">
      <button class="relative h-8 border-b-2 border-solid border-primary px-1 text-sm font-medium text-primary transition-colors">
        标签1
      </button>
      <button class="relative h-8 border-b-2 border-solid border-transparent px-1 text-sm font-medium text-gray-500 transition-colors hover:border-primary hover:text-primary">
        标签2
      </button>
      <button class="relative h-8 border-b-2 border-solid border-transparent px-1 text-sm font-medium text-gray-500 transition-colors hover:border-primary hover:text-primary">
        标签3
      </button>
    </nav>

    <hr class="w-full">

    <!-- 底部指示器圆角 -->
    <nav class="flex space-x-4">
      <button class="relative h-8 px-1 text-sm font-medium text-primary transition-colors before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:rounded-full before:bg-primary before:content-['']">
        标签1
      </button>
      <button class="relative h-8 px-1 text-sm font-medium text-gray-500 transition-colors before:absolute before:bottom-0 before:left-0 before:hidden before:h-0.5 before:w-full before:rounded-full before:bg-primary before:content-[''] hover:text-primary hover:before:block">
        标签2
      </button>
      <button class="relative h-8 px-1 text-sm font-medium text-gray-500 transition-colors before:absolute before:bottom-0 before:left-0 before:hidden before:h-0.5 before:w-full before:rounded-full before:bg-primary before:content-[''] hover:text-primary hover:before:block">
        标签3
      </button>
    </nav>

    <hr class="w-full">

    <!-- 带图标的标签页 -->
    <nav class="flex space-x-3">
      <button class="flex items-center border-b-2 border-primary px-1 text-sm font-medium text-primary transition-colors hover:text-primary">
        <svg class="mr-1.5 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1" /></svg>
        首页
      </button>
      <button class="flex items-center border-b-2 border-transparent px-1 text-sm font-medium text-gray-500 transition-colors hover:border-gray-300 hover:text-primary">
        <svg class="mr-1.5 size-4" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="M256 42.667C138.18 42.667 42.667 138.179 42.667 256c0 117.82 95.513 213.334 213.333 213.334c117.822 0 213.334-95.513 213.334-213.334S373.822 42.667 256 42.667m0 384c-94.105 0-170.666-76.561-170.666-170.667S161.894 85.334 256 85.334c94.107 0 170.667 76.56 170.667 170.666S350.107 426.667 256 426.667m26.714-256c0 15.468-11.262 26.667-26.497 26.667c-15.851 0-26.837-11.2-26.837-26.963c0-15.15 11.283-26.37 26.837-26.37c15.235 0 26.497 11.22 26.497 26.666m-48 64h42.666v128h-42.666z" /></svg>
        关于
      </button>
    </nav>

    <hr class="w-full">

    <!-- 卡片式标签页 -->
    <div class="w-[400px] rounded-xl bg-gray-100 p-1.5 shadow-inner dark:bg-gray-800">
      <nav class="flex space-x-1">
        <button class="flex-1 rounded-lg bg-white px-4 h-8 text-sm font-medium text-gray-900 shadow-sm transition-all dark:bg-gray-700 dark:text-white">
          标签1
        </button>
        <button class="flex-1 rounded-lg px-4 h-8 text-sm font-medium text-gray-500 transition-all hover:bg-white/70 hover:shadow-sm hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700">
          标签2
        </button>
        <button class="flex-1 rounded-lg px-4 h-8 text-sm font-medium text-gray-500 transition-all hover:bg-white/70 hover:shadow-sm hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700">
          标签3
        </button>
      </nav>
    </div>

    <hr class="w-full">

    <!-- plain标签页 -->
    <nav class="flex space-x-1">
      <button class="rounded-lg bg-gray-100 px-4 h-8 text-sm font-medium text-gray-900 transition-all dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
        标签1
      </button>
      <button class="rounded-lg px-4 h-8 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
        标签2
      </button>
      <button class="rounded-lg px-4 h-8 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
        标签3
      </button>
    </nav>

    <hr class="w-full">

    <!-- 垂直标签页 -->
    <div class="flex w-full space-x-4">
      <nav class="flex flex-col space-y-1">
        <button class="rounded-lg bg-gray-100 px-4 h-8 text-sm font-medium text-gray-900 transition-all dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
          标签1
        </button>
        <button class="rounded-lg px-4 h-8 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
          标签2
        </button>
        <button class="rounded-lg px-4 h-8 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
          标签3
        </button>
      </nav>
      <div class="flex-1 rounded-lg border p-4 shadow dark:bg-gray-800">
        内容区域
      </div>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>
